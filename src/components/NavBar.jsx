import React from "react";
import CartWidget from "./CartWidget";
import Categories from "./Categories";
import { Grid, GridItem } from "@chakra-ui/react";
const NavBar = () => {
return (
    <>
    <Grid templateColumns='1fr 1fr 15fr 2fr'  className="header">

        <GridItem><a href="../../index.html"><img
        src="./src/assets/60x60.png"
        alt="iconBlancoYnegroDeco"
        /></a></GridItem>
        
        <GridItem><Categories/></GridItem>
        
        <GridItem><a href="../../index.html"><h1 className="headerTitle">Blanco & Negro Deco</h1></a></GridItem>
        
        <GridItem><CartWidget /></GridItem>
    </Grid>
    </>
);
};

export default NavBar;