import React, { Component } from 'react'
import NavBar from '../navbar/NavBar'
import Footer from '../footer/Footer'
import play from '../../img/Play.png'
import './Play.css'
import axios from 'axios'
import next from '../../img/Next.png'
import Sound from 'react-sound'
import { Link } from 'react-router-dom'

class Play1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      audio: null,
    }
    this.getAudio = this.getAudio.bind(this);
  }

  
  
  getAudio() {
    axios.get("http://localhost:5000/api/my-audios?audio_one")
    .then(resAudio =>{
      const theAudio = resAudio.data[0].audio_one
      this.setState({audio: theAudio});

    })
    .catch((err)=>{
      console.log(err)
    })
  }
  
  render() {
    return (
      <div>
        <NavBar />
        <h1 className="text">Escute, depois cante.<br/>Repita a melodia</h1>
        {/* <button onClick={this.innerRef}>ClickMe</button> */}
        <Sound
          url={this.state.audio}
          playStatus={Sound.status.PLAYING}
         // playFromPosition={300 /* in milliseconds */}
         // onLoading={this.handleSongLoading}
         // onPlaying={this.handleSongPlaying}
         // onFinishedPlaying={this.handleSongFinishedPlaying}
          />
        <button onClick={this.getAudio}className="btn-play"><img src={play} alt="play"/></button>
        <div className="next">
        <Link  to={{ 
          pathname:'/q1',
          state: this.props.location.state
        }}><img  src={next} alt="next"/></Link>
        </div>
        <Footer />
      </div>
    )
  }
}


export default Play1;