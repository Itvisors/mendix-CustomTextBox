import { Component, ReactNode, createElement } from 'react';
import { TextInput, View } from 'react-native';
import { CustomTextBoxStyle } from '../CustomTextBox';
import { flattenStyles } from '../utils/common';
import { styles } from '../ui/styles';

export interface InputProps {
    value: string;
    style: CustomTextBoxStyle[];
    editable: boolean;
    onUpdate: (value: string) => void;
}

const defaultTextInputStyle: CustomTextBoxStyle = {
    container: styles.flex,
    input: styles.input,
    readonlyInput: styles.readonlyInput
};

export class CustomTextInput extends Component<InputProps> {
    private readonly styles = flattenStyles(defaultTextInputStyle, this.props.style);
    render(): ReactNode {
        return (
            <View style={this.styles.container}>
                <TextInput 
                    style={this.props.editable ? this.styles.input : this.styles.readonlyInput}
                    value={this.props.value}
                    editable={this.props.editable}
                    onChangeText={this.props.onUpdate}
                />
            </View>
        );
    }
}