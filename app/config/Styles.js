import { Platform } from 'react-native';
import Colour from './Colour';

export default {
    text: {
        fontSize: 18,
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Chalkboard SE',
        color: Colour.dark
    }
}