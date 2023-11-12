import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./primitiveHeaderActions.css";

import _implicitScopedStylesheets from "./primitiveHeaderActions.scoped.css?scoped=true";

import _lightningMenuItem from "lightning/menuItem";
import _lightningMenuDivider from "lightning/menuDivider";
import _lightningButtonMenu from "lightning/buttonMenu";
import {registerTemplate} from "lwc";
const stc0 = {
  "slds-th__action-button": true
};
const stc1 = [["z-index", "1", false]];
const stc2 = {
  key: 2
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {gid: api_scoped_id, b: api_bind, k: api_key, c: api_custom_element, i: api_iterator, f: api_flatten} = $api;
  const {_m0, _m1, _m2} = $ctx;
  return [$cmp.hasActions ? api_custom_element("lightning-button-menu", _lightningButtonMenu, {
    classMap: stc0,
    styleDecls: stc1,
    props: {
      "id": api_scoped_id("primitive-header-action-button-menu-id"),
      "iconSize": "x-small",
      "menuAlignment": $cmp._actionMenuAlignment,
      "alternativeText": $cmp.i18n.showActions,
      "variant": "bare",
      "iconName": "utility:chevrondown",
      "tabIndex": "-1"
    },
    key: 0,
    on: {
      "open": _m0 || ($ctx._m0 = api_bind($cmp.handleMenuOpen)),
      "close": _m1 || ($ctx._m1 = api_bind($cmp.handleMenuClose)),
      "select": _m2 || ($ctx._m2 = api_bind($cmp.handleActionSelect))
    }
  }, api_flatten([api_iterator($cmp._internalActions, function (action, actionIndex) {
    return api_custom_element("lightning-menu-item", _lightningMenuItem, {
      props: {
        "value": action,
        "label": action.label,
        "iconName": action.iconName,
        "disabled": action.disabled,
        "checked": action.checked
      },
      key: api_key(1, action.label)
    });
  }), $cmp.hasActionsDivider ? api_custom_element("lightning-menu-divider", _lightningMenuDivider, stc2) : null, api_iterator($cmp._customerActions, function (action, actionIndex) {
    return api_custom_element("lightning-menu-item", _lightningMenuItem, {
      props: {
        "value": action,
        "label": action.label,
        "iconName": action.iconName,
        "disabled": action.disabled,
        "checked": action.checked
      },
      key: api_key(3, action.label)
    });
  })])) : null];
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
tmpl.stylesheetToken = "lwc-5t4kcran2f6";
freezeTemplate(tmpl);
