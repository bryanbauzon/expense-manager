import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./combobox.css";

import _implicitScopedStylesheets from "./combobox.scoped.css?scoped=true";

import _lightningHelptext from "lightning/helptext";
import _lightningBaseCombobox from "lightning/baseCombobox";
import {registerTemplate} from "lwc";
const stc0 = {
  attrs: {
    "part": "combobox"
  },
  key: 0
};
const stc1 = {
  "slds-required": true
};
const stc2 = {
  classMap: {
    "slds-form-element__control": true
  },
  key: 4
};
const stc3 = {
  "slds-form-element__help": true
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {t: api_text, h: api_element, d: api_dynamic_text, c: api_custom_element, b: api_bind, gid: api_scoped_id} = $api;
  const {_m0, _m1, _m2, _m3, _m4} = $ctx;
  return [api_element("div", stc0, [api_element("label", {
    className: $cmp.computedLabelClass,
    key: 1
  }, [$cmp.required ? api_element("abbr", {
    classMap: stc1,
    attrs: {
      "title": $cmp.i18n.required
    },
    key: 2
  }, [api_text("*")]) : null, api_text(api_dynamic_text($cmp.label))]), $cmp._fieldLevelHelp ? api_custom_element("lightning-helptext", _lightningHelptext, {
    props: {
      "content": $cmp._fieldLevelHelp,
      "alternativeText": $cmp.helptextAlternativeText
    },
    key: 3
  }) : null, api_element("div", stc2, [api_custom_element("lightning-base-combobox", _lightningBaseCombobox, {
    props: {
      "name": $cmp.name,
      "autocomplete": $cmp.autocomplete,
      "rootAriaNode": $cmp.templateRootNode,
      "required": $cmp.required,
      "disabled": $cmp.disabled,
      "placeholder": $cmp.placeholder,
      "items": $cmp._items,
      "inputText": $cmp._selectedLabel,
      "inputLabel": $cmp.label,
      "inputIconSize": "xx-small",
      "inputIconName": "utility:down",
      "showDropdownActivityIndicator": $cmp.spinnerActive,
      "dropdownAlignment": $cmp.dropdownAlignment,
      "variant": $cmp.variant
    },
    key: 5,
    on: {
      "dropdownopen": _m0 || ($ctx._m0 = api_bind($cmp.handleDropdownOpen)),
      "focus": _m1 || ($ctx._m1 = api_bind($cmp.handleFocus)),
      "blur": _m2 || ($ctx._m2 = api_bind($cmp.handleBlur)),
      "ready": _m3 || ($ctx._m3 = api_bind($cmp.handleComboboxReady)),
      "select": _m4 || ($ctx._m4 = api_bind($cmp.handleSelect))
    }
  })]), $cmp._helpMessage ? api_element("div", {
    classMap: stc3,
    attrs: {
      "id": api_scoped_id("help-text"),
      "data-help-text": "",
      "aria-live": "assertive"
    },
    key: 6
  }, [api_text(api_dynamic_text($cmp._helpMessage))]) : null])];
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
tmpl.stylesheetToken = "lwc-24on3e8rogg";
freezeTemplate(tmpl);
