import { View, Text, Button } from 'react-native'
import React from 'react'

const OnboardingTwoScreen = ({navigation} : any) => {
  return (
    <View>
      <Text>OnboardingTwoScreen</Text>
      <Button title='Continue' onPress={()=>navigation.navigate("OnboardingThree")}/>
    </View>
  )
}

export default OnboardingTwoScreen