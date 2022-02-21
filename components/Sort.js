import { Box } from "../styles/styledComponents";
import { SortWrapper, SortButtonsWrapper } from "../styles/styledSort";
import { TextL1Default } from "../styles/StyledText";
import { useAppContext } from "./context";
import ButtonTextGradient from "./ButtonWithTextGradient";
export default function Sort({ className }) {
  const { selectSortBy, filters } = useAppContext();

  function handleOnClick(value) {
    selectSortBy(value);
  }

  return (
    <SortWrapper className={className}>
      <Box w="38.5rem" h="100%">
        <TextL1Default className="sortByText" w="8rem" color="neutral600">
          Sort by:
        </TextL1Default>
        <SortButtonsWrapper>
          <ButtonTextGradient
            radius="0.75rem"
            w="10.5rem"
            value="Most Recent"
            onClick={() => handleOnClick("Most Recent")}
            isActive={filters?.sortBy === "Most Recent"}
          ></ButtonTextGradient>
          <ButtonTextGradient
            radius="0.75rem"
            w="10.5rem"
            h="100%"
            onClick={() => handleOnClick("Lowest Price")}
            value="Lowest Price"
            isActive={filters?.sortBy === "Lowest Price"}
          ></ButtonTextGradient>
          <ButtonTextGradient
            radius="0.75rem"
            w="10.5rem"
            h="100%"
            onClick={() => handleOnClick("Highest Price")}
            value="Highest Price"
            isActive={filters?.sortBy === "Highest Price"}
          ></ButtonTextGradient>
        </SortButtonsWrapper>
      </Box>
    </SortWrapper>
  );
}
