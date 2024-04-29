import { SimpleGrid, Text } from "@chakra-ui/react";
import useGame, { Platform } from "../hooks/useGame";
import GameCard from "./GameCard";
import SKeltonCard from "./SKeltonCard";
import GAmeCardContainer from "./GAmeCardContainer";
import { Genre } from "../hooks/useGenre";
import { GameQuery } from "../App";

interface Props {
  gameQuery : GameQuery
}

const GameGrid = ({gameQuery}:Props) => {
  const { data, error, isloading } = useGame(gameQuery);
  const skeltons = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        padding={10}
        columns={{ base: 1, sm: 2, md: 2, lg: 3, xl: 4 }}
        spacing={10}
      >
        {isloading &&
          skeltons.map((skelton) => (
            <GAmeCardContainer key={skelton}>
            
              <SKeltonCard  />
            </GAmeCardContainer>
          ))}
        {data.map((game) => (
          <GAmeCardContainer key={game.id}>
            <GameCard  game={game} />
          </GAmeCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
