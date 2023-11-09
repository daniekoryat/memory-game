import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Header = ({ score, highScore,restGame }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">Memory Game</Typography>
        <Button color="inherit" onClick={() => restGame(true)}>New Game</Button>
        <Typography variant="subtitle1" style={{ marginLeft: 'auto' }}>
          Score: {score} High Score: {highScore}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;