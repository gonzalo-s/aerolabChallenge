import {
  StyledTitle,
  StyledTitleGradient,
  StyledDesktText,
} from "../styles/StyledText";
import {
  BgGradient,
  Box,
  Button,
  ImgContainer,
  WavePattern,
} from "../styles/styledComponents";
import ArrowDown from "../assets/arrowDown.svg";
import HeroImage from "../assets/heroImage912.png";
import Image from "next/image";
export default function TechZone() {
  function handleOnClick() {
    console.log("clicked");
  }
  return (
    <WavePattern
      className="techZoneWrapper"
      p="0 14.25rem"
      h="52rem"
      justifyContent="space-between"
    >
      <Box
        className="textAndButtonWrapper"
        direction="column"
        alignItems="flex-start"
        w="37.625rem"
        h="36.063rem"
      >
        <Box
          className="techZoneTextWrapper"
          direction="column"
          alignItems="flex-start"
        >
          <StyledDesktText textStyle="l1AllCaps" color="neutral600">
            EXPLORE THE
          </StyledDesktText>
          <Box
            className="heroTitleWrapper"
            justifyContent="center"
            direction="column"
            alignItems="start"
            p="1.5rem 0"
          >
            <StyledTitleGradient justifyContent="flex-start" w="100%">
              TECH
            </StyledTitleGradient>
            <StyledTitle w="100%">ZONE</StyledTitle>
          </Box>
          <StyledDesktText textStyle="l1" color="neutral600">
            Here you’ll be able to exchange all of your hard-earned Aeropoints
            and exchange them for cool tech.
          </StyledDesktText>
        </Box>
        <Box
          className="techZoneButtonWrapper"
          direction="column"
          justifyContent="flex-end"
          alignItems="flex-start"
        >
          <Button
            isActive={true}
            //onClick={addNewPoints}
            w="19.875rem"
            h="5rem"
            justifyContent="center"
            alignItems="center"
          >
            VIEW ALL PRODUCTS
            <Box w="2rem" h="2rem" justifyContent="center" alignItems="center">
              <ArrowDown />
            </Box>
          </Button>
        </Box>
      </Box>

      <Box
        className="techZoneImgWrapper"
        //bg="red"
        direction="column"
        alignItems="flex-end"
        justifyContent="flex-end"
      >
        <BgGradient
          w="45.125rem"
          h="37.5rem"
          radius="6.5rem"
          bgGradient="specialSectionBg"
          position="relative"
          alignItems="flex-end"
          justifyContent="flex-end"
          bottom="6.5rem"
        >
          <ImgContainer
            position="absolute"
            w="100%"
            h="115%"
            //bg="green"
          >
            <Image src={HeroImage} alt="tech zone hero image" />
          </ImgContainer>
        </BgGradient>
      </Box>
    </WavePattern>
  );
}
