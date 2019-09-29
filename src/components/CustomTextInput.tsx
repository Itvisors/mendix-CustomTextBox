import { Component, ReactNode, createElement } from 'react';
import { TextInput, View, KeyboardType } from 'react-native';
import { CustomTextBoxStyle } from '../CustomTextBox';
import { flattenStyles } from '../utils/common';
import { styles } from '../ui/styles';

export interface InputProps {
    value: string;
    style: CustomTextBoxStyle[];
    editable: boolean;
    hasError: boolean;
    keyboardType: KeyboardType;
    showAsPassword: boolean;
    onUpdate: (value: string) => void;
}

const defaultTextInputStyle: CustomTextBoxStyle = {
    container: styles.flex,
    input: styles.input,
    inputDisabled: styles.inputDisabled,
    inputError: styles.inputError,
    validationMessage: styles.validationMessage
};

export class CustomTextInput extends Component<InputProps> {
    private readonly styles = flattenStyles(defaultTextInputStyle, this.props.style);
    render(): ReactNode {
        let inputStyle = null;
        if (this.props.editable) {
            inputStyle = this.styles.input;
        } else {
            inputStyle = {...this.styles.input, ...this.styles.inputDisabled };
        }
        if (this.props.hasError) {
            inputStyle = {...inputStyle, ...this.styles.inputError };
        }
        return (
            <View style={this.styles.container}>
                <TextInput 
                    style={inputStyle}
                    value={this.props.value}
                    keyboardType={this.props.keyboardType}
                    editable={this.props.editable}
                    clearButtonMode={"while-editing"}
                    secureTextEntry={this.props.showAsPassword}
                    onChangeText={this.props.onUpdate}
                />
            </View>
        );
    }
}