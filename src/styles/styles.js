import  {StyleSheet} from 'react-native';

const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 30,
        alignItems: 'center',
        backgroundColor: '#673AB7',
    },

    title: {
        margin: 10,
        fontSize: 18,
        fontFamily: "Open Sans Bold",
        color: "#FFF"
    },

    description: {
        marginTop: 20,
        fontSize: 32,
        fontFamily: "Open Sans Bold",
        color: "#FFF"
    },

    button: {
        backgroundColor: "#9474CC",
        padding: 10,
        borderRadius: 10,
        marginBottom: 20,
    },

    textButton: {
        fontSize: 18,
        fontFamily: "Open Sans Light",
        color: "#FFF"
    },

    containerInfos: {
        marginTop: 10,
        paddingVertical: 20,
        paddingHorizontal: 40,
        alignItems: 'center', 
        borderWidth: 1, 
        borderRadius: 10, 
        borderColor: '#FFF', 
        backgroundColor: '#673AB7' 
    },

    company: {
        textAlign: 'center',
        fontSize: 28,
        fontFamily: "Open Sans Bold",
        color: "#FFF"
    },

    info: {
        marginTop: 25,
        marginBottom: 10,
        fontSize: 22,
        fontFamily: "Open Sans Light",
        color: "#FFF",
        borderBottomWidth: 1,
        borderColor: '#f5f5f5',
    },

    latestPrice: {
        fontSize: 32,
        fontFamily: "Open Sans Bold",
        color: "#FFF"
    },

    textInput: {
        margin: 20,
        fontFamily: "Open Sans",
        textAlign: 'center',
        color: "#FFF",
        width: "60%",
        height: 40,
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 10
    }
    
});

export default styles;
