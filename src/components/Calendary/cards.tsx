/* eslint-disable no-unused-expressions */
/* eslint-disable no-lone-blocks */
import {
  Box,
  Button,
  Divider, Flex, Heading, Icon, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useBreakpointValue, useDisclosure,
} from '@chakra-ui/react';
import { GoTriangleDown, GoTriangleUp } from 'react-icons/go';
import {
  BsFillCloudHailFill, BsFillCloudLightningRainFill, BsFillCloudsFill, BsFillSunFill, 
} from 'react-icons/bs';
import { DescriptionCards } from './descriptionsCards';

interface CardProps {
  title: string;
  temp: number;
  date: string;
  min: number;
  max: number;
  condition: string;
  rain: number;
  wind: string;
  description: string;
}

export function Cards({
  title, temp, date, min, max, condition, rain, wind, description,
}: CardProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <>
      <Button
        w={'165px'}
        h={'314'}
        onClick={onOpen}
        borderRadius={'50px'}
        p={'0px'}
        bg="gray.800"
        _hover={{
          bg: 'gray.900',
        }}
      >
        <Flex
          flexDir={'column'}
          align={'center'}
          h={'314'}
          borderRadius={'50px'}
        >
          <Text
            fontWeight={'medium'}
            fontSize={26}
            mt={'19px'}
          >
            {title}
          </Text>
          <Divider w={'90px'} />
          {description === 'Chuva' ? <Icon w={'97px'} h={'66'} mt={'70px'} as={BsFillCloudLightningRainFill} /> : false}
          {description === 'Chuvas esparsas' ? <Icon w={'97px'} h={'66'} mt={'70px'} as={BsFillCloudHailFill} /> : false}
          {description === 'Tempo limpo' ? <Icon w={'97px'} h={'66'} mt={'70px'} as={BsFillSunFill} /> : false}
          {description === 'Parcialmente nublado' ? <Icon w={'97px'} h={'66'} mt={'70px'} as={BsFillCloudsFill} /> : false}
          <Heading
            fontFamily={'Orbitron'}
            fontWeight={'medium'}
            fontSize={48}
            mt={'34px'}
            mb={'43px'}
          >
            {temp}°
          </Heading>
        </Flex>
      </Button>
    
      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
        size={'lg'}
      >
        <ModalOverlay />
          <ModalContent
            p={[0, 3]}
            w={['270px', '665px']}
            h={['-moz-max-content', '600px']}
            bg="gray.900"
            borderRadius={'32px'}
          >
            {isWideVersion && (
              <>
                <ModalHeader color="gray.50" fontWeight={'bold'} fontSize={36}>

                  <Flex justify={'space-between'}>
                    <Heading>{title}</Heading>
                    <Text fontFamily={'Orbitron'}>{date}</Text>
                  </Flex>
                  <Divider />

                </ModalHeader>
                <ModalCloseButton p={5} />
              </>
            )}

            <ModalBody mt={['30px', '50px']}>
              <Flex justify={'space-between'} flexDir={['column', 'row']}>
                <Box>
                  <Heading
                    fontFamily={'Orbitron'}
                    fontSize={70}
                    fontWeight={'medium'}
                  >
                    <Icon
                      as={GoTriangleUp}
                      color="green.300"
                      fontSize={50}
                      mr={6} 
                    />
                    {max}°
                  </Heading>

                  <Heading
                    fontFamily={'Orbitron'}
                    fontSize={70}
                    fontWeight={'medium'}
                  > 
                    <Icon
                      as={GoTriangleDown}
                      color="red.800"
                      fontSize={50}
                      mr={6} 
                    />
                    {min}°
                  </Heading>
                </Box>

                <Flex flexDir={'column'} align={'center'}>                
                
                {description === 'Chuva' ? <Icon w={'153px'} h={'111'} as={BsFillCloudLightningRainFill} /> : false}
                {description === 'Chuvas esparsas' ? <Icon w={'153px'} h={'111'} as={BsFillCloudHailFill} /> : false}
                {description === 'Tempo limpo' ? <Icon w={'153px'} h={'111'} as={BsFillSunFill} /> : false}
                {description === 'Parcialmente nublado' ? <Icon w={'153px'} h={'111'} as={BsFillCloudsFill} /> : false}
                 
                  <Text fontSize={24} fontWeight={'light'} textAlign={'center'} w={'210px'}>{description}</Text>
                </Flex>

              </Flex>
              <Box mt={['50px', '79px']}>
                <DescriptionCards title="rain probability:" response={`${rain}%`} />
                <DescriptionCards title="wind speed:" response={wind} />
                <DescriptionCards title="condition:" response={condition} />
                
              </Box>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blackAlpha" mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
    </>
    
  );
}
