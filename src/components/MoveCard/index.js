import React from "react";
import {
    Text,
    View,
    Image,
    TouchableOpacity,
} from "react-native";
import { styles } from "./styles";
import { h, w } from "../../mutils";


type Props = {
    title: String,
    date: String,
    image: String,
    percentage: String,
    geners: Array,
    onPress: Function,
}

const MoveCard = (props: Props) => {
    const { image, title, geners = [], onPress = () => { }, percentage = 0, date } = props;
    return (
        <TouchableOpacity style={styles.rowContainer} onPress={onPress}>
            <Image style={styles.image} source={image} />
            <View style={{ marginHorizontal: w(10), marginTop: h(5) }}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.date}>{date}</Text>
                {geners && <View style={styles.hashtages}>
                    {geners.map(item => { return <Text style={styles.hashtagesText}>{item}</Text> })}
                </View>}
            </View>
            <Text style={styles.percentage}>{percentage}%</Text>
        </TouchableOpacity>
    );
};

export { MoveCard };
