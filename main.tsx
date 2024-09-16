import React, { useState } from "react";
import FlashCard from "./src/components/FlashCard";
import { CardInterface } from "./src/components/FlashCard";
import CardButton from "./src/components/CardButton";
import cardList from './src/config/cards.json'

const Card = ()=>{
    const [getCard,setCard] = useState<CardInterface[]>(cardList)
    const [getCardIndex,setCardIndex] = useState<number>(0)
    const nextCard = ()=>{
        console.log(getCard.length, getCardIndex)
        setCardIndex(curr=>{
            return curr < getCard.length - 1 ? ++curr : curr
        })
    }
    const prevCard = ()=>{
        console.log(getCard.length, getCardIndex)
        setCardIndex(curr=>{
            return curr > 0 ? --curr : curr;
        })
    }
    return (
    <>
        <FlashCard ques={getCard[getCardIndex].ques} ans={getCard[getCardIndex].ans}/>
        <CardButton 
            name="Next Page" 
            image={require("./src/assets/arrow_circle_right_24dp.png")} 
            onPress={()=>nextCard()}
        />
        <CardButton 
            name="Previous Page" 
            image={require("./src/assets/arrow_circle_left_24dp.png")} 
            onPress={()=>prevCard()}
        />
    </>
    )
}

export default Card