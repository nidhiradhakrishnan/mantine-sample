import { Container, Grid, Image, Stack, Text } from "@mantine/core";
import useStyles from "./style";
import Rectangle9 from "../Images/Rectangle9.png";
import Rectangle10 from "../Images/Rectangle10.png";
import Rectangle11 from "../Images/Rectangle11.png";
import Rectangle12 from "../Images/Rectangle12.png";

const Services = () => {
  const { classes } = useStyles();
  return (
    <Container  py={50} fluid className={classes.container}>
      <Stack>
      <Text fz={37} fw={700} align="center"  color="white">
          Lorem ipsum dolor sit amet
        </Text>        <Text className={classes.text2}>
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud <br />
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Text>
      </Stack>

      <Grid mx={{lg:100,md:50,sm:50,xs:50}}>
        <Grid.Col md={6} lg={3} my={50}>
          <Image src={Rectangle9} />
          <Text className={classes.lorem}>Lorem ipsum dolor sit amet</Text>
          <Text className={classes.text4}>
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        </Grid.Col>
        <Grid.Col md={6} lg={3} my={50}>
          <Image src={Rectangle10} />
          <Text className={classes.lorem}>Lorem ipsum dolor sit amet</Text>
          <Text className={classes.text4}>
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        </Grid.Col>
        <Grid.Col md={6} lg={3} my={50}>
          <Image src={Rectangle11} />
          <Text className={classes.lorem}>Lorem ipsum dolor sit amet</Text>
          <Text className={classes.text4}>
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        </Grid.Col>
        <Grid.Col md={6} lg={3} my={50}>
          <Image src={Rectangle12} />
          <Text className={classes.lorem}>Lorem ipsum dolor sit amet</Text>
          <Text className={classes.text4}>
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default Services;
