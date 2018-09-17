import { createStackNavigator } from 'react-navigation';

import Home from '../screens/Home';
import Detail from '../screens/Detail';


const StackNavigator = createStackNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: {
                header: null
            }
        },
        Detail: {
            screen: Detail,
            navigationOptions: 
            {
                header: null
            }
        }
    }
);

export default StackNavigator;