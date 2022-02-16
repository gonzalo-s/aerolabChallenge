import React, { useState, useRef } from "react";
import {
  Button,
  Box,
  BalanceMenuWrapper,
  ChevronDownIcon,
  ChevronUpIcon,
  ImgContainer,
  Wrapper,
} from "../styles/styledComponents";
import { TextL1DefaultGrad, TextL1Default } from "../styles/StyledText";
import { useAppContext } from "./context";
import card from "../assets/card.png";
import Image from "next/image";
import LogoInvert from "../assets/logoGradInvert.svg";
import LogoGrad from "../assets/logoGrad.svg";
import ButtonWithTextGradient from "./ButtonWithTextGradient";
import useOnClickOutside from "./useOnClickOutside";

function AddBalance({ addPoints, isLoading }) {
  const { userData } = useAppContext();
  const [pointsToAdd, setPointsToAdd] = useState(1000);
  const [displayMenu, setDisplayMenu] = useState(false);
  const ref = useRef();
  useOnClickOutside(ref, () => setDisplayMenu(false));

  function addNewPoints() {
    addPoints(pointsToAdd);
  }

  return (
    <Wrapper
      className="btnAndMenu"
      alignItems="flex-end"
      justifyContent="space-between"
      w="10.75rem"
      h="3rem"
      position="relative"
      ref={ref}
    >
      <Box
        className="buttonAndImageWrapper"
        p="0"
        w="10.75rem"
        h="3rem"
        alignItems="center"
        justifyContent="stretch"
        position="relative"
      >
        <Box
          className="buttonVisualWrapper"
          position="absolute"
          left="0"
          pointerEvents="none"
          p="1rem"
        >
          <LogoGrad width="32px" height="32px" viewBox="0 0 260 260" />
          <TextL1DefaultGrad w="3.75rem" h="100%">
            {isLoading ? "----" : userData?.points}
          </TextL1DefaultGrad>
          {displayMenu ? (
            <ChevronUpIcon w="2rem" viewBox="0 0 20 20" />
          ) : (
            <ChevronDownIcon w="2rem" viewBox="0 0 20 20" />
          )}
        </Box>
        <Button
          w="100%"
          h="100%"
          bg="white"
          border="1px"
          onClick={() => {
            setDisplayMenu(!displayMenu);
          }}
        />
      </Box>
      {displayMenu ? (
        <BalanceMenuWrapper
          w="19.5rem"
          h="25.25rem"
          right="0"
          top="3.5rem"
          position="absolute"
        >
          <Box bb={"1px"} h="20%" alignItems="center" p={"0 0 0 2rem"}>
            <TextL1Default color="neutral900">Add Balance</TextL1Default>
          </Box>

          <Box
            className="cardAndButtons"
            p="1.5rem"
            direction={"column"}
            justifyContent={"space-between"}
          >
            <ImgContainer>
              <Image src={card} alt="card" />
            </ImgContainer>
            <Box className="pointsWrapper" h="2.188rem" gap="0.25rem">
              <ButtonWithTextGradient
                radius="0.75rem"
                isActive={pointsToAdd === 1000 ? true : false}
                onClick={() => setPointsToAdd(1000)}
                value={1000}
              />
              <ButtonWithTextGradient
                radius="0.75rem"
                isActive={pointsToAdd === 5000 ? true : false}
                onClick={() => setPointsToAdd(5000)}
                value={5000}
              ></ButtonWithTextGradient>
              <ButtonWithTextGradient
                radius="0.75rem"
                isActive={pointsToAdd === 7500 ? true : false}
                onClick={() => setPointsToAdd(7500)}
                value={7500}
              ></ButtonWithTextGradient>
            </Box>
            <Button
              isActive={true}
              onClick={addNewPoints}
              h="3.188rem"
              justifyContent="center"
              p="0 1rem"
              alignItems="center"
            >
              <LogoInvert width="50px" height="32px" viewBox="0 0 256 256" />
              Add Points
            </Button>
          </Box>
        </BalanceMenuWrapper>
      ) : (
        ""
      )}
    </Wrapper>
  );
}

export default AddBalance;
