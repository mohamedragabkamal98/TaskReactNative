
import * as React from 'react'

import Logo from "./Logo"

export type Props = {
    source: "Logo" 
    ,
    width?: Number,
    height?: Number,
    color?: String,
    rotateDegree?: Number,
    opacity?: Number,
    style?: Object,
    selected: Boolean
}

function SVG(props: Props) {
    switch (props.source) {
        case 'Logo':
            return <Logo params={props} />;
       
        default:
            return null;
    }
}

export default SVG;
