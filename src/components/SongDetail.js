import React from 'react';

const SongDetail = (props) => {

  if(!props.song) return null;

  return (
    <div className="song-detail">
    <div className="position">
    <p>{props.position}</p>
    </div>
    <div className="title">
    <h2>{props.song["im:name"].label}</h2>
    </div>
    <div className="artist">
    <h3>{props.song["im:artist"].label}</h3>
    </div>
    <div className="image">
    <img src={props.song["im:image"][2].label}></img>
    </div>
    <div className="preview-link">
      <a href={props.song.link[1].attributes.href}>Preview</a>
    </div>
    </div>
  )
}

export default SongDetail;
