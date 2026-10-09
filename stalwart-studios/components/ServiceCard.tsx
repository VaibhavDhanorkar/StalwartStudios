import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HOME_ITEM_COUNT, type Service } from "@/lib/content/services";
import { ServiceIcon } from "@/lib/content/serviceIcons";

type Props = {
  service: Service;
  featured?: boolean;
  className?: string;
};

export function ServiceCard({ service, featured = false, className = "" }: Props) {
  const items = service.items.slice(0, HOME_ITEM_COUNT);

  return (
    <Link
      href={`/services/${service.slug}`}
      aria-label={`Explore ${service.title}`}
      className={`service-card group block rounded-2xl p-6 md:p-7 h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold ${className}`}
    >
      <span className="pillar-glow-top pillar-glow-top--gold" aria-hidden="true" />
      <span
        aria-hidden="true"
        className={`outline-numeral absolute right-5 text-[64px] md:text-[76px] pointer-events-none ${
          featured ? "top-4 lg:top-auto lg:bottom-4" : "top-4"
        }`}
      >
        {service.number}
      </span>

      <div className={`h-full flex flex-col ${featured ? "lg:grid lg:grid-cols-[1fr_1.1fr] lg:gap-10" : ""}`}>
        <div className="flex flex-col">
          <span className="service-icon mb-5">
            <ServiceIcon slug={service.slug} size={18} />
          </span>
          <h3
            className={`font-fraunces font-semibold text-brand-primary mb-2.5 ${featured ? "pr-16 lg:pr-0" : "pr-16"} ${
              featured ? "text-2xl md:text-[28px] leading-tight" : "text-xl"
            }`}
          >
            {service.title}
          </h3>
          <p className="text-[14px] text-brand-secondary leading-relaxed mb-5">{service.summary}</p>
          {featured ? <ExploreLabel className="hidden lg:inline-flex mt-auto" /> : null}
        </div>

        <div className="flex flex-col flex-1">
          <ul className="flex flex-wrap gap-1.5 mb-6 lg:content-start">
            {items.map((item) => (
              <li key={item.name} className="chip">
                {item.name}
              </li>
            ))}
            <li className="chip text-brand-dim border-dashed">…and much more.</li>
          </ul>
          <ExploreLabel className={`mt-auto ${featured ? "lg:hidden" : ""}`} />
        </div>
      </div>
    </Link>
  );
}

function ExploreLabel({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-2 self-start text-sm font-medium text-brand-gold ${className}`}
    >
      Explore
      <ArrowRight
        size={14}
        aria-hidden="true"
        className="group-hover:translate-x-1 transition-transform duration-200"
      />
    </span>
  );
}
