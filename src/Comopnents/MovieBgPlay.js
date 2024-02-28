import React, { useEffect, useRef } from 'react'

const MovieBgPlay = () => {

  const videoRef = useRef(null);

  useEffect(() => {
    const unsubscrib = setInterval(() => {
      videoRef.current.src += "&autoplay=1"
    }, 140000);

    return () => clearInterval(unsubscrib)
  }, []);



  return (
    <div className='MovieBgPlay'>
      <iframe
        width="100%"
        height="100%"
        ref={videoRef}
        src={"https://www.youtube.com/embed/wS_qbDztgVY?rel=0&autoplay=1&mute=1&controls=0"}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
      </iframe>
    </div>
  )
}
export default MovieBgPlay


