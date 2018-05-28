import React, {Component} from 'react'
import PropTypes from 'prop-types';
import {View, Text, StyleSheet, ImageBackground, TextInput} from 'react-native'
import { createStackNavigator } from 'react-navigation';
import WelcomeForm from '../components/WelcomeForm'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as ActionCreators from '../actions/actions'

class WelcomeContainer extends Component {

    constructor(props){
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    render() {
        return(
            
            <ImageBackground style = { styles.image } source={require('../assets/marvel_background.jpg')}>
                <View style={styles.container}>
                    <WelcomeForm onSubmit={this.handleSubmit}/>
                </View>
            </ImageBackground>

          )
    }

    static navigationOptions = {
        title: 'Home',
    };

    handleSubmit(teamName) {
        this.props.navigation.navigate('BottomNav');
        this.props.Actions.setTeamName(teamName);
    }

}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'stretch',
        backgroundColor: 'rgba(48,51,58, 0.8)',
    },
    image: {
        flex: 1,
        width: null,
        height: null,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

function mapStateToProps(state, props) {
    return {...state, navigation : props.navigation};
}

function mapDispatchToProps(dispatch) {
    return {
      Actions: bindActionCreators(ActionCreators, dispatch),
    };
  }

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeContainer);