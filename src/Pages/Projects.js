import React, { Component } from 'react'

import SumBox from '../components/SumBox';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Description from '../components/Description';

export class Projects extends Component {
    render() {
        return (
            <div className = "App">
                <Header text = "Projects" height = {250} colour = {'#1abc9c'}/>
                <Nav />
                <br></br>
                <br></br>
                <br></br>

                <header className="App-header">
                    <SumBox text = {"About Me!"}/>  

                    <div className = "rowC">
                        <img src={require('../imgs/logo.svg')} width="270" height="270"/>
                        <ul></ul>   
                        <ul></ul>   
                        <Description title = "This Website" 
                                    status = "currently a work in progress"
                                    body = "made using React and Evergreen"/>
                    </div>
                    <ul></ul>   
                    <ul></ul>
                    <div className = "rowC">
                        <Description title = "Kohina! Run" 
                                    status = "finished!"
                                    body = "an open world RPG made using Visual Basic"/>
                        <ul></ul>   
                        <ul></ul>   
                        <img src={require('../imgs/icon-kohina.png')} width="240" height="240"/>
                    </div>
                    <ul></ul>   
                    <ul></ul>
                    <div className = "rowC"> 
                        <img src={require('../imgs/unity-icon.jpg')} width="240" height="240"/>
                        <ul></ul>   
                        <ul></ul>  
                        <Description title = "A Random Rhythm Game" 
                                    status = "currently a work in progress"
                                    body = "a rhythm game made using Unity"/>
                    </div>
                    <br></br>
                    <br></br>
                    <br></br>
                </header>

                <Footer/>
            </div>
        )
    }
}

export default Projects
