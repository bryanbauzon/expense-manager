import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./primitiveTreegridCellToggle.css";

import _implicitScopedStylesheets from "./primitiveTreegridCellToggle.scoped.css?scoped=true";

import _lightningPrimitiveIcon from "lightning/primitiveIcon";
import {registerTemplate} from "lwc";
const stc0 = {
  props: {
    "iconName": "utility:chevronright",
    "variant": "bare",
    "svgClass": "slds-button__icon slds-button__icon_small"
  },
  key: 1
};
const stc1 = {
  classMap: {
    "slds-assistive-text": true
  },
  key: 2
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {ti: api_tab_index, b: api_bind, c: api_custom_element, d: api_dynamic_text, t: api_text, h: api_element} = $api;
  const {_m0} = $ctx;
  return [api_element("button", {
    className: $cmp.computedButtonClass,
    attrs: {
      "type": "button",
      "tabindex": api_tab_index($cmp.buttonTabIndex),
      "title": $cmp.buttonTitle
    },
    key: 0,
    on: {
      "click": _m0 || ($ctx._m0 = api_bind($cmp.handleChevronClick))
    }
  }, [api_custom_element("lightning-primitive-icon", _lightningPrimitiveIcon, stc0), api_element("span", stc1, [api_text(api_dynamic_text($cmp.buttonTitle))])])];
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
tmpl.stylesheetToken = "lwc-5aj9kl4g0eb";
freezeTemplate(tmpl);
