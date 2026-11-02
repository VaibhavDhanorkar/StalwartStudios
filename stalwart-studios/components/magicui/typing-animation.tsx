"use client";

/**
 * Adapted from Magic UI "Typing Animation" — https://magicui.design (MIT License, Copyright (c) Magic UI).
 * Trimmed to the rotating-words case. Changes: no framer-motion dependency (plain span + timers);
 * cursor uses the `.typing-cursor` class in globals.css; always starts on mount.
 */
import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";

interface TypingAnimationProps {
  words: string[];
  className?: string;
  typeSpeed?: number;
  deleteSpeed?: number;
  pauseDelay?: number;
  delay?: number;
}

export function TypingAnimation({
  words,
  className,
  typeSpeed = 45,
  deleteSpeed = 22,
  pauseDelay = 1800,
  delay = 400,
}: TypingAnimationProps) {
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [phase, setPhase] = useState<"typing" | "pause" | "deleting">("typing");

  useEffect(() => {
    if (words.length === 0) return;
    const word = words[wordIndex];
    const wait =
      delay > 0 && wordIndex === 0 && charIndex === 0 && phase === "typing"
        ? delay
        : phase === "typing"
          ? typeSpeed
          : phase === "deleting"
            ? deleteSpeed
            : pauseDelay;

    const t = setTimeout(() => {
      if (phase === "typing") {
        if (charIndex < word.length) setCharIndex(charIndex + 1);
        else setPhase("pause");
      } else if (phase === "pause") {
        setPhase("deleting");
      } else if (charIndex > 0) {
        setCharIndex(charIndex - 1);
      } else {
        setWordIndex((wordIndex + 1) % words.length);
        setPhase("typing");
      }
    }, wait);
    return () => clearTimeout(t);
  }, [words, wordIndex, charIndex, phase, typeSpeed, deleteSpeed, pauseDelay, delay]);

  return (
    <span className={cn("inline-block", className)}>
      {words[wordIndex]?.slice(0, charIndex)}
      <span className="typing-cursor" aria-hidden="true">
        |
      </span>
    </span>
  );
}
