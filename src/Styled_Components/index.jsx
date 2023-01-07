import React from "react";
import {
Container,
Title,
Box,
Des,




} from './StyledComp'






class StyledComp extends React.Component{



render(){



    return(

        <Container>
            <Title bg='yellow'>Hi Dear</Title>
            <Box  type='large'>Large</Box>
            <Box type='medium'>Medium</Box>
            <Box  type='small'>Small</Box>
            <Des left>This is Description</Des>
            <Des >This is Description</Des>
        </Container>

    );
}


}
export default StyledComp