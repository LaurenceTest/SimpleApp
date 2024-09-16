import React, { PropsWithChildren } from "react";
import { StyleSheet, Text, View } from "react-native";

export type CardInterface = {
    ques: string,
    ans: string
}

const FlashCard: React.FC<CardInterface> = ({ques,ans})=>{
    return(
        <View style={styles.card}>
            <Text>{ques} = {ans}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        padding: 20
    }
})

export default FlashCard