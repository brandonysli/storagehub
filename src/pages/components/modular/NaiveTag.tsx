// Declare NaiveButtonPropTypes
// construct NaiveTag function
// naive tag should give dev multiple options on what the tag color should be etc. 
import React from "react";
import {HexColor} from "../../modules/HexColor";

type TagPropsType = {
    textColor: HexColor;
    backgroundColor: HexColor;
    tagname: string;
    tagSize: "sm" |"md" | "lg";
    children?: React.ReactNode;
  };


export default function NaiveTag(tagProps: TagPropsType) {

    const textSize = tagProps.tagSize

    return (
        <>
            <div className={`${textSize === 'sm' ? 'px-2' :textSize === 'md' ? 'px-3' :textSize === 'lg' ? 'px-5' :'px-5'} py-1 rounded-md`} style={{'backgroundColor': tagProps.backgroundColor.color}} >
                <span className={`${textSize === 'sm' ? 'text-sm' : textSize === 'md' ? 'text-base' : 'text-lg'} font-bold`} style={{'color': tagProps.textColor.color}}> {tagProps.tagname}</span>
                {tagProps.children}
            </div>
        </>
    )
}
