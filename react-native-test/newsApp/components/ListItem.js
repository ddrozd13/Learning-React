import React from 'react';
import { StyleSheet } from 'react-native';
import { Box, Heading, AspectRatio, Image, Text, Button, HStack, Stack, MoreIcon } from "native-base";

const ListItem = ({ el, handleMoreInfo}) => {
  return (
    <Box alignItems="center" style={styles.container}>
      <Box
        maxW="80"
        rounded="lg"
        overflow="hidden"
        borderColor="coolGray.200"
        borderWidth="1"
        _dark={{borderColor: "coolGray.600", backgroundColor: "gray.700"}}
        _web={{shadow: 2, borderWidth: 0}}
        _light={{backgroundColor: "gray.50"}}
      >
        <Box>
          <AspectRatio w="100%" ratio={16 / 9}>
            <Image source={{uri: `${el.imageUrl}`}} alt="image" />
          </AspectRatio>
        </Box>
        <Stack p="4" space={3}>
          <Stack space={2}>
            <Heading size="md" ml="-1">
              {el.title}
            </Heading>
            <Text
              fontSize="xs"
              _light={{color: "violet.500"}}
              _dark={{color: "violet.400"}}
              fontWeight="500"
              ml="-0.5"
              mt="-1"
            >
              Author: {el.author}
            </Text>
          </Stack>
          <HStack alignItems="center" space={4} justifyContent="space-between">
            <HStack alignItems="center">
              <Text
                color="coolGray.600"
                _dark={{color: "warmGray.200"}}
                fontWeight="400"
                fontSize={10}
              >
                {el.date} {el.time}
              </Text>
            </HStack>
          </HStack>
          <Button variant="ghost" colorScheme='light' onPress={handleMoreInfo}>
            <Text style={{color: '#189EFF'}}>Learn more</Text>
          </Button>
        </Stack>
      </Box>
    </Box>
  )
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20
  },
});

export default ListItem;
