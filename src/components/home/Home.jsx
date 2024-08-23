import React, { useState } from "react";
import useStyles from "./style";
import logo from "../Images/logo.jpg";
import background from "../Images/background.jpg";
import {
  Image,
  NavLink,
  Text,
  Button,
  Box,
  Burger,
  Drawer,
  BackgroundImage,
  Title,
  Container,
} from "@mantine/core";

const Home = () => {
  const [opened, setOpened] = useState(false); // State to manage Drawer open/close
  const { classes } = useStyles(); // Corrected to use useStyles for getting classes

  const navlinks = [
    { key: 1, name: "Home", link: "/" },
    { key: 2, name: "About Us", link: "/about" },
    { key: 3, name: "Services", link: "/services" },
    { key: 4, name: "Contact Us", link: "/contact" },
  ];

  return (
    <div style={{ overflowX: 'hidden', width: '100%' }}>
      <div className={classes.navBar}>
        <div className={classes.navDiv}>
          <div className={classes.logoImg}>
            <Image src={logo} alt="Logo" width={80} height={30} />
          </div>

          {/* Burger Menu for Mobile View */}
          <Burger
            opened={opened}
            onClick={() => setOpened(o => !o)}
            title={opened ? "Close navigation" : "Open navigation"}
            sx={{
              display: "block", // Show the burger on mobile
              "@media (min-width: 768px)": {
                display: "none", // Hide the burger on screens wider than 768px
              },
            }}
          />

          {/* Drawer for Mobile NavLinks */}
          <Drawer
            opened={opened}
            onClose={() => setOpened(false)}
            padding="md"
            size="xs"
            withCloseButton={false} // Optionally remove the close button inside Drawer
            styles={{
              drawer: {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: '100%', // Ensure the Drawer does not exceed viewport width
              },
            }}
          >
            {navlinks.map(item => (
              <NavLink
                key={item.key} // Add a key for each item
                label={item.name}
                href={item.link}
                className={classes.navDivUlLiA}
                c={"#707070"}
              />
            ))}
          </Drawer>

          {/* NavLinks for Desktop View */}
          <Box
            sx={{
              paddingBottom: "20px",
              display: "none", // Hide on mobile
              alignItems: "center",
              justifyContent: "flex-end",
              gap: "15px",
              "@media (min-width: 768px)": {
                display: "flex", // Show only on desktop
              },
            }}
          >
            {navlinks.map(item => (
              <NavLink
                key={item.key} // Add a key for each item
                label={item.name}
                href={item.link}
                className={classes.navDivUlLiA}
                c={"#707070"}
              />
            ))}
          </Box>
        </div>
      </div>

      <Box
        style={{
          overflowX: 'hidden', 
          width: '100%',
          padding: '0 10px',
          boxSizing: 'border-box', 
        }}
      >
        <BackgroundImage  src={background} h={750}>
          <Container mx={{lg:100,md:50,sm:50,xs:50}} fluid>
          <Title
            className={classes.headOne}
            color="white"
            order={2}
            align="start"
            pt={190}
            fz={'clamp(1.5rem, 4vw, 2.5rem)'}
          >
            Lorem ipsum dolor sit amet
          </Title>
          <Text
            className={classes.headTwo}
            color="white"
            align="start"
            fz={'clamp(0.875rem, 2.5vw, 1.125rem)'}
          >
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            <Text> Ut enim ad minim veniam, <span style={{ color: '#fab005' }}>quis nostrud</span> exercitation</Text> ullamco laboris nisi ut aliquip.
          </Text>
          <Button
            color="yellow"
            radius="md"
            size="lg"
            display={'block'}
            w={'clamp(150px, 50%, 200px)'} 
            mt={'40px'}
            c={'black'}
          >
            Contact Us
          </Button>
          </Container>
          <Container mx={{lg:100,md:50,sm:50,xs:50}} mt={250} fluid>
          <marquee
            className={classes.marquee}
            color="white"
            align="center"
            fz={16}
            m={'0 auto'}
            mt={'clamp(10vh, 15vh, 18vh)'}
            p={'clamp(5px, 2vw, 10px)'}
            maw={'100%'}
            mx={800}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </marquee>
          </Container>
          
        </BackgroundImage>
      </Box>
    </div>
  );
};

export default Home;
