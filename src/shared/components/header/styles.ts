import { ChevronLeft } from "lucide-react-native"
import styled from "styled-components/native"

interface ContainerProps {
  hasBackButton: boolean
}

export const Container = styled.View<ContainerProps>`
  width: 100%;

  flex-direction: row;
  justify-content: ${({hasBackButton}) => hasBackButton ? "space-between" : "center"};
  align-items: center;
`

export const Logo = styled.Image`
  width: 46px;
  height: 55px;
`

export const BackButton = styled.TouchableOpacity`
`

export const BackIcon = styled(ChevronLeft).attrs(({theme}) => ({
  color: theme.COLORS.WHITE,
  size: 36
}))``