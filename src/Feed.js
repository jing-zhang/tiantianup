import React from 'react'

function Feed({feed, timestamp, username}) {
    return (
        <div>
            <div className='Message__info'>
                <h4>{username}
                <span className='Message_timestamp'>
                {/* { new Date(timestamp?.todate()).toUTCString()} */}
                {timestamp}
                </span>
                </h4>
                <p>{feed}</p>
            </div>
        </div>
    )
}

export default Feed
