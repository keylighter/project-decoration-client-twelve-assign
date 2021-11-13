import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Product from '../Product/Product';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';



const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(`https://lit-plains-82210.herokuapp.com/products`)
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    return (
        <Box>
            <Container>
                <Typography sx={{ fontWeight: 600, mt: 8, color: '#1482de' }} variant="h4" gutterBottom component="div">
                    Choose Your Enlighter
                </Typography>
            </Container>

            <Grid style={{ marginLeft: 30, marginTop: 50, marginBottom: 100, }} container spacing={2}>
                {
                    //show 6 products
                    products.slice(4).map(product => (
                        <Grid item xs={10} sm={10} md={4}>
                            <Product
                                key={product.id}
                                product={product}
                            ></Product>
                        </Grid>
                    ))
                }
            </Grid>


        </Box>
    );
};

export default Products;