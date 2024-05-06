import { TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function IconButton ({ onPress, icon, iconStyle, buttonStyle, size }) {
    return(
        <TouchableOpacity onPress={onPress} style={buttonStyle}>
            <FontAwesome
                name={icon}
                style={iconStyle}
                size={size}
            />
        </TouchableOpacity>
    );
};

