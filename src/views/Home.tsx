import { IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Grid, Avatar, Box, Typography, CardNewItem, CustomList } from "../components";
import { ACTIONS } from "../constants/actions";


import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import SettingsIcon from '@mui/icons-material/Settings';


import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../Context";
import { list, get } from "../services/database"
import { getUser, calculateDuration } from "../utils/core";

const Home: React.FC = () => {
    const {
        changeLanguage,
        translate,
    } = useAppContext();

    const user = getUser()
    const navigate = useNavigate();
    const theme = useTheme();

;
    const [data, setData] = useState([]);
    const [profile, setProfile] = useState({});

    const loadData = async () => {
        const d = await list('action_app_fraldas', user.id);
        const profile = await get("profile", [{ field: "user_id", value: user.id }])
        setProfile(profile);
        setData(d);
        
    }

    useEffect(() => {
        if (user && user.id) {
            loadData(); 
        }
    }, [user, data]);
    

    

    return <Grid container={true}>
        <Grid size={{ xs: 12 }}
            sx={{
                height: '20vh'
            }}
        >
            <Grid container={true}
                sx={{

                    alignItems: 'center',
                    marginTop: '1em',
                    display: "flex", 
                    justifyContent: "center", 
                    

                }}
            >
                <Grid size={{ xs: 4 }}>
                    <Box
                        sx={{
                            ...styles.centerBox,
                        }}
                    >
                        <IconButton
                            sx={{
                                ...styles.iconButton,
                                border: `2px solid ${theme.palette.primary.main}`
                            }}
                            onClick={() => navigate("/dashboard")}
                        >
                            <SignalCellularAltIcon
                                sx={{
                                    ...styles.icon,
                                    color: `${theme.palette.primary.main}`,
                                }} />
                        </IconButton>
                        <Box sx={{
                            ...styles.centerBox,
                            ...styles.boxText
                        }}>
                            <Typography component="p" sx={{ ...styles.text2 }}>{profile?.height} {translate("cm")}</Typography>
                            <Typography component="p" sx={{ ...styles.text3 }}>{translate("height")}</Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid size={{ xs: 4 }}>
                    <Box
                        sx={{
                            ...styles.centerBox
                        }}
                    >
                        <Avatar
                            sx={{ width: 90, height: 90 }}


                        />
                        <Box sx={{
                            ...styles.centerBox,
                            ...styles.boxText
                        }}>
                            <Typography component="p" sx={{...styles.text1}}>{profile?.name}</Typography>
                            <Typography component="p" sx={{...styles.text3}}>{profile?.birth ? calculateDuration(profile?.birth, "day") : 0} {translate("days")}</Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid size={{ xs: 4 }}>
                    <Box
                        sx={{
                            ...styles.centerBox
                        }}
                    >
                        <IconButton
                            sx={{
                                ...styles.iconButton,
                                border: `2px solid ${theme.palette.primary.main}`
                            }}
                            onClick={() => navigate("/settings")}
                        >
                            <SettingsIcon
                                sx={{
                                    ...styles.icon,
                                    color: `${theme.palette.primary.main}`,
                                }}
                            />
                        </IconButton>
                        <Box sx={{
                            ...styles.centerBox,
                            ...styles.boxText
                        }}>
                            <Typography component="p" sx={{...styles.text2}}>{profile?.weight} {translate("kg")}</Typography>
                            <Typography component="p" sx={{...styles.text3}}>{translate("weight")}</Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Grid>
        <Grid
            size={{ xs: 12 }}
            sx={{
                backgroundColor: theme.palette.primary.main,
                height: 'calc(100vh - 166.391px)',
            }}
        >
            <Grid container={true}
                sx={{
                    marginTop: '-50px',
                    padding: 2,


                }}
            >
                <Grid size={{ xs: 12 }}>
                    <Grid container={true} spacing={4} >
                        {
                            ACTIONS.map(action => <Grid item size={{ xs: 4 }}>
                                <CardNewItem
                                    title={action.title}
                                    Icon={action.Icon}
                                    color={action.color}
                                    actionType={action.actionType}
                                    translation={action.translation}
                                />
                            </Grid>)
                        }
                    </Grid>
                    <Grid container={true} sx={{
                        marginTop: '1em',

                    }}>
                        <Grid size={{ xs: 12 }}>
                            {data ? <CustomList
                                sx={{
                                    overflow: 'auto',
                                    maxHeight: '56.5vh',
                                }}
                                items={data}
                            /> : null}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </Grid>
};

const styles = {
    centerBox: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconButton: {
        height: '2.5em',
        width: '2.5em',
    },
    icon: {
        fontSize: '1.5em'
    },
    boxText: {
        marginTop: '.7em'
    },
    text1: {
        wordBreak: 'break-all',
        fontSize: '1.2em',
        fontWeight: '500',
        fontFamily: '"Lato", sans-serif',
    },
    text2: {
        wordBreak: 'break-all',
        fontSize: '.8em',
        fontWeight: '600',
        fontFamily: '"Lato", sans-serif',
    },
    text3: {
        wordBreak: 'break-all',
        fontSize: '.8em',
        fontWeight: '400',
    }
}

export default Home;