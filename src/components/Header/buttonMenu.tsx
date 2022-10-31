import { Flex, Icon } from '@chakra-ui/react';

interface ButtonProps {
  icon: any
  mr?: number | string[];
}

export function ButtonMenu({ icon, mr }: ButtonProps) {
  return (
    <Flex
      w={['60px', '72px']}
      h={['60px', '72px']}
      bg="gray.800"
      borderRadius={'100%'}
      justify={'center'}
      align={'center'}
      cursor={'pointer'}
      mr={mr}
    >
      <Icon as={icon} w={[6, 8]} h={[6, 8]} />
    </Flex>
  );
}
