import styled from 'styled-components';


export const Container=styled.div`
display: flex;
flex-direction:${({flex})=>!flex && 'column'};
background: #181818;
color:#FFFFFF;
height: 100vh;
width: 100%;





`
export let Wrapper=styled.div`
border:1px solid yellow;
height: 60px;
display: flex;
align-items:center;



`