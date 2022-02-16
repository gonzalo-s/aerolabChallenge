import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Box,
  Button,
  BgGradient,
  GallImgContainer,
} from "../styles/styledComponents";
import { ItemWrapper, ItemImgContainer } from "../styles/styledGallery";
import { TextL1Default, TextL2AllCaps } from "../styles/StyledText";
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
    <ItemWrapper>
      <Box
        direction="column"
        border="1px"
        borderColor="neutral300"
        radius="1rem"
        justifyContent="flex-start"
        boxShadow={true}
      >
        <ItemImgContainer>
          <Image
            src={item.img.url}
            alt={item.name}
            layout="fill"
            objectFit="contain"
          />
        </ItemImgContainer>
        <Box
          direction="column"
          h="5.5rem"
          justifyContent="center"
          alignItems="flex-start"
          p="1rem 0 1.5rem 1.5rem"
          bt="1px"
        >
          <TextL1Default>{item.name}</TextL1Default>
          <TextL2AllCaps w="auto" color="neutral600">
            {item.category}
          </TextL2AllCaps>
        </Box>
      </Box>
      <Box>
        <Box radius="1rem" boxShadow={true}>
          {isRedeeming ? (
            <BgGradient
              direction="column"
              h="3.188rem"
              justifyContent="center"
              alignItems="center"
              bgGradient="speciallIllustrationBg"
            >
              <TextL1Default color="neutral0" w="auto">
                Processing...
              </TextL1Default>
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
              <TextL1Default color="neutral600" w="auto">
                You need
              </TextL1Default>
              <LogoGray width="50px" height="32px" viewBox="0 0 256 256" />
              <TextL1Default color="neutral600" w="auto">
                {item.cost}
              </TextL1Default>
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
    </ItemWrapper>
  );
}

export default GalleryItem;
