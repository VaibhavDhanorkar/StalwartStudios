"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

const ShaderLayer = dynamic(() => import("./ShaderLayer"), { ssr: false });

function supportsWebGL2() {
  try {
    return !!document.createElement("canvas").getContext("webgl2");
  } catch {
    return false;
  }
}

/**
 * Full-bleed, decorative hero background. A static CSS gradient paints with the page; the shader (or
 * light rays) mounts only after first paint, freezes on mobile / reduced motion / off-screen / hidden tab.
 */
export function HeroBackground() {
  const rootRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  const [webgl, setWebgl] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [visible, setVisible] = useState(true);
  const [tabVisible, setTabVisible] = useState(true);

  // Mount the effect layer after the headline has had a chance to paint.
  useEffect(() => {
    const start = () => {
      setWebgl(supportsWebGL2());
      setMobile(window.matchMedia("(max-width: 767px)").matches);
      setMounted(true);
    };
    // After the load event (so the headline, fonts and scripts are done), then a short beat.
    let timer = 0;
    const afterLoad = () => {
      timer = window.setTimeout(start, 600);
    };
    if (document.readyState === "complete") afterLoad();
    else window.addEventListener("load", afterLoad, { once: true });
    return () => {
      window.removeEventListener("load", afterLoad);
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0 });
    io.observe(el);
    const onVis = () => setTabVisible(!document.hidden);
    document.addEventListener("visibilitychange", onVis);
    return () => {
      io.disconnect();
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);

  // Scroll hand-off: the field eases darker as the next section takes over.
  const { scrollY } = useScroll();
  const dim = useTransform(scrollY, [0, 520], [0, 0.6]);

  const frozen = !!reduce || mobile || !visible || !tabVisible;

  return (
    <div ref={rootRef} aria-hidden="true" className="hero-bg-grain absolute inset-0 -z-0 overflow-hidden">
      {/* Static fallback: same palette as the shader, paints with the HTML. */}
      <div className="absolute inset-0 hero-bg-static" />

      {mounted && webgl && (
        <div className="absolute inset-0 hero-bg-fade-in">
          <ShaderLayer speed={frozen ? 0 : 1} />
        </div>
      )}

      {/* Keep the area behind the headline darkest; blend into the page at the bottom. */}
      <div className="absolute inset-0 hero-bg-scrim" />
      <motion.div className="absolute inset-0 bg-[var(--bg-primary)]" style={{ opacity: dim }} />
    </div>
  );
}
