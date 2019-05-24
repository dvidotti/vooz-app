import React, { Component } from 'react'
import NavBar from '../navbar/NavBar'
import Footer from '../footer/Footer'
import play from '../../img/Play Mobile.svg'
import './Play.css'
import axios from 'axios'
import next from '../../img/Next.png'
import Sound from 'react-sound'
import { Link } from 'react-router-dom'
import legend3 from '../../img/Legenda 3 Mobile.svg'


class Play3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      audio: null,
    }
    this.getAudio = this.getAudio.bind(this);
  }
  
  getAudio() {
    axios.get("http://localhost:5000/api/my-audios")
    .then(resAudio =>{
      const theAudio = resAudio.data[0].audio_one;

      this.setState({audio: theAudio});

    })
    .catch((err)=>{
      console.log(err)
    })
  }
  
  render() {
    return (
      <div>
        <div className="full-page-white">
          <NavBar />
          <h1 className="text">Cante esta melodia<br/>também.</h1>
          <Sound
            url={this.state.audio}
            playStatus={Sound.status.PLAYING}
          // playFromPosition={300 /* in milliseconds */}
          // onLoading={this.handleSongLoading}
          // onPlaying={this.handleSongPlaying}
          // onFinishedPlaying={this.handleSongFinishedPlaying}
            />
          <button onClick={this.getAudio}className="btn-play"><img className="play-button" src={play} alt="play"/></button>
          <div className="next">
          <Link  to='/q3'><img className='next-image' src={next} alt="next"/></Link>
          </div>
          <div className='legend-block-white'>
            <img className="legend-white" src={legend3} alt="progress"/>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}


export default Play3;