import React, {Fragment} from 'react';
import SongDetail from './SongDetail';

function SongList(props){

const songs = props.data.map((song, index) => {
  return (
    <SongDetail song={song} key={index} position ={index+1}></SongDetail>
  );

})

return (

  <Fragment>
   {songs}
  </Fragment>
)
}

export default SongList;
