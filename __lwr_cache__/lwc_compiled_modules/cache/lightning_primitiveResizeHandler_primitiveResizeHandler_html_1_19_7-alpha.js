import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./primitiveResizeHandler.css";

import _implicitScopedStylesheets from "./primitiveResizeHandler.scoped.css?scoped=true";

import {parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<span class="slds-resizable__handle${0}" style="will-change: transform;"${2}><span class="slds-resizable__divider${0}"${2}></span></span>`;
const stc0 = {
  classMap: {
    "slds-assistive-text": true
  },
  attrs: {
    "aria-live": "polite"
  },
  key: 0
};
const stc1 = {
  "slds-resizable__input": true,
  "slds-assistive-text": true
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {d: api_dynamic_text, t: api_text, h: api_element, b: api_bind, st: api_static_fragment} = $api;
  const {_m0, _m1, _m2, _m3, _m4, _m5, _m6, _m7, _m8, _m9, _m10, _m11, _m12} = $ctx;
  return [$cmp.showA11yLabel ? api_element("span", stc0, [api_text(api_dynamic_text($cmp.resizerLabel) + " " + api_dynamic_text($cmp.value))]) : null, api_element("input", {
    classMap: stc1,
    attrs: {
      "type": "range",
      "min": $cmp.minWidth,
      "max": $cmp.maxWidth,
      "aria-label": $cmp.resizerLabel,
      "aria-valuenow": $cmp.value,
      "aria-valuemin": $cmp.minWidth,
      "aria-valuemax": $cmp.maxWidth,
      "tabindex": "-1"
    },
    props: {
      "value": $cmp.value
    },
    key: 1,
    on: {
      "keydown": _m0 || ($ctx._m0 = api_bind($cmp.handleKeydown))
    }
  }), api_static_fragment($fragment1(), 3, {
    on: {
      "mousedown": _m7 || ($ctx._m7 = api_bind($cmp.onMouseDown)),
      "touchstart": _m8 || ($ctx._m8 = api_bind($cmp.onTouchStart)),
      "touchmove": _m9 || ($ctx._m9 = api_bind($cmp.onTouchMove)),
      "touchend": _m10 || ($ctx._m10 = api_bind($cmp.onTouchEnd)),
      "touchcancel": _m11 || ($ctx._m11 = api_bind($cmp.onTouchEnd)),
      "click": _m12 || ($ctx._m12 = api_bind($cmp.onClick))
    }
  })];
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
tmpl.stylesheetToken = "lwc-7kg80i98oc7";
freezeTemplate(tmpl);
