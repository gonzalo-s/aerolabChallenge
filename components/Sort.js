import { Button, TextL1, SortWrapper } from "../styles/styledComponents";
import { useAppContext } from "./context";

export default function Sort() {
  const { selectSortBy, filters } = useAppContext();

  function handleOnClick(value) {
    selectSortBy(value);
  }

  return (
    <SortWrapper>
      <Button isActive={filters?.sortBy === "Most Recent" ? true : false}>
        <TextL1
          isActive={filters?.sortBy === "Most Recent" ? true : false}
          onClick={() => handleOnClick("Most Recent")}
        >
          Most Recent
        </TextL1>
      </Button>
      <Button isActive={filters?.sortBy === "Lowest Price" ? true : false}>
        <TextL1
          isActive={filters?.sortBy === "Lowest Price" ? true : false}
          onClick={() => handleOnClick("Lowest Price")}
        >
          Lowest Price
        </TextL1>
      </Button>
      <Button isActive={filters?.sortBy === "Highest Price" ? true : false}>
        <TextL1
          isActive={filters?.sortBy === "Highest Price" ? true : false}
          onClick={() => handleOnClick("Highest Price")}
        >
          Highest Price
        </TextL1>
      </Button>
    </SortWrapper>
  );
}
