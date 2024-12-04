import { AppBar, Button, Grid, Typography, TextField } from "../components";
import { useAppContext } from "../Context";
import { useState } from "react";




const Settings: React.FC = function () {

  const {
    changeLanguage,
    translate,
    showChildName,
    showChildWeight,
    showChildHeight,
    showChildAge,
    childName, childWeight, childHeight, childAge

  } = useAppContext();


  const [localName, setLocalName] = useState(childName);
  const [localHeight, setLocalHeight] = useState(childHeight);
  const [localWeight, setLocalWeight] = useState(childWeight);
  const [localAge, setLocalAge] = useState(childAge);


  const handleSave = () => {
    showChildName(localName);
    showChildWeight(localHeight);
    showChildHeight(localWeight);
    showChildAge(localAge);
  };

  return (

    <Grid container={true} sx={{ backgroundColor: "#f4f4f4", }}>

      <AppBar title={translate('settings')} sx={{ flexGrowth: 0 }} />

      <Grid container xs={12} sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: "15px",
        height: "calc(100vh - 81px)"
      }}
      >
        <Typography variant="h5">Selecione o idioma pretendido:</Typography>
        <Grid container spacing={3} justifyContent="center" sx={{ marginBottom: "4px", marginTop: "10px" }}>
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
          marginTop: 2,
          display: "flex",
          flexDirection: "column",
          width: "100vw",
          alignItems: "center",
        }}>

          <Typography variant="h5">Informe os dados do bebê:</Typography>

          <Grid item xs={12} sx={{ width: "clamp(100px, 80vw, 500px)" }}>
            <TextField
              fullWidth
              label="Nome do Bebê"
              value={localName}
              onChange={(e) => setLocalName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sx={{ width: "clamp(100px, 80vw, 500px)" }}>
            <TextField
              fullWidth
              label="Altura (cm)"
              value={localHeight}
              onChange={(e) => setLocalHeight(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sx={{ width: "clamp(100px, 80vw, 500px)" }}>
            <TextField
              fullWidth
              label="Peso (kg)"
              value={localWeight}
              onChange={(e) => setLocalWeight(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sx={{ width: "clamp(100px, 80vw, 500px)" }}>
            <TextField
              fullWidth
              label="Idade em dias"
              value={localAge}
              onChange={(e) => setLocalAge(e.target.value)}
            />
          </Grid>
          <Grid item >
            <Button variant="contained" onClick={() => handleSave()} sx={{ width: "200px" }}>Salvar</Button>
          </Grid>

        </Grid>

      </Grid>


    </Grid>

  );
}

export default Settings;