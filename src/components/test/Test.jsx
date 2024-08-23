import { Box, Container, Flex, Image, Text ,Stack} from "@mantine/core";
import useStyles from "../services/style";
import Rectangle9 from "../Images/Rectangle9.png";
import Rectangle10 from "../Images/Rectangle10.png";
import Rectangle11 from "../Images/Rectangle11.png";
import Rectangle12 from "../Images/Rectangle12.png";

function Test() {
  const { classes } = useStyles();

  function ImageCard({ imageSrc, title, description }) {
    return (
      <Box my={60}>  
        <Image src={imageSrc} />
        <Text className={classes.lorem}>{title}</Text>
        <Text className={classes.text4}>{description}</Text>
      </Box>
    );
  }

  return (
<Box bg={'black'}>
<Container fluid   >
<Stack>
        <Text className={classes.text1}>Lorem ipsum dolor sit amet</Text>
        <Text className={classes.text2}>
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud <br />
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Text>
      </Stack>

      <Flex gap={10} mx={{ lg: 100, md: 50, sm: 50, xs: 50 }}>
      
        <ImageCard
          imageSrc={Rectangle9}
          title="Lorem ipsum dolor sit amet"
          description="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <ImageCard
          imageSrc={Rectangle10}
          title="Lorem ipsum dolor sit amet"
          description="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <ImageCard
          imageSrc={Rectangle11}
          title="Lorem ipsum dolor sit amet"
          description="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <ImageCard
          imageSrc={Rectangle12}
          title="Lorem ipsum dolor sit amet"
          description="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
      </Flex>
      </Container>
    </Box>
  );
}

export default Test;
