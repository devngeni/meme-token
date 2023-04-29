import { Layout } from "@/layout";
import { AboutSection, LandingSection } from "@/components";

export default function Home() {
  return (
    <Layout>
      <LandingSection />
      <AboutSection />
    </Layout>
  );
}
