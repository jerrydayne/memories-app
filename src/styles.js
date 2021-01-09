import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    appBAr: {
        borderRadius: 15,
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    heading: {
        color: 'rgba(0, 183, 255, 1)',
    },
    image: {
        marginLeft: '15px',
        width: '200px'
    },
    container: {
        top: '50px'
    },
    [theme.breakpoints.down('sm')] : {
        mainContainer: {
            flexDirection: 'column-reverse'
        }
    },
    mainContainer: {
        marginTop: '40px'
    }
}));
