import React from 'react'
import { Button, Image, ScrollView, Text } from 'tamagui'
import { Stack } from 'tamagui'
import colors from '../../util/theme/colors'

const Auth = ({navigation}:object) => {
   
  return (
    <ScrollView scrollEnabled={true} showsVerticalScrollIndicator={false}>
        <Stack bg="white">
            <Stack bg={colors.authbg} h="$10" display='flex' ai="center" jc="flex-end">
                <Text fontSize={18} m="$3">Validating OTP</Text>
            </Stack>
            {/* <Image source={{uri:''}}/> */}
        </Stack>
    </ScrollView>
  )
}

export default Auth