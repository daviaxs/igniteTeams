import { TouchableOpacity } from "react-native"
import styled from "styled-components/native"

export type ButtonVariant = "default" | "destructive"

interface ButtonProps {
  variant: ButtonVariant
}

export const Container = styled(TouchableOpacity)<ButtonProps>`
  flex: 1;

  min-height: 56px;
  max-height: 56px;

  border-radius: 8px;

  justify-content: center;
  align-items: center;

  background-color: ${({variant, theme}) => {
    switch (variant) {
      case "default":
        return theme.COLORS.GREEN_700
      case "destructive":
        return theme.COLORS.RED_DARK
    }
  }};
`

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;