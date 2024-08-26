import { TextInput, TextInputProps } from "react-native";
import { InputStyle } from "./styles";
import { RefObject } from "react";

interface InputProps extends TextInputProps {
  inputRef?: RefObject<TextInput>
  placeholder?: string
}

export function Input({placeholder, inputRef, ...rest}: InputProps) {
  return (
    <InputStyle 
      placeholder={placeholder} 
      ref={inputRef} 
      {...rest} 
    />
  )
}