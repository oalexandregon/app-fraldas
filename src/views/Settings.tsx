import { AppBar, Button, Grid, Typography } from "../components";
import { useAppContext } from "../Context";



const Settings: React.FC = function () {

  const { changeLanguage, translate } = useAppContext();


  return (
    
    <Grid
      container={true}
      >
        <AppBar title={translate('settings')}/>
        <Typography variant="h1">

        </Typography>
      
      <Button
        fullWidth={true}
        onClick={() => changeLanguage('es')}
      >
        Espanhol
      </Button>
      <Button
        fullWidth={true}
        onClick={() => changeLanguage('pt')}
      >
        Português
      </Button>
      <Button
        fullWidth={true}
        onClick={() => changeLanguage('en')}
      >
        Inglês
      </Button>

    </Grid>

  );
}

export default Settings;