import { createStyles, rem } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  container: {
    backgroundColor: 'black',
    padding: '0 1rem', 
  },
  text1: {
    padding: rem(10),
    color: '#FFFFFF',
    textAlign: 'center',
    fontFamily: 'Poppins, sans-serif',
    fontSize: rem(35),
    fontWeight: 700,
    [theme.fn.smallerThan('md')]: {
      fontSize: rem(30),
    },
    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(25),
    },
  },
  text2: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontFamily: 'Poppins, sans-serif',
    fontSize: rem(19),
    fontWeight: 100,
    [theme.fn.smallerThan('md')]: {
      fontSize: rem(16),
    },
    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(14),
    },
  },
  lorem: {
    marginTop: rem(10),
    width: '100%',
    maxWidth: rem(252),
    textAlign: 'left',
    fontFamily: 'Poppins, sans-serif',
    color: 'white',
    fontSize: rem(17),
    [theme.fn.smallerThan('md')]: {
      fontSize: rem(15),
      maxWidth: '100%',
    },
  },
  text4: {
    height: rem(41),
    textAlign: 'left',
    color: '#BEBEBE',
    fontFamily: 'Poppins, sans-serif',
    fontSize: rem(18),
    [theme.fn.smallerThan('md')]: {
      fontSize: rem(16),
    },
    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(14),
    },
  },
}));

export default useStyles;
