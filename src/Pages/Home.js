import React, { Component } from 'react';
import './Home.css';
import { Pane } from 'evergreen-ui'

import Boxes from '../components/Boxes';
import SumBox from '../components/SumBox';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Nav from '../components/Nav';

import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

export class Home extends Component {

  state = {
    position: "",
    header_height: 400 
  }

  componentWillMount() {
      window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 401) {
          this.setState({ position: '' , header_height: 400});
      } else {
          this.setState({ position: 'fixed', header_height: 470});
      }
      console.log(window.scrollY)
  };

  render(){
    return (
      <div className="App">
        <Header text = "clara" height = {this.state.header_height} colour = {'#1abc9c'}/>
        <Nav position = {this.state.position}/>
        
        <br></br>
        <br></br>

        <header className="App-header">
          <SumBox text = {"About Me!"}/>  

            <Pane clearfix>
            <div className='rowC'>
                  <Link to = "/experience"><Boxes title = {'Experience'}/></Link>
                  <Link to= "/drawings"><Boxes title = {'Drawings'}/></Link>
                  <Link to= "/projects"><Boxes title = {'Projects'}/></Link>
            </div>
          </Pane>
        </header>
        <Footer/>
      </div>
    )
  }
}


export default Home;
