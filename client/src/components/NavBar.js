import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavContainer = styled.ul`
background: azure;
display: flex;
justify-content: space-evenly;
padding: 2em;`

const NavLinks = styled.li`
font-size:1.5em;
a:visited {color: red}
a:hover {color: black}

`


const NavBar = () => {

    return(
        <NavContainer>
            <NavLinks>
                <Link to="/">Home</Link>
            </NavLinks>
            <NavLinks>
                <Link to="/tictactoe">Tic Tac Toe</Link>
            </NavLinks>
        </NavContainer>
    );


}

export default NavBar