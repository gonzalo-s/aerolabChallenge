import Image from "next/image";
import {
  GalleryWrapper,
  ItemWrapper,
  GallImg,
} from "../styles/styledComponents";
import { useAppContext } from "./context";

export default function Gallery({ points, redeemItem }) {
  const { items, filteredItems } = useAppContext();

  function handleOnClick(itemId) {
    redeemItem(itemId);
  }

  return (
    <GalleryWrapper>
      {filteredItems?.map((item) => {
        return (
          <ItemWrapper key={item._id}>
            <GallImg
              src={item.img.url}
              width={348}
              height={"auto"}
              alt={item.name}
            />
            <div className="itemName">{item.name}</div>
            <div className="itemCategory">{item.category}</div>
            <button
              disabled={points < item.cost ? true : false}
              className="itemButton"
              onClick={() => {
                handleOnClick(item._id);
              }}
            >
              {item.cost}
            </button>
          </ItemWrapper>
        );
      })}
    </GalleryWrapper>
  );
}
