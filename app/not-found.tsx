import { ButtonLink } from "@/components/ui/button-link";

export default function NotFound() {
  return (
    <div className="mx-auto flex w-full max-w-[780px] flex-col items-center justify-center px-6 py-28 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#34754C]">404</p>
      <h1 className="mt-4 font-heading text-4xl text-[#102216]">Page not found</h1>
      <p className="mt-4 text-sm leading-7 text-[#314439]">
        The page you are looking for may have moved. Explore services or contact our team directly.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <ButtonLink href="/">Home</ButtonLink>
        <ButtonLink href="/contact" variant="secondary">
          Contact Canopy Arborists
        </ButtonLink>
      </div>
    </div>
  );
}
