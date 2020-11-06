import React,{useState} from 'react'
import './EnglishCard.css'
import TinderCard from 'react-tinder-card'
import {VERBS} from './PastVerbs'
import {v4 as UUID} from 'uuid'

function EnglishCard() {
    
    let ind = Math.floor(Math.random()*VERBS.length)

    const[cards, setCards] = useState([{key: UUID.v4, 
        verb:VERBS[ind].verb, 
        past:VERBS[ind].past,
        pastp:VERBS[ind].pastp,
        hide: Math.ceil(Math.random()*3)
      }])
     
    const onSwipe = (direction) =>{
        let indTemp = Math.floor(Math.random()*VERBS.length)

        setCards([...cards,{key: UUID.v4, verb:VERBS[indTemp].verb,
                                        past:VERBS[indTemp].past,
                                        pastp:VERBS[indTemp].pastp,
                                        hide:Math.ceil(Math.random()*3)}])

    };

    return (
        <div className="EnglshCard">
            {
                cards.map((card, index)=>(
                    <TinderCard
                        onSwipe={onSwipe}
                        key = {index}
                        className ='eswipe'
                        preventSwipe={['up', 'down']}>
                        <div className='ecard' >
                            <center>
                                <h1>{card.verb }<br/> {card.past} <br/> {card.pastp}</h1> 
                            </center>
                        </div>
                    </TinderCard>
                ))
            } 
        </div>
    )
}

export default EnglishCard
