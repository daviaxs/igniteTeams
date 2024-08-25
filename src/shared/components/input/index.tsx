import { TextInputProps } from "react-native";
import { InputStyle } from "./styles";

interface InputProps extends TextInputProps {
  placeholder?: string
}

export function Input({placeholder, ...rest}: InputProps) {
  return (
    <InputStyle placeholder={placeholder} {...rest} />
  )
}