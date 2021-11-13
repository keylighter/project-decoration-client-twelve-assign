import React from 'react';
import { Link } from 'react-router-dom';
import './Notfound.css'
// import notfound from '../../images/404-error-page-found_41910-364.jpg'
const Notfound = () => {
    return (
        <div>
            <img className='w-100 h-50 img-fluid' src='https://image.freepik.com/free-vector/error-404-concept-landing-page_52683-20173.jpg' alt="" >

            </img>

            {/* <Link to="/"><button>Go Back</button>
            </Link> */}

        </div>
    );
};

export default Notfound;