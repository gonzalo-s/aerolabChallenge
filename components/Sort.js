import { Box } from "../styles/styledComponents";
import { StyledDesktText } from "../styles/StyledText";
import { useAppContext } from "./context";
import ButtonTextGradient from "./ButtonWithTextGradient";
export default function Sort() {
  const { selectSortBy, filters } = useAppContext();

  function handleOnClick(value) {
    selectSortBy(value);
  }

  return (
    <Box w="50.625rem" h="2.688rem" p="0 0 0 2.5rem">
      <Box w="38.5rem" h="100%">
        <StyledDesktText w="8rem" color="neutral600">
          Sort by:
        </StyledDesktText>
        <Box w="50.625rem" alignItems="stretch" justifyContent="space-between">
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
        </Box>
      </Box>
    </Box>
  );
}
