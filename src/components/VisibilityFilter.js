import React from 'react';
import { Container, Tab, TabList, Tabs } from '@chakra-ui/react';
import { VISIBILITY_FILTER } from '../constans';
import { useDispatch } from 'react-redux';
import { setFilter } from '../redux/actions';

function VisibilityFilter() {
  const dispatch = useDispatch()

  return (
    <Container centerContent>
      <Tabs>
        <TabList>
          {Object.keys(VISIBILITY_FILTER).map(filterKey => {
            const currentFilter = VISIBILITY_FILTER[filterKey]
            return (
              <Tab
                key={`visibility-filter-${currentFilter}`}
                onClick={() => dispatch(setFilter(currentFilter))}
              >
                {currentFilter}
              </Tab>
            )
          })}
        </TabList>
      </Tabs>
    </Container>
  );
}

export default VisibilityFilter;