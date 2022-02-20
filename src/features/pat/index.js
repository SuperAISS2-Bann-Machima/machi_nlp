import React, { useEffect, useState ,useCallback, useContext}  from 'react';
import { Container, Grid, Typography ,Box, Paper,Button} from "@mui/material"
import UploadText from '../../components/common/UploadText'
import Buttons from '../../components/common/Button'
function Pat() {

       
	return (
        <Container maxWidth="lg">
        <Paper elevation={10} sx={{ m: 2 , bgcolor: '#fff', height: '100vh' }} >
        <Typography  variant="h4" sx={{ textAlign: 'left', pt: 5, m:5,color:'#6390CB'}}> RQA Generator </Typography>    
        <Box sx={{ textAlign: 'left',pl: 2 , m:2}}>        
        </Box> 
        <Box sx={{ textAlign: 'left', pt: 5, m:5, lineHeight: 2 ,  fontWeight: 500 , fontSize : 24 ,color:'#6390CB'}}> 
        <Grid container alignContent="flex-end">

          </Grid>
        
         </Box>   
         <UploadText/>
         <Buttons/>
        </Paper>
        </Container>
	);
}


export default Pat;