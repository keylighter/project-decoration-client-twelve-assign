import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Products from '../Products/Products';
import Navigation from '../Shared/Navigation/Navigation';



const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Header></Header>
            <Products></Products>
            <Footer></Footer>

        </div>
    );
};

export default Home;