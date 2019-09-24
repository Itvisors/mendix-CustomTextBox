import { createElement } from "react";
const React = { createElement };

import { ActionProperty } from "mendix/ActionProperty";
import { AttributeProperty } from "mendix/AttributeProperty";
import { DynamicTextProperty } from "mendix/DynamicTextProperty";
import { ExpressionProperty } from "mendix/ExpressionProperty";
import { NanoflowObjectProperty } from "mendix/NanoflowObjectProperty";

import { Button } from "mendix/Button";
import { ConditionalVisibilityWrapper } from "mendix/ConditionalVisibilityWrapper";
import { Container } from "mendix/Container";
import { DataView } from "mendix/DataView";
import { Text } from "mendix/Text";
import { TextBox } from "mendix/TextBox";
import { asPluginWidgets, t } from "mendix/native";

import { mainContent } from "./Atlas_UI_Resources.NativePhone_Default.js";

import * as styles from "../../theme/styles.js";

const { $Container, $Text, $DataView, $TextBox, $ConditionalVisibilityWrapper, $Button } = asPluginWidgets({ Container, Text, DataView, TextBox, ConditionalVisibilityWrapper, Button });

const main = () => [
    <$Container key="0_0"
        $widgetId="0_0"
        name="container1"
        style={[ styles.Container, styles.spacingInnerTopLarge, styles.spacingInnerBottomLarge, styles.spacingInnerLeftMedium, styles.spacingInnerRightMedium, styles.flexMain, styles.justifyContentCenter ]}
        content={[
            <$Container key="0_1"
                $widgetId="0_1"
                name="container2"
                style={[ styles.Container, styles.spacingOuterBottomLarge ]}
                content={[
                    <$Text key="0_2"
                        $widgetId="0_2"
                        name="text1"
                        style={[ styles.Text, styles.TextHeading1, styles.textSemiBold, styles.textContrastHigher ]}
                        text={DynamicTextProperty({
                            template: { "elements": t( [ [ "Login" ] ] ), "friendlyId": "NativeMobile.Login.text1" }
                        })} />,
                    <$Text key="0_3"
                        $widgetId="0_3"
                        name="text2"
                        style={[ styles.Text, styles.textContrastLow, styles.spacingOuterBottom ]}
                        text={DynamicTextProperty({
                            template: { "elements": t( [ [ "Sign in to access your account." ] ] ), "friendlyId": "NativeMobile.Login.text2" }
                        })} />
                ]} />,
            <$DataView key="0_4"
                $widgetId="0_4"
                name="dataView1"
                style={[ styles.DataView ]}
                object={NanoflowObjectProperty({
                    source: { "nanoflow": "NativeMobile.DSS_CreateLoginContext" },
                    argMap: {},
                    friendlyId: "NativeMobile.Login.dataView1"
                })}
                content={[
                    <$TextBox key="0_5"
                        $widgetId="0_5"
                        name="textBox1"
                        style={[ styles.TextBox, styles.TextBoxVertical, styles.spacingOuterBottomMedium ]}
                        onEnter={undefined}
                        onLeave={undefined}
                        formOrientation={"vertical"}
                        labelWidth={0}
                        inputValue={AttributeProperty({
                            scope: "0_4",
                            path: "",
                            entity: "NativeMobile.Login",
                            attribute: "Username",
                            friendlyId: "NativeMobile.Login.textBox1",
                            onChange: { "type": "doNothing", "argMap": {}, "config": {} },
                            validation: { "message": t( [ "Username is required" ] ), "expression": { "expr": { "type": "function", "name": "!=", "parameters": [ { "type": "variable", "variable": "value" }, { "type": "literal", "value": null } ] }, "args": {} } },
                            formatting: { }
                        })}
                        isPassword={false}
                        placeholder={DynamicTextProperty({
                            template: { "elements": t( [ [ "" ] ] ) }
                        })}
                        label={DynamicTextProperty({
                            template: { "elements": t( [ [ "Username" ] ] ), "friendlyId": "NativeMobile.Login.textBox1" }
                        })}
                        maxLength={200}
                        keyboardType={"default"} />,
                    <$TextBox key="0_6"
                        $widgetId="0_6"
                        name="textBox2"
                        style={[ styles.TextBox, styles.TextBoxVertical, styles.spacingOuterBottomMedium ]}
                        onEnter={undefined}
                        onLeave={undefined}
                        formOrientation={"vertical"}
                        labelWidth={0}
                        inputValue={AttributeProperty({
                            scope: "0_4",
                            path: "",
                            entity: "NativeMobile.Login",
                            attribute: "Password",
                            friendlyId: "NativeMobile.Login.textBox2",
                            onChange: { "type": "doNothing", "argMap": {}, "config": {} },
                            validation: { "message": t( [ "Password is required" ] ), "expression": { "expr": { "type": "function", "name": "!=", "parameters": [ { "type": "variable", "variable": "value" }, { "type": "literal", "value": null } ] }, "args": {} } },
                            formatting: { }
                        })}
                        isPassword={true}
                        placeholder={DynamicTextProperty({
                            template: { "elements": t( [ [ "" ] ] ) }
                        })}
                        label={DynamicTextProperty({
                            template: { "elements": t( [ [ "Password" ] ] ), "friendlyId": "NativeMobile.Login.textBox2" }
                        })}
                        maxLength={200}
                        keyboardType={"default"} />,
                    <$ConditionalVisibilityWrapper key="0_7"
                        $widgetId="0_7"
                        name=""
                        visible={ExpressionProperty({
                            expression: { "expr": { "type": "function", "name": "!=", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "ValidationMessage" }, { "type": "literal", "value": null } ] }, "args": { "currentObject": "0_4" } },
                            friendlyId: "NativeMobile.Login."
                        })}
                        needsNamedUser={false}
                        contents={[
                            <$Text key="0_8"
                                $widgetId="0_8"
                                name="text3"
                                style={[ styles.Text, styles.textSmall, styles.textDanger ]}
                                text={DynamicTextProperty({
                                    scope: "0_4",
                                    template: { "elements": t( [ [ 1 ] ] ), "friendlyId": "NativeMobile.Login.text3", "parameters": { "1": "NativeMobile.Login/ValidationMessage" }, "formats": { "1": t( [ {} ] ) } }
                                })} />
                        ]} />,
                    <$Button key="0_9"
                        $widgetId="0_9"
                        name="actionButton1"
                        style={[ styles.ActionButton, styles.spacingOuterTopMedium, styles.spacingOuterBottom ]}
                        caption={DynamicTextProperty({
                            template: { "elements": t( [ [ "Sign in" ] ] ), "friendlyId": "NativeMobile.Login.actionButton1" }
                        })}
                        icon={undefined}
                        onClick={ActionProperty({
                            action: { "type": "callNanoflow", "argMap": { "Login": { "widget": "0_4", "source": "object" } }, "config": { "nanoflow": "NativeMobile.ACT_SignInUser" } },
                            abortOnServerValidation: false
                        })}
                        disabledDuringAction={true} />
                ]} />
        ]} />
];

export const header = () => null;

export const $$title = t([
    "Login"
] );

export const $$style = [];

export const $$page = () => mainContent(main);
