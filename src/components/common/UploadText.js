import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Container, Grid, Typography, Box, Paper, Button } from "@mui/material";

function UploadText() {
  const [Content, setContent] = useState("");
  const [FileName, setFileName] = useState("");
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();

      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = function (e) {
        var content = reader.result;
        var fileName = file.name;
        setContent(content);
        console.log(Content, fileName);
        setFileName(fileName);
      };
      reader.readAsText(file);
    });
  });
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <Box>
      <Box
        sx={{
          p: 2,
          border: 1,
          borderColor: "#E5E5E5",
          mb: 2,
          color: "#6390CB",
        }}
        {...getRootProps()}
      >
        <Grid container spacing={2}>
          <Grid item>
            <Button variant="contained" size="small">
              choose file
            </Button>
          </Grid>
          <Grid item>
            <input {...getInputProps()} />
            {FileName ? (
              <Typography sx={{ fontWeight: 400, fontSize: 14, mt: 1 }}>
                Or Drag 'n' drop again
              </Typography>
            ) : (
              <Typography sx={{ fontWeight: 400, fontSize: 14, mt: 1 }}>
                Or Drag 'n' drop your text file here
              </Typography>
            )}
          </Grid>
        </Grid>
      </Box>

      {Content ? (
        <Box
          sx={{
            textAlign: "left",
            fontWeight: 500,
            fontSize: 16,
            bgcolor: "#E5E5E5",
          }}
        >
          <Typography
            sx={{ p: 2 }}
            variant="subtitle1"
            gutterBottom
            component="div"
          >
            <p>FileName: {FileName}</p>
            {Content}
          </Typography>
        </Box>
      ) : null}
    </Box>
  );
}

export default UploadText;
