import AsyncStorage from '@react-native-async-storage/async-storage'

export namespace AsyncStorageWrapper {
    export const getApiHost = async () => {
        try {
            const value = await AsyncStorage.getItem('@Api_Host')
            if (value !== null) {
                return value
            }
        } catch (e) {
            console.error(e)
        }
    }

    export const setApiHost = async (value: string) => {
        try {
            await AsyncStorage.setItem('@Api_Host', value)
        } catch (e) {
            console.error(e)
        }
        console.log('setApiHost', value)
    }
}