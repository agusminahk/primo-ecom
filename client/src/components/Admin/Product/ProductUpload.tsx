import React, { useRef, useState, FC } from 'react';
import Image from 'next/image';
import { Box, Typography, Input, Button } from '@mui/material';
import PermMediaRoundedIcon from '@mui/icons-material/PermMediaRounded';
import Marquee from 'react-fast-marquee';

const ProductUpload: FC = () => {
  const [array, setArray] = useState<string[]>([]);
  //   const arrayFiles: string[] = [];
  //   console.log(arrayFiles);

  const fileInput = useRef<HTMLInputElement>();
  return (
    <Box
      sx={{
        margin: '5%',
        display: 'flex',
        flexDirection: 'column',
        height: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Box
        sx={{
          width: '100%',
          justifyContent: 'space-between',
          display: 'flex',
          flexDirection: 'column',
        }}>
        <Typography mb="1%"> Upload here your product images </Typography>

        <Box sx={{ display: 'flex' }}>
          <Button
            startIcon={<PermMediaRoundedIcon />}
            color="primary"
            sx={{ border: '1px solid', borderColor: 'primary.main', marginRight: '1%' }}
            onClick={() => fileInput?.current?.click()}>
            Choose files
          </Button>

          <Input
            type="file"
            id="fileInput"
            sx={{ display: 'none' }}
            inputProps={{
              display: 'none',
              ref: fileInput,
              multiple: true,
              onChange: e => {
                const files = (e.target as HTMLInputElement).files;
                const filesList = { ...files };
                let arrayFiles: string[] = [];
                // console.log(arrayFiles);

                for (const file in filesList) {
                  const reader = new FileReader();
                  reader?.readAsDataURL(filesList[file]);
                  reader.onload = () => {
                    return new Promise(resolve => {
                      const baseURL = reader?.result as string;
                      arrayFiles.push(baseURL);
                      //   return resolve(arrayFiles.push(baseURL));
                      return resolve(setArray(arrayFiles));
                    });
                  };
                }
              },
            }}></Input>

          {array && (
            <Marquee play={false} gradient={false} style={{ width: '50%' }}>
              {array?.map((image, i) => {
                console.log(image);
                return <Image key={i} width="50px" height="50px" src={image} style={{ margin: '5%' }} />;
              })}
            </Marquee>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default ProductUpload;
