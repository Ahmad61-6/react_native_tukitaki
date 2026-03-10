import { Image, useColorScheme } from 'react-native'
import React from 'react'

const ThemedLogo = (props) => {

  const scheme = useColorScheme()

  const logo =
    scheme === 'dark'
      ? require('../assets/img/logo_dark.png')
      : require('../assets/img/logo_light.png')

  return <Image source={logo} {...props} />
}

export default ThemedLogo