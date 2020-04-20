import React, { Component } from "react";
import "./style.css";

import logo from './imagenes/logo1.png';
import gif from './imagenes/siemens.gif'

class App extends Component {
    handleChange = e => {
        console.log({
            name: e.target.name,
            value: e.target.value,
        });
    };

    handleClick = e => {
        console.log('Button was clicked');
    };

    handleSubmit = e => {
        e.preventDefault();
        console.log('Form was submitted');
    };

  render() 
  {
    return (
        <div>

        <header>
            <div class="logdiv">
                <img class="logo" src={logo} alt=""/>
            </div>
    
    
            <div id="navegador">
                <ul>
                    <li><a href="https://new.siemens.com/global/en.html">home</a></li>
                    <li><a href="https://new.siemens.com/global/en/products/services.html">services</a></li>
                    <li><a href="https://new.siemens.com/global/en/general/contact.html">contacts</a></li>
                    <li><a href="https://new.siemens.com/global/en/company/about.html">about</a></li>
                    <li><a href="#">sign in</a></li>
                </ul>
            </div>
        </header>
    
        <div class="textbox1">
            <div class="txt1" >
                <p>the Atlas of</p>
            </div>
    
            <div class = "txt2">
                <p>Digitalization</p>
            </div>
    
            <div class="txt3">
                <p>We have captured where six global cities stand today; <br/>
                    and how they can realize their potential focusing on <br/>
                    Sustainability, Mobility and Opportunity. Discover <br/>
                    practical ways to help your city improve the quality <br/>
                    of urban living.
                </p>
            </div>
            
            <div className="nombre">
                <label>Nombre: </label>
                <input onClick={this.handleClick}
                className="form-control1" type="text" name="nombre"/>
            </div>

            <div className="email">
                <label>E-mail: </label>
                <input onClick={this.handleClick}
                className="form-control2" type="text" name="email"/>
            </div>

            <div class="button">
                <button onClick={this.handleClick} className="btn btn-primary">sign in</button>
            </div>



        </div>
    
        <div class="rightbox">
            <div class="txt4">
                <p>Create your own world</p>
            </div>
            <div class="imag">
                    <img id="giff" src={gif} alt="gif"/>
            </div>
        </div>
        
    </div>
    );
  }
}

export default App;