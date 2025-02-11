import { SimpleGrid } from "@chakra-ui/react";
import MyFeed from "./MyFeed";

const MyFeedList = ({ feeds }) => {
  return (
      <SimpleGrid columns={[1, 2, 3]} spacing={6}>
        {feeds.map((feed, index) => (
            <MyFeed key={index} image={feed.image} title={feed.title} />
        ))}
      </SimpleGrid>
  );
};

export default MyFeedList;