import React, { useState } from "react";
import FlashCard from "./src/components/FlashCard";
import { CardInterface } from "./src/components/FlashCard";
import CardButton from "./src/components/CardButton";
import cardList from './src/config/cards.json'
import { Text } from "react-native";

const Card = ()=>{
    const [getCard,setCard] = useState<CardInterface[]>(cardList)
    const [getCardIndex,setCardIndex] = useState<number>(0)
    const [cardKey, refresh] = useState<number>(0)
    const nextCard = ()=>{
        setCardIndex(curr=>{
            return curr < getCard.length - 1 ? ++curr : curr
        })
    }
    const prevCard = ()=>{
        setCardIndex(curr=>{
            return curr > 0 ? --curr : curr;
        })
    }
    const shuffleCards = () => { 
        setCard((list:CardInterface[])=>{
            for (let i = list.length - 1; i > 0; i--) { 
              const j = Math.floor(Math.random() * (i + 1)); 
              [list[i], list[j]] = [list[j], list[i]]; 
            } 
            return list;
        })
        setCardIndex(0)
        refresh(key=>++key)
    }
    return (
    <>
        <Text>{getCardIndex + 1}/{getCard.length}</Text>
        <FlashCard key={cardKey} ques={getCard[getCardIndex].ques} ans={getCard[getCardIndex].ans}/>
        <CardButton 
            name="Next Page" 
            image={require("./src/assets/arrow_circle_right_24dp.png")} 
            onPress={()=>nextCard()}
        />
        <CardButton 
            name="Shuffle" 
            image={require("./src/assets/shuffle_24dp.png")} 
            onPress={()=>shuffleCards()}
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