import { Box, BgGradient } from "../styles/styledComponents";
import Image from "next/image";
import { StyledTitleGradient, StyledDesktText } from "../styles/StyledText";

function WalkCard({
  src,
  alt,
  icon,
  iconAlt,
  heading,
  description,
  rotate,
  overflow,
}) {
  return (
    <Box
      w="33.25rem"
      h="42.25rem"
      p="0.75rem"
      radius="2rem"
      border="1px"
      direction="column"
      rotate={rotate}
      bg="white"
      overflow={overflow}
    >
      <Box direction="column" radius="2rem" h="31.125rem" border="1px">
        <BgGradient radius="2rem 2rem 0 0">
          <Image src={src} alt={alt} />
        </BgGradient>
        <Box
          direction="column"
          alignItems="flex-start"
          p="0 7rem 1.5rem 1.5rem "
        >
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
            <StyledTitleGradient p="0 0 0 1rem" w="auto" styleType="l3">
              {heading}
            </StyledTitleGradient>
          </Box>
          <StyledDesktText color="neutral600">{description}</StyledDesktText>
        </Box>
      </Box>
    </Box>
  );
}

export default WalkCard;
