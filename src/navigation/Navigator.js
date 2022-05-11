import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home';
import Scanner from '../screens/Scanner';
import ScanneResults from '../screens/ScanneResults';
import MapTrack from '../screens/MapTrack';
import InvalidQr from '../screens/InvalidQr';
import Login from '../screens/auth/Login';
import Register from '../screens/auth/Register';



const Stack = createNativeStackNavigator();


const AuthStack = () => {
    return (
        <Stack.Navigator
        initialRouteName='Login'
        screenOptions={{
            headerShown: false,
            detachPreviouseScreen: true,
        }}
        >
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
    );
}


const HomeStack = () => {
    return (
        <Stack.Navigator
        screenOptions={{
            headerShown: false,
            detachPreviouseScreen: true,
        }}
        >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Scanner" component={Scanner} />
            <Stack.Screen name="ScanneResults" component={ScanneResults} />
            <Stack.Screen name="MapTrack" component={MapTrack} />
            <Stack.Screen name="InvalidQr" component={InvalidQr} />
        </Stack.Navigator>
    );
}





const  Navigator = () => {
    return (
            <Stack.Navigator
                initialRouteName='Home'
                screenOptions={{
                    headerShown: false,
                    detachPreviouseScreen: true,
                }}
                >
                <Stack.Screen name="HomeScreen" component={HomeStack} />
                <Stack.Screen name="Auth" component={AuthStack} />
            </Stack.Navigator>
    );
}

export default Navigator;