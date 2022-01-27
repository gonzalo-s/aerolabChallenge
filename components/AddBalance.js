import React, { useState } from "react";
import {
  Button,
  TextGradient,
  BalanceMenuWrapper,
  PointsBalance,
  ChevronDownIcon,
  ChevronUpIcon,
  ImgContainer,
  Box,
  TextL1Grad,
  TextL1,
} from "../styles/styledComponents";
import { useAppContext } from "./context";
import card from "../assets/card.png";
import Image from "next/image";
import aerolabLogo from "../assets/aerolabLogo.png";
import StyledLogo from "../styles/StyledLogo";
import { theme } from "../styles/theme";

export default function AddBalance({ addPoints, isLoading }) {
  const [pointsToAdd, setPointsToAdd] = useState(1000);
  const { userData } = useAppContext();
  function addNewPoints() {
    addPoints(pointsToAdd);
  }

  return (
    <Box
      direction="column"
      bg="green"
      position="relative"
      p="0 14.25rem"
      h="5rem"
    >
      <Box justifyContent="space-between">
        <ImgContainer w="126px" h="48px">
          <Image src={aerolabLogo} alt="aerolab logo" />
        </ImgContainer>

        <PointsBalance
          w="10.75rem"
          h="3rem"
          onClick={() => {
            console.log("clicked");
          }}
        >
          <StyledLogo w="32px" cursor="pointer" />

          <TextGradient>
            {isLoading ? "Loading" : userData?.points}
          </TextGradient>

          <ChevronDownIcon size="48px" viewBox="0 0 20 20" />
        </PointsBalance>
      </Box>
      <BalanceMenuWrapper bg="red" top="20rem" position="absolute">
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
            bg="green"
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
          >
            <StyledLogo w="32px" invert={true} cursor="pointer" />
            <TextL1>Add Points</TextL1>
          </Button>
        </Box>
      </BalanceMenuWrapper>
    </Box>
  );
}
