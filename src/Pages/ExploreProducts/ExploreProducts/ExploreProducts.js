import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Navigation from '../../Home/Shared/Navigation/Navigation';
import ExploreProduct from './ExploreProduct/ExploreProduct';

const ExploreProducts = () => {

    const [exploreProducts, setExploreProducts] = useState([]);

    useEffect(() => {
        fetch(`https://lit-plains-82210.herokuapp.com/products`)
            .then(res => res.json())
            .then(data => setExploreProducts(data))
    }, []);

    return (
        <Box>
            <Navigation></Navigation>

            <Container>
                <Typography sx={{ fontWeight: 600, mt: 8, color: '#409478' }} variant="h4" gutterBottom component="div">
                    Here You Can Get <br />
                    All Our Products
                </Typography>
            </Container>

            <Grid style={{ marginLeft: 30, marginTop: 50, marginBottom: 100, }} container spacing={2}>
                {
                    exploreProducts.map(exploreProduct => (
                        <Grid item xs={10} sm={10} md={4}>
                            <ExploreProduct
                                key={exploreProduct.id}
                                exploreProduct={exploreProduct}
                            ></ExploreProduct>
                        </Grid>
                    ))
                }
            </Grid>
        </Box>

    );
};

export default ExploreProducts;