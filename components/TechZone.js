import {
  TitleGradient,
  StyledDesktText,
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
  TextAndButtonWrapper,
  HeroTitleWrapper,
  TechZoneButtonWrapper,
  TechZoneTextWrapper,
} from "../styles/styledTechZone";

export default function TechZone() {
  return (
    <TechZoneWrapper
      maxW="76.25%"
      w="100%"
      h="50rem"
      m="auto"
      alignItems="flex-start"
      direction="row"
    >
      <TextAndButtonWrapper>
        <TechZoneTextWrapper>
          <TextL1AllCaps color="neutral600">EXPLORE THE</TextL1AllCaps>
          <HeroTitleWrapper>
            <TitleGradient justifyContent="flex-start" w="100%">
              TECH
            </TitleGradient>
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

      <Box
        className="techZoneImgWrapper"
        direction="column"
        alignItems="center"
        justifyContent="flex-end"
        w="50%"
        h="37.5rem"
        position="relative"
        minW="45.125rem"
      >
        <BgGradient
          //w="50%"
          //h="auto"
          h="37.5rem"
          radius="6.5rem"
          bgGradient="specialSectionBg"
          position="absolute"
          bottom="0"
          alignItems="flex-end"
          justifyContent="flex-end"
          //bottom="6.5rem"
        >
          <ImgContainer position="absolute" w="100%" h="115%">
            <Image src={HeroImage} alt="tech zone hero image" />
          </ImgContainer>
        </BgGradient>
      </Box>
    </TechZoneWrapper>
  );
}
