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
    private readonly onFocusHandle = this.onFocus.bind(this);
    private readonly onUpdateHandle = this.onUpdate.bind(this);
    private readonly onBlurHandle = this.onBlur.bind(this);

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

        let validation;
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
                    autoFocus={this.props.autoFocus}
                    showAsPassword={this.props.showAsPassword}
                    onFocus={this.onFocusHandle}
                    onUpdate={this.onUpdateHandle}
                    onBlur={this.onBlurHandle}
                />
                <ValidationErrorView validationMessage={validation} style={this.props.style}></ValidationErrorView>
            </View>
        );
    }

    private onFocus(): void {
        const { onFocusAction } = this.props;
        if (onFocusAction && onFocusAction.canExecute && !onFocusAction.isExecuting) {
            onFocusAction.execute();
        }
    }

    private onUpdate(value: string): void {
        const { dataAttr, onChangeAction } = this.props;
        dataAttr.setValue(value);
        if (onChangeAction && onChangeAction.canExecute && !onChangeAction.isExecuting) {
            onChangeAction.execute();
        }
    }

    private onBlur(): void {
        const { onChangeAction } = this.props;
        if (onChangeAction && onChangeAction.canExecute && !onChangeAction.isExecuting) {
            onChangeAction.execute();
        }
    }
}
