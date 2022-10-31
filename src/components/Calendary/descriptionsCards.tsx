import { Flex, Heading, Text } from '@chakra-ui/react';

interface DescriptionProps {
  title: string;
  response: string | number;
}

export function DescriptionCards({ title, response }: DescriptionProps) {
  return (
    <Flex flexDir={['column', 'row']}>
      <Heading
        color="gray.400"
        display={'flex'}
        fontWeight={'regular'}
        fontSize={24}
      >
        {title} 
        <Text
          color="gray.50"
          fontFamily={'Orbitron'}
          fontSize={24}
          pl={5}
        >
          {response}
        </Text>
      </Heading>
    </Flex>
  );
}
