import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./primitiveInputToggle.css";

import _implicitScopedStylesheets from "./primitiveInputToggle.scoped.css?scoped=true";

import {parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<span class="slds-checkbox_faux${0}" part="indicator"${2}></span>`;
const stc0 = {
  classMap: {
    "slds-form-element__control": true
  },
  key: 0
};
const stc1 = {
  "slds-checkbox_toggle": true,
  "slds-grid": true
};
const stc2 = {
  "slds-required": true
};
const stc3 = {
  "slds-checkbox_faux_container": true
};
const stc4 = {
  classMap: {
    "slds-checkbox_on": true
  },
  key: 8
};
const stc5 = {
  classMap: {
    "slds-checkbox_off": true
  },
  key: 9
};
const stc6 = {
  "slds-form-element__help": true
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {gid: api_scoped_id, t: api_text, h: api_element, d: api_dynamic_text, b: api_bind, st: api_static_fragment} = $api;
  const {_m0, _m1, _m2, _m3} = $ctx;
  return [api_element("div", stc0, [api_element("label", {
    classMap: stc1,
    attrs: {
      "for": api_scoped_id("checkbox-toggle"),
      "part": "checkbox-toggle"
    },
    key: 1
  }, [$cmp.required ? api_element("abbr", {
    classMap: stc2,
    attrs: {
      "title": $cmp.labelRequired
    },
    key: 2
  }, [api_text("*")]) : null, api_element("span", {
    className: $cmp.computedLabelClass,
    key: 3
  }, [api_text(api_dynamic_text($cmp.label))]), api_element("input", {
    attrs: {
      "type": "checkbox",
      "id": api_scoped_id("checkbox-toggle"),
      "part": "checkbox",
      "accesskey": $cmp.accessKey,
      "aria-label": $cmp.ariaLabel,
      "aria-invalid": $cmp.ariaInvalid,
      "disabled": $cmp.disabled ? "" : null,
      "name": $cmp.name,
      "readonly": $cmp.readOnly ? "" : null,
      "required": $cmp.required ? "" : null
    },
    key: 4,
    on: {
      "blur": _m0 || ($ctx._m0 = api_bind($cmp.handleBlur)),
      "change": _m1 || ($ctx._m1 = api_bind($cmp.handleChange)),
      "focus": _m2 || ($ctx._m2 = api_bind($cmp.handleFocus)),
      "click": _m3 || ($ctx._m3 = api_bind($cmp.handleClick))
    }
  }), api_element("span", {
    classMap: stc3,
    attrs: {
      "id": api_scoped_id("toggle-description"),
      "data-toggle-description": "",
      "aria-live": "assertive"
    },
    key: 5
  }, [api_static_fragment($fragment1(), 7), api_element("span", stc4, [api_text(api_dynamic_text($cmp.messageToggleActive))]), api_element("span", stc5, [api_text(api_dynamic_text($cmp.messageToggleInactive))])])])]), $cmp._helpMessage ? api_element("div", {
    classMap: stc6,
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
tmpl.stylesheetToken = "lwc-1fmklhh3ll6";
freezeTemplate(tmpl);
