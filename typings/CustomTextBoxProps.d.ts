/**
 * This file was generated from CustomTextBox.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { ActionValue, EditableValue } from "mendix";

export type KeyboardTypeEnum = "default" | "numeric" | "emailAddress";

export interface CustomTextBoxProps<Style> {
    name: string;
    style: Style[];
    dataAttr: EditableValue<string>;
    keyboardType: KeyboardTypeEnum;
    multiLine: boolean;
    numberOfLines: number;
    autoFocus: boolean;
    showAsPassword: boolean;
    onChangeAction?: ActionValue;
}

export interface CustomTextBoxPreviewProps {
    class: string;
    style: string;
    dataAttr: string;
    keyboardType: KeyboardTypeEnum;
    multiLine: boolean;
    numberOfLines: number | null;
    autoFocus: boolean;
    showAsPassword: boolean;
    onChangeAction: {} | null;
}
