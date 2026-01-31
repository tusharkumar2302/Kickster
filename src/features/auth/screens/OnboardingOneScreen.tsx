import { View, Text, Button } from 'react-native'
import React from 'react'

const OnboardingOneScreen = ({navigation} : any) => {
  return (
    <View>
      <Text>OnboardingOneScreen</Text>
      <Button title="Continue" onPress={()=>navigation.navigate("OnboardingTwo")}/>
    </View>
  )
}

export default OnboardingOneScreen