import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    profile:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: "center",
        flex: '1 1 10%'
    },
    profile__name:{
        textAlign: "center",
        fontSize: "15px",
        height:"auto",
        paddingTop:"10px",
        paddingBottom:"10px",
        '&:hover': {
            cursor:"Pointer",
        }
    },
    
    profile__image: {
        height: "75px",
        width: "75px",
    },

    [theme.breakpoints.down('sm')]: {
        profile__image: {
            height: "50px",
            width: "50px",
        },
    },
}));
