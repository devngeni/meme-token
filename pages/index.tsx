import { Layout } from "@/layout";
import { AboutSection, EconomicsSection, LandingSection } from "@/components";

export default function Home() {
  return (
    <Layout>
      <LandingSection />
      <AboutSection />
      <EconomicsSection />
    </Layout>
  );
}
