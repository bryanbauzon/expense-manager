import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./checkbox.css";

import _implicitScopedStylesheets from "./checkbox.scoped.css?scoped=true";

import {parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<span class="slds-checkbox_faux${0}"${2}></span>`;
const stc0 = {
  "slds-checkbox": true
};
const stc1 = {
  "slds-checkbox__label": true
};
const stc2 = {
  classMap: {
    "slds-form-element__label": true,
    "slds-assistive-text": true
  },
  key: 5
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {b: api_bind, gid: api_scoped_id, ti: api_tab_index, h: api_element, st: api_static_fragment, d: api_dynamic_text, t: api_text} = $api;
  const {_m0, _m1, _m2} = $ctx;
  return [api_element("span", {
    classMap: stc0,
    key: 0,
    on: {
      "click": _m0 || ($ctx._m0 = api_bind($cmp.handleCheckboxContainerClick)),
      "mousedown": _m1 || ($ctx._m1 = api_bind($cmp.handleCheckboxContainerMouseDown))
    }
  }, [api_element("input", {
    attrs: {
      "type": "checkbox",
      "name": $cmp.computedOptionName,
      "id": api_scoped_id("primitive-cell-checkbox-id"),
      "tabindex": api_tab_index($cmp.internalTabIndex),
      "data-navigation": "enable",
      "data-action-triggers": "space",
      "disabled": $cmp.isDisabled ? "" : null
    },
    props: {
      "checked": $cmp.isSelected
    },
    key: 1,
    on: {
      "click": _m2 || ($ctx._m2 = api_bind($cmp.handleCheckboxClick))
    }
  }), api_element("label", {
    classMap: stc1,
    attrs: {
      "id": api_scoped_id($cmp.labelId),
      "for": api_scoped_id("primitive-cell-checkbox-id")
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
tmpl.stylesheetToken = "lwc-5dh2dc254an";
freezeTemplate(tmpl);
