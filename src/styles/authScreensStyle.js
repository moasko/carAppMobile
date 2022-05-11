import { StyleSheet } from "react-native-web";


//auth screens styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
        paddingTop: 40,
        paddingBottom: 40,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    logo: {
        width: 100,
        height: 100,
        borderRadius: 50,
    }
}
);


export default styles;