import jsLogo from '../img/js.png';
import nodeLogo from '../img/node.jpg';
import reactLogo from '../img/react.png';
import mongoLogo from '../img/mongo.png';
import CSSLogo from '../img/CSS.png';
import Profile from '../img/Profilepicture.jpg';

export default function Home() {
  return(
    <div>
        <main class="index-body">
            <div class="container">
                <div class="col-sm">
                    <p class="header">Caleb Dunahee</p>
                    <p class="sub-header">Frontend Engineer</p>
                    <div class="me-pic">
                        <img src={Profile} class="pro-pic"></img>
                    </div>
                </div>
            </div>
        </main>
        <div class="col-sm" id="languages-column">
            <p class="sub-header">Languages</p>
        </div>
        <div class container="container" id="language-container">
            <div class="row">
            <div class="col-sm" >
                <div id="square-box">
                    <img src={jsLogo} />
                    <p>JavaScript</p>
                </div>
            </div>
            <div class="col-sm" >
                <div id="square-box">
                    <img src={reactLogo} />
                    <p>React.js</p>
                </div>
            </div>
            <div class="col-sm" >
                <div id="square-box">
                    <img src={nodeLogo} />    
                    <p>Node.js</p>
                </div>
            </div>
            <div class="col-sm" >
                <div id="square-box">
                    <img src={mongoLogo} />
                    <p>MongoDB</p>
                </div>
            </div>
            <div class="col-sm" >
                <div id="square-box">
                    <img src={CSSLogo} />
                    <p>CSS</p>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

