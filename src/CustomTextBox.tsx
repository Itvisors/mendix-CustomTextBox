import { Component, ReactNode, createElement } from "react";
import { TextStyle, ViewStyle, KeyboardType } from "react-native";
import { CustomTextBoxProps } from "../typings/CustomTextBoxProps";
import { Style } from "./utils/common";
import { CustomTextInput } from "./components/CustomTextInput";
import { ValueStatus } from "mendix";

export interface CustomTextBoxStyle extends Style {
    container: ViewStyle;
    input: TextStyle;
    readonlyInput: TextStyle;
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
        return (
            <CustomTextInput
                value={value}
                style={this.props.style}
                editable={editable}
                keyboardType={keyboardType}
                showAsPassword={this.props.showAsPassword}
                onUpdate={this.onUpdateHandle}
            />
        );
    }
    private onUpdate(value: string): void {
        this.props.dataAttr.setValue(value);
    }
}
