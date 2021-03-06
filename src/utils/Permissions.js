import Permission from 'react-native-permissions';
import { Platform } from 'react-native';

export const locationPermission = (onSuccess, onFailuer) => {

    const {
        PERMISSIONS: {
            IOS,
            ANDROID
        }
    } = Permission

    const PERMISSIONNAME = Platform.OS == 'ios' ? IOS.LOCATION_WHEN_IN_USE : ANDROID.ACCESS_FINE_LOCATION

    Permission.request(PERMISSIONNAME).then((result) => {
        if (result == 'granted') {
            onSuccess && onSuccess()
        } else {
            onFailuer && onFailuer(result)
        }
    }).catch((err) => {
        onFailuer && onFailuer(err)
    })
}