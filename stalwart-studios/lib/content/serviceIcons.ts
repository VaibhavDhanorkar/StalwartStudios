import { createElement } from "react";
import {
  Bot,
  LayoutDashboard,
  PenTool,
  Smartphone,
  Workflow,
  type LucideIcon,
  type LucideProps,
} from "lucide-react";

const SERVICE_ICONS: Record<string, LucideIcon> = {
  "ai-enabled-products": Bot,
  "mobile-apps": Smartphone,
  "web-saas-platforms": LayoutDashboard,
  "business-solutions": Workflow,
  "product-design": PenTool,
};

export function ServiceIcon({ slug, ...props }: LucideProps & { slug: string }) {
  return createElement(SERVICE_ICONS[slug] ?? LayoutDashboard, { "aria-hidden": true, ...props });
}
