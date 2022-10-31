import {
  Box, Flex, Stack, Tab, TabList, TabPanel, TabPanels, Tabs,
} from '@chakra-ui/react';
import { Cards } from './cards';

export interface ForecastItem {
  date: string;
  weekday: string;
  condition: string;
  description: string;
  rain_probability: number;
  wind_speedy: string;
  min: number;
  max: number;
}

interface Props {
  results: ForecastItem[]
}

export function Calendary(props: Props) {
  const { results } = props;
  
  return (
    <Flex w={'100%'} h={'492px'} justify={'center'} mt={'59px'}>
      <Box w={'1560px'}>
        <Tabs variant={'unstyled'}>
          <TabList>
            <Tab
              fontStyle={'regular'}
              fontSize={[20, 24]}
              color="gray.400"
              _selected={{ color: 'gray.50' }}
            >
              Today
            </Tab>
            <Tab
              fontStyle={'regular'}
              fontSize={[20, 24]}
              color="gray.400"
              _selected={{ color: 'gray.50' }}
            >
              Next 7 days
            </Tab>
          </TabList>

          <TabPanels p={4}>
            <TabPanel
              bg="gray.800"
              borderRadius={'32px'}
              h={'500px'}
              mt={'91px'}
            >
                <Box p={5}>
                  <iframe
                    title="myFrame"
                    src="https://embed.windy.com/embed2.html?lat=-27.098&lon=-46.802&detailLat=-23.522&detailLon=-46.791&width=650&height=450&zoom=5&level=surface&overlay=temp&product=ecmwf&menu=&message=true&marker=&calendar=now&pressure=&type=map&location=coordinates&detail=&metricWind=km%2Fh&metricTemp=%C2%B0C&radarRange=-1"
                    style={{
                      border: 0,
                      borderRadius: '32px',
                      width: '100%',
                      height: '430px',
                    }}
                    allowFullScreen
                    loading="lazy"
                  >
                  </iframe>
                  
              </Box>

            </TabPanel>
            <TabPanel>

              <Flex mt={'91px'} justify={'center'} align={'center'}>
              <Stack direction={['column', 'row']} spacing={16}>
                {results.map((resultsDays) => (
                  <Cards
                    key={resultsDays.weekday}
                    title={resultsDays.weekday}
                    temp={resultsDays.max}
                    condition={resultsDays.condition}
                    date={resultsDays.date}
                    max={resultsDays.max}
                    min={resultsDays.min}
                    rain={resultsDays.rain_probability}
                    wind={resultsDays.wind_speedy}
                    description={resultsDays.description}
                  />
                ))}
              
              </Stack>
              
              </Flex>
              
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Flex>
  );
}
