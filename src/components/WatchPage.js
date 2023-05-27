import React from 'react'
import { useSearchParams } from 'react-router-dom'
import LiveChat from './LiveChat';
import CommentContainer from './Comment';

function WatchPage() {
  const [searchParams] = useSearchParams();
  return (
    <div className="px-5 flex w-full flex-col">
      <div className='flex'>
          <iframe
            width="800"
            height="400"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            // allowFullScreen
          ></iframe>
          <LiveChat/ >
          </div>
          <CommentContainer />
   </div>
  )
}

export default WatchPage