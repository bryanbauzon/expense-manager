import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./helptext.css";

import _implicitScopedStylesheets from "./helptext.scoped.css?scoped=true";

import _lightningButtonIcon from "lightning/buttonIcon";
import {registerTemplate} from "lwc";
const stc0 = {
  classMap: {
    "slds-form-element__icon": true
  },
  attrs: {
    "part": "help-text"
  },
  key: 0
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {ti: api_tab_index, b: api_bind, c: api_custom_element, h: api_element} = $api;
  const {_m0} = $ctx;
  return [api_element("div", stc0, [api_custom_element("lightning-button-icon", _lightningButtonIcon, {
    props: {
      "iconName": $cmp.iconName,
      "iconClass": $cmp.computedIconClass,
      "variant": $cmp.computedButtonVariant,
      "alternativeText": $cmp.alternativeText,
      "tooltip": $cmp.content,
      "tabIndex": api_tab_index($cmp.tabIndex)
    },
    key: 1,
    on: {
      "privatebuttoniconregister": _m0 || ($ctx._m0 = api_bind($cmp.handleButtonIconRegister))
    }
  })])];
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
tmpl.stylesheetToken = "lwc-287jov2qseb";
freezeTemplate(tmpl);
