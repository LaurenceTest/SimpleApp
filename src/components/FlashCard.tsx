import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export type CardInterface = {
    ques: string,
    ans: string
}

const FlashCard: React.FC<CardInterface> = ({ques,ans})=>{
    const [side,setSide] = useState<boolean>(false)
    return(
        <TouchableOpacity onPress={()=>setSide(side=>!side)} style={styles.card}>
            <Text style={styles.cardText}>{side ? ques: ans}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        padding: 30,
        height: 500,
        borderBlockColor: "#000000",
        justifyContent: "center",
        alignContent: "center",
        borderColor: "#8c6a5e",
        borderWidth: 2,
        backgroundColor: "#8c6a5e",
        borderRadius: 20
    },
    cardText:{
        textAlign: "center",
        fontSize: 40,
        color: "#FFFFFF"
    }
})

export default FlashCard