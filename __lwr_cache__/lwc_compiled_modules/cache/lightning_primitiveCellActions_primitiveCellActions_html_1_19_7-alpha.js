import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./primitiveCellActions.css";

import _implicitScopedStylesheets from "./primitiveCellActions.scoped.css?scoped=true";

import _lightningMenuItem from "lightning/menuItem";
import _lightningButtonMenu from "lightning/buttonMenu";
import {registerTemplate} from "lwc";
function tmpl($api, $cmp, $slotset, $ctx) {
  const {b: api_bind, k: api_key, c: api_custom_element, i: api_iterator} = $api;
  const {_m0, _m1} = $ctx;
  return [api_custom_element("lightning-button-menu", _lightningButtonMenu, {
    props: {
      "iconSize": "x-small",
      "alternativeText": $cmp.buttonAlternateText,
      "menuAlignment": $cmp.computedMenuAlignment,
      "isLoading": $cmp._isLoadingActions,
      "loadingStateAlternativeText": $cmp.spinnerAlternateText,
      "tabIndex": $cmp.internalTabIndex
    },
    key: 0,
    on: {
      "select": _m0 || ($ctx._m0 = api_bind($cmp.handleActionSelect)),
      "open": _m1 || ($ctx._m1 = api_bind($cmp.handleMenuOpen))
    }
  }, api_iterator($cmp._actions, function (action) {
    return api_custom_element("lightning-menu-item", _lightningMenuItem, {
      props: {
        "value": action,
        "label": action.label,
        "iconName": action.iconName,
        "disabled": action.disabled
      },
      key: api_key(1, action.label)
    });
  }))];
  /*LWC compiler v3.0.0*/
}
export default registerTemplate(tmpl);
tmpl.stylesheets = [];


if (_implicitStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets);
}
if (_implicitScopedStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitScopedStylesheets);
}
tmpl.stylesheetToken = "lwc-34qk5pid5k6";
freezeTemplate(tmpl);
