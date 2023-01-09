
import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    Alumni: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "30px",
    height:"40%"
  },
  Alumni__headers: {
    display: "flex",
    // gap: "25px",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    // padding: "50px",
    // margin: "10px auto",
  },
  Alumni__headers__buttons: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "30px",
    flexWrap: "wrap",
    borderTop: "4px solid #424242",
    paddingTop: "25px",
  },
  Alumni__headers__committee: {
    backgroundColor: "#12679b",
    color: "#fff",
    padding: "15px 10px",
    borderRadius: "25px",
    "&:hover": {
      backgroundColor: "#c0122e",
    },
  },
  Alumni__group: {
    width: "90%",
    display: "flex",
    gap: '5px',
    flexDirection: "column",
    textAlign: "center",
    marginBottom: "10px",
  },
  Alumni__title:{
    color: '#12679b',
  },
  Alumni__group__team: {
    backgroundImage: 'radial-gradient(circle at 99% 33%, rgba(255,255,255, 0.05) 0%, rgba(255,255,255, 0.05) 37%,transparent 37%, transparent 100%),radial-gradient(circle at 46% 16%, rgba(255,255,255, 0.05) 0%, rgba(255,255,255, 0.05) 43%,transparent 43%, transparent 100%),radial-gradient(circle at 99% 25%, rgba(255,255,255, 0.05) 0%, rgba(255,255,255, 0.05) 22%,transparent 22%, transparent 100%),radial-gradient(circle at 57% 88%, rgba(255,255,255, 0.05) 0%, rgba(255,255,255, 0.05) 86%,transparent 86%, transparent 100%),radial-gradient(circle at 82% 78%, rgba(255,255,255, 0.05) 0%, rgba(255,255,255, 0.05) 22%,transparent 22%, transparent 100%),linear-gradient(90deg, rgb(18,103,155),rgb(18,103,155))',
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    color: '#fff',
    gap: "10px",
    height: '100%',
    flexWrap: "wrap",
    padding: "20px 20px",
  },
  [theme.breakpoints.down("sm")]: {
    Alumni__group: {
      width: "90%",
    },
    Alumni__headers__buttons: {
      flex: "1 1 45%",
    },
    Alumni__group__team: {
      padding: "50px 25px",
    },
  },
}));
