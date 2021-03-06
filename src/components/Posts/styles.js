import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
    container: {
        top: '20%',
        display: 'flex',
        alignItems: 'center',
    },
    smMargin: {
        margin: theme.spacing(1),
    },
    actionDiv: {
        textAlign: 'center',
    },
}));