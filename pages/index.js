import React, { useEffect, useState } from "react";
import Head from "next/head";
import Gallery from "../components/Gallery";
import Filter from "../components/Filter";
import Sort from "../components/Sort";
import { FilterSortWrapper, Box } from "../styles/styledComponents";
import { useAppContext } from "../components/context";
import AddBalance from "../components/AddBalance";
import StyledLogo from "../styles/StyledLogo";

const axios = require("axios");

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [isDataUpdated, setIsDataUpdated] = useState(false);

  const { items, setItems, userData, setUserData } = useAppContext();

  function postUserPoints(amount) {
    return axios.post(
      "https://coding-challenge-api.aerolab.co/user/points",
      {
        amount: amount,
      },

      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWU1NzMwNmEzMGFiYjAwMWE5NDExZDAiLCJpYXQiOjE2NDI0MjcxNDJ9.e37sAUY1rvmBfjt_YaLwha02WR3LlEVso8EqJYJdS4Q",
        },
      }
    );
  }

  async function addPoints(amount) {
    try {
      const response = await postUserPoints(parseInt(amount));
      setIsDataUpdated(false);
    } catch (error) {
      console.log(error);
    }
  }

  // function addPointsHandler(amount) {
  //   addPoints(parseInt(amount));
  // }

  async function postRedeem(itemId) {
    try {
      const response = await axios.post(
        "https://coding-challenge-api.aerolab.co/redeem",
        {
          productId: itemId,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWU1NzMwNmEzMGFiYjAwMWE5NDExZDAiLCJpYXQiOjE2NDI0MjcxNDJ9.e37sAUY1rvmBfjt_YaLwha02WR3LlEVso8EqJYJdS4Q",
          },
        }
      );
      setIsDataUpdated(false);
    } catch (error) {
      console.log(error);
    }
  }

  function redeemItem(itemId) {
    postRedeem(itemId);
  }

  useEffect(() => {
    if (isDataUpdated) return;
    async function setUserDataEffect() {
      try {
        setIsLoading(true);

        const response = await axios.get(
          "https://coding-challenge-api.aerolab.co/user/me",

          {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWU1NzMwNmEzMGFiYjAwMWE5NDExZDAiLCJpYXQiOjE2NDI0MjcxNDJ9.e37sAUY1rvmBfjt_YaLwha02WR3LlEVso8EqJYJdS4Q",
            },
          }
        );

        let newUserData = response.data;
        setUserData(newUserData);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    setUserDataEffect();
    setIsDataUpdated(true);
  }, [isDataUpdated, setUserData]);

  useEffect(() => {
    if (items) return;
    async function getItems() {
      try {
        const response = await axios.get(
          "https://coding-challenge-api.aerolab.co/products",
          {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWU1NzMwNmEzMGFiYjAwMWE5NDExZDAiLCJpYXQiOjE2NDI0MjcxNDJ9.e37sAUY1rvmBfjt_YaLwha02WR3LlEVso8EqJYJdS4Q",
            },
          }
        );
        const correctDataSpellAndOrder = response.data.map((item, idx) => {
          if (item.category === "PC Accesories") {
            item.category = "PC Accessories";
            item.order = idx;
            return item;
          } else {
            item.order = idx;
            return item;
          }
        });
        setItems(correctDataSpellAndOrder);
      } catch (error) {
        console.log("Error getting items", error);
      }
    }
    getItems();
  }, [items, setItems]);
  return (
    <div>
      <Head>
        <title>Challenge</title>
        <link rel="icon" href={"/favicon.ico"} />
      </Head>
      <main>
        <AddBalance addPoints={addPoints} isLoading={isLoading} />
        <FilterSortWrapper>
          <Filter />
          <Sort />
        </FilterSortWrapper>
        {items ? (
          <Gallery
            // items={items}
            points={userData?.points}
            redeemItem={redeemItem}
          />
        ) : (
          ""
        )}
      </main>
      <footer>Footer</footer>
    </div>
  );
}
