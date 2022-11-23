import React, {useState} from 'react';
 import { Button, View, StyleSheet } from 'react-native';
 import { Formik } from 'formik';
 import { TextInput } from "react-native-paper";
 
 const [modalVisible, setModalVisible] = useState(false);

 export const MyReactNativeForm = props => (

   <Formik
     initialValues={{ email: '' }}
     onSubmit={values => console.log(values)}
   >
     {({ values }) => (
       <View>
                     <View>
              <TextInput
                multiline
                theme={{ roundness: 8 }}
                mode="outlined"
                label="Description"
                style={styles.description}
                // value={description}
                // onChangeText={setDescription}
              />
            </View>

       </View>
     )}
   </Formik>
 );

 const styles = StyleSheet.create({
    container: {
    //   margin: 20,
    },
    description: {
    //   marginTop: 15,
    width: "100%",
    },

})
export default MyReactNativeForm;

