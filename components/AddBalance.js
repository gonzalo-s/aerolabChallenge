import React, { useState, useEffect, useRef } from "react";
import {
  Button,
  Box,
  TextGradient,
  BalanceMenuWrapper,
  PointsBalance,
  ChevronDownIcon,
  ChevronUpIcon,
  ImgContainer,
  TextL1Grad,
  Wrapper,
  SpanBlock,
  SimpleButton,
} from "../styles/styledComponents";
import { useAppContext } from "./context";
import card from "../assets/card.png";
import Image from "next/image";
import LogoInvert from "../assets/logoGradInvert.svg";
import LogoGrad from "../assets/logoGrad.svg";
import { LogoViolet } from "./LogoViolet";

function AddBalance({ addPoints, isLoading }) {
  const { userData } = useAppContext();
  const [pointsToAdd, setPointsToAdd] = useState(1000);
  const [displayMenu, setDisplayMenu] = useState(false);

  function addNewPoints() {
    addPoints(pointsToAdd);
  }

  let useClickOutside = (handler) => {
    let domNode = useRef();

    useEffect(() => {
      let maybeHandler = (event) => {
        if (!domNode.current.contains(event.target)) {
          handler();
        }
      };

      document.addEventListener("mousedown", maybeHandler);

      return () => {
        document.removeEventListener("mousedown", maybeHandler);
      };
    });

    return domNode;
  };

  let domNode = useClickOutside(() => {
    setDisplayMenu(false);
  });

  return (
    <Wrapper
      className="btnAndMenu"
      alignItems="flex-end"
      justifyContent="space-between"
      w="10.75rem"
      h="3rem"
      position="relative"
      ref={domNode}
    >
      <Box
        className="buttonAndImageWrapper"
        p="0"
        w="10.75rem"
        h="3rem"
        alignItems="center"
        position="relative"
        justifyContent="stretch"
      >
        <Box
          className="buttonVisualWrapper"
          position="absolute"
          left="0"
          pointerEvents="none"
          p="1rem"
        >
          <LogoViolet width="32px" height="32px" viewBox="0 0 256 256" />
          <TextGradient w="3.75rem" h="100%">
            {isLoading ? "Loading" : userData?.points}
          </TextGradient>
          {displayMenu ? (
            <ChevronUpIcon w="2rem" viewBox="0 0 20 20" />
          ) : (
            <ChevronDownIcon w="2rem" viewBox="0 0 20 20" />
          )}
        </Box>
        <SimpleButton
          w="100%" //"10.75rem"
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
            <TextL1Grad>Add Balance</TextL1Grad>
          </Box>

          <Box
            className="cardAndButtons"
            p="1.5rem"
            direction={"column"}
            justifyContent={"space-evenly"}
          >
            <ImgContainer>
              <Image src={card} alt="card" />
            </ImgContainer>
            <Box
              className="pointsWrapper"
              h="35px"
              alignItems="stretch"
              gap="0.25rem"
            >
              <Button
                h="100%"
                radius="0.75rem"
                isActive={pointsToAdd === 1000 ? true : false}
                onClick={() => setPointsToAdd(1000)}
              >
                <TextL1Grad> 1000</TextL1Grad>
              </Button>
              <Button
                h="100%"
                radius="0.75rem"
                isActive={pointsToAdd === 5000 ? true : false}
                onClick={() => setPointsToAdd(5000)}
              >
                <TextL1Grad> 5000</TextL1Grad>
              </Button>
              <Button
                h="100%"
                radius="0.75rem"
                isActive={pointsToAdd === 7500 ? true : false}
                onClick={() => setPointsToAdd(7500)}
              >
                <TextL1Grad> 7500</TextL1Grad>
              </Button>
            </Box>
            <Button
              isActive={true}
              onClick={addNewPoints}
              h={"3rem"}
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
