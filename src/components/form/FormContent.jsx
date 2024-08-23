import {
  TextInput,
  Button,
  Group,
  Box,
  Image,
  Grid,
  Text,
  Textarea,
  Container,
} from "@mantine/core";
import { Center } from "@mantine/core";
import { IconCheck } from "@tabler/icons-react"; // Tabler Icons package for the tick mark
import MaskGroup3 from "../Images/MaskGroup3.png";
import useStyles from "./style";
import { useForm } from "@mantine/form";
import { Modal } from '@mantine/core';
import { useDisclosure } from "@mantine/hooks";


function FormContent() {
  const { classes } = useStyles();
  const [opened, { open, close }] = useDisclosure(false);

 
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      mobile: "",
      message: "",
    },

    validate: {
      name: (value) =>
        value.length < 3 ? "Name must have at least 3 letters" : null,
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      mobile: (value) =>
        value.length < 10 ? "Mobile number must contain 10 digits" : null,
      message: (value) =>
        value.length < 2 ? "Message must have 3 letters" : null,
    },
  });

  const validateForm = () => {
    if ( form.validate().hasErrors === false) {
      open();
    }
  };

  
    

  return (
    <><Container mx={{lg:100,md:50,sm:50,xs:50}} fluid>
      <Grid mx="auto" grow justify="center" align="center" gutter={30}>
        <Grid.Col xs={12} md={6} lg={6}>
          <Image src={MaskGroup3} alt="Mask Group" width="100%" className={classes.hiddenOnSmallScreens} />
        </Grid.Col>
        <Grid.Col xs={12} md={6} lg={6}>
          <Box maw={420} mx="auto">
            <Text fz={{ base: 24, sm: 30 }} fw={700} c={"#2C2C2C"} align="left">
              Lorem ipsum dolor sit amet
            </Text>
            <Text  c={"#2C2C2C"} align="left" mt={10} >
              sed do eiusmod tempor incididunt ut labore et dolore magna exercitation ullamco laboris nisi ut aliquip
            </Text>
            <TextInput
              withAsterisk
              classNames={{ input: classes.input, label: classes.label }}
              label="Full Name"
              w="100%"
              mt="lg"
              c={"#2C2C2C"}
              {...form.getInputProps("name")} />
            <TextInput
              withAsterisk
              classNames={{ input: classes.input, label: classes.label }}
              label="Email"
              w="100%"
              mt="lg"
              c={"#2C2C2C"}
              {...form.getInputProps("email")} />
            <TextInput
              withAsterisk
              classNames={{ input: classes.input, label: classes.label }}
              label="Mobile Number"
              w="100%"
              mt="lg"
              c={"#2C2C2C"}
              {...form.getInputProps("mobile")} />
            <Textarea
              withAsterisk
              classNames={{ input: classes.inputarea, label: classes.label }}
              label="Message"
              w="100%"
              mt="lg"
              c={"#2C2C2C"}
              {...form.getInputProps("message")} />
            <Group position="center" mt="xl">
              <Button
                w="100%"
                maxWidth={204}
                h={54}
                radius="md"
                color="dark"
                my={5}
                fz={16}
                onClick={validateForm}
              >
                Submit
              </Button>
            </Group>
          </Box>
        </Grid.Col>
      </Grid>
    </Container><Modal centered closeOnClickOutside={false} opened={opened} onClose={close} withCloseButton={false}>
        <Center style={{ flexDirection: "column" }}>
          <IconCheck size={44} color="green" />
          <Text mt="md" fz={20} fw={400} align="center" c={"#2C2C2C"}>
            Your form has been successfully submitted!
          </Text>
          <Button mt="xl" onClick={close} color="dark">
            OK
          </Button>
        </Center>
      </Modal></>
  );
}

export default FormContent;
