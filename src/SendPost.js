import React, {useState} from 'react';
import db from './firebase';

//import firebase from 'firebase';


function SendPost({username}) {

    const [inputText, setInputText] = useState('')

    const sendMessage = (e) => {
        e.preventDefault();

        // setMesssages([...messsages, {feed: inputText, timestamp:Date.now(), username:"jing"}])
        // alert(JSON.stringify(firebase.firestore.FieldValue.serverTimestamp()))

        db
        .collection('chatroom')
        .add({
            timestamp: Date.now(),
            feed: inputText,
            username: username
        });

        setInputText('');
    }


    return (
        <div>
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
    )
}

export default SendPost
