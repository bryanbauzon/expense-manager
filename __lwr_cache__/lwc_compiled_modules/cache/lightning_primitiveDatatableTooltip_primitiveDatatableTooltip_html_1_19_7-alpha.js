import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./primitiveDatatableTooltip.css";

import _implicitScopedStylesheets from "./primitiveDatatableTooltip.scoped.css?scoped=true";

import _lightningPrimitiveIcon from "lightning/primitiveIcon";
import {registerTemplate} from "lwc";
const stc0 = {
  classMap: {
    "slds-assistive-text": true
  },
  key: 2
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {ti: api_tab_index, b: api_bind, c: api_custom_element, d: api_dynamic_text, t: api_text, h: api_element} = $api;
  const {_m0, _m1, _m2} = $ctx;
  return [api_element("button", {
    className: $cmp.computedButtonClass,
    attrs: {
      "data-trigger": "true",
      "tabindex": api_tab_index($cmp.internalTabIndex)
    },
    key: 0,
    on: {
      "mouseover": _m0 || ($ctx._m0 = api_bind($cmp.handleMouseOver)),
      "mouseout": _m1 || ($ctx._m1 = api_bind($cmp.handleMouseOut)),
      "click": _m2 || ($ctx._m2 = api_bind($cmp.handleClick))
    }
  }, [api_custom_element("lightning-primitive-icon", _lightningPrimitiveIcon, {
    props: {
      "iconName": $cmp.computedHeaderIconName,
      "variant": $cmp.variant,
      "size": $cmp.size
    },
    key: 1
  }), $cmp.alternativeText ? api_element("span", stc0, [api_text(api_dynamic_text($cmp.alternativeText))]) : null])];
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
tmpl.stylesheetToken = "lwc-k9np1mvmfl";
freezeTemplate(tmpl);
