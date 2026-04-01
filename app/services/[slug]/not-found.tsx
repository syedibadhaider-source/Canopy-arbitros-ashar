import { ButtonLink } from "@/components/ui/button-link";

export default function ServiceNotFound() {
  return (
    <div className="mx-auto flex w-full max-w-[780px] flex-col items-center justify-center px-6 py-28 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#34754C]">Service Not Found</p>
      <h1 className="mt-4 font-heading text-4xl text-[#102216]">This service page is not available.</h1>
      <p className="mt-4 text-sm leading-7 text-[#314439]">
        Explore our full service portfolio or contact us for direct guidance on the right arboriculture scope.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <ButtonLink href="/services">View Services</ButtonLink>
        <ButtonLink href="/contact" variant="secondary">
          Contact Team
        </ButtonLink>
      </div>
    </div>
  );
}
