import React, {useState, useEffect} from 'react'
import Feed from './Feed'

function ChatRoom() {

    const [messsages, setMesssages] = useState([])
    const [inputText, setInputText] = useState()


    const sendMessage = e => {
        e.preventDefault();

        setMesssages([...messsages, {feed: inputText, timestamp:Date.now(), username:"jing"}])

        // db.collection('channels')
        // .doc(channelId)
        // .collection('message')
        // .add({
        //     timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        //     message: input,
        //     user: user
        // })

        setInputText('');
    }

    return (
        <div>
           <div className="ChatRoom__input">
                <form>
                <input
                    className='ChatRoom__input_feed'
                    placeholder='Type message here'
                    value={inputText} 
                    onChange = {(e)=> setInputText(e.target.value)}
                    ></input>
                    <button 
                    type='submit' 
                    className='ChatRoom__input_feed_Button'
                    onClick = {sendMessage}
                    >Send Message</button>
                </form>
            </div>
            <div className="ChatRoom__messages">
                {
                    messsages.map((msg, index)=>(
                        <Feed feed={msg.feed} timestamp={msg.timestamp} username={msg.username} />
                    ))
                }
            </div>
            
        </div>
    )
}

export default ChatRoom
