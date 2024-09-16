import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export type CardInterface = {
    ques: string,
    ans: string
}

const FlashCard: React.FC<CardInterface> = ({ques,ans})=>{
    const [side,setSide] = useState<boolean>(false)
    return(
        <TouchableOpacity onPress={()=>setSide(side=>!side)}>
            <Text>{side ? ques: ans}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        padding: 20
    }
})

export default FlashCard