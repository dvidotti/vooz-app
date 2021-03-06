import React, { Component }from 'react'
import { Redirect } from 'react-router-dom'
import NavBarTransparent from '../navbar/NavBarTransparent'
import FooterTransparent from '../footer/FooterTransparent'
import Sound from 'react-sound'
import axios from 'axios'
import './Low.css'


class Breath extends Component {
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
    axios.get(`${process.env.REACT_APP_API_URL}/my-audios?breath`)
    .then(resAudio =>{
      const theAudio = resAudio.data[0].breath
      this.setState({audio: theAudio});
    })
    .catch((err)=>{
      console.log(err)
    })
  } 
   
  
  render() {
    if (this.state.rendered) {
      return ( <Redirect to='/q4' />)
     } else {
      return (
        <div>
          <div className='artist-page breath'> 
            <Sound 
                url={this.state.audio}
                playStatus={Sound.status.PLAYING}
                autoLoad={true}
                // playFromPosition={300 /* in milliseconds */}
                onLoading={this.teste}
                onPlaying={this.handleSongPlaying}
                onFinishedPlaying={this.handleSongFinishedPlaying}
              />
            }
          </div>
          <FooterTransparent className='artist-footer' />
        </div>
      )
    }
  }
}


export default Breath;