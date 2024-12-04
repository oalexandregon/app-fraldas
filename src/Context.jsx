import { createContext, useContext, useEffect, useState } from 'react';
import { Alert, Grid, SnackBar } from './components';
import { useTranslation } from 'react-i18next';
import { createClient } from '@supabase/supabase-js';

import duration from 'dayjs/plugin/duration';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import dayjs from 'dayjs';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(duration);

const AppContext = createContext(null);



const AppProvider = ({ children }) => {

  const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_ANON_KEY)
  
  const { t: translate, i18n } = useTranslation();
  const timeoutDuration = 4000;

  const [snackOpen, setSnackOpen] = useState(false);
  const [snackMessage, setSnackMessage] = useState("");

  const [alertMessage, setAlertMessage] = useState("");
  const [alertSeverity, setAlertSeverity] = useState("");
  const [alertVariant, setAlertVariant] = useState(null);

  const [childName, setChildName] = useState(null);
  const [childWeight, setChildWeight] = useState(null);
  const [childHeight, setChildHeight] = useState(null);
  const [childAge, setChildAge] = useState(null);

  

  const showChildAge = (age) => {
    setChildAge(age)
    localStorage.setItem('childAge', age)
  }

  const showChildName = (name) => {
    setChildName(name)
    localStorage.setItem('childName', name)
  }

  const showChildWeight = (weight) => {
    setChildWeight(weight)
    localStorage.setItem('childWeight', weight)
  }

  const showChildHeight = (height) => {
    setChildHeight(height)
    localStorage.setItem('childHeight', height)
  }

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang);
  }

  const showSnackMessage = (message) => {
    setSnackMessage(message);
    setSnackOpen(true);
  }

  const showAlertMessage = (message, severity, variant) => {
    setAlertMessage(message);
    setAlertSeverity(severity);
    setAlertVariant(variant);

    setTimeout(() => {
      setAlertMessage("");
    }, timeoutDuration);
  }

  const handleClose = () => {
    setSnackMessage("");
    setSnackOpen(false);
  }

  const sharedState = {
    changeLanguage,
    showSnackMessage,
    showAlertMessage,
    translate,
    supabase,
    showChildName,
    showChildWeight,
    showChildHeight,
    childName,
    childWeight,
    childHeight,
    showChildAge,
    childAge,

  };

  useEffect(() => {
    const storeLanguage = localStorage.getItem("language");

    if (storeLanguage) {
      changeLanguage(storeLanguage);
    } else {
      const navLang = navigator.language.split("-")[0];
      changeLanguage(navLang);
    }
  }, [])

  return (
    <div className="app-background">
      <AppContext.Provider value={sharedState}>
        {children}
        <SnackBar
          autoHideDuration={timeoutDuration}
          onClose={handleClose}
          open={snackOpen}
          message={snackMessage}
        />
        {alertMessage
          ? <Grid container={true}
            sx={{
              position: 'absolute',
              left: 0,
              bottom: 0,
              width: '100%',
              padding: 2
            }}
          >
            <Grid item={true} size={{ xs: 12 }}>
              <Alert variant={alertVariant} severity={alertSeverity}>{alertMessage}</Alert>
            </Grid>
          </Grid>
          : null}
      </AppContext.Provider>
    </div>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === null) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};

export default AppProvider;