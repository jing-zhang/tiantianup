import React, {useState, useEffect} from 'react'
import Feed from './Feed'
import db from './firebase';
import firebase from 'firebase';
import SendPost from './SendPost';

function ChatRoom() {

    const [messsages, setMesssages] = useState([])

    useEffect(() => {

        db.collection('chatroom')
        .orderBy('timestamp', 'desc')
        .onSnapshot((snapshot) => 
            setMesssages(snapshot.docs.map(doc => doc.data()))
            );
            },[]);

    return (
        <div>
           <div className="ChatRoom__input">
                <SendPost username="jing" />
            </div>
            <div className="ChatRoom__messages">
                {
                    // JSON.stringify(messsages)
                    messsages.map((msg, index)=>(
                        <Feed  feed={msg.feed} timestamp={msg.timestamp} username={msg.username} />
                    ))
                }
            </div>
            
        </div>
    )
}

export default ChatRoom
