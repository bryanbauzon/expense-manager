import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./radio.css";

import _implicitScopedStylesheets from "./radio.scoped.css?scoped=true";

import {parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<span class="slds-radio_faux${0}"${2}></span>`;
const stc0 = {
  classMap: {
    "slds-radio": true
  },
  key: 0
};
const stc1 = {
  "slds-radio__label": true
};
const stc2 = {
  classMap: {
    "slds-form-element__label": true,
    "slds-assistive-text": true
  },
  key: 5
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {gid: api_scoped_id, ti: api_tab_index, b: api_bind, h: api_element, st: api_static_fragment, d: api_dynamic_text, t: api_text} = $api;
  const {_m0, _m1} = $ctx;
  return [api_element("span", stc0, [api_element("input", {
    attrs: {
      "type": "radio",
      "name": $cmp.computedOptionName,
      "id": api_scoped_id("primitive-checkbox-radio-id"),
      "tabindex": api_tab_index($cmp.internalTabIndex),
      "data-navigation": "enable",
      "data-action-triggers": "space",
      "aria-labelledby": api_scoped_id($cmp.ariaLabelledBy),
      "disabled": $cmp.isDisabled ? "" : null
    },
    props: {
      "checked": $cmp.isSelected
    },
    key: 1,
    on: {
      "click": _m0 || ($ctx._m0 = api_bind($cmp.handleRadioClick)),
      "keydown": _m1 || ($ctx._m1 = api_bind($cmp.handleRadioKeyDown))
    }
  }), api_element("label", {
    classMap: stc1,
    attrs: {
      "id": api_scoped_id($cmp.labelId),
      "for": api_scoped_id("primitive-checkbox-radio-id")
    },
    key: 2
  }, [api_static_fragment($fragment1(), 4), api_element("span", stc2, [api_text(api_dynamic_text($cmp.selectItemAssistiveText))])])])];
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
tmpl.stylesheetToken = "lwc-3i8l3ur8gta";
freezeTemplate(tmpl);
