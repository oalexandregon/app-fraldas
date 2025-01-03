import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from "react-router-dom";
import { Card, Fab, Grid, Typography } from '..';
import { useAppContext } from '../../Context';

const CardNewItemComponent = ({ Icon, color, title, actionType }) => {
    const navigate = useNavigate();
    const { translate } = useAppContext();

    return <Card sx={{
        overflow: 'visible',
        borderRadius: '10%'
    }}>
        <Grid sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            <Icon
                sx={{
                    marginTop: '.2em',
                    fontSize: '3em',
                    color: color
                }} />
            <Typography
                sx={{
                    fontSize: '.85em',
                    marginTop: '0.5em',
                    fontWeight: '700',
                    textAlign: 'center',
                    wordWrap: "break-word",
                    width: "90%"
                }}
            >{translate(title)}</Typography>
        </Grid>
        <Grid sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            <Typography
                sx={{
                    marginTop: '0.5em',
                    fontSize: '0.8em',
                    fontWeight: '400',
                    color: "#8f8f8f"
                }}
            >{translate('add')}</Typography>
        </Grid>
        <Grid sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}>
            <Fab
                size="small"
                sx={{
                    color: color,
                    backgroundColor: "#fff",
                    position: 'relative',
                    bottom: '-20px'
                }}
                onClick={() => navigate(`/new/${actionType}`)}
            ><AddIcon /></Fab>
        </Grid>
    </Card>
}

export default CardNewItemComponent;