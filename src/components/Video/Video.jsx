import './Video.scss';
import { Player } from 'video-react';

export default ({ curLang, videoLins }) => {
  return (
    <Player
      playsInline
      poster='/assets/poster.png'
      src={videoLins[curLang]}
      // src='https://media.w3.org/2010/05/sintel/trailer_hd.mp4'
    />
  );
};
