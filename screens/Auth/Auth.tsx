import React from 'react'
import { Button, Image, ScrollView, Text, XStack, YStack } from 'tamagui'
import { Stack } from 'tamagui'
import colors from '../../util/theme/colors'

const Auth = ({navigation}:object) => {
   
  return (
    <ScrollView scrollEnabled={true} showsVerticalScrollIndicator={false} bg="white">
        <Stack bg="white">
            <Stack bg={colors.authbg} h="$10" display='flex' ai="center" jc="flex-end">
                <Text fontSize={18} m="$3">Validating OTP</Text>
            </Stack>
            <XStack display="flex" ai="center" jc="center">
            <Image 
            source={require('../../img/login.png')} height={100} width={100} m="$10"/>
            </XStack>
            <YStack display="flex" ai="center" jc="center">
                <Text fontSize={25} ta="center" fontWeight="bold">OTP Verification</Text>
                <Text ta="center" fontSize={15} mt="$4">We will send you an <Text fontWeight="bold">One Time Password</Text>{"\n"}on this mobile number</Text>
            </YStack>
        </Stack>
    </ScrollView>
  )
}

export default Auth