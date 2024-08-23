import { createStyles, rem } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  text1: {
    padding: rem(10),
    fontFamily: 'Poppins, sans-serif',
    color: 'black',
    textAlign: 'center',
    fontSize: rem(30),
    fontWeight: 'bolder',
    [theme.fn.smallerThan('md')]: {
      fontSize: rem(24), 
    },
    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(20), 
    },
  },
  text3: {
    // maxWidth: rem(570),
    // height: 'auto',
    fontFamily: 'Poppins, sans-serif',
    [theme.fn.smallerThan('md')]: {
      padding: rem(10),
    },
  },
  table: {
    borderColor: '#EAEAEA',
    borderRadius: rem(5),
    width: '100%',
    overflowX: 'auto', 
    [theme.fn.smallerThan('md')]: {
      
    },
  },
  th: {
    background: '#F4F4F4',
    fontFamily: 'Poppins, sans-serif',
    borderColor: '#EAEAEA',
    textAlign: 'center',
    color: 'black',

    borderRadius: rem(5),
    fontSize: rem(16),
    [theme.fn.smallerThan('md')]: {
      fontSize: rem(14), 
    },
    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(12),
    },
  },
  thead: {
    background: '#FFFFFF',
    border: '1px solid #EAEAEA',
    fontFamily: 'Poppins, sans-serif',
    alignContent: 'center',
    borderRadius: rem(5),
    fontSize: rem(16),
    [theme.fn.smallerThan('md')]: {
      fontSize: rem(14), 
    },
    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(12),
    },
  },
  tr: {
    textAlign: 'center',
    borderColor: '#EAEAEA',
    border: '1px solid #EAEAEA',
    fontFamily: 'Poppins, sans-serif',
    borderRadius: rem(5),
    fontWeight: 'bold',
    fontSize: rem(16),
    [theme.fn.smallerThan('md')]: {
      fontSize: rem(14),
    },
    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(12), 
    },
  },
}));

export default useStyles;
