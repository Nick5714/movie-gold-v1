import {useParams} from 'react-router-dom';
import ReactPlayer from 'react-player';
import './Trailer.css';

import React from 'react'

const Trailer = () => {
    let params = useParams();
    let key = params.ytTrailerId;

    return (
        <div className="react-player-container">
            {(key!=null) ? 
                <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${key}`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
                : <div className="no-trailer">No trailer available</div>
            }
        </div>
    )
}

export default Trailer