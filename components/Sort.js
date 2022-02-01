import { Box } from "../styles/styledComponents";
import { useAppContext } from "./context";
import ButtonTextGradient from "./ButtonWithTextGradient";
export default function Sort() {
  const { selectSortBy, filters } = useAppContext();

  function handleOnClick(value) {
    selectSortBy(value);
  }

  return (
    <Box
      w="100%"
      bg="red"
      h="5rem"
      alignItems="stretch"
      justifyContent="center"
    >
      <ButtonTextGradient
        w="100%"
        h="100%"
        value="Most Recent"
        onClick={() => handleOnClick("Most Recent")}
        isActive={filters?.sortBy === "Most Recent"}
      ></ButtonTextGradient>
      <ButtonTextGradient
        onClick={() => handleOnClick("Lowest Price")}
        value="Lowest Price"
        isActive={filters?.sortBy === "Lowest Price"}
      ></ButtonTextGradient>
      <ButtonTextGradient
        onClick={() => handleOnClick("Highest Price")}
        value="Highest Price"
        isActive={filters?.sortBy === "Highest Price"}
      ></ButtonTextGradient>
    </Box>
  );
}
