import { TouchableOpacityProps } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import { Container, Icon, ButtonIconType } from './styles'

interface ButtonIconProps extends TouchableOpacityProps {
  icon: keyof typeof MaterialIcons.glyphMap
  type?: ButtonIconType
}

export function ButtonIcon({icon, type = 'PRIMARY', ...rest}: ButtonIconProps) {
  return(
    <Container {...rest}>
      <Icon name={icon} type={type} />
    </Container>
  );
}