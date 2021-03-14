import './Video.scss';
import { Player } from 'video-react';

const Video = ({ curLang, videoLins }) => {
  return (
    <Player playsInline poster='/assets/poster.png' src={videoLins[curLang]} />
  );
};

export default Video;
