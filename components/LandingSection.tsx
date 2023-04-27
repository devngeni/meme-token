import { Title } from "@/commons";
import { LandingContainer, LandingWrapper } from "./Landing.Style";

export default function LandingSection() {
    return(
        <LandingWrapper>
            <LandingContainer>
                <Title>Hi, I'm <span>BlockWave</span></Title>
            </LandingContainer>
        </LandingWrapper>
    )
}