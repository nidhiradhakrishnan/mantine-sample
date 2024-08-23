import { createStyles, rem } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  heading: {
    fontSize: rem(30),
    color: 'black',
    fontFamily: 'Poppins, sans-serif',
    lineHeight: rem(24),
    textAlign: 'center',
    [theme.fn.smallerThan('md')]: {
      fontSize: rem(24), // Adjust font size for smaller screens
      lineHeight: rem(20),
    },
    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(20), // Further adjust for very small screens
      lineHeight: rem(18),
    },
  },
  header2: {
    color: '#707070',
    textAlign: 'center',
    fontFamily: 'Poppins, sans-serif',
    [theme.fn.smallerThan('md')]: {
      fontSize: rem(16), // Adjust font size for smaller screens
    },
    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(14), // Further adjust for very small screens
    },
  },
  grid: {
    marginLeft: '0',
    marginRight: '0',
    [theme.fn.smallerThan('md')]: {
      marginLeft: '0',
      marginRight: '0',
    },
  },
  button: {
    width: '100%',
    maxWidth: rem(204),
    height: rem(54),
    backgroundColor: '#292929',
    border: `1px solid #707070`,
    borderRadius: rem(10),
    color: '#FFFFFF',
    [theme.fn.smallerThan('sm')]: {
      height: rem(48), 
      fontSize: rem(14), 
    },
  },

  listItem: {
    position: "relative",
    paddingLeft: "30px",
    marginBottom: "10px", // Adjust for spacing between items
    "&::before": {
      content: '""',
      position: "absolute",
      left: 0,
      top: "50%",
      transform: "translateY(-50%)",
      width: "17px", // Marker width
      height: "17px", // Marker height
      backgroundColor: "#121212", // Marker color
      borderRadius: "50%", // Circular marker
    },
  },
}));

export default useStyles;
