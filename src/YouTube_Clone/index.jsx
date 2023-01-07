import React, { Component } from 'react'
import { Container,Wrapper } from './style';
import Body from './Body';
import SideBar from './SideBar'


export default class Youtube extends Component {
  render() {
    return (
      <Container>
        <Wrapper >Wrapper</Wrapper>
      <Container flex>

        <SideBar/>
          <Body/>
  


</Container>
</Container>
    )
  }
}



