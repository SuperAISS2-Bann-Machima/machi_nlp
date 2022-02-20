import React, {useCallback, useState} from 'react'
import {useDropzone} from 'react-dropzone'
import { Container, Grid, Typography ,Box, Paper,Button} from "@mui/material"



function UploadText() {
  const [Content, setContent] = useState('');
  const [FileName, setFileName] = useState('')
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader()
      
      
      
      reader.onabort = () => console.log('file reading was aborted')
      reader.onerror = () => console.log('file reading has failed')
      reader.onload = function(e) {
        var content = reader.result;
        var fileName = file.name
        setContent(content)
        console.log(Content,fileName);
        setFileName(fileName)

        
    }
    reader.readAsText(file);  
    
    
    })



    
  })
  const {getRootProps, getInputProps} = useDropzone({onDrop})
  
  return (
        <Box>
        <Box sx={{ textAlign: 'center',p: 1,color:'#6390CB',  fontWeight: 500 , fontSize : 18,  borderColor: 'grey.500' , width:'50%', borderRadius:'5%'}}>  
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          
          {FileName ?<p>Drag 'n' drop again if you want to change text file</p>: <p>Drag 'n' drop your text file here, or click to select file</p>}
         
          <div>
        </div>
        </div>
        
        </Box>
        
        {Content  ? <Box sx={{ textAlign: 'left', m:5, lineHeight: 2 , boxShadow: 3  , fontWeight: 500 , fontSize : 16 , width:'50%' , borderRadius:'5%' , bgcolor:'#E5E5E5'}}> 
        <Typography sx={{  p: 2   }} variant="subtitle1" gutterBottom component="div">
        <p>FileName : {FileName}</p>    
        {Content}
        </Typography>
         </Box>  : null} 

         </Box>

  )
}
  
  

 

export default UploadText;
