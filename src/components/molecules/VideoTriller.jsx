import React from 'react'
import withLoader from '../HOC/withLoader'

const VideoTriller = ({video}) => {
    
    const key = video.results.length === 0 ?'' : video.results[0].key
    return (
        <div className="box-video">
            <h2>Ver trailer</h2>
            <div className="video-responsive">
                <iframe 
                    src={`https://www.youtube.com/embed/${key}`} 
                    frameBorder="0"
                    allowFullScreen="allowfullscreen">
                </iframe>
            </div>
        </div>
    )
}

export default withLoader('video')(VideoTriller)
