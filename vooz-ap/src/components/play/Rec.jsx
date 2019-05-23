import React { Component } from 'react'


class Rec extends Component {
  constructor() {
    super ();
    this.state = {
      record: '',
    }
  }

  render() {
    return (
        <div>
          <div className="full-page-white">
            <NavBar />
            <h1 className="text">Grave sua voz!</h1>z
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
            <div className='legend-block3'>
              <img className="legend3" src={legend3} alt="progress"/>
            </div>
          </div>
          <Footer />
        </div>
    )

  }
}

export default Rec;
