import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function gameCard(props) {
    return (
        <div class="card" onClick={() => props.handleClick(props.id)}>
        <img src={props.img} alt="Image" class="card-image" />
        <div class="card-text">
          <h2>{props.name}</h2>
        </div>
      </div>
    );
}
