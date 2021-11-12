import React from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { NavLink } from 'react-router-dom';



const ExploreProduct = ({ exploreProduct }) => {

    const { name, img, description, price } = exploreProduct;

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="240"
                    image={img}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                    <Typography sx={{ fontWeight: 700 }} variant="body2" color="text.secondary">
                        Price: $ {price}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <NavLink style={{ textDecoration: 'none' }} to='/place-order'>
                    <Button size="small" color="primary">
                        Buy Now
                    </Button>
                </NavLink>
            </CardActions>
        </Card>
    );
};

export default ExploreProduct;