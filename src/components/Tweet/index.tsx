import React from 'react';

import { 
  Container, 
  Retweeted,
  RetweetedIcon,
  Body,
  Avatar,  
  Content,  
  Header,
  Dot,
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon
} from './styles';

const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted> 
        <RetweetedIcon />       
        <span>Você retweetou</span>
      </Retweeted>

      <Body>
        <Avatar />
        <Content>
          <Header>
            <strong>felipe</strong>
            <span>@feIiperama</span>
            <Dot />
            <time>1 min</time>
          </Header>
          <Description>
            q q ta contesenu?
          </Description>
          <ImageContent />
          <Icons>
            <Status>
              <CommentIcon />
              18
            </Status>
            <Status>
              <RetweetIcon />
              18
            </Status>
            <Status>
              <LikeIcon />
              999
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
}

export default Tweet;