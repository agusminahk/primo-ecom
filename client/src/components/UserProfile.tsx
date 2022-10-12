import * as React from 'react';
import {
  Box,
  Button,
  Divider,
  Drawer,
  FilledInput,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  Typography,
} from '@mui/material';
import Badge, { BadgeProps } from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import PersonIcon from '@mui/icons-material/Person';
import EditIcon from '@mui/icons-material/Edit';
import falseRequest from '../static/falseRequest.json';
import { Avatar } from '@mui/material';
import FavsCards from '../common/FavsCards';
import { Email, PasswordOutlined, Visibility, VisibilityOff } from '@mui/icons-material';

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

const UserProfile = () => {
  const [open, setOpen] = React.useState(false);
  const [data, setData] = React.useState(false);
  const [carrito, setCarrito] = React.useState(false);
  const [edit, setEdit] = React.useState(false);

  const [eye, setEye] = React.useState(false);

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          height: '100vh',
          flexDirection: 'column',
          bgcolor: 'white',
        }}>
        <Box
          sx={{
            width: '100%',
            height: '30%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'columm',
            bgcolor: '#FFD6EC',
            // backgroundSize: 'cover',
            // backgroundPosition: 'center',
            // backgroundImage: `url(${'https://i.pinimg.com/564x/13/65/70/136570269471254ab366a94f075b1818.jpg'}) `,
          }}>
          <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
            <Typography variant="h2" fontFamily={'Poppins,sans-serif'} marginTop={'10px'}>
              Hello,
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography fontFamily={'Poppins,sans-serif'} variant="h2">
              Débora
            </Typography>
            <Avatar
              sx={{ display: 'flex', alignContent: 'center' }}
              alt="Nicolas Minahk"
              src="https://i.pinimg.com/564x/cf/fa/fb/cffafb3ad8209712cf8e5e315d08145d.jpg"
            />
          </Box>
        </Box>
        <Divider color="pink" />

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            bgcolor: '#f3f3f3',
            height: '80%',
            alignItems: 'center',
          }}>
          <Divider />
          <Box
            sx={{
              bgcolor: 'white',
              height: '50%',
              width: '30%',
              borderRadius: '16px',
              boxShadow: '10px 10px 5px 0px rgba(240,184,230,0.75) ',
              // border: '1px dashed ',
              // borderColor: 'highlightTransparent.medium',
            }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignContent: 'center', flexWrap: 'wrap' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', m: '15px' }}>
                <Typography variant="h4" marginLeft={'10px'}>
                  Information
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'row-reverse', justifyContent: 'center', marginTop: '15px' }}>
                {' '}
                <PersonIcon fontSize="small" sx={{ marginBottom: '15px' }} />
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                <Typography fontFamily={'Poppins,sans-serif'} variant="h6">
                  Name: Nicolas
                </Typography>{' '}
                <Typography fontFamily={'Poppins,sans-serif'} variant="h6">
                  Phone : 99999
                </Typography>{' '}
                <Typography fontFamily={'Poppins,sans-serif'} variant="h6">
                  City : Montevideo
                </Typography>{' '}
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'cneter', justifyContent: 'flex-end', m: '15px' }}>
                <EditIcon
                  fontSize="medium"
                  sx={{ marginRight: '10px', color: 'primary.main' }}
                  onClick={() => {
                    setData(true);
                  }}
                />
              </Box>
            </Box>
          </Box>
          <Divider orientation="vertical" color="pink" />
          <Box
            sx={{
              borderBlockEndColor: 'blue',
              bgcolor: 'white',
              height: '50%',
              width: '30%',
              borderRadius: '16px',
              boxShadow: '10px 10px 5px 0px rgba(240,184,230,0.75) ',
              // border: '1px dashed ',
              // borderColor: 'highlightTransparent.medium',
            }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignContent: 'center', flexWrap: 'wrap' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', m: '15px' }}>
                <Typography variant="h4" marginLeft={'10px'}>
                  Login & Password
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'center', m: '15px' }}>
                {' '}
                <Email fontSize="small" />
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                <Typography fontFamily={'Poppins,sans-serif'} variant="h6">
                  Email: Nicolas@tuvieja.com
                </Typography>{' '}
                <Typography fontFamily={'Poppins,sans-serif'} variant="h6">
                  Password: <PasswordOutlined sx={{ fontVariant: 'full-width' }}> contraseña</PasswordOutlined>
                </Typography>{' '}
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'cneter', justifyContent: 'flex-end' }}>
                <EditIcon
                  fontSize="medium"
                  sx={{ marginRight: '10px', color: 'primary.main' }}
                  onClick={() => {
                    setOpen(true);
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      {/* Drawer User */}
      <Drawer
        anchor={'right'}
        open={data}
        onClose={() => setData(false)}
        PaperProps={{ sx: { bgcolor: 'pink', width: '50%' } }}>
        <Box sx={{ maxHeight: '100vh', height: 'auto', alignItems: 'center' }}>
          <PersonIcon></PersonIcon>
          <Typography fontFamily={'Poppins,sans-serif'}> Edit data </Typography>
          {/* </FormControl> */}
          <Divider />
          <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
            <FormControl sx={{ m: 1, width: '47ch' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                <Typography fontFamily={'Poppins,sans-serif'} variant="h6">
                  {' '}
                  actual name: "Nicolas"
                </Typography>
              </Box>
              <InputLabel sx={{ m: '2vh' }} color="warning" variant="standard" defaultValue={'nico@mail.com'}>
                New Name
              </InputLabel>
              <FilledInput sx={{ m: '2vh' }} color="warning" type="email" />
            </FormControl>
            <Divider />
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
              <Typography fontFamily={'Poppins,sans-serif'} variant="h6">
                {' '}
                actual Phone: 99999
              </Typography>
            </Box>
            <FormControl sx={{ m: 1, width: '47ch' }}>
              <InputLabel sx={{ m: '2vh' }} color="warning" defaultValue={'nico@mail.com'}>
                New Phone
              </InputLabel>
              <FilledInput sx={{ m: '2vh' }} color="warning" type="email" />
            </FormControl>
            <Divider />
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
              <Typography fontFamily={'Poppins,sans-serif'} variant="h6">
                {' '}
                actual City: Montevideo
              </Typography>
            </Box>
            <Divider />
            <FormControl sx={{ m: 1, width: '47ch' }}>
              <InputLabel sx={{ m: '2vh' }} variant="standard" color="warning">
                New City
              </InputLabel>
              <FilledInput sx={{ m: '2vh' }} color="warning" type="email" />
            </FormControl>
            <Divider />
            <Button>Save</Button>
          </Box>
        </Box>
      </Drawer>
      {/* Drawer Carrito */}
      <Drawer
        anchor={'right'}
        open={carrito}
        onClose={() => setCarrito(false)}
        PaperProps={{ sx: { bgcolor: 'primary.main' } }}>
        <Box sx={{ maxHeight: '100vh', height: 'auto', width: '100%' }}>
          {falseRequest.clothes.map(product => (
            <FavsCards product={product}></FavsCards>
          ))}
        </Box>
      </Drawer>
      {/*  Drawer Edit password */}
      <Drawer
        anchor={'right'}
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{ sx: { bgcolor: 'pink', width: '50%' } }}>
        <Email />
        <Typography fontFamily={'Poppins,sans-serif'}> Edit email </Typography>
        <Divider />
        <Box
          sx={{
            maxHeight: '100vh',
            height: 'auto',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <Box>
            <FormControl sx={{ m: 1, width: '47ch' }}>
              <Typography fontFamily={'Poppins,sans-serif'} variant="h6">
                {' '}
                actual Email: nico@mail.com
              </Typography>
              <InputLabel sx={{ m: '2vh' }} color="warning">
                New Email
              </InputLabel>
              <FilledInput sx={{ m: '2vh' }} color="warning" type="email" />
            </FormControl>
            <Divider />
            <FormControl sx={{ m: 1, width: '47ch' }}>
              <InputLabel sx={{ m: '2vh' }} color="warning">
                Repeat New Email
              </InputLabel>
              <FilledInput sx={{ m: '2vh' }} color="warning" type="email" />
            </FormControl>
            <Divider />
          </Box>
          <Divider />
          <Box>
            <FormControl sx={{ m: 1, width: '47ch' }}>
              <Typography fontFamily={'Poppins,sans-serif'} variant="h5">
                New Password :
              </Typography>
              <InputLabel sx={{ m: '2vh' }} color="warning">
                Password
              </InputLabel>
              <FilledInput
                sx={{ m: '2vh' }}
                color="warning"
                type={eye ? 'password' : 'text'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton onClick={() => setEye(!eye)} edge="end">
                      {eye ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <Divider />
            <FormControl sx={{ m: 1, width: '47ch' }}>
              <Typography fontFamily={'Poppins,sans-serif'} variant="h5">
                Repeat New Password :
              </Typography>
              <InputLabel sx={{ m: '2vh' }} color="warning">
                Password
              </InputLabel>
              <FilledInput
                sx={{ m: '2vh' }}
                color="warning"
                type={eye ? 'password' : 'text'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton onClick={() => setEye(!eye)} edge="end">
                      {eye ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </Box>
          <Button> Submit</Button>
        </Box>
      </Drawer>
    </>
  );
};

export default UserProfile;
