import styled, { css ,keyframes} from 'styled-components';




let rotate=  keyframes`
from{

   transform:rotate(0deg) 

}
to{

    transform:rotate(360deg) 

}



`

let common=css`
background:coral;
width: 300px;
height: 60px;

:active{
    transform:scale(0.95)
}

display: flex;

align-items:center;
justify-content:center;
cursor: pointer;
color:white;
 border:1px solid white;
 margin: 20px;
 border-radius:7px;
 font-size:25px;

`



export let Container=styled.div`

margin: 20px;
`


export let Button=styled.button`
${common}
`;


export let ActiveButton=styled(Button)`
background-color:blue;

`;
export let Press=styled.div`

${common};
background:violet;
transform:scale(1)


`
export let Rotate=styled.div`
  width: 200px;
  height: 200px;
  display: flex;
  align-items:center;
  justify-content:center;
  animation:${rotate} 2s linear infinite; 
  border-radius:50%;
  border:1px solid coral;
  display: flex;
  align-items:center;
  justify-content:center;

`