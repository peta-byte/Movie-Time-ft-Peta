import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const HomeScreen = ({navigation}) => {
    return (
        <View style={styles.mainView}>
            <Text>Home Screen</Text>
            <TouchableOpacity
            style={styles.touchableView}
            onPress={() => {navigation.navigate("Home_to_Details", { movie: { screenNumber: 1, title: "Star Wars", release: 1977 }});}}
            >
                <View>
                    <Text style={styles.touchableText}>Star Wars</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.touchableView}
            onPress={() => {navigation.navigate("Home_to_Details", { movie: { screenNumber: 1, title: "Black Panther", release: 2018 }});}}
            >
                <View>
                    <Text style={styles.touchableText}>Black Panther</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.touchableView}
            onPress={() => {navigation.navigate("Home_to_Details", { movie: { screenNumber: 1, title: "Matrix", release: 1999 }});}}
            >
                <View>
                    <Text style={styles.touchableText}>The Matrix</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

// class
/**
export class HomeScreen extends React.Component {
    render() {
        return (
            <View style={styles.mainView}>
                <Text>Home Screen</Text>
                <Button title="Go to Details" onPress={() => {console.log("Go to Details");}} />
            </View>
        );
    };
}
**/

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    touchableView: {
        marginBottom: 30,
        width: 150,
        height: 50,
        alignItems: 'center',
        backgroundColor: 'orange',
        borderWidth: 5,
        borderRadius: 10
    },
    touchableText: {
        textAlign: 'center',
        paddingTop: 5,
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    }
});

export default HomeScreen;
