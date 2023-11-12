import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./timepicker.css";

import _implicitScopedStylesheets from "./timepicker.scoped.css?scoped=true";

import _lightningHelptext from "lightning/helptext";
import _lightningBaseCombobox from "lightning/baseCombobox";
import {registerTemplate} from "lwc";
const stc0 = {
  "slds-required": true
};
const stc1 = {
  classMap: {
    "slds-form-element__control": true
  },
  key: 3
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {t: api_text, h: api_element, d: api_dynamic_text, c: api_custom_element, b: api_bind, gid: api_scoped_id} = $api;
  const {_m0, _m1, _m2, _m3, _m4, _m5, _m6} = $ctx;
  return [!$cmp.hasExternalLabel ? $cmp.required ? api_element("abbr", {
    classMap: stc0,
    attrs: {
      "title": $cmp.i18n.required
    },
    key: 0
  }, [api_text("*")]) : null : null, !$cmp.hasExternalLabel ? api_element("label", {
    className: $cmp.computedLabelClass,
    key: 1
  }, [api_text(api_dynamic_text($cmp.label))]) : null, !$cmp.hasExternalLabel ? $cmp.fieldLevelHelp ? api_custom_element("lightning-helptext", _lightningHelptext, {
    props: {
      "content": $cmp.fieldLevelHelp,
      "alternativeText": $cmp.helptextAlternativeText
    },
    key: 2
  }) : null : null, api_element("div", stc1, [api_custom_element("lightning-base-combobox", _lightningBaseCombobox, {
    attrs: {
      "data-aria-invalid": $cmp.computedAriaInvalid
    },
    props: {
      "part": "input-container",
      "autocomplete": $cmp.autocomplete,
      "dropdownHeight": "small",
      "name": $cmp.name,
      "variant": "lookup",
      "placeholder": $cmp.placeholder,
      "disabled": $cmp.disabled,
      "readOnly": $cmp.readOnly,
      "required": $cmp.required,
      "items": $cmp.items,
      "inputText": $cmp.displayValue,
      "inputIconName": "utility:clock",
      "inputLabel": $cmp.ariaLabel,
      "inputControlsElement": $cmp.ariaControlsElement,
      "inputLabelledByElement": $cmp.ariaLabelledByElement,
      "dropdownAlignment": "auto",
      "rootAriaNode": $cmp.rootAriaNode,
      "inputDescribedByElements": $cmp.ariaDescribedByElements,
      "ariaErrorMessageElements": $cmp.ariaErrorMessageElements
    },
    key: 4,
    on: {
      "ready": _m0 || ($ctx._m0 = api_bind($cmp.handleReady)),
      "textchange": _m1 || ($ctx._m1 = api_bind($cmp.handleInputChange)),
      "textinput": _m2 || ($ctx._m2 = api_bind($cmp.handleTextInput)),
      "dropdownopenrequest": _m3 || ($ctx._m3 = api_bind($cmp.handleDropdownOpenRequest)),
      "focus": _m4 || ($ctx._m4 = api_bind($cmp.handleFocus)),
      "blur": _m5 || ($ctx._m5 = api_bind($cmp.handleBlur)),
      "select": _m6 || ($ctx._m6 = api_bind($cmp.handleTimeSelect))
    }
  })]), api_element("div", {
    className: $cmp.computedClass,
    attrs: {
      "id": api_scoped_id("error-message"),
      "data-error-message": ""
    },
    key: 5
  }, [api_text(api_dynamic_text($cmp._errorMessage))])];
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
tmpl.stylesheetToken = "lwc-2onco8hrliv";
freezeTemplate(tmpl);
