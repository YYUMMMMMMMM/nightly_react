import { SimpleGrid } from "@chakra-ui/react";
import FeedItem from "./FeedItem";

const FeedList = ({ feeds }) => {
  return (
      <SimpleGrid columns={[1, 2, 3]} spacing={6}>
        {feeds.map((feed, index) => (
            <FeedItem key={index} image={feed.image} title={feed.title} />
        ))}
      </SimpleGrid>
  );
};

export default FeedList;