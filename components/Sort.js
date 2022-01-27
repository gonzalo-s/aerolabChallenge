import { Button, SortWrapper } from "../styles/styledComponents";
import { useAppContext } from "./context";

export default function Sort() {
  const { selectSortBy, filters } = useAppContext();

  function handleOnClick(value) {
    selectSortBy(value);
  }

  return (
    <SortWrapper>
      <Button isActive={filters?.sortBy === "Most Recent" ? true : false}>
        <div onClick={() => handleOnClick("Most Recent")}>Most Recent</div>
      </Button>
      <Button isActive={filters?.sortBy === "Lowest Price" ? true : false}>
        <div onClick={() => handleOnClick("Lowest Price")}>Lowest Price</div>
      </Button>
      <Button isActive={filters?.sortBy === "Highest Price" ? true : false}>
        <div onClick={() => handleOnClick("Highest Price")}>Highest Price</div>
      </Button>
    </SortWrapper>
  );
}
