import React from "react";
import {Image, ImageProps, StyleSheet, TouchableOpacity } from "react-native";

export type CardButtonInterface = {
    name: string,
    image?: ImageProps,
    onPress(): void
}

const CardButton: React.FC<CardButtonInterface> = (props)=>{
    return(
        <>
            <TouchableOpacity onPress={()=>props.onPress()}>
                <Image source={props.image} style={styles.cardButton}/>
            </TouchableOpacity>
        </>
    )
}

const styles = StyleSheet.create({
    cardButton:{
        tintColor: "#eee1b3"
    }
})

export default CardButton