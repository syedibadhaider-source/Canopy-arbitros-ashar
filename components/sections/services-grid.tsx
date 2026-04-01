import { ServiceCard } from "@/components/ui/service-card";
import type { Service } from "@/lib/site-data";

type ServicesGridProps = {
  services: Service[];
};

export function ServicesGrid({ services }: ServicesGridProps) {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
      {services.map((service) => (
        <ServiceCard key={service.slug} service={service} className="h-full" />
      ))}
    </div>
  );
}
