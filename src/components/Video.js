import React from "react";
import PropTypes from "prop-types";
import styles from './Video.module.scss';

const Video = ({ embedId }) => {
  const videoUrl = `https://www.youtube.com/embed/${embedId}`;
  
  return (
    <div className={styles['video-responsive']}>
      <iframe
        width="853"
        height="480"
        src={videoUrl}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );
};

Video.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default Video; 