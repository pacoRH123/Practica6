import {Box, Container} from "@mui/material";
import Navbar from "./Navbar";

const Layout = ({children}) => {

        return (
            <Box component="section" sx={{p: 2, border: '1px dashed grey'}}>
                    <Navbar/>
                <Container classname="container">{children}</Container>
                <Box className={"footer"}>
                        Practica 6
                </Box>

            </Box>
        );



}
export default Layout;
