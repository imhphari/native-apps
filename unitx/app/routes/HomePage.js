import React, {Component} from 'react';
import {
	AsyncStorage,
	Alert,
	Image,
	Text,
	TouchableOpacity,
	View
} from 'react-native';
import {Actions} from 'react-native-router-flux';

import styles from './styles';

class HomePage extends Component {


		async userLogout() {
			try {
				await AsyncStorage.removeItem('id_token');
				Alert.alert("Logout Success!");
				Actions.Authentication();
			} catch (error) {
				console.log('AsyncStorage error: ' + error.message);
			}
		}

		render() {
			return (
				<View style={styles.container}>
					<Image
						source={require('../images/unitx.png')}
						style={styles.image}
						/>
					
					<TouchableOpacity
						style={styles.buttonWrapper}
						onPress={this.userLogout}
						>
						<Text style={styles.buttonText} >
							Log out
						</Text>
					</TouchableOpacity>
				</View>
			);
		}
	}

	export default HomePage;