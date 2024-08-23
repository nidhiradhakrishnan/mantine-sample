import { Text, Table, Flex, Container } from '@mantine/core';
import useStyles from './style';

const TablePage = () => {
  const { classes } = useStyles();

  const elements = [
    { one: 9876543, two: "9876543", three: "9876543", four: 9876543 },
    { one: 9876543, two: "9876543", three: "9876543", four: 9876543 },
    { one: 9876543, two: "9876543", three: "9876543", four: 9876543 },
  ];
  
  const rows = elements.map((element, index) => (
    <tr height={60} key={index}>
      <td className={classes.tr}>{element.one}</td>
      <td className={classes.tr}>{element.two}</td>
      <td className={classes.tr}>{element.three}</td>
      <td className={classes.tr}>{element.four}</td>
    </tr>
  ));

  return (
    <Container fluid py={50} mx={{lg:100,md:50,sm:50,xs:50}}>
      <Text fz={37} fw={700} align="center" >
          Lorem ipsum dolor sit amet
        </Text>
      <Text c={'#2C2C2C'} ta={'center'} fz={18}>
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud <br />exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </Text>
      <br /><br /><br />
      <Container fluid>
        <Flex direction={'row'} my={20} gap={50}  justify="center">
          <Text fz={20} className={classes.text3} c={'#2C2C2C'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.”</Text>
          <Text fz={20} className={classes.text3} c={'#2C2C2C'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.”</Text>
        </Flex>
      </Container>
      <Table className={classes.table} my={40} withBorder>
        <thead height={60} className={classes.thead}>
          <tr className={classes.tr}>
            <td  className={classes.th}>Lorem ipsum dolor</td>
            <td className={classes.th}>Lorem ipsum dolor</td>
            <td className={classes.th}>Lorem ipsum dolor</td>
            <td className={classes.th}>Lorem ipsum dolor</td>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </Container>
  );
};

export default TablePage;
