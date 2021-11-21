import logo from './logo.svg';
import './App.css';
import './style.css';

import srxImg from "./imageInSrc.jpg"
import srxVideo from "./video.mp4"


function App() {
  return (
    <div className="App">
      <header className="App-header">
      
      <div style={{border:"solid 1px black",maxWidth:"100vw"}}>

          <h1 className={"title red"}>Your name here</h1>

          <br />

          <img src={srxImg} alt ='myImage' />

          <br />

          <img src="/imageInPublic.jpg" alt="myimage" />

          </div>

          <video width="320" height="240" controls>

          <source src={srxVideo} type="video/mp4" />

          </video>

      </header>
    </div>
  );
}

export default App;
