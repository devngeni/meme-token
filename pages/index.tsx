import { Layout } from "@/layout";
import {
  AboutSection,
  EconomicsSection,
  LandingSection,
  MacqueeSection,
  StatisticSection,
} from "@/components";
import IndexPage from "@/components/HorizontalCards";

export default function Home() {
  return (
    <Layout>
      <LandingSection />
      <AboutSection />
      <IndexPage />
      <EconomicsSection />
      <StatisticSection />
      <MacqueeSection />
    </Layout>
  );
}
