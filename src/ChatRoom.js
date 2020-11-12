import React, {useState, useEffect} from 'react'
import Feed from './Feed'
import db, {auth} from './firebase';
// import firebase from 'firebase';
import SendPost from './SendPost';

function ChatRoom() {

    const [messsages, setMesssages] = useState([])
    const [user, setUser] = useState(null)

    useEffect(() => {

        db.collection('chatroom')
        .orderBy('timestamp', 'desc')
        .onSnapshot((snapshot) => 
            setMesssages(snapshot.docs.map(doc => doc.data()))
            );
            },[]);


        useEffect(()=>{
            const unsubscribe = auth.onAuthStateChanged((authUser)=>{
                if(authUser){
                // user has logged in...
                setUser(authUser);
                } else {
                // user has logged out...
                setUser(null);
                }
            })
        
            return ()=>{
                // perfor a clean up
                unsubscribe();
            }
            },[user])

    return (
        <div>
            {JSON.stringify(user)}
           <div className="ChatRoom__input">
                <SendPost username={user?.email} />
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
