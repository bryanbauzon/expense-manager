import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./primitiveInputColor.css";

import _implicitScopedStylesheets from "./primitiveInputColor.scoped.css?scoped=true";

import _lightningHelptext from "lightning/helptext";
import _lightningPrimitiveColorpickerButton from "lightning/primitiveColorpickerButton";
import {registerTemplate} from "lwc";
const stc0 = {
  classMap: {
    "slds-color-picker": true
  },
  attrs: {
    "part": "color-picker"
  },
  key: 0
};
const stc1 = {
  classMap: {
    "slds-form-element": true,
    "slds-color-picker__summary": true
  },
  key: 1
};
const stc2 = {
  "slds-required": true
};
const stc3 = {
  classMap: {
    "slds-form-element__control": true
  },
  attrs: {
    "part": "input-text"
  },
  key: 5
};
const stc4 = {
  classMap: {
    "slds-color-picker__summary-input": true
  },
  attrs: {
    "part": "input-container"
  },
  key: 7
};
const stc5 = {
  "slds-input": true
};
const stc6 = {
  "slds-form-element__help": true
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {gid: api_scoped_id, t: api_text, h: api_element, d: api_dynamic_text, c: api_custom_element, b: api_bind} = $api;
  const {_m0, _m1, _m2, _m3, _m4, _m5, _m6} = $ctx;
  return [api_element("div", stc0, [api_element("div", stc1, [!$cmp.hasExternalLabel ? api_element("label", {
    className: $cmp.computedColorLabelClass,
    attrs: {
      "for": api_scoped_id("color")
    },
    key: 2
  }, [$cmp.required ? api_element("abbr", {
    classMap: stc2,
    attrs: {
      "title": $cmp.required
    },
    key: 3
  }, [api_text("*")]) : null, api_text(api_dynamic_text($cmp.label))]) : null, !$cmp.hasExternalLabel ? $cmp.fieldLevelHelp ? api_custom_element("lightning-helptext", _lightningHelptext, {
    props: {
      "content": $cmp.fieldLevelHelp,
      "alternativeText": $cmp.helptextAlternativeText
    },
    key: 4
  }) : null : null, api_element("div", stc3, [api_custom_element("lightning-primitive-colorpicker-button", _lightningPrimitiveColorpickerButton, {
    props: {
      "value": $cmp.value,
      "disabled": $cmp.disabled
    },
    key: 6,
    on: {
      "blur": _m0 || ($ctx._m0 = api_bind($cmp.handleBlur)),
      "focus": _m1 || ($ctx._m1 = api_bind($cmp.handleFocus)),
      "change": _m2 || ($ctx._m2 = api_bind($cmp.handleColorChange))
    }
  }), api_element("div", stc4, [api_element("input", {
    classMap: stc5,
    attrs: {
      "type": "text",
      "id": api_scoped_id("color"),
      "part": "input",
      "name": $cmp.name,
      "autocomplete": $cmp.autocomplete,
      "accesskey": $cmp.accessKey,
      "aria-label": $cmp.ariaLabel,
      "aria-invalid": $cmp.ariaInvalid,
      "disabled": $cmp.disabled ? "" : null,
      "minlength": "4",
      "maxlength": "7",
      "placeholder": $cmp.placeholder,
      "pattern": $cmp.pattern
    },
    key: 8,
    on: {
      "blur": _m3 || ($ctx._m3 = api_bind($cmp.handleBlur)),
      "focus": _m4 || ($ctx._m4 = api_bind($cmp.handleFocus)),
      "change": _m5 || ($ctx._m5 = api_bind($cmp.handleChange)),
      "input": _m6 || ($ctx._m6 = api_bind($cmp.handleInput))
    }
  })])])])]), $cmp.helpMessage ? api_element("div", {
    classMap: stc6,
    attrs: {
      "id": api_scoped_id("help-message"),
      "data-help-message": "",
      "part": "help-text"
    },
    key: 9
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
tmpl.stylesheetToken = "lwc-3oouck6ago4";
freezeTemplate(tmpl);
