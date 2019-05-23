import React, { Component }from 'react'
import { Redirect } from 'react-router-dom'
import NavBarTransparent from '../navbar/NavBarTransparent'
import legend10white from '../../img/Legenda 10 Mobile.svg'
import FooterTransparent from '../footer/FooterTransparent'
import Sound from 'react-sound'
import axios from 'axios'
import './Low.css'


class StrongVoice extends Component {
  constructor(){
    super();
    this.state = {
      audio: null,
      rendered: false
    }
    this.getAudio = this.getAudio.bind(this);
  }

  componentDidMount() {
    window.setTimeout(()=> {this.setState({rendered:true})}, 3000)
    this.getAudio();
  }
  
  getAudio() {
    axios.get("http://localhost:5000/api/my-audios?ella")
    .then(resAudio =>{
      const theAudio = resAudio.data[0].ella
      this.setState({audio: theAudio});
    })
    .catch((err)=>{
      console.log(err)
    })
  } 
   
  
  render() {
    if (this.state.rendered) {
      return ( <Redirect to='/qair' />)
     } else {
      return (
        <div className='artist-page strong-voice'>
          {this.state.audio && 
          <Sound 
              url={this.state.audio}
              playStatus={Sound.status.STOPPED}
              autoLoad={true}
              // playFromPosition={300 /* in milliseconds */}
              onLoading={this.teste}
              onPlaying={this.handleSongPlaying}
              onFinishedPlaying={this.handleSongFinishedPlaying}
            />
          }
          <NavBarTransparent  className='artist-navbar'/>
          <FooterTransparent className='artist-footer' />
        </div>
      )
    }
  }
}


export default StrongVoice;