import { HeroSection } from "~/app/_components/HeroSection";
import { OverviewSection } from "~/app/_components/OverviewSection";
import { ProductPreview } from "~/app/_components/ProductPreview";
import { HospitalityPreview } from "~/app/_components/HospitalityPreview";
import { LifestylePreview } from "~/app/_components/LifestylePreview";
import { CTABanner } from "~/app/_components/CTABanner";

export default function Home() {
  return (
    <>
      <HeroSection />
      <OverviewSection />
      <ProductPreview />
      <HospitalityPreview />
      <LifestylePreview />
      <CTABanner />
    </>
  );
}
