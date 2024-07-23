import { Categories } from "@/components/Categories";
import { FeatureTwo } from "@/components/FeatureTwo";
import { Hero } from "@/components/Hero";
import { PricingThree } from "@/components/PricingThree";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col space-y-32 mb-32">
      <Hero />

      <FeatureTwo />
      <Categories />

      <PricingThree />
    </div>
  );
}
