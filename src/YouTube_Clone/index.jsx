import React, { Component } from 'react'
import { Category,Container,Wrapper } from './style';
import Body from './Body';
import SideBar from './SideBar'


export default class Youtube extends Component {
  render() {
    return (
      <Container>
        <Wrapper >
        <Category>Birinchisi</Category>
        <Category>Ikkinchisi</Category>
        <Category>Uchinchisi</Category>


        </Wrapper>
      <Container flex>

        <SideBar/>
          <Body/>
  


</Container>
</Container>
    )
  }
}



