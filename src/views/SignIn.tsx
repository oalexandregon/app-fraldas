import { Button, Avatar, Alert, Box, Card, Checkbox, Container, DatePicker, DateTimePicker, Fab, Grid, IconButton, SnackBar, Switch, Tab, TextField, Typography } from '../components';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';

const SignIn: React.FC = function () {

  
  const [isOpen, setIsOpen] = useState(false);

  function handleOpen() {
    setIsOpen(true);
  }

  function handleClose(

  ) {


    setIsOpen(false);
  }

  return (
    <div>
      <h1>Sign In</h1>
      <Button>sadas</Button>
      <Avatar backgroundColor="blue" >A</Avatar>
      <Alert severity='info'> Teste Alert</Alert>
      <Box sx={{
        width: 100,
        height: 100,
        borderRadius: 1,
        bgcolor: 'red',
        color: 'white',
        display: 'flex',
        alignItems: "center",
        justifyContent: "center",
      }
      }>
        Teste Box
      </Box>
      <Card >
        Exemplo
      </Card>
      <Checkbox />
      <Container sx={{ bgcolor: 'blue', color: 'white', }}>Container teste</Container>
      <Fab color='primary'>+</Fab>
      <Grid sx={{ bgcolor: "red" }}>Grid teste</Grid>
      <IconButton aria-label='delete'><DeleteIcon /> Icone teste</IconButton>
      <SnackBar
      />
      <Button onClick={handleOpen}>
        Clique para testar o SnackBar
        <SnackBar
          open={isOpen}
          autoHideDuration={4000}
          onClose={handleClose}
          message="Teste Snackbar"
        />
      </Button>
      <Switch aria-label="Switch teste" defaultChecked />
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <Typography variant='body1'>teste do typography</Typography>
      <Tab label='Tab 1'/>
      <Tab label='Tab 2'/>
      <Tab label='Tab 3'/>
      <DatePicker label="Teste datePicker"/>
      <DateTimePicker label="Teste dateTimePicker" ampm = {false} />
     



    </div>

  );
}

export default SignIn;