import { Layout } from "@/layout";
import {
  AboutSection,
  EconomicsSection,
  LandingSection,
  MacqueeSection,
} from "@/components";

export default function Home() {
  return (
    <Layout>
      <LandingSection />
      <AboutSection />
      <EconomicsSection />
      <MacqueeSection />
    </Layout>
  );
}
