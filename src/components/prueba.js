import React from 'react';

//import logo from '../img/mini-logo.png';

import "./styles/style.css";

class Prueba extends React.Component{
    render() {
        return (<div className="contenedor">

            <div className="top">
                <div id="txt1">
                    <p>Wolfenstein</p>
                </div>
        
                <div id="txt2">
                    <p>YOUNGBLOOD</p>
                </div>

                <div id="txt3">
                    <p>The first modern co-op Wolfenstein adventure.</p>
                </div>

                <div id="txt4">
                    <p>Team up with a friend or play solo as one of BJ Blazkowicz's twin.</p>
                </div>
        
                <a className="btn1" href="hola">Download Now</a>
            </div>

            <div className="bottom">
                <div className="card">
                    <div className="card1">

                        <div id="txt5">
                            <p>Wolfenstein: Youngblood features the most
                            open-ended Wolfenstein experience to date.</p>
                        </div>

                        <div id="txt6">
                            <p>Now available on</p>
                        </div>
            
                        <div id="txt7">
                            <p>Xbox One, Play Station 4</p>
                        </div>

                        <div id="txt8">
                            <p>PC and Nintendo Switch</p>
                        </div>
            
                        <a className="btn2" href="img">Download Now</a>

                    </div>

                    <div className="card2">
                        <div id="vid1">
                        <iframe src="https://player.vimeo.com/video/362922526?autoplay=1&autopause=0&muted=1&loop=1" width="300" height="220" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
                        </div>
            
                        <div id="vid2">
                        <iframe src="https://player.vimeo.com/video/362922548?autoplay=1&autopause=0&muted=1&loop=1" width="300" height="220" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
        
    }
}

export default Prueba;