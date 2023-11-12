import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./colorPickerPanel.css";

import _implicitScopedStylesheets from "./colorPickerPanel.scoped.css?scoped=true";

import _lightningColorPickerCustom from "lightning/colorPickerCustom";
import _lightningButton from "lightning/button";
import {registerTemplate} from "lwc";
const stc0 = {
  "slds-popover": true,
  "slds-color-picker__selector": true,
  "slds-show": true,
  "slds-is-absolute": true
};
const stc1 = {
  "slds-popover__body": true
};
const stc2 = {
  classMap: {
    "slds-popover__footer": true
  },
  key: 3
};
const stc3 = {
  classMap: {
    "slds-color-picker__selector-footer": true,
    "fix-slds-color-picker__selector-footer": true
  },
  key: 4
};
const stc4 = {
  "slds-m-left_x-small": true
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {gid: api_scoped_id, b: api_bind, c: api_custom_element, h: api_element} = $api;
  const {_m0, _m1, _m2, _m3} = $ctx;
  return [api_element("section", {
    classMap: stc0,
    attrs: {
      "role": "dialog",
      "aria-label": "Choose a color",
      "aria-describedby": api_scoped_id("dialog-body-id")
    },
    key: 0,
    on: {
      "updateselectedcolor": _m0 || ($ctx._m0 = api_bind($cmp.handleUpdateSelectedColor)),
      "keydown": _m1 || ($ctx._m1 = api_bind($cmp.handleKeydown))
    }
  }, [api_element("div", {
    classMap: stc1,
    attrs: {
      "tabindex": "0",
      "id": api_scoped_id("dialog-body-id")
    },
    key: 1
  }, [api_custom_element("lightning-color-picker-custom", _lightningColorPickerCustom, {
    props: {
      "currentColor": $cmp.currentColor
    },
    key: 2
  })]), api_element("footer", stc2, [api_element("div", stc3, [api_custom_element("lightning-button", _lightningButton, {
    props: {
      "label": $cmp.i18n.cancelButton,
      "name": "cancel",
      "stretch": true
    },
    key: 5,
    on: {
      "click": _m2 || ($ctx._m2 = api_bind($cmp.handleCancelClick))
    }
  }), api_custom_element("lightning-button", _lightningButton, {
    classMap: stc4,
    props: {
      "variant": "brand",
      "label": $cmp.i18n.doneButton,
      "name": "done",
      "stretch": true
    },
    key: 6,
    on: {
      "click": _m3 || ($ctx._m3 = api_bind($cmp.handleDoneClick))
    }
  })])])])];
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
tmpl.stylesheetToken = "lwc-40plt1npuv1";
freezeTemplate(tmpl);
