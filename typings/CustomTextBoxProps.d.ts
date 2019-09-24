/**
 * This file was generated from CustomTextBox.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Team
 */
import { EditableValue } from "mendix";

interface CommonProps<Style> {
    name: string;
    style: Style[];
}

export type KeyboardTypeEnum = "default" | "numeric" | "emailAddress";

export interface CustomTextBoxProps<Style> extends CommonProps<Style> {
    dataAttr: EditableValue<string>;
    keyboardType: KeyboardTypeEnum;
}
