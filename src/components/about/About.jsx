import React from "react";
import {
  Text,
  Grid,
  List,
  Button,
  Image,
  Flex,
  Stack,
  Container,
} from "@mantine/core";
import MaskGroup2 from "../Images/MaskGroup2.png";
import useStyles from "./style";

const About = () => {
  const { classes } = useStyles();

  return (
    <Container mx={{lg:100,md:50,sm:50,xs:50}} fluid my={100} h="100%">
      <Stack my={40}>
        <Text fz={37} fw={700} align="center" >
          Lorem ipsum dolor sit amet
        </Text>
        <Text className={classes.header2} fz={18}>
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud <br />
          exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </Text>
      </Stack>

      <Grid  className={classes.grid} >
        <Grid.Col lg={6} md={12} sm={12} xs={12}>

          <Container size={550}>
          <Image src={MaskGroup2} alt="Mask Group"  width="100%" />

          </Container>
         
        </Grid.Col>

        <Grid.Col lg={6} md={12} sm={12} xs={12}>
          <Stack>
            <Flex direction="column">
              <Text fz={27} fw={700}>
                Lorem ipsum dolor sit amet
              </Text>
              <Text fz={18} c={"#707070"} my={6}>
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim
                <br />
                veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo
                <br />
                consequat.
              </Text>
            </Flex>

            <Flex direction="column">
              <List>
                <List className={classes.listItem} c={"#707070"}>
                  sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. Ut enim ad
                </List>
                <List className={classes.listItem} c={"#707070"}>
                  sed do eiusmod tempor incididunt ut labore et dolore.
                </List>
                <List className={classes.listItem} c={"#707070"}>
                  sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.
                </List>
                <List className={classes.listItem} c={"#707070"}>
                  sed do eiusmod tempor incididunt .
                </List>
              </List>
              <Button className={classes.button} mt={13}>
                Contact us
              </Button>
            </Flex>
          </Stack>
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default About;
