import { AppBar, Button, Grid, Typography, TextField, DatePicker } from "../components";
import { useAppContext } from "../Context";
import { useState, useEffect } from "react";
import { getUser, adjustDateTimeForTimezone } from "../utils/core";
import { handleInputChange } from "../utils/action";
import { get, save } from "../services/database";
import { signOut } from "../services/authentication";
import { useNavigate } from "react-router-dom";





const Settings: React.FC = function () {


  const { translate, changeLanguage, supabase } = useAppContext();

  const navigate = useNavigate();
  const user = getUser();
  const [data, setData] = useState({
    name: null,
    height: null,
    birth: null,
    weight: null,
  });

  const loadData = async () => {

    const result = await get('profile', [{ field: "user_id", value: user.id }]);
    setData(result);
  }


  useEffect(() => {
    loadData();
  }, [])

  return (

    <Grid container spacing={2} sx={{ flexDirection: 'column', alignItems: 'center' }} >

      <AppBar title={translate('settings')} sx={{ flexGrowth: 0 }} />

      <Grid item sx={{ height: "calc(100vh - 80px)" }}>
        <Typography variant="h5" sx={{ textAlign: "center" }}>{translate('first-header-settings-page')}</Typography>


        <Grid container spacing={3} justifyContent="center" sx={{
          marginBottom: "4px",
          marginTop: "10px",
          flexGrow: 1,
        }}>
          <Grid item >
            <Button fullWidth={true} variant="contained" onClick={() => changeLanguage('es')}> Espanhol </Button>
          </Grid>
          <Grid item >
            <Button fullWidth={true} variant="contained" onClick={() => changeLanguage('pt')}> Português </Button>
          </Grid>
          <Grid item >
            <Button fullWidth={true} variant="contained" onClick={() => changeLanguage('en')}> Inglês </Button>
          </Grid>

        </Grid>

        <Grid container spacing={2} sx={{
          display: "flex",
          justifyContent: 'center',
          flexDirection: "column",
          alignItems: "center",
        }}>

          <Grid sx={styles.marginTop} item xs={12}>
            <Typography variant="h5">{translate('second-header-settings-page')}</Typography>
          </Grid>

          <Grid sx={styles.marginTop} item xs={12}>
            <TextField
              placeholder={translate('name')}
              fullWidth={true}
              onChange={(event) => handleInputChange("name", event.target.value, data, setData)}
              value={data.name}
              sx={{ width: "clamp(100px, 80vw, 500px)" }}
            />
          </Grid>

          <Grid
            sx={styles.marginTop}
            item xs={12}>
            <TextField
              placeholder={translate('weight')}
              fullWidth={true}
              onChange={(event) => handleInputChange("weight", event.target.value, data, setData)}
              value={data.weight}
              sx={{ width: "clamp(100px, 80vw, 500px)" }}
            />
          </Grid>

          <Grid
            sx={styles.marginTop}
            item xs={12}>
            <TextField
              placeholder={translate('height')}
              fullWidth={true}
              onChange={(event) => handleInputChange("height", event.target.value, data, setData)}
              value={data.height}
              sx={{ width: "clamp(100px, 80vw, 500px)" }}
            />
          </Grid>

          <Grid
            sx={styles.marginTop}
            item xs={12}>
            <DatePicker
              placeholder={translate('birth')}
              fullWidth={true}
              ampm={false}
              format="DD/MM/YYY"
              onChange={(value) => handleInputChange("birth", new Date(value.toString()), data, setData)}
              value={data?.birth ? adjustDateTimeForTimezone(data?.birth) : null}
              sx={{ width: "clamp(100px, 80vw, 500px)" }}
            />
          </Grid>
          <Grid item >
            <Button
              variant="contained"

              onClick={async () => {
                data.user_id = user.id
                await save('profile', data)
                console.log(data)
              }}

              sx={{ width: "200px" }}>
              {translate('save')}
            </Button>
          </Grid>
          <Grid item >
            <Button
              variant="contained"

              onClick={() => signOut(supabase, navigate)}

              sx={{ width: "200px" }}>
              {translate('logout')}
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )


}



const styles = {
  centerBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  boxAdjustment: {
    padding: 2
  },
  marginTop: {
    marginTop: 4
  }
}
export default Settings;