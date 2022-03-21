import { Box, Heading, AspectRatio, Image, Text, HStack, Stack, Link } from "native-base";

const FullInfo = ({ route }) => {
  return (
    <Box alignItems="center" mt="10">
      <Box
        maxW="80"
        rounded="lg"
        overflow="hidden"
        borderColor="coolGray.200"
        borderWidth="1"
        _dark={{borderColor: "coolGray.600",backgroundColor: "gray.700"}}
        _web={{shadow: 2, borderWidth: 0}}
        _light={{backgroundColor: "gray.50"}}
      >
        <Box>
          <AspectRatio w="100%" ratio={16 / 9}>
            <Image source={{uri: `${route.params.imageUrl}`}} alt="image" />
          </AspectRatio>
        </Box>
        <Stack p="4" space={3}>
          <Stack space={2}>
            <Heading size="md" ml="-1">
              {route.params.title}
            </Heading>
            <Text
              fontSize="xs"
              _light={{color: "violet.500"}}
              _dark={{color: "violet.400"}}
              fontWeight="500"
              ml="-0.5"
              mt="-1"
            >
              Author: {route.params.author}
            </Text>
          </Stack>
          <Text fontWeight="400">
            {route.params.content}
          </Text>
          <Link href={route.params.readMoreUrl} isExternal _text={{color: "blue.400"}}>
            Show  original page
          </Link>
          <HStack alignItems="center" space={4} justifyContent="space-between">
            <HStack alignItems="center">
              <Text
                color="coolGray.600"
                _dark={{color: "warmGray.200"}}
                fontWeight="400"
              >
                {route.params.date} {route.params.time}
              </Text>
            </HStack>
          </HStack>
        </Stack>
      </Box>
    </Box>
  );
};

export default FullInfo;
