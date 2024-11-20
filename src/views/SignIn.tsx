import { Button, Avatar, Alert, Box, Card, Checkbox, Container, DatePicker, DateTimePicker, Fab, Grid, IconButton, SnackBar, Switch, Tab, TextField, Typography } from '../components';
import DeleteIcon from '@mui/icons-material/Delete';
const SignIn: React.FC = function () {

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
      <Container sx={{bgcolor: 'blue', color: 'white', }}>Container teste</Container>
      <Fab color='primary'>+</Fab>
      <Grid  sx={{bgcolor: "red"}}>Grid teste</Grid>
      <IconButton aria-label='delete'><DeleteIcon/> Icone teste</IconButton>
      

    </div>

  );
}

export default SignIn;