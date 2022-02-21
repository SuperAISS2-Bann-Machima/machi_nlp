import React, { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { Container, Grid, Typography, Box, Paper, Button } from "@mui/material"
const TextContext = React.createContext('test');


function MyDropzone() {
  const [Content, setContent] = useState('');
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader()

      reader.onabort = () => console.log('file reading was aborted')
      reader.onerror = () => console.log('file reading has failed')
      reader.onload = function (e) {
        var content = reader.result;

        setContent(content)
        console.log(Content);
      }
      reader.readAsText(file);
    })




  })
  const { getRootProps, getInputProps } = useDropzone({ onDrop })

  return (
    <Box>
      <Box sx={{ textAlign: 'left', p: 1, color: '#6390CB', fontWeight: 500, fontSize: 18, border: '1px dashed grey', width: '50%' }}>
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          <p>Drag 'n' drop your text file here, or click to select file</p>
          <div>
          </div>
        </div>
      </Box>
      <Box sx={{ textAlign: 'left', m: 5, lineHeight: 2, fontWeight: 500, fontSize: 16, color: '#6390CB', width: '50%' }}>
        <Grid container alignContent="flex-end">
          <Typography variant="subtitle1" gutterBottom component="div">
            {Content}
          </Typography>
        </Grid>
      </Box>
    </Box>

  )
}





export default MyDropzone;
