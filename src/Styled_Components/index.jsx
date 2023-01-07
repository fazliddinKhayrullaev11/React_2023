import React from "react";
import {

Button,
ActiveButton,
Press,
Rotate,




} from './StyledComp'
import{ThemeProvider,createGlobalStyle} from 'styled-components'


const Globalstyle=createGlobalStyle`
body{
    background:${(props)=>props.theme.bg};
color:${(props)=>props.theme.cl};
}



`;



class StyledComp extends React.Component{
    state={
        light:true,
    }


render(){
  
 let theme={
    bg:this.state.light?'white':'black',
    cl:this.state.light?'black':'white',
 }

    return(

        <ThemeProvider theme={theme}>
            <Globalstyle/>
            <h1>Theme Provider</h1>
          <Button>Click me</Button>
          <ActiveButton>Activate me</ActiveButton>
          <Press>Press me</Press>
          <Rotate>Rotate Me</Rotate>
          <Button onClick={()=>this.setState({light:!this.state.light})}>Change Theme</Button>

        </ThemeProvider>

    );
}


}
export default StyledComp