import { StyleSheet } from "react-native";

export const registerStyles = StyleSheet.create({
    parent: {
        //backgroundColor: 'pink',
        backgroundColor: '#F3F5F6',
        width: '100%',
        height: '100%',
        paddingHorizontal: '6%',
        paddingTop: '1%',
        paddingBottom: '6%',
    },
    registerLogo: {
        width: '100%',
        height: 290,
    },


    form: {
        //backgroundColor: 'cyan',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 15,
    },
    loginWord: {
        fontSize: 25,
        fontWeight: 'bold',
    },
    username: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingLeft: '2%',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        borderRadius: 30,
        borderBottomWidth: 0,
        height: 50,
        marginTop: 10,
    },
    userIcon: {
        backgroundColor: '#FDE8EA', 
        marginLeft: '30%',
    },
    email: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingLeft: '2%',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        borderRadius: 30,
        borderBottomWidth: 0,
        height: 50,
    },
    eamilIcon: {
        backgroundColor: '#DEF4E8', 
        marginLeft: '30%',
    },
    password: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingLeft: '2%',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        borderRadius: 30,
        borderBottomWidth: 0,
        height: 50,
    },
    passwordIcon: {
        backgroundColor: '#E6ECFC', 
        marginLeft: '30%',
    },
    submitTouch:{
        backgroundColor: '#191A30',
        width: '100%',
        height: 50,
        borderRadius: 30,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
    },
    submitLogin: {
        color: 'white',
        fontSize: 17,
    },

    bottomIcons: {
        marginTop: 50,
        width: '100%',
        height: 'auto',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    fbTouch: {
        width: '15%',
        height: 50,
        alignItems: 'center',
        display:'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: 30,
    },
    fb: {
        color: '#216CD3',
        fontSize: 30,
    },
    google: {
        width: '75%',
        height: '75%',
    },
    apple: {
        color: '#15131E',
        fontSize: 30,
    },
})