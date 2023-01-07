import styled from 'styled-components';


export const Container=styled.div`
display: flex;
flex-direction:${({flex})=>!flex && 'column'};
background: #181818;
color:#FFFFFF;
height: 100vh;
width: 100%;
padding:${({flex})=>!flex && '0 30px'};





`
export let Wrapper=styled.div`
border:1px solid yellow;
height: 60px;
display: flex;
align-items:center;
justify-content:space-between;



`
export let Category=styled.div`
 display: flex;
 border:1px solid green;

`
export let Icons=styled.div`



`
