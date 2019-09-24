import { createElement } from "react";
const React = { createElement };

import { ActionProperty } from "mendix/ActionProperty";
import { DerivedUniqueIdProperty } from "mendix/DerivedUniqueIdProperty";
import { DynamicTextProperty } from "mendix/DynamicTextProperty";
import { IconProperty } from "mendix/IconProperty";
import { OfflineObjectListProperty } from "mendix/OfflineObjectListProperty";
import { WidgetVariableProperty } from "mendix/WidgetVariableProperty";

import { Button } from "mendix/Button";
import { ClickableArea } from "mendix/ClickableArea";
import { ConditionalVisibilityWrapper } from "mendix/ConditionalVisibilityWrapper";
import { Container } from "mendix/Container";
import { NativeList } from "mendix/NativeList";
import { Text } from "mendix/Text";
import { asPluginWidgets, t } from "mendix/native";

import { mainContent } from "./Atlas_UI_Resources.NativePhone_Default.js";

import * as styles from "../../theme/styles.js";

const { $ConditionalVisibilityWrapper, $Button, $Container, $NativeList, $ClickableArea, $Text } = asPluginWidgets({ ConditionalVisibilityWrapper, Button, Container, NativeList, ClickableArea, Text });

const main = () => [
    <$Container key="0_3"
        $widgetId="0_3"
        name="container1"
        style={[ styles.Container, styles.spacingInnerTopMedium, styles.spacingInnerLeft, styles.spacingInnerRight, styles.flexMain, styles.backgroundSecondary ]}
        content={[
            <$Button key="0_4"
                $widgetId="0_4"
                name="actionButton2"
                style={[ styles.ActionButton ]}
                caption={DynamicTextProperty({
                    template: { "elements": t( [ [ "New" ] ] ), "friendlyId": "NativeMobile.Home_Native.actionButton2" }
                })}
                icon={undefined}
                onClick={ActionProperty({
                    action: { "type": "createObject", "argMap": {}, "config": { "entity": "NativeMobile.TestEntity", "pageSettings": { "name": "NativeMobile.TestEntity_NewEdit", "location": "content" } } },
                    abortOnServerValidation: false
                })}
                disabledDuringAction={true} />,
            <$NativeList key="0_2"
                $widgetId="0_2"
                name="listView1"
                style={[ styles.ListView ]}
                listInfo={OfflineObjectListProperty({
                    entity: "NativeMobile.TestEntity",
                    friendlyId: "NativeMobile.Home_Native.listView1",
                    constraints: []
                })}
                itemTemplate={() => [
                    <$ClickableArea key="0_5"
                        $widgetId="0_5"
                        name=""
                        content={[
                            <$Container key="0_6"
                                $widgetId="0_6"
                                name="container2"
                                style={[ styles.Container, styles.spacingInnerTopMedium ]}
                                content={[
                                    <$Text key="0_7"
                                        $widgetId="0_7"
                                        name="text1"
                                        style={[ styles.Text ]}
                                        text={DynamicTextProperty({
                                            scope: "0_2",
                                            template: { "elements": t( [ [ 1 ] ] ), "friendlyId": "NativeMobile.Home_Native.text1", "parameters": { "1": "NativeMobile.TestEntity/Name" }, "formats": { "1": t( [ {} ] ) } }
                                        })} />,
                                    <$Text key="0_8"
                                        $widgetId="0_8"
                                        name="text2"
                                        style={[ styles.Text ]}
                                        text={DynamicTextProperty({
                                            scope: "0_2",
                                            template: { "elements": t( [ [ 1 ] ] ), "friendlyId": "NativeMobile.Home_Native.text2", "parameters": { "1": "NativeMobile.TestEntity/SomeInteger" }, "formats": { "1": t( [ {} ] ) } }
                                        })} />,
                                    <$Text key="0_9"
                                        $widgetId="0_9"
                                        name="text3"
                                        style={[ styles.Text ]}
                                        text={DynamicTextProperty({
                                            scope: "0_2",
                                            template: { "elements": t( [ [ 1 ] ] ), "friendlyId": "NativeMobile.Home_Native.text3", "parameters": { "1": "NativeMobile.TestEntity/SomeDecimal" }, "formats": { "1": t( [ { "groupDigits": false, "decimalPrecision": 2 } ] ) } }
                                        })} />
                                ]} />
                        ]}
                        onClick={ActionProperty({
                            action: { "type": "openPage", "argMap": { "$pageParameter": { "widget": "0_2", "source": "object" } }, "config": { "name": "NativeMobile.TestEntity_NewEdit", "location": "content" } },
                            abortOnServerValidation: false
                        })} />
                ]}
                amount={WidgetVariableProperty({
                    widgetId: "0_2",
                    slot: "amount",
                    type: "Decimal",
                    initialValue: 10
                })}
                pageSize={10}
                id={DerivedUniqueIdProperty({
                    widgetId: "0_2"
                })}
                scrollDirection={"vertical"}
                numberOfColumns={1}
                onPullDown={ActionProperty({
                    action: { "type": "synchronize", "argMap": {}, "config": {} },
                    abortOnServerValidation: false
                })} />
        ]} />
];

export const header = () => [
    <$ConditionalVisibilityWrapper key="0_0"
        $widgetId="0_0"
        name=""
        needsNamedUser={true}
        contents={[
            <$Button key="0_1"
                $widgetId="0_1"
                name="actionButton1"
                style={[ styles.ActionButton, styles.ActionButtonHeader ]}
                caption={DynamicTextProperty({
                    template: { "elements": t( [ [] ] ), "friendlyId": "NativeMobile.Home_Native.actionButton1" }
                })}
                icon={IconProperty({
                    icon: { "type": "glyph", "iconClass": "glyphicon-log-out" }
                })}
                onClick={ActionProperty({
                    action: { "type": "signOut", "argMap": {}, "config": { "namedUser": true } },
                    abortOnServerValidation: false
                })}
                disabledDuringAction={true} />
        ]} />
];

export const $$title = t([
    "Home"
] );

export const $$style = [];

export const $$page = () => mainContent(main);
