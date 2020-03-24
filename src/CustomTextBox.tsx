import { Component, ReactNode, createElement } from "react";
import { TextStyle, ViewStyle, KeyboardType, View } from "react-native";
import { CustomTextBoxProps } from "../typings/CustomTextBoxProps";
import { Style } from "./utils/common";
import { CustomTextInput } from "./components/CustomTextInput";
import { ValueStatus } from "mendix";
import { ValidationErrorView } from "./components/ValidationErrorView";

export interface CustomTextBoxStyle extends Style {
    container: ViewStyle;
    input: TextStyle;
    inputDisabled: TextStyle;
    inputError: TextStyle;
    validationMessage: TextStyle;
}

export class CustomTextBox extends Component<CustomTextBoxProps<CustomTextBoxStyle>> {
    private readonly onUpdateHandle = this.onUpdate.bind(this);
    render(): ReactNode {
        const { dataAttr } = this.props;
        if (dataAttr.status !== ValueStatus.Available) {
            return null;
        }
        // Keyboard type wants values with dashes, which Mendix does not allow.
        let keyboardType: KeyboardType = "default";
        switch (this.props.keyboardType) {
            case "numeric":
                keyboardType = "numeric";
                break;
            case "emailAddress":
                keyboardType = "email-address";
                break;
        }
        
        let validation = undefined;
        if (dataAttr.validation) {
            validation = "" + dataAttr.validation;
        }
        return (
            <View>
                <CustomTextInput
                    value={dataAttr.displayValue}
                    style={this.props.style}
                    editable={!dataAttr.readOnly}
                    hasError={!!this.props.dataAttr.validation}
                    keyboardType={keyboardType}
                    multiLine={this.props.multiLine}
                    numberOfLines={this.props.numberOfLines}
                    showAsPassword={this.props.showAsPassword}
                    onUpdate={this.onUpdateHandle}
                />
                <ValidationErrorView
                    validationMessage={validation}
                    style={this.props.style}
                    >
                </ValidationErrorView>
            </View>
        );
    }
    private onUpdate(value: string): void {
        this.props.dataAttr.setValue(value);
    }
}
