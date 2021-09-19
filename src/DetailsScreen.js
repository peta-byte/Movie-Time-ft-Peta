import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const apiKey = 'apiKey';
const starWarsApiURL = `http://www.omdbapi.com/?t=Star+Wars&y=1977&apikey=${apiKey}`


const DetailsScreen = ({navigation, route}) => {
    const [ movieDetails, setMovieDetails ] = useState(null);
   
    useEffect(() => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', starWarsApiURL);
        xhr.send(); 
        xhr.onload = () => {
            if (xhr.status === 200) {
                let res =  JSON.parse(xhr.response);
                setMovieDetails(res);
            } else {
                console.log(`HTTP Request Failed ${xhr.status}`);
            }
        };
    }, []);  

    return (
        <View style={styles.mainView}>
            <Text>
                {movieDetails ? movieDetails.Title : ""}
            </Text>
            <Text>
                {movieDetails ? movieDetails.Released : ""}
            </Text>
            <Text>
                {movieDetails ? movieDetails.Plot : ""}
            </Text>            
        </View>
    );
};

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default DetailsScreen;