import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./primitiveInputRadio.css";

import _implicitScopedStylesheets from "./primitiveInputRadio.scoped.css?scoped=true";

import {parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<span class="slds-radio_faux${0}"${2}></span>`;
const stc0 = {
  classMap: {
    "slds-form-element__control": true
  },
  key: 0
};
const stc1 = {
  classMap: {
    "slds-radio": true
  },
  key: 1
};
const stc2 = {
  "slds-radio__label": true
};
const stc3 = {
  "slds-form-element__help": true
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {gid: api_scoped_id, b: api_bind, h: api_element, st: api_static_fragment, d: api_dynamic_text, t: api_text} = $api;
  const {_m0, _m1, _m2} = $ctx;
  return [api_element("div", stc0, [api_element("span", stc1, [api_element("input", {
    attrs: {
      "type": "radio",
      "id": api_scoped_id("radio"),
      "aria-invalid": $cmp.ariaInvalid,
      "accesskey": $cmp.accessKey,
      "name": $cmp.name,
      "required": $cmp.required ? "" : null,
      "readonly": $cmp.readOnly ? "" : null,
      "disabled": $cmp.disabled ? "" : null,
      "aria-label": $cmp.ariaLabel
    },
    key: 2,
    on: {
      "blur": _m0 || ($ctx._m0 = api_bind($cmp.handleBlur)),
      "focus": _m1 || ($ctx._m1 = api_bind($cmp.handleFocus)),
      "change": _m2 || ($ctx._m2 = api_bind($cmp.handleChange))
    }
  }), api_element("label", {
    classMap: stc2,
    attrs: {
      "for": api_scoped_id("radio")
    },
    key: 3
  }, [api_static_fragment($fragment1(), 5), api_element("span", {
    className: $cmp.computedLabelClass,
    key: 6
  }, [api_text(api_dynamic_text($cmp.label))])])])]), $cmp.helpMessage ? api_element("div", {
    classMap: stc3,
    attrs: {
      "id": api_scoped_id("help-message"),
      "data-help-message": "",
      "part": "help-text"
    },
    key: 7
  }, [api_text(api_dynamic_text($cmp.helpMessage))]) : null];
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
tmpl.stylesheetToken = "lwc-4943usg6b6";
freezeTemplate(tmpl);
