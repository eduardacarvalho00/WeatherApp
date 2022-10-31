/* eslint-disable no-unused-vars */
/* eslint-disable react/no-children-prop */
import {
  Flex, Icon, Input, InputGroup, InputLeftElement, Text, Avatar, Button, useToast, useBreakpointValue,
} from '@chakra-ui/react';
import { TbLayoutDashboard } from 'react-icons/tb';
import { CiSearch } from 'react-icons/ci';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { GoLocation } from 'react-icons/go';
import React from 'react';
import { ButtonMenu } from './buttonMenu';

interface Props {
  cityName: string;
  onChangeInput: (text: string) => void;
  search: () => Promise<void>
}

export function Header(props: Props) {
  const { cityName, onChangeInput, search } = props;
  const toast = useToast();
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <Flex as="header" w={'100%'} h={32} justify={'center'}>

      <Flex align={'center'} w={'100%'} justify={'center'} flexDir={['column', 'row']}>
        <Flex align={'center'} mt={['50px', 0]}>
          <ButtonMenu icon={TbLayoutDashboard} mr={6} />
          <ButtonMenu icon={IoMdNotificationsOutline} mr={['0px', '42px']} />
          {isWideVersion && (
            <>
              <Icon as={GoLocation} w={7} h={8} mr={4} />
          
              <Text
                fontWeight={'medium'}
                fontSize={18}
                w={'165px'}
                mr={'113px'}
              >
                {cityName}
              </Text>
            </>
          )}
          
        </Flex>

        <InputGroup
          as="form"
          colorScheme={'blackAlpha'}
          size={'lg'}
          borderRadius={'32px'} 
          w={['280px', '624px']}
          h={'60px'}
          bg="gray.800"
          mt={[5, 0]}
          
        >
          <InputLeftElement
            w={'60px'} 
            h={'40px'}
            top={'10px'}
            pointerEvents="none"
            children={<CiSearch color="white" />}
        />
        <Input
          name="search"
          value={cityName}
          onChange={(event) => onChangeInput(event.target.value)}
          size={'lg'}
          type="text"
          placeholder="Search city.."
          variant={'unstyled'}
          borderRadius={'32px'} 
        />
        <Button
          mt={1}
          border={'none'}
          colorScheme={'blackAlpha'}
          variant={'outline'}
          type="button"
          value="search"
          onClick={() => search()}
        >
          <Text
            color={'gray.50'}
            onClick={() => toast({
              description: 'Search done.',
              status: 'success',
              duration: 1000,
              isClosable: true,
            })}
          >
            Search
          </Text>
          
        </Button>
        </InputGroup>
        {isWideVersion && (
          <Avatar src="https://bit.ly/broken-link" ml={[0, '335px']} />
        )}
        
      </Flex>

    </Flex>
  );
}
