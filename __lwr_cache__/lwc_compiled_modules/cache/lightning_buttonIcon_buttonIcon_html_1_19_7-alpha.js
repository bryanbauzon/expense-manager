import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./buttonIcon.css";

import _implicitScopedStylesheets from "./buttonIcon.scoped.css?scoped=true";

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
  const {_m0, _m1} = $ctx;
  return [api_element("button", {
    className: $cmp.computedButtonClass,
    attrs: {
      "disabled": $cmp.disabled ? "" : null,
      "name": $cmp.name,
      "title": $cmp.computedTitle,
      "accesskey": $cmp.accessKey,
      "type": $cmp.normalizedType,
      "value": $cmp.value,
      "aria-label": $cmp.ariaLabel,
      "aria-expanded": $cmp.computedAriaExpanded,
      "aria-live": $cmp.computedAriaLive,
      "aria-atomic": $cmp.computedAriaAtomic,
      "aria-haspopup": $cmp.computedAriaHasPopup,
      "part": "button button-icon",
      "tabindex": api_tab_index($cmp.tabIndex)
    },
    key: 0,
    on: {
      "focus": _m0 || ($ctx._m0 = api_bind($cmp.handleFocus)),
      "blur": _m1 || ($ctx._m1 = api_bind($cmp.handleBlur))
    }
  }, [api_custom_element("lightning-primitive-icon", _lightningPrimitiveIcon, {
    props: {
      "iconName": $cmp.iconName,
      "svgClass": $cmp.computedIconClass,
      "variant": "bare"
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
tmpl.stylesheetToken = "lwc-3o1g0ksgj78";
freezeTemplate(tmpl);
