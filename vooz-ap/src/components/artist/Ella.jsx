import React, { Component }from 'react'
import { Link } from 'react-router-dom'
import NavBarTransparent from '../navbar/NavBarTransparent'
import legend10white from '../../img/Legenda 10 Mobile.svg'
import FooterTransparent from '../footer/FooterTransparent'
import Sound from 'react-sound'
import axios from 'axios'
import './Ella.css'


class Ella extends Component {
  constructor(){
    super();
    this.state = {
      audio: null
    }
    this.getAudio = this.getAudio.bind(this);
  }

  componentDidMount() {
    console.log(this.state)
    this.getAudio();
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
    console.log('RENDER', this.state)
    return (
      <div className='artist-page ella'>
        <Sound 
            url={this.state.audio}
            playStatus={Sound.status.PLAYING}
          // playFromPosition={300 /* in milliseconds */}
          // onLoading={this.handleSongLoading}
          // onPlaying={this.handleSongPlaying}
          // onFinishedPlaying={this.handleSongFinishedPlaying}
          />
        <NavBarTransparent  className='artist-navbar'/>
        <button className='central-artist'>Ella Fitzgerald</button>
        <div className='legend-block1'>
          <img className="legend1" src={legend10white} alt="progress"/>
        </div>
        <FooterTransparent className='artist-footer' />
      </div>
    )
  }
}



export default Ella;