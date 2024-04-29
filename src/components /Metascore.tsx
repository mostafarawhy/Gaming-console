import { Badge } from "@chakra-ui/react";
import { color } from "framer-motion";

interface Props {
  score: number;
}


const Metascore = ({ score }: Props) => {

    let color = score > 85 ? "green" : score > 60 ? "yellow" : ''

  return (
    <>
      <Badge fontSize="17px" colorScheme={color} >{score}</Badge>
    </>
  );
};

export default Metascore;
