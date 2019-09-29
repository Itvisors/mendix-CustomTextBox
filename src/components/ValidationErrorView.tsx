import { Component, ReactNode, createElement } from 'react';
import { Text } from 'react-native';
import { CustomTextBoxStyle } from '../CustomTextBox';
import { flattenStyles } from '../utils/common';
import { styles } from '../ui/styles';

export interface InputProps {
    validationMessage?: string;
    style: CustomTextBoxStyle[];
}

const defaultTextInputStyle: CustomTextBoxStyle = {
    container: styles.flex,
    input: styles.input,
    inputDisabled: styles.inputDisabled,
    inputError: styles.inputError,
    validationMessage: styles.validationMessage
};

export class ValidationErrorView extends Component<InputProps> {
    private readonly styles = flattenStyles(defaultTextInputStyle, this.props.style);
    render(): ReactNode {
        
        if (this.props.validationMessage) {
            return (
                <Text style={this.styles.validationMessage}>
                    {this.props.validationMessage}
                </Text>
            );
        } else {
            return null;
        }
    }
}