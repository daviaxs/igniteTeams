import { Users } from "lucide-react-native"
import { TouchableOpacity } from "react-native"
import styled from "styled-components/native"

export const Container = styled(TouchableOpacity)`
  width: 100%;
  height: 90px;

  background-color: ${({theme}) => theme.COLORS.GRAY_500};
  border-radius: 12px;

  flex-direction: row;
  align-items: center;

  padding: 24px;
  margin-bottom: 12px;
  gap: 16px;
`

export const Title = styled.Text`
  color: ${({theme}) => theme.COLORS.GRAY_200};
  font-size: ${({theme}) => theme.FONT_SIZE.MD}px;
  font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
`

export const Icon = styled(Users).attrs(({theme}) => ({
  color: theme.COLORS.GREEN_700,
  size: 32,
}))``