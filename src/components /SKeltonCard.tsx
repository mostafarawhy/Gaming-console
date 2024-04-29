import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const SKeltonCard = () => {
  return (
    <Card width="300px"  borderRadius={15} overflow="hidden" >

    <Skeleton height={200}  />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default SKeltonCard;
