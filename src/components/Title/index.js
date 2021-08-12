import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

export default function Title({
    mainText,
    subText,
    flipped,
    style,
}) {
    const main = React.useMemo(() => <Text style={styles.main}>{mainText}</Text>, [mainText]);
    const sub = React.useMemo(() => <Text style={styles.sub}>{subText}</Text>, [subText]);

    return (
        <View style={style}>
            {!flipped && main}
            {sub}
            {flipped && main}
        </View>
    );
}