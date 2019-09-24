import { createElement } from "react";
const React = { createElement };

import { ActionProperty } from "mendix/ActionProperty";
import { AssociationObjectProperty } from "mendix/AssociationObjectProperty";
import { AttributeProperty } from "mendix/AttributeProperty";
import { DynamicTextProperty } from "mendix/DynamicTextProperty";

import { Button } from "mendix/Button";
import { DataView } from "mendix/DataView";
import { itvisors_customtextbox_CustomTextBox } from "externalWidgets";
import { ScrollContainer } from "mendix/ScrollContainer";
import { Text } from "mendix/Text";
import { TextBox } from "mendix/TextBox";
import { asPluginWidgets, t } from "mendix/native";

import { mainContent } from "./Atlas_UI_Resources.NativePhone_Default.js";

import * as styles from "../../theme/styles.js";

const { $ScrollContainer, $DataView, $Text, $itvisors_customtextbox_CustomTextBox, $TextBox, $Button } = asPluginWidgets({ ScrollContainer, DataView, Text, itvisors_customtextbox_CustomTextBox, TextBox, Button });

const main = () => [
    <$ScrollContainer key="0_0"
        $widgetId="0_0"
        name="scrollContainer1"
        style={[ styles.ScrollContainer, styles.spacingInnerLeftMedium, styles.spacingInnerRightMedium, styles.flexMain, styles.backgroundPrimary ]}
        content={[
            <$DataView key="0_1"
                $widgetId="0_1"
                name="dataView2"
                style={[ styles.DataView ]}
                object={AssociationObjectProperty({
                    scope: "$pageParameter"
                })}
                content={[
                    <$Text key="0_2"
                        $widgetId="0_2"
                        name="text1"
                        style={[ styles.Text, styles.spacingOuterTopMedium ]}
                        text={DynamicTextProperty({
                            template: { "elements": t( [ [ "Name (custom)" ] ] ), "friendlyId": "NativeMobile.TestEntity_NewEdit.text1" }
                        })} />,
                    <$itvisors_customtextbox_CustomTextBox key="0_3"
                        $widgetId="0_3"
                        name="customTextBox1"
                        dataAttr={AttributeProperty({
                            scope: "0_1",
                            path: "",
                            entity: "NativeMobile.TestEntity",
                            attribute: "Name",
                            friendlyId: "NativeMobile.TestEntity_NewEdit.customTextBox1",
                            onChange: { "type": "doNothing", "argMap": {}, "config": {} },
                            isEditable: { "expr": { "type": "literal", "value": false }, "args": {} }
                        })}
                        style={[ styles.itvisors_customtextbox_CustomTextBox, styles.spacingOuterTop ]} />,
                    <$TextBox key="0_4"
                        $widgetId="0_4"
                        name="textBox1"
                        style={[ styles.TextBox, styles.TextBoxVertical, styles.spacingOuterTopMedium ]}
                        onEnter={undefined}
                        onLeave={undefined}
                        formOrientation={"vertical"}
                        labelWidth={0}
                        inputValue={AttributeProperty({
                            scope: "0_1",
                            path: "",
                            entity: "NativeMobile.TestEntity",
                            attribute: "Name",
                            friendlyId: "NativeMobile.TestEntity_NewEdit.textBox1",
                            onChange: { "type": "doNothing", "argMap": {}, "config": {} },
                            isEditable: { "expr": { "type": "literal", "value": false }, "args": {} },
                            validation: null,
                            formatting: { }
                        })}
                        isPassword={false}
                        placeholder={DynamicTextProperty({
                            template: { "elements": t( [ [ "" ] ] ) }
                        })}
                        label={DynamicTextProperty({
                            template: { "elements": t( [ [ "Name" ] ] ), "friendlyId": "NativeMobile.TestEntity_NewEdit.textBox1" }
                        })}
                        maxLength={200}
                        keyboardType={"default"} />,
                    <$Text key="0_5"
                        $widgetId="0_5"
                        name="text2"
                        style={[ styles.Text, styles.spacingOuterTopMedium ]}
                        text={DynamicTextProperty({
                            template: { "elements": t( [ [ "Some integer (custom)" ] ] ), "friendlyId": "NativeMobile.TestEntity_NewEdit.text2" }
                        })} />,
                    <$itvisors_customtextbox_CustomTextBox key="0_6"
                        $widgetId="0_6"
                        name="customTextBox2"
                        dataAttr={AttributeProperty({
                            scope: "0_1",
                            path: "",
                            entity: "NativeMobile.TestEntity",
                            attribute: "SomeInteger",
                            friendlyId: "NativeMobile.TestEntity_NewEdit.customTextBox2",
                            onChange: { "type": "doNothing", "argMap": {}, "config": {} },
                            isEditable: { "expr": { "type": "literal", "value": false }, "args": {} }
                        })}
                        style={[ styles.itvisors_customtextbox_CustomTextBox, styles.spacingOuterTop ]} />,
                    <$TextBox key="0_7"
                        $widgetId="0_7"
                        name="textBox2"
                        style={[ styles.TextBox, styles.TextBoxVertical, styles.spacingOuterTopMedium ]}
                        onEnter={undefined}
                        onLeave={undefined}
                        formOrientation={"vertical"}
                        labelWidth={0}
                        inputValue={AttributeProperty({
                            scope: "0_1",
                            path: "",
                            entity: "NativeMobile.TestEntity",
                            attribute: "SomeInteger",
                            friendlyId: "NativeMobile.TestEntity_NewEdit.textBox2",
                            onChange: { "type": "doNothing", "argMap": {}, "config": {} },
                            validation: null,
                            formatting: { }
                        })}
                        isPassword={false}
                        placeholder={DynamicTextProperty({
                            template: { "elements": t( [ [ "" ] ] ) }
                        })}
                        label={DynamicTextProperty({
                            template: { "elements": t( [ [ "Some integer" ] ] ), "friendlyId": "NativeMobile.TestEntity_NewEdit.textBox2" }
                        })}
                        maxLength={200}
                        keyboardType={"default"} />,
                    <$Text key="0_8"
                        $widgetId="0_8"
                        name="text3"
                        style={[ styles.Text, styles.spacingOuterTopMedium ]}
                        text={DynamicTextProperty({
                            template: { "elements": t( [ [ "Some decimal (custom)" ] ] ), "friendlyId": "NativeMobile.TestEntity_NewEdit.text3" }
                        })} />,
                    <$itvisors_customtextbox_CustomTextBox key="0_9"
                        $widgetId="0_9"
                        name="customTextBox3"
                        dataAttr={AttributeProperty({
                            scope: "0_1",
                            path: "",
                            entity: "NativeMobile.TestEntity",
                            attribute: "SomeDecimal",
                            friendlyId: "NativeMobile.TestEntity_NewEdit.customTextBox3",
                            onChange: { "type": "doNothing", "argMap": {}, "config": {} }
                        })}
                        style={[ styles.itvisors_customtextbox_CustomTextBox, styles.spacingOuterTop ]} />,
                    <$TextBox key="0_10"
                        $widgetId="0_10"
                        name="textBox3"
                        style={[ styles.TextBox, styles.TextBoxVertical, styles.spacingOuterTopMedium, styles.spacingOuterBottomLarge ]}
                        onEnter={undefined}
                        onLeave={undefined}
                        formOrientation={"vertical"}
                        labelWidth={0}
                        inputValue={AttributeProperty({
                            scope: "0_1",
                            path: "",
                            entity: "NativeMobile.TestEntity",
                            attribute: "SomeDecimal",
                            friendlyId: "NativeMobile.TestEntity_NewEdit.textBox3",
                            onChange: { "type": "doNothing", "argMap": {}, "config": {} },
                            validation: null,
                            formatting: {
                                numberFormat: {
                                    groupDigits: false,
                                    decimalPrecision: 2
                                }
                            }
                        })}
                        isPassword={false}
                        placeholder={DynamicTextProperty({
                            template: { "elements": t( [ [ "" ] ] ) }
                        })}
                        label={DynamicTextProperty({
                            template: { "elements": t( [ [ "Some decimal" ] ] ), "friendlyId": "NativeMobile.TestEntity_NewEdit.textBox3" }
                        })}
                        maxLength={undefined}
                        keyboardType={"decimal-pad"} />
                ]} />
        ]} />
];

export const header = () => [
    <$Button key="0_11"
        $widgetId="0_11"
        name="actionButton3"
        style={[ styles.ActionButton, styles.ActionButtonHeader, styles.spacingOuterBottom ]}
        caption={DynamicTextProperty({
            template: { "elements": t( [ [ "Save" ] ] ), "friendlyId": "NativeMobile.TestEntity_NewEdit.actionButton3" }
        })}
        icon={undefined}
        onClick={ActionProperty({
            action: { "type": "saveChanges", "argMap": {}, "config": { "closePage": true } },
            abortOnServerValidation: false
        })}
        disabledDuringAction={true} />
];

export const $$title = t([
    "Edit Test Entity"
] );

export const $$style = [];

export const $$page = () => mainContent(main);
