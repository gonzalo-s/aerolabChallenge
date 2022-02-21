import {
  TitleGradientL1,
  TitleL1Default,
  TextL1Default,
  TextL1AllCaps,
} from "../styles/StyledText";
import { BgGradient, Box, ImgContainer } from "../styles/styledComponents";
import ArrowDown from "../assets/arrowDown.svg";
import HeroImage from "../assets/heroImage912.png";
import Image from "next/image";
import { Link } from "react-scroll";
import {
  TechZoneWrapper,
  TechZoneImgWrapper,
  TextAndButtonWrapper,
  HeroTitleWrapper,
  TechZoneButtonWrapper,
  TechZoneTextWrapper,
  TechZoneBgGradient,
} from "../styles/styledTechZone";

export default function TechZone() {
  return (
    <TechZoneWrapper>
      <TextAndButtonWrapper>
        <TechZoneTextWrapper>
          <TextL1AllCaps color="neutral600">EXPLORE THE</TextL1AllCaps>
          <HeroTitleWrapper>
            <TitleGradientL1 justifyContent="flex-start" w="100%">
              TECH
            </TitleGradientL1>
            <TitleL1Default w="100%">ZONE</TitleL1Default>
          </HeroTitleWrapper>
          <TextL1Default w="100%" color="neutral600">
            Here you’ll be able to exchange all of your hard-earned Aeropoints
            and exchange them for cool tech.
          </TextL1Default>
        </TechZoneTextWrapper>
        <TechZoneButtonWrapper>
          <Link
            to="gallery"
            spy={true}
            smooth={true}
            offset={-50}
            duration={600}
            delay={0}
          >
            <BgGradient
              W="100%"
              h="5rem"
              justifyContent="center"
              alignItems="center"
              cursor="pointer"
            >
              <TextL1Default color="neutral0" w="auto">
                {" "}
                VIEW ALL PRODUCTS
              </TextL1Default>
              <Box
                w="2rem"
                h="2rem"
                justifyContent="center"
                alignItems="center"
              >
                <ArrowDown />
              </Box>
            </BgGradient>
          </Link>
        </TechZoneButtonWrapper>
      </TextAndButtonWrapper>

      <TechZoneImgWrapper>
        <TechZoneBgGradient>
          <ImgContainer position="absolute" w="100%" h="115%">
            <Image src={HeroImage} alt="tech zone hero image" />
          </ImgContainer>
        </TechZoneBgGradient>
      </TechZoneImgWrapper>
    </TechZoneWrapper>
  );
}
