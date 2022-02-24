import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Grid, Typography, Box, Button } from "@mui/material";

function UploadText({ onChange = (result) => { } }) {
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
        onChange(content)
        setFileName(fileName);
      };
      reader.readAsText(file);
    });
  });
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <Box
      sx={{
        width: '100%',
      }}
    >
      <Box
        sx={{
          p: 2,
          border: 1,
          borderColor: "#E5E5E5",
          borderRadius: 2,
          mb: 2,
          color: "#6390CB",
        }}
        {...getRootProps()}
      >
        <Grid container spacing={2}>
          <Grid item>
            <Button
              variant="contained"
              size="small"
              sx={{
                background: "linear-gradient(45deg,#6390CB 30%, #7DC8DB 90%)",
                width: 200,
                fontFamily: 'Prompt'
              }}
            >
              choose file
            </Button>
          </Grid>
          <Grid item>
            <input {...getInputProps()} />
            {FileName ? (
              <Typography sx={{ fontWeight: 400, fontSize: 14, mt: 1, fontFamily: 'Prompt' }}>
                {FileName}
              </Typography>
            ) : (
              <Typography sx={{ fontWeight: 400, fontSize: 14, mt: 1, fontFamily: 'Prompt' }}>
                upload text file
              </Typography>
            )}
          </Grid>
        </Grid>
      </Box>

      {Content && (
        <Box
          sx={{
            textAlign: "left",
            fontWeight: 500,
            fontSize: 16,
            bgcolor: "#E5E5E5",
            minHeight: 350,
            maxHeight: 500,
            overflowY: 'auto',
            borderRadius: 3,
            width: '100%',

          }}
        >
          <Typography
            sx={{ p: 2, fontFamily: 'Prompt' }}
            variant="subtitle1"
            gutterBottom
            component="div"

          >
            {Content}
          </Typography>
        </Box>
      )}
    </Box>
  );
}

export default UploadText;
