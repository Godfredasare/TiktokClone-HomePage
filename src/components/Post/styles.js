import { StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: Dimensions.get('window').height-43,
    },

    videoContainer:{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 100
    },

    video: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },

    uiContainer: {
         height: '95%',
         justifyContent: 'flex-end',
    },

    // right 

    rightContainer: {
        alignSelf: 'flex-end',
        height: 340,
        justifyContent: 'space-between',
        marginRight: 7
    },

    profile:{
      width: 50,
      height: 50,
      borderRadius: 25,
      borderWidth: 2,
      borderColor: '#fff'
    },

    icons:{
        alignItems: 'center'

    },

    stat: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '300'

    },

   

    //bottom

    bottom:{
        padding: 10

    },

    handle:{
      color: '#fff',
      fontSize: 16,
      fontWeight: '600',
      marginBottom: 10
    },

    description:{
        color: '#fff',
        fontSize: 16,
        fontWeight: '300',
        marginBottom: 10

    },

    song:{
        flexDirection: 'row',
        alignItems: 'center',
        width: 340,
        justifyContent: 'space-between'


    },

    icontitle:{
        flexDirection: 'row',
        alignItems: 'center',

    },

    songName:{
        color: '#fff',
        fontSize: 16,
        marginLeft: 5
    },
    

    songImage:{
        width: 40,
        height: 40,
        borderRadius: 25,
        borderWidth: 10,
        borderColor: 'black'
    }

      })

export default styles