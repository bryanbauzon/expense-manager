import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./myModal.css";

import _implicitScopedStylesheets from "./myModal.scoped.css?scoped=true";

import {parseFragment, registerTemplate, sanitizeAttribute} from "lwc";
const $fragment1 = parseFragment`<span class="slds-assistive-text${0}"${2}>Cancel and close</span>`;
const $fragment2 = parseFragment`<div class="slds-backdrop slds-backdrop_open${0}" role="presentation"${2}></div>`;
const stc0 = {
  "slds-modal": true,
  "slds-fade-in-open": true
};
const stc1 = {
  classMap: {
    "slds-modal__container": true
  },
  key: 1
};
const stc2 = {
  classMap: {
    "slds-button": true,
    "slds-button_icon": true,
    "slds-modal__close": true,
    "slds-button_icon-inverse": true
  },
  key: 2
};
const stc3 = {
  classMap: {
    "slds-button__icon": true,
    "slds-button__icon_large": true
  },
  attrs: {
    "aria-hidden": "true"
  },
  key: 3,
  svg: true
};
const stc4 = {
  classMap: {
    "slds-modal__header": true
  },
  key: 7
};
const stc5 = {
  "slds-modal__title": true,
  "slds-hyphenate": true
};
const stc6 = {
  "slds-modal__content": true,
  "slds-p-around_medium": true
};
const stc7 = [["overflow", "visible", true]];
const stc8 = {
  key: 10
};
const stc9 = [];
const stc10 = {
  classMap: {
    "slds-modal__footer": true
  },
  key: 11
};
const stc11 = {
  attrs: {
    "name": "footer"
  },
  key: 12
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {gid: api_scoped_id, h: api_element, st: api_static_fragment, d: api_dynamic_text, t: api_text, s: api_slot} = $api;
  return [api_element("section", {
    classMap: stc0,
    attrs: {
      "role": "dialog",
      "tabindex": "-1",
      "aria-modal": "true",
      "aria-labelledby": api_scoped_id("modal-heading-01")
    },
    key: 0
  }, [api_element("div", stc1, [api_element("button", stc2, [api_element("svg", stc3, [api_element("use", {
    attrs: {
      "xlink:href": sanitizeAttribute("use", "http://www.w3.org/2000/svg", "xlink:href", "/assets/icons/utility-sprite/svg/symbols.svg#close")
    },
    key: 4,
    svg: true
  })]), api_static_fragment($fragment1(), 6)]), api_element("div", stc4, [api_element("h1", {
    classMap: stc5,
    attrs: {
      "id": api_scoped_id("modal-heading-01")
    },
    key: 8
  }, [api_text(api_dynamic_text($cmp.header))])]), api_element("div", {
    classMap: stc6,
    styleDecls: stc7,
    attrs: {
      "id": api_scoped_id("modal-content-id-1")
    },
    key: 9
  }, [api_slot("", stc8, stc9, $slotset)]), api_element("div", stc10, [api_slot("footer", stc11, stc9, $slotset)])])]), api_static_fragment($fragment2(), 14)];
  /*LWC compiler v3.0.0*/
}
export default registerTemplate(tmpl);
tmpl.slots = ["", "footer"];
tmpl.stylesheets = [];


if (_implicitStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets);
}
if (_implicitScopedStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitScopedStylesheets);
}
tmpl.stylesheetToken = "lwc-2isnv54ut5q";
freezeTemplate(tmpl);
