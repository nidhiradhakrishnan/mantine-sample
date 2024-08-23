import { createStyles, rem } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  
  inputarea: {
    height: rem(138),
    [theme.fn.smallerThan('md')]: {
      height: 'auto', 
    },
  },
  input: {
    height: rem(60),
    [theme.fn.smallerThan('md')]: {
      height: 'auto', 
    },
  },
  label: {
    fontSize: rem(16),
    fontFamily: 'Poppins, sans-serif',
    [theme.fn.smallerThan('md')]: {
      fontSize: rem(14), 
    },
  },
  hiddenOnSmallScreens: {
    [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
      display: 'none',
    },
  },
}));

export default useStyles;
