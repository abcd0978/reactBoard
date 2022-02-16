import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import './Navbar.css'

function Navbar() {
    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar style={{backgroundColor:'#000000'}} position="static">

                <Toolbar>

                    <Button  color="inherit" variant="h6" component="div" sx={{flexGrow: 1}}>
                        <a href="/">
                            온라인 포커
                        </a>
                    </Button>

                    <Button  color="inherit" variant="h6" component="div" >
                        <a href="/host">
                            host pocker
                        </a>
                    </Button>

                    <Button color="inherit">
                        <a href="/signup">
                            Signup
                        </a>
                    </Button>

                    <Button color="inherit">
                        <a href="/login">
                            Login
                        </a>
                    </Button>

                </Toolbar>

            </AppBar>
        </Box>
    )
}

export default Navbar