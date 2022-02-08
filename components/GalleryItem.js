import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Box,
  Button,
  BgGradient,
  GallImgContainer,
} from "../styles/styledComponents";
import { StyledDesktText } from "../styles/StyledText";
import LogoInvert from "../assets/logoGradInvert.svg";
import LogoGray from "../assets/logoGray.svg";
import { useAppContext } from "../components/context";

function GalleryItem({ item, redeemItem, isLoading }) {
  const [isRedeeming, setIsRedeeming] = useState(false);
  const { userData } = useAppContext();

  let points = userData?.points;
  function handleOnClick(itemId) {
    redeemItem(itemId);
    setIsRedeeming(true);
  }

  useEffect(() => {
    setIsRedeeming(false);
  }, [isLoading]);

  return (
    <Box direction="column" w="21.75" h="31.625">
      <Box
        direction="column"
        border="1px"
        borderColor="neutral300"
        radius="1rem"
        justifyContent="flex-start"
        boxShadow={true}
      >
        <GallImgContainer display="flex" w="21.75rem" h="21.558rem">
          <Image
            src={item.img.url}
            alt={item.name}
            layout="fill"
            objectFit="contain"
          />
        </GallImgContainer>
        <Box
          direction="column"
          h="5.5rem"
          justifyContent="center"
          p="1rem 1.5rem 1.5rem 1.5rem"
          bt="1px"
        >
          <StyledDesktText color="neutral900">{item.name}</StyledDesktText>
          <StyledDesktText color="neutral600" styleType="l2AllCaps">
            {item.category}
          </StyledDesktText>
        </Box>
      </Box>
      <Box p="2rem 0 2rem 0">
        <Box radius="1rem" boxShadow={true}>
          {isRedeeming ? (
            <BgGradient
              direction="column"
              h="3.188rem"
              justifyContent="center"
              alignItems="center"
              bgGradient="speciallIllustrationBg"
            >
              <StyledDesktText w="auto">Processing...</StyledDesktText>
            </BgGradient>
          ) : points < item.cost ? (
            <Box
              h="3.188rem"
              justifyContent="center"
              alignItems="center"
              bgTheme="neutral200"
              radius="1rem"
            >
              {" "}
              <StyledDesktText color="neutral600" w="auto">
                You need
              </StyledDesktText>
              <LogoGray width="50px" height="32px" viewBox="0 0 256 256" />
              <StyledDesktText color="neutral600" w="auto">
                {item.cost}
              </StyledDesktText>
            </Box>
          ) : (
            <Button
              isActive={true}
              disabled={points < item.cost ? true : false}
              onClick={() => {
                handleOnClick(item._id);
              }}
              h="3.188rem"
              justifyContent="center"
              alignItems="center"
            >
              Redeem for
              <LogoInvert width="50px" height="32px" viewBox="0 0 256 256" />
              {item.cost}
            </Button>
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default GalleryItem;
