import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./primitiveDatatableIeditPanel.css";

import _implicitScopedStylesheets from "./primitiveDatatableIeditPanel.scoped.css?scoped=true";

import _lightningPrimitiveDatatableIeditTypeFactory from "lightning/primitiveDatatableIeditTypeFactory";
import _lightningPrimitiveDatatableIeditInputWrapper from "lightning/primitiveDatatableIeditInputWrapper";
import _lightningInput from "lightning/input";
import _lightningButton from "lightning/button";
import {parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<span class="inline-edit-form-start${0}" tabindex="0"${2}></span>`;
const $fragment2 = parseFragment`<button type="submit" aria-hidden="true" tabindex="-1" class="slds-hide${0}" value="save"${2}></button>`;
const $fragment3 = parseFragment`<div class="inline-edit-form-end${0}" tabindex="0"${2}></div>`;
const stc0 = {
  "slds-popover": true,
  "slds-popover_edit": true
};
const stc1 = {
  classMap: {
    "slds-popover__body": true
  },
  key: 3
};
const stc2 = {
  "novalidate": ""
};
const stc3 = {
  "slds-grid": true,
  "slds-p-left_xx-small": true
};
const stc4 = {
  "dt-type-edit-factory": true,
  "slds-col": true
};
const stc5 = {
  "data-mass-selection": "true"
};
const stc6 = {
  classMap: {
    "slds-popover__footer": true
  },
  key: 10
};
const stc7 = {
  classMap: {
    "slds-grid": true,
    "slds-grid_align-end": true
  },
  key: 11
};
const stc8 = [["margin-left", ".25rem", false]];
const stc9 = {
  "data-form-last-element": "true"
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {b: api_bind, st: api_static_fragment, k: api_key, c: api_custom_element, i: api_iterator, f: api_flatten, h: api_element} = $api;
  const {_m0, _m1, _m2, _m3, _m4, _m5, _m6, _m7, _m8, _m9, _m10, _m11, _m12, _m13, _m14, _m15, _m16, _m17, _m18} = $ctx;
  return [$cmp.visible ? api_element("section", {
    classMap: stc0,
    style: $cmp.computedStyle,
    attrs: {
      "role": "dialog",
      "aria-label": $cmp.dialogAriaLabel,
      "tabindex": "-1"
    },
    key: 0,
    on: {
      "blur": _m0 || ($ctx._m0 = api_bind($cmp.handleTypeElemBlur)),
      "focus": _m1 || ($ctx._m1 = api_bind($cmp.handleTypeElemFocus)),
      "keydown": _m2 || ($ctx._m2 = api_bind($cmp.handleCellKeydown))
    }
  }, [api_static_fragment($fragment1(), 2, {
    on: {
      "focus": _m4 || ($ctx._m4 = api_bind($cmp.handleFormStartFocus))
    }
  }), api_element("div", stc1, [api_element("form", {
    attrs: stc2,
    key: 4,
    on: {
      "submit": _m5 || ($ctx._m5 = api_bind($cmp.handleEditFormSubmit))
    }
  }, [api_custom_element("lightning-primitive-datatable-iedit-input-wrapper", _lightningPrimitiveDatatableIeditInputWrapper, {
    classMap: stc3,
    props: {
      "required": $cmp.required
    },
    key: 5
  }, api_flatten([api_iterator($cmp._forceRerenderHackKey, function (reRenderItem) {
    return api_custom_element("lightning-primitive-datatable-iedit-type-factory", _lightningPrimitiveDatatableIeditTypeFactory, {
      classMap: stc4,
      props: {
        "required": $cmp.required,
        "columnDef": $cmp.columnDef,
        "typeAttributes": $cmp.resolvedTypeAttributes,
        "editedValue": $cmp.editedValue
      },
      key: api_key(6, $cmp.inputKey),
      on: {
        "blur": _m6 || ($ctx._m6 = api_bind($cmp.handleTypeElemBlur)),
        "focus": _m7 || ($ctx._m7 = api_bind($cmp.handleTypeElemFocus))
      }
    });
  })])), $cmp.isMassEditEnabled ? api_custom_element("lightning-input", _lightningInput, {
    attrs: stc5,
    props: {
      "type": "checkbox",
      "name": "dt-iedit-mass-edit",
      "label": $cmp.massEditCheckboxLabel
    },
    key: 7,
    on: {
      "change": _m8 || ($ctx._m8 = api_bind($cmp.handleMassCheckboxChange)),
      "blur": _m9 || ($ctx._m9 = api_bind($cmp.handleTypeElemBlur)),
      "focus": _m10 || ($ctx._m10 = api_bind($cmp.handleTypeElemFocus))
    }
  }) : null, !$cmp.isMassEditEnabled ? api_static_fragment($fragment2(), 9) : null])]), $cmp.isMassEditEnabled ? api_element("div", stc6, [api_element("div", stc7, [api_custom_element("lightning-button", _lightningButton, {
    props: {
      "label": $cmp.i18n.cancel
    },
    key: 12,
    on: {
      "blur": _m11 || ($ctx._m11 = api_bind($cmp.handleTypeElemBlur)),
      "focus": _m12 || ($ctx._m12 = api_bind($cmp.handleTypeElemFocus)),
      "click": _m13 || ($ctx._m13 = api_bind($cmp.cancelEditing))
    }
  }), api_custom_element("lightning-button", _lightningButton, {
    styleDecls: stc8,
    attrs: stc9,
    props: {
      "label": $cmp.i18n.apply,
      "variant": "brand"
    },
    key: 13,
    on: {
      "blur": _m14 || ($ctx._m14 = api_bind($cmp.handleTypeElemBlur)),
      "focus": _m15 || ($ctx._m15 = api_bind($cmp.handleTypeElemFocus)),
      "click": _m16 || ($ctx._m16 = api_bind($cmp.processSubmission))
    }
  })])]) : null, api_static_fragment($fragment3(), 15, {
    on: {
      "focus": _m18 || ($ctx._m18 = api_bind($cmp.handleFormEndsFocus))
    }
  })]) : null];
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
tmpl.stylesheetToken = "lwc-1drj7ekr9he";
freezeTemplate(tmpl);
