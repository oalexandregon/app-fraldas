import { Button, Avatar, Alert, Box } from '../components';
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
      }>Teste Box</Box>


    </div>
    
  );
}

export default SignIn;