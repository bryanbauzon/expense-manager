import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./primitiveInputFile.css";

import _implicitScopedStylesheets from "./primitiveInputFile.scoped.css?scoped=true";

import _lightningPrimitiveIcon from "lightning/primitiveIcon";
import _lightningPrimitiveFileDroppableZone from "lightning/primitiveFileDroppableZone";
import {registerTemplate} from "lwc";
const stc0 = {
  "slds-required": true
};
const stc1 = {
  classMap: {
    "slds-form-element__control": true
  },
  key: 2
};
const stc2 = {
  "slds-file-selector": true,
  "slds-file-selector_files": true
};
const stc3 = {
  "part": "file-selector"
};
const stc4 = {
  "slds-file-selector__input": true,
  "slds-assistive-text": true
};
const stc5 = {
  "slds-file-selector__body": true
};
const stc6 = {
  classMap: {
    "slds-file-selector__button": true,
    "slds-button": true,
    "slds-button_neutral": true
  },
  attrs: {
    "part": "button"
  },
  key: 7
};
const stc7 = {
  props: {
    "iconName": "utility:upload",
    "variant": "bare",
    "svgClass": "slds-button__icon slds-button__icon_left"
  },
  key: 8
};
const stc8 = {
  classMap: {
    "slds-file-selector__text": true,
    "slds-medium-show": true
  },
  key: 9
};
const stc9 = {
  "slds-form-element__help": true
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {gid: api_scoped_id, t: api_text, h: api_element, d: api_dynamic_text, b: api_bind, c: api_custom_element} = $api;
  const {_m0, _m1, _m2, _m3, _m4} = $ctx;
  return [api_element("span", {
    className: $cmp.labelClass,
    attrs: {
      "id": api_scoped_id("form-label"),
      "data-form-label": ""
    },
    key: 0
  }, [$cmp.required ? api_element("abbr", {
    classMap: stc0,
    attrs: {
      "title": $cmp.i18n.required
    },
    key: 1
  }, [api_text("*")]) : null, api_text(api_dynamic_text($cmp.label))]), api_element("div", stc1, [api_element("div", {
    classMap: stc2,
    attrs: stc3,
    key: 3,
    on: {
      "drop": _m0 || ($ctx._m0 = api_bind($cmp.handleDropFiles))
    }
  }, [api_custom_element("lightning-primitive-file-droppable-zone", _lightningPrimitiveFileDroppableZone, {
    props: {
      "multiple": $cmp.multiple,
      "disabled": $cmp.disabled
    },
    key: 4
  }, [api_element("input", {
    classMap: stc4,
    attrs: {
      "type": "file",
      "id": api_scoped_id("input-file"),
      "aria-label": $cmp.ariaLabel,
      "aria-invalid": $cmp.ariaInvalid,
      "accesskey": $cmp.accessKey,
      "accept": $cmp.accept,
      "multiple": $cmp.multiple ? "" : null,
      "name": $cmp.name,
      "required": $cmp.required ? "" : null,
      "readonly": $cmp.readOnly ? "" : null,
      "disabled": $cmp.disabled ? "" : null,
      "part": "input"
    },
    key: 5,
    on: {
      "blur": _m1 || ($ctx._m1 = api_bind($cmp.handleBlur)),
      "focus": _m2 || ($ctx._m2 = api_bind($cmp.handleFocus)),
      "click": _m3 || ($ctx._m3 = api_bind($cmp.handleFileClick)),
      "change": _m4 || ($ctx._m4 = api_bind($cmp.handleChange))
    }
  }), api_element("label", {
    classMap: stc5,
    attrs: {
      "id": api_scoped_id("file-selector-label"),
      "data-file-selector-label": "",
      "for": api_scoped_id("input-file"),
      "aria-hidden": "true"
    },
    key: 6
  }, [api_element("span", stc6, [api_custom_element("lightning-primitive-icon", _lightningPrimitiveIcon, stc7), api_text(api_dynamic_text($cmp.i18n.inputFileButtonLabel))]), api_element("span", stc8, [api_text(api_dynamic_text($cmp.i18n.inputFileBodyText))])])])])]), $cmp._helpMessage ? api_element("div", {
    classMap: stc9,
    attrs: {
      "id": api_scoped_id("help-message"),
      "data-help-message": "",
      "part": "help-text"
    },
    key: 10
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
tmpl.stylesheetToken = "lwc-24ep20h9ret";
freezeTemplate(tmpl);
