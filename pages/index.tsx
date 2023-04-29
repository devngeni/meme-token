import { Layout } from "@/layout";
import {
  AboutSection,
  EconomicsSection,
  LandingSection,
  MacqueeSection,
  StatisticSection,
} from "@/components";

export default function Home() {
  return (
    <Layout>
      <LandingSection />
      <AboutSection />
      <EconomicsSection />
      <StatisticSection />
      <MacqueeSection />
    </Layout>
  );
}
