import React from 'react';

import StickyBox from 'react-sticky-box';

import List from '../List';
import FollowSuggestion from '../FollowSuggestion';
import News from '../News';

import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body
} from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon />
      </SearchWrapper>

      <StickyBox>
        <Body>
          <List
            title="O que está acontecendo"
            elements={[
              <News />,
              <News />,
              <News />,
            ]}
          />

          <List
            title="Quem seguir"
            elements={[
              <FollowSuggestion
                name="felipe"
                nickname="@feIiperama"
              />,
              <FollowSuggestion
                name="felipe"
                nickname="@feIiperama"
              />,
              <FollowSuggestion
                name="felipe"
                nickname="@feIiperama"
              />,
            ]}
          />
        </Body>
      </StickyBox>
    </Container>
  );
}

export default SideBar;