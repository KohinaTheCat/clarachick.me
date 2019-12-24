import React, { Component } from 'react'
import '../Pages/Home.css';

import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

import Footer from '../components/Footer';
import Header from '../components/Header';
import SumBox from '../components/SumBox';
import Nav from '../components/Nav';

import baek from '../imgs/baek.jpg';
import apple from '../imgs/apple.jpg';
import hand from '../imgs/hand.jpg';
import mika from '../imgs/mika.jpg';
import jimin from '../imgs/jimin.jpg';

export class Drawings extends Component {
    render() {
        return (
            <div className = "App">
                <Header text = "Drawings" height = {250} colour = {'#1abc9c'}/>
                <Nav />
                     
                <center><SumBox text = {"About Me!"}/></center>
                <br/>
                <br/>
                <br/>
                <br/>
                

                <Carousel>
                    <Carousel.Item>
                        <div className = "img-container">
                            <img src= {baek} style={{width: '40%', height: '40%'}}/>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className = "img-container">
                            <img src= {apple} style={{width: '40%', height: '40%'}}/>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className = "img-container">
                            <img src= {hand} style={{width: '40%', height: '40%'}}/>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className = "img-container">
                            <img src= {mika} style={{width: '40%', height: '40%'}}/>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className = "img-container">
                            <img src= {jimin} style={{width: '40%', height: '40%'}}/>
                        </div>
                    </Carousel.Item>
                </Carousel>

                <Footer/>
            </div>
        )
    }

}

export default Drawings
