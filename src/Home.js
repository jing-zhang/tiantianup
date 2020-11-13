import React from 'react'
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className='header'>
            <div className='choice'>
                <Link to='/math'>
                    Math Table
                </Link>
            </div>
            <div className='choice'>
                <Link to='/English'>
                    English
                </Link>
            </div>
            <div className='choice'>
                <Link to='/login'>
                    login
                </Link>
            </div>
            <div className='choice'>
                <Link to='/uploader'>
                    File Uploader
                </Link>
            </div>
            <div className='choice'>
                <Link to='/'>
                    Chatroom
                </Link>
            </div>
        </div>
    )
}

export default Home
