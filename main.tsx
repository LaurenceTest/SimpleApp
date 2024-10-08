import React, { useState } from "react";
import FlashCard from "./src/components/FlashCard";
import { CardInterface } from "./src/components/FlashCard";
import CardButton from "./src/components/CardButton";
import cardList from './src/config/cards.json'
import { StyleSheet, Text, View } from "react-native";

type AutoPlayInterface = {
    id: number,
    status: boolean
}

enum InputType {
    System,
    User
}

const Card = ()=>{
    const [getCard,setCard] = useState<CardInterface[]>(cardList)
    const [getCardIndex,setCardIndex] = useState<number>(0)
    const [cardKey, refresh] = useState<number>(0)
    const [autoplay,setAutop] = useState<AutoPlayInterface>({id:0,status:false})
    const nextCard = (inputType:InputType = InputType.User)=>{
        try {
            if(inputType === InputType.User || getCardIndex == getCard.length -1)
                stopAutoPlay()
            setCardIndex(curr=>{
                return curr < getCard.length - 1 ? ++curr : curr
            })
        } catch (error) {
            console.error(error);
        }
    }
    const prevCard = ()=>{
        try {
            stopAutoPlay()
            setCardIndex(curr=>{
                return curr > 0 ? --curr : curr;
            })
        } catch (error) {
            console.error(error);
        }
    }
    const shuffleCards = () => { 
        try {
            setCard((list:CardInterface[])=>{
                for (let i = list.length - 1; i > 0; i--) { 
                  const j = Math.floor(Math.random() * (i + 1)); 
                  [list[i], list[j]] = [list[j], list[i]]; 
                } 
                return list;
            })
            setCardIndex(0)
            refresh(key=>++key)
        } catch (error) {
            console.error(error);
        }
    }
    const stopAutoPlay = ()=>{
        try {
            if(autoplay.status === true){
                setAutop(auto=>{
                    auto.status = false
                    return auto
                })
                clearInterval(autoplay.id)
            }
        } catch (error) {
            console.error(error);
        }
    }
    const startAutoPlay = ()=>{
        try {
            if(autoplay.status === false){
                setAutop(auto=>{
                    //setInterval returns Timeout instead of number.... WHY
                    auto.id = (setInterval(()=>nextCard(InputType.System),5000) as unknown) as number
                    auto.status = true
                    return auto
                })
            }            
        } catch (error) {
            console.error(error);
        }
    }
    const toggleAutoPlay = ()=>{
        autoplay.status ? stopAutoPlay() : startAutoPlay()
    }
    return (
    <View style={styles.body}>
        <View style={styles.cardCountBG}>
            <Text style={styles.cardCount}>{getCardIndex + 1}/{getCard.length}</Text>
        </View>
        <FlashCard key={cardKey} ques={getCard[getCardIndex].ques} ans={getCard[getCardIndex].ans}/>
        <View style={styles.buttonRow}>
            <CardButton 
                name="Previous Page" 
                image={require("./src/assets/arrow_circle_left_24dp.png")} 
                onPress={()=>prevCard()}
            />
            <CardButton 
                name="Shuffle" 
                image={require("./src/assets/shuffle_24dp.png")} 
                onPress={()=>shuffleCards()}
            />
            <CardButton 
                name="Autoplay"
                image={require("./src/assets/autoplay_24dp.png")} 
                onPress={()=>toggleAutoPlay()}
            />
            <CardButton 
                name="Next Page" 
                image={require("./src/assets/arrow_circle_right_24dp.png")} 
                onPress={()=>nextCard()}
            />
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    cardCount:{
        textAlign: "center",
        fontSize: 30,
        color: "#FFFFFF",
    },
    cardCountBG:{
        marginTop: 10,
        paddingVertical: 20,
        alignContent: "center",
        justifyContent: "center",
        backgroundColor: "#5e374a"
    },
    buttonRow:{
        flexDirection: "row",
        alignContent: "center",
        justifyContent: "center",
        backgroundColor: "#5e374a",
        paddingVertical: 40,
        marginBottom: 10
    },
    body:{
        flexDirection:"column",
        flex: 1,
        justifyContent: "space-between",
        alignContent: "center",
        backgroundColor: "#2d0043"
    }
})

export default Card