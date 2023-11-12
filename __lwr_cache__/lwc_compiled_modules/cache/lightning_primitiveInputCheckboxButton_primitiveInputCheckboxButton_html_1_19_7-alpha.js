import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./primitiveInputCheckboxButton.css";

import _implicitScopedStylesheets from "./primitiveInputCheckboxButton.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  classMap: {
    "slds-checkbox_add-button": true
  },
  attrs: {
    "part": "input-checkbox-button"
  },
  key: 0
};
const stc1 = {
  "slds-assistive-text": true
};
const stc2 = {
  "slds-checkbox_faux": true
};
const stc3 = {
  classMap: {
    "slds-assistive-text": true
  },
  attrs: {
    "part": "label"
  },
  key: 3
};
const stc4 = {
  "slds-form-element__help": true
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {gid: api_scoped_id, b: api_bind, h: api_element, d: api_dynamic_text, t: api_text} = $api;
  const {_m0, _m1, _m2, _m3} = $ctx;
  return [api_element("div", stc0, [api_element("input", {
    classMap: stc1,
    attrs: {
      "type": "checkbox",
      "id": api_scoped_id("checkbox-button"),
      "aria-label": $cmp.ariaLabel,
      "aria-invalid": $cmp.ariaInvalid,
      "accesskey": $cmp.accessKey,
      "name": $cmp.name,
      "required": $cmp.required ? "" : null,
      "readonly": $cmp.readOnly ? "" : null,
      "disabled": $cmp.disabled ? "" : null,
      "part": "checkbox"
    },
    key: 1,
    on: {
      "blur": _m0 || ($ctx._m0 = api_bind($cmp.handleBlur)),
      "focus": _m1 || ($ctx._m1 = api_bind($cmp.handleFocus)),
      "change": _m2 || ($ctx._m2 = api_bind($cmp.handleChange)),
      "click": _m3 || ($ctx._m3 = api_bind($cmp.handleClick))
    }
  }), api_element("label", {
    classMap: stc2,
    attrs: {
      "for": api_scoped_id("checkbox-button"),
      "part": "faux-button"
    },
    key: 2
  }, [api_element("span", stc3, [api_text(api_dynamic_text($cmp.label))])])]), $cmp._helpMessage ? api_element("div", {
    classMap: stc4,
    attrs: {
      "id": api_scoped_id("help-message"),
      "data-help-message": "",
      "part": "help-text"
    },
    key: 4
  }, [api_text(api_dynamic_text($cmp._helpMessage))]) : null];
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
tmpl.stylesheetToken = "lwc-49ug9a33g5f";
freezeTemplate(tmpl);
