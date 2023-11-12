import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./inline.css";

import _implicitScopedStylesheets from "./inline.scoped.css?scoped=true";

import _lightningIcon from "lightning/icon";
import _lightningBaseComboboxFormattedText from "lightning/baseComboboxFormattedText";
import {registerTemplate} from "lwc";
const stc0 = {
  classMap: {
    "slds-media__figure": true,
    "slds-listbox__option-icon": true
  },
  key: 0
};
const stc1 = {
  classMap: {
    "slds-media__body": true
  },
  key: 2
};
const stc2 = {
  "slds-truncate": true
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {c: api_custom_element, h: api_element, d: api_dynamic_text, t: api_text} = $api;
  return [api_element("span", stc0, [$cmp.item.iconName ? api_custom_element("lightning-icon", _lightningIcon, {
    props: {
      "alternativeText": $cmp.item.iconAlternativeText,
      "iconName": $cmp.item.iconName,
      "size": "x-small"
    },
    key: 1
  }) : null]), api_element("span", stc1, [!$cmp.textHasParts ? api_element("span", {
    classMap: stc2,
    attrs: {
      "title": $cmp.item.text
    },
    key: 3
  }, [api_text(api_dynamic_text($cmp.item.text))]) : null, $cmp.textHasParts ? api_custom_element("lightning-base-combobox-formatted-text", _lightningBaseComboboxFormattedText, {
    classMap: stc2,
    props: {
      "text": $cmp.item.text,
      "title": $cmp.text
    },
    key: 4
  }) : null])];
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
tmpl.stylesheetToken = "lwc-7co8ha3nedg";
freezeTemplate(tmpl);
