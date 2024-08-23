import { createStyles } from "@mantine/core";
import backgroundImage from '../Images/background.jpg';

const useStyles = createStyles(() => ({
  container: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '91vh',
    width: '100%',
  },
  navBar: {
    paddingRight: '2px',
  },
  navDiv: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  navDivUlLiA: {
    fontSize: '20px',
    color: '#707070',
    fontFamily: 'Helvetica Neue',
    lineHeight: '24px',
    whiteSpace: 'nowrap',
  },
  navDivLi: {
    display: 'inline-block',
    color: '#707070',
    marginRight: '50px',
  },
  logoImg: {
    marginLeft: '120px',
  },
  headOne: {
    color: '#FFFFFF',
    textAlign: 'left',
    fontSize: '40px',


  },
  headTwo: {
    color: '#FFFFFF',
    height: '97px',
    fontWeight: '100',
    textAlign: 'left',
    fontSize: '22px',

  },
  button1: {
    width: '204px',
    height: '54px',
    backgroundColor: '#E2B10E',
    borderRadius: '10px',
    fontSize: '16px',
    color: 'black',

  },
  marquee: {
    color:'white',
    fontSize: '16px',
    border: '1px solid #707070',
    borderRadius: '10px',
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    overflow: 'hidden',
    backgroundColor: 'white',
    background: 'rgba(255, 255, 255, 0.2)',
   


  },

}));

export default useStyles;
