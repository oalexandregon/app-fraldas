import { IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Grid, Avatar, Box, Typography, CardNewItem, CustomList } from "../components";
import { ACTIONS } from "../constants/actions";
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import SettingsIcon from '@mui/icons-material/Settings';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../Context";
import { list } from "../services/database"

const Home: React.FC = () => {
    const {
        changeLanguage,
        translate,
        showChildName, showChildWeight, showChildHeight, showChildAge,
        childName, childWeight, childHeight, childAge

    } = useAppContext();

    const navigate = useNavigate();
    const theme = useTheme();

    const [data, setData] = useState([]);

    const loadData = async () => {
        const d = await list('action_app_fraldas');
        if (d) {
            setData(d);
        }
    }

    useEffect(() => {
        loadData();

        const ageData = localStorage.getItem("childAge");
        const nameData = localStorage.getItem("childName");
        const weightData = localStorage.getItem("childWeight");
        const heightData = localStorage.getItem("childHeight");

        if (ageData) {
            showChildAge(ageData);
        }
        if (nameData) {
            showChildName(nameData)
        }
        if (weightData) {
            showChildWeight(weightData)
        }
        if (heightData) {
            showChildHeight(heightData)
        }
    }, [])
    return <Grid container={true}>
        <Grid size={{ xs: 12 }}
            sx={{
                height: '20vh'
            }}
        >
            <Grid container={true}
                sx={{
                    alignItems: 'flex-end',
                    marginTop: '1em'
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
                            <Typography component="p" sx={{ ...styles.text2 }}>{childHeight ? `${childHeight} cm` : null}</Typography>
                            <Typography component="p" sx={{ ...styles.text3 }}>{childWeight ? `Peso` : null}</Typography>
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
                            <Typography component="p" sx={{ ...styles.text1 }}>{childName ? `${childName}` : translate('my-baby')}</Typography>
                            <Typography component="p" sx={{ ...styles.text3 }}>{childAge ? `${childAge} dias` : null}</Typography>
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
                            <Typography component="p" sx={{ ...styles.text2 }}>{childWeight ? `${childWeight} kg` : null}</Typography>
                            <Typography component="p" sx={{ ...styles.text3 }}>{childWeight ? `Peso` : null}</Typography>
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