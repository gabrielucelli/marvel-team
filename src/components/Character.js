import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import PropTypes from 'prop-types';

class Character extends Component {
    
    render() {

        let {characterThumbnail, name} = this.props;

        return(
            <View style={styles.container}>
                <Image source={{uri: characterThumbnail}} style={styles.character}/>
                <Text style={styles.Text}>{name}</Text>
            </View>
        )

    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#F0F3BD',
        marginBottom: 10
    },
    character: {
        width: 400,
        height: 300
    },
    Text: {
        alignSelf: 'center',
        fontSize: 25,
        color: 'black',
        marginTop: 10,
        marginBottom: 10
    }
})

Character.propTypes = {
    characterThumbnail: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}

export default Character