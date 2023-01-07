import styled, { css } from 'styled-components';

let getSize=(props)=>{
   switch(props.type){
      case 'large':
        return '200px'
        case 'medium':
            return '150px'
            case 'small':
                return '100px'
                default:
                    return '200px'
   }

}

let common =css`
background-color:red;



`;

export let Container=styled.div`
width: 100%;
height: 100vh;
background-color:blue;
display: flex;


`;
export let Title=styled.h1`
background-color:${(props)=>props.bg};
 color:coral;
 font-size:25px;
 font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
margin: 20px;
`;

export let Box=styled.div`
${common}

 width:${getSize};
 height: ${getSize};
 
 margin: 100px;


`;
export let Des =styled.h1`
 color:${({left})=>(left? 'red':'green')}


`;