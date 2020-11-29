import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import Carousel from 'react-bootstrap/Carousel'
import icpc from '../../images/icpc.jpg'
import intra from '../../images/intra.jpg'
import  ncpc from '../../images/ncpc.jpg'
const Header = () => {
    return (
        <div className='header'>
          
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img  src={icpc} style={{'maxHeight': '80vh'}}  className="d-block w-100 "  alt="First slide" >  
                    </img>
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                <img  src={ncpc} style={{'maxHeight': '80vh'}}  className="d-block w-100 "  alt="Second slide" >  
                    </img>
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img  src={intra} style={{'maxHeight': '80vh'}}  className="d-block w-100 "  alt="Third slide" >  
                    </img>
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </div>
    );
};

export default Header;