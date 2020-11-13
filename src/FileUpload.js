import React, {useState} from 'react'
import {storage} from './firebase'

function FileUpload() {

    const [caption, setCaption] = useState('');
    const [image, setImage] = useState(null);
    const [url, setUrl] = useState('');

    const handleChange = (e) => {
        if(e.target.files[0]) {
            setImage(e.target.files[0])
            setCaption(e.target.files[0].name)
        }
    };

    const handleUpload =(e) =>{

        const uploadTask =  storage.ref(`images/${image.name}`).put(image);

        uploadTask.on(
            'state_changed',
            (snapshot) => {
                //progress function....
                //const progres = Math.round((snapshot.bytesTransferred / snapshot.totalBytes)*100)
                //setProgress(progress);
            },
            (error) => {
                console.log(error)
            },
            ()=>{
                //complete function ....
                storage
                    .ref("images")
                    .child(image.name)
                    .getDownloadURL()
                    .then(url=>{
                        //put imae inside db
                    
                        setUrl(url);
                    })
            }
        )


    }

    return (
        <div>
            File:{caption}
            Url:{url}
            <input type='text' placeholder='Enter a caption...' value={caption} onChange = { event => setCaption(event.target.value)} />
            <input type='file' onChange = {handleChange}  />
            <input type='button'  value="uploder" onClick={handleUpload}  />
        </div>
    )
}

export default FileUpload
