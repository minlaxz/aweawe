import React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import { useTheme } from '@react-navigation/native';

export default function Button(props) {
    const { onPress, title = 'Custom Button', disabled, customButtonStyles, customTextStyles } = props;
    return (
        <Pressable
            style={{ ...styles.button, ...customButtonStyles }}
            onPress={onPress}
            disabled={disabled}
        >
            <Text
                style={{ ...styles.text, ...customTextStyles }}
            >
                {title}
            </Text>
        </Pressable>
    );
}

export function MyButton() {
    const { colors } = useTheme();

    return (
        <TouchableOpacity style={{ backgroundColor: colors.card }}>
            <Text style={{ color: colors.text }}>Button!</Text>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        paddingHorizontal: 28,
        borderRadius: 3,
        elevation: 3,
        backgroundColor: 'black',
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
});