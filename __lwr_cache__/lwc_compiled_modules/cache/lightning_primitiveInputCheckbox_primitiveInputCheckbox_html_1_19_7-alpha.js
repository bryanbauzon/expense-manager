import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./primitiveInputCheckbox.css";

import _implicitScopedStylesheets from "./primitiveInputCheckbox.scoped.css?scoped=true";

import _lightningHelptext from "lightning/helptext";
import {parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<span part="indicator" class="slds-checkbox_faux${0}"${2}></span>`;
const $fragment2 = parseFragment`<span part="indicator" class="slds-checkbox_faux${0}"${2}></span>`;
const stc0 = {
  "slds-checkbox__label": true
};
const stc1 = {
  "slds-required": true
};
const stc2 = {
  classMap: {
    "slds-form-element__control": true,
    "slds-grow": true
  },
  key: 4
};
const stc3 = {
  "part": "input-checkbox"
};
const stc4 = {
  "part": "label"
};
const stc5 = {
  "slds-form-element__help": true
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {gid: api_scoped_id, t: api_text, h: api_element, d: api_dynamic_text, c: api_custom_element, b: api_bind, st: api_static_fragment} = $api;
  const {_m0, _m1, _m2, _m3} = $ctx;
  return [!$cmp.isStandardVariant ? api_element("label", {
    classMap: stc0,
    attrs: {
      "for": api_scoped_id("checkbox"),
      "part": "label-container"
    },
    key: 0
  }, [$cmp.required ? api_element("abbr", {
    classMap: stc1,
    attrs: {
      "title": $cmp.labelRequired
    },
    key: 1
  }, [api_text("*")]) : null, api_element("span", {
    className: $cmp.computedLabelClass,
    key: 2
  }, [api_text(api_dynamic_text($cmp.label))])]) : null, !$cmp.isStandardVariant ? $cmp.fieldLevelHelp ? api_custom_element("lightning-helptext", _lightningHelptext, {
    props: {
      "content": $cmp.fieldLevelHelp,
      "alternativeText": $cmp.helptextAlternativeText
    },
    key: 3
  }) : null : null, api_element("div", stc2, [api_element("span", {
    className: $cmp.computedCheckboxClass,
    attrs: stc3,
    key: 5
  }, [$cmp.isStandardVariant ? $cmp.required ? api_element("abbr", {
    classMap: stc1,
    attrs: {
      "title": $cmp.labelRequired
    },
    key: 6
  }, [api_text("*")]) : null : null, api_element("input", {
    attrs: {
      "type": "checkbox",
      "part": "checkbox",
      "id": api_scoped_id("checkbox"),
      "aria-label": $cmp.ariaLabel,
      "aria-invalid": $cmp.ariaInvalid,
      "accesskey": $cmp.accessKey,
      "name": $cmp.name,
      "required": $cmp.required ? "" : null,
      "readonly": $cmp.readOnly ? "" : null,
      "disabled": $cmp.disabled ? "" : null
    },
    key: 7,
    on: {
      "blur": _m0 || ($ctx._m0 = api_bind($cmp.handleBlur)),
      "focus": _m1 || ($ctx._m1 = api_bind($cmp.handleFocus)),
      "change": _m2 || ($ctx._m2 = api_bind($cmp.handleChange)),
      "click": _m3 || ($ctx._m3 = api_bind($cmp.handleClick))
    }
  }), !$cmp.isStandardVariant ? api_static_fragment($fragment1(), 9) : null, $cmp.isStandardVariant ? api_element("label", {
    classMap: stc0,
    attrs: {
      "for": api_scoped_id("checkbox"),
      "part": "label-container"
    },
    key: 10
  }, [api_static_fragment($fragment2(), 12), api_element("span", {
    className: $cmp.computedLabelClass,
    attrs: stc4,
    key: 13
  }, [api_text(api_dynamic_text($cmp.label))])]) : null, $cmp.isStandardVariant ? $cmp.fieldLevelHelp ? api_custom_element("lightning-helptext", _lightningHelptext, {
    props: {
      "content": $cmp.fieldLevelHelp,
      "alternativeText": $cmp.helptextAlternativeText
    },
    key: 14
  }) : null : null])]), $cmp.helpMessage ? api_element("div", {
    classMap: stc5,
    attrs: {
      "id": api_scoped_id("help-message"),
      "data-help-message": "",
      "part": "help-text"
    },
    key: 15
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
tmpl.stylesheetToken = "lwc-16hle61jt7i";
freezeTemplate(tmpl);
