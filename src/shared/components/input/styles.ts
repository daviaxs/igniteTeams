import { TextInput } from "react-native"
import styled from "styled-components/native"

export const InputStyle = styled(TextInput).attrs(({theme}) => ({
  placeholderTextColor: theme.COLORS.GRAY_300
}))`
  flex: 1;

  min-height: 56px;
  max-height: 56px;

  color: ${({theme}) => theme.COLORS.WHITE};
  background-color: ${({theme}) => theme.COLORS.GRAY_700};

  font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({theme}) => theme.FONT_SIZE.MD}px;

  border-radius: 8px;
  padding: 16px;

  &::placeholder {
    color: ${({theme}) => theme.COLORS.GRAY_300};
  }
`