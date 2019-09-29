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
        let value;
        let keyboardType: KeyboardType = "default";
        if (this.props.dataAttr.status == ValueStatus.Available) {
            value = this.props.dataAttr.displayValue || "";
            switch (this.props.keyboardType) {
                case "numeric":
                    keyboardType = "numeric";
                    break;
                case "emailAddress":
                    keyboardType = "email-address";
                    break;
            }
        } else {
            value = "";
        }
        const editable = this.props.dataAttr.status == ValueStatus.Available &&!this.props.dataAttr.readOnly;
        let validation = undefined;
        if (this.props.dataAttr.validation) {
            validation = "" + this.props.dataAttr.validation;
        }
        return (
            <View>
                <CustomTextInput
                    value={value}
                    style={this.props.style}
                    editable={editable}
                    hasError={!!this.props.dataAttr.validation}
                    keyboardType={keyboardType}
                    showAsPassword={this.props.showAsPassword}
                    onUpdate={this.onUpdateHandle}
                />
                <ValidationErrorView
                    validationMessage={validation}
                    style={this.props.style}
                    >
                /></ValidationErrorView>
            </View>
        );
    }
    private onUpdate(value: string): void {
        this.props.dataAttr.setValue(value);
    }
}
