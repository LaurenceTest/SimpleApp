import React from "react";
import {Image, ImageProps, TouchableOpacity } from "react-native";

export type CardButtonInterface = {
    name: string,
    image?: ImageProps,
    onPress(): void
}

const CardButton: React.FC<CardButtonInterface> = (props)=>{
    return(
        <>
            <TouchableOpacity onPress={()=>props.onPress()}>
                <Image source={props.image}/>
            </TouchableOpacity>
        </>
    )
}

export default CardButton