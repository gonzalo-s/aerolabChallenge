import React, { useState } from "react";
import {
  BalanceButton,
  TextL1,
  BalanceWrapper,
  PointsBalance,
  ChevronDownIcon,
  ChevronUpIcon,
} from "../styles/styledComponents";
import { useAppContext } from "./context";
import LogoSm from "../assets/icons/logo.png";
import Image from "next/image";

export default function AddBalance({ addPoints, isLoading }) {
  const [pointsToAdd, setPointsToAdd] = useState(1000);
  const { userData } = useAppContext();
  function addNewPoints() {
    addPoints(pointsToAdd);
  }
  return (
    <BalanceWrapper>
      <PointsBalance>
        <Image src={LogoSm} width={24} height={24} alt="logo" />{" "}
        <TextL1>{isLoading ? "Loading" : userData?.points}</TextL1>{" "}
        <ChevronDownIcon />
      </PointsBalance>
      <BalanceButton
        isActive={pointsToAdd === 1000 ? true : false}
        onClick={() => setPointsToAdd(1000)}
      >
        <TextL1 isActive={pointsToAdd === 1000 ? true : false}> 1000</TextL1>
      </BalanceButton>
      <BalanceButton
        isActive={pointsToAdd === 5000 ? true : false}
        onClick={() => setPointsToAdd(5000)}
      >
        <TextL1 isActive={pointsToAdd === 5000 ? true : false}> 5000</TextL1>
      </BalanceButton>
      <BalanceButton
        isActive={pointsToAdd === 7500 ? true : false}
        onClick={() => setPointsToAdd(7500)}
      >
        <TextL1 isActive={pointsToAdd === 7500 ? true : false}> 7500</TextL1>
      </BalanceButton>
      <BalanceButton isActive={true} onClick={addNewPoints}>
        <TextL1 isActive={true}>Add Points</TextL1>
      </BalanceButton>
    </BalanceWrapper>
  );
}
