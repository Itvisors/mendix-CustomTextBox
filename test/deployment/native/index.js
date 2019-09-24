import { NativeUI, startApp, t } from "mendix/native";
import { navigationStyle } from "../../theme/styles.js";

import "./javascript-actions";

startApp({
    "cacheBust": "637049379633103993",
    "languages": [
        "en_US"
    ],
    "getTabs": () => ( [
        {
            "pageName": "NativeMobile.Home_Native",
            "caption": t( [
                "Home"
            ] ),
            "icon": "glyphicon-home"
        }
    ] ),
    "onStartupNativeClient": () => {
        NativeUI.setDefaultStyling(navigationStyle);
        NativeUI.registerNanoflows(require("./nanoflows").default);
        NativeUI.registerPage("NativeMobile.Home_Native", require("./NativeMobile.Home_Native"), { "header": "header" });
        NativeUI.registerPage("NativeMobile.TestEntity_NewEdit", require("./NativeMobile.TestEntity_NewEdit"), { "header": "header" });
        NativeUI.registerPage("NativeMobile.Login", require("./NativeMobile.Login"), { "header": "header" });
    }
});