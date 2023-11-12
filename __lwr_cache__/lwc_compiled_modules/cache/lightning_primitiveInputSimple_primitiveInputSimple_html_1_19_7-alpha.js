import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./primitiveInputSimple.css";

import _implicitScopedStylesheets from "./primitiveInputSimple.scoped.css?scoped=true";

import _lightningHelptext from "lightning/helptext";
import _lightningPrimitiveIcon from "lightning/primitiveIcon";
import {parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<div class="slds-spinner__dot-a${0}"${2}></div>`;
const $fragment2 = parseFragment`<div class="slds-spinner__dot-b${0}"${2}></div>`;
const stc0 = {
  attrs: {
    "part": "input-text"
  },
  key: 0
};
const stc1 = {
  "slds-required": true
};
const stc2 = {
  "slds-input": true
};
const stc3 = {
  props: {
    "iconName": "utility:search",
    "variant": "bare",
    "svgClass": "slds-input__icon slds-input__icon_left slds-icon-text-default"
  },
  key: 6
};
const stc4 = {
  classMap: {
    "slds-input__icon-group": true,
    "slds-input__icon-group_right": true
  },
  key: 7
};
const stc5 = {
  classMap: {
    "slds-spinner": true,
    "slds-spinner_brand": true,
    "slds-spinner_x-small": true,
    "slds-input__spinner": true
  },
  attrs: {
    "role": "status"
  },
  key: 8
};
const stc6 = {
  classMap: {
    "slds-assistive-text": true
  },
  key: 9
};
const stc7 = {
  "slds-input__icon": true,
  "slds-input__icon_right": true,
  "slds-button": true,
  "slds-button_icon": true
};
const stc8 = {
  "data-element-id": "searchClear"
};
const stc9 = {
  props: {
    "iconName": "utility:clear",
    "variant": "bare",
    "svgClass": "slds-button__icon"
  },
  key: 15
};
const stc10 = {
  classMap: {
    "slds-assistive-text": true
  },
  key: 16
};
const stc11 = {
  "slds-form-element__help": true
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {gid: api_scoped_id, t: api_text, h: api_element, d: api_dynamic_text, c: api_custom_element, b: api_bind, st: api_static_fragment} = $api;
  const {_m0, _m1, _m2, _m3, _m4, _m5, _m6} = $ctx;
  return [api_element("div", stc0, [!$cmp.hasExternalLabel ? api_element("label", {
    className: $cmp.computedLabelClass,
    attrs: {
      "for": api_scoped_id("input"),
      "part": "label"
    },
    key: 1
  }, [$cmp.required ? api_element("abbr", {
    classMap: stc1,
    attrs: {
      "title": $cmp.i18n.required
    },
    key: 2
  }, [api_text("*")]) : null, api_text(api_dynamic_text($cmp.label))]) : null, !$cmp.hasExternalLabel ? $cmp.fieldLevelHelp ? api_custom_element("lightning-helptext", _lightningHelptext, {
    props: {
      "content": $cmp.fieldLevelHelp,
      "alternativeText": $cmp.helptextAlternativeText
    },
    key: 3
  }) : null : null, api_element("div", {
    className: $cmp.computedFormElementClass,
    attrs: {
      "part": "input-container",
      "type": $cmp.internalType
    },
    key: 4
  }, [api_element("input", {
    classMap: stc2,
    attrs: {
      "accesskey": $cmp.accessKey,
      "aria-errormessage": api_scoped_id("help-message"),
      "aria-haspopup": $cmp.ariaHasPopup,
      "aria-invalid": $cmp.ariaInvalid,
      "aria-label": $cmp.ariaLabel,
      "autocomplete": $cmp.autocomplete,
      "disabled": $cmp.disabled ? "" : null,
      "id": api_scoped_id("input"),
      "inputmode": $cmp.inputMode,
      "max": $cmp.max,
      "maxlength": $cmp.maxLength,
      "min": $cmp.min,
      "minlength": $cmp.minLength,
      "name": $cmp.name,
      "part": "input",
      "pattern": $cmp.pattern,
      "placeholder": $cmp.placeholder,
      "required": $cmp.required ? "" : null,
      "readonly": $cmp.readOnly ? "" : null,
      "step": $cmp.step,
      "type": $cmp.internalType
    },
    key: 5,
    on: {
      "blur": _m0 || ($ctx._m0 = api_bind($cmp.handleBlur)),
      "change": _m1 || ($ctx._m1 = api_bind($cmp.handleChange)),
      "focus": _m2 || ($ctx._m2 = api_bind($cmp.handleFocus)),
      "input": _m3 || ($ctx._m3 = api_bind($cmp.handleInput)),
      "keydown": _m4 || ($ctx._m4 = api_bind($cmp.handleKeyDown))
    }
  }), $cmp.isTypeSearch ? api_custom_element("lightning-primitive-icon", _lightningPrimitiveIcon, stc3) : null, $cmp.isTypeSearch ? api_element("div", stc4, [$cmp.isLoading ? api_element("div", stc5, [api_element("span", stc6, [api_text(api_dynamic_text($cmp.i18n.loading))]), api_static_fragment($fragment1(), 11), api_static_fragment($fragment2(), 13)]) : null, $cmp.showClearButton ? api_element("button", {
    classMap: stc7,
    attrs: stc8,
    key: 14,
    on: {
      "blur": _m5 || ($ctx._m5 = api_bind($cmp.handleBlur)),
      "click": _m6 || ($ctx._m6 = api_bind($cmp.clearAndSetFocusOnInput))
    }
  }, [api_custom_element("lightning-primitive-icon", _lightningPrimitiveIcon, stc9), api_element("span", stc10, [api_text(api_dynamic_text($cmp.i18n.clear))])]) : null]) : null])]), $cmp._helpMessage ? api_element("div", {
    classMap: stc11,
    attrs: {
      "id": api_scoped_id("help-message"),
      "data-help-message": "",
      "part": "help-text"
    },
    key: 17
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
tmpl.stylesheetToken = "lwc-enmikoh2qu";
freezeTemplate(tmpl);
