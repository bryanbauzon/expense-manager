import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./interactiveDialogBase.css";

import _implicitScopedStylesheets from "./interactiveDialogBase.scoped.css?scoped=true";

import _lightningFocusTrap from "lightning/focusTrap";
import {registerTemplate} from "lwc";
const stc0 = {
  "role": "presentation",
  "data-backdrop": ""
};
const stc1 = {
  key: 1
};
const stc2 = {
  "slds-assistive-text": true
};
const stc3 = {
  classMap: {
    "slds-modal__container": true
  },
  key: 4
};
const stc4 = {
  "slds-text-heading_medium": true
};
const stc5 = {
  "data-slot": ""
};
const stc6 = {
  lwc: {
    dom: "manual"
  }
};
const stc7 = {
  classMap: {
    "slds-modal__footer": true,
    "slds-theme_default": true
  },
  key: 8
};
const stc8 = {
  "slds-button": true,
  "slds-button_neutral": true
};
const stc9 = {
  "data-cancel-button": ""
};
const stc10 = {
  "slds-button": true,
  "slds-button_brand": true
};
const stc11 = {
  "data-ok-button": ""
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {h: api_element, b: api_bind, gid: api_scoped_id, d: api_dynamic_text, t: api_text, c: api_custom_element} = $api;
  const {_m0, _m1, _m2, _m3, _m4} = $ctx;
  return [api_element("div", {
    className: $cmp.modalBackdropCssClasses,
    attrs: stc0,
    key: 0
  }), api_custom_element("lightning-focus-trap", _lightningFocusTrap, stc1, [api_element("section", {
    className: $cmp.computedModalCssClasses,
    attrs: {
      "role": $cmp.role,
      "tabindex": "-1",
      "aria-modal": "true",
      "aria-label": $cmp.ariaLabel,
      "data-modal": ""
    },
    key: 2,
    on: {
      "keydown": _m0 || ($ctx._m0 = api_bind($cmp.handleModalKeyDown)),
      "privateclose": _m1 || ($ctx._m1 = api_bind($cmp.handlePrivateClose)),
      "privatechildrender": _m2 || ($ctx._m2 = api_bind($cmp.handlePrivateChildRender))
    }
  }, [$cmp.showAriaDescribedBy ? api_element("span", {
    classMap: stc2,
    attrs: {
      "id": api_scoped_id("modal-description"),
      "data-aria-description": ""
    },
    key: 3
  }, [api_text(api_dynamic_text($cmp.description))]) : null, api_element("div", stc3, [$cmp.showHeader ? api_element("div", {
    className: $cmp.computedModalHeaderCssClasses,
    key: 5
  }, [api_element("h1", {
    classMap: stc4,
    attrs: {
      "id": api_scoped_id("prompt-heading-id"),
      "data-modal-heading": ""
    },
    key: 6
  }, [api_text(api_dynamic_text($cmp.label))])]) : null, api_element("div", {
    className: $cmp.computedModalContentCssClasses,
    attrs: stc5,
    context: stc6,
    key: 7
  }), api_element("div", stc7, [!$cmp.hideCancel ? api_element("button", {
    classMap: stc8,
    attrs: stc9,
    key: 9,
    on: {
      "click": _m3 || ($ctx._m3 = api_bind($cmp.handleCloseClick))
    }
  }, [api_text(api_dynamic_text($cmp.cancelText))]) : null, api_element("button", {
    classMap: stc10,
    attrs: stc11,
    key: 10,
    on: {
      "click": _m4 || ($ctx._m4 = api_bind($cmp.handleOkClick))
    }
  }, [api_text(api_dynamic_text($cmp.okText))])])])])])];
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
tmpl.stylesheetToken = "lwc-6jtsd8ngusp";
freezeTemplate(tmpl);
