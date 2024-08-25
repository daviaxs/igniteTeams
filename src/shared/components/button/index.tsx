import { TouchableOpacityProps } from "react-native"
import { ButtonVariant, Container, Title } from "./styles"

interface ButtonProps extends TouchableOpacityProps {
  title: string
  variant?: ButtonVariant
}

export function Button({variant = 'default', title, ...rest}: ButtonProps) {
  return (
    <Container variant={variant} {...rest}>
      <Title>{title}</Title>
    </Container>
  )
}