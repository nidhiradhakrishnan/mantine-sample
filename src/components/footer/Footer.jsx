import { Text } from "@mantine/core";
import useStyles from "./StyleFooter";
const Footer=()=>{
    const { classes } = useStyles();

return(
    <Text align="center" className={classes.footer} c={'white'} pt={14} w={'100%'} >Copyright © Gewan Info Tech Solutions India Private Limited. All Rights Reserved</Text>

);
};
export default Footer;