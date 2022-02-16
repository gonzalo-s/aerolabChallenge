import { Box, BgGradient } from "../styles/styledComponents";
import Image from "next/image";
import { TextL1Default, TitleGradientL3 } from "../styles/StyledText";
import {
  WalkCardTextWrapper,
  WalkCardWrapper,
  WalkCardImgBgGradient,
} from "../styles/styledWalktrough";

function WalkCard({
  src,
  alt,
  icon,
  iconAlt,
  heading,
  description,
  rotate,
  m,
  zIndex,
}) {
  return (
    <WalkCardWrapper
      p="0.75rem"
      radius="2rem"
      border="1px"
      borderColor="neutral300"
      direction="column"
      rotate={rotate}
      bg="white"
      m={m}
      zIndex={zIndex}
    >
      <Box direction="column" radius="2rem" h="100%" border="1px">
        <WalkCardImgBgGradient
          bgGradient="speciallIllustrationBg"
          radius="2rem 2rem 0 0"
        >
          <Image className="cardImage" src={src} alt={alt} />
        </WalkCardImgBgGradient>
        <WalkCardTextWrapper>
          <Box className="cardHeader" justifyContent="flex-start" p="1rem 0">
            <BgGradient
              w="3rem"
              h="3rem"
              radius="0.5rem"
              p="0.25rem"
              bgGradient="brandLight"
            >
              <Image src={icon} alt={iconAlt} />
            </BgGradient>
            <TitleGradientL3 p="0 0 0 1rem" w="auto">
              {heading}
            </TitleGradientL3>
          </Box>
          <TextL1Default w="auto" color="neutral600">
            {description}
          </TextL1Default>
        </WalkCardTextWrapper>
      </Box>
    </WalkCardWrapper>
  );
}

export default WalkCard;
