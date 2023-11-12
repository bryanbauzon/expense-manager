import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./primitiveBubble.css";

import _implicitScopedStylesheets from "./primitiveBubble.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  "part": "overlay"
};
const stc1 = {
  "slds-popover__body": true
};
const stc2 = {
  lwc: {
    dom: "manual"
  }
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {b: api_bind, h: api_element} = $api;
  const {_m0, _m1} = $ctx;
  return [api_element("div", {
    className: $cmp.computedPopoverClass,
    attrs: stc0,
    key: 0,
    on: {
      "transitionend": _m0 || ($ctx._m0 = api_bind($cmp.handleTransitionEnd))
    }
  }, [api_element("div", {
    classMap: stc1,
    context: stc2,
    key: 1,
    on: {
      "mouseleave": _m1 || ($ctx._m1 = api_bind($cmp.handleMouseLeave))
    }
  })])];
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
tmpl.stylesheetToken = "lwc-5fnnbdvmu3k";
freezeTemplate(tmpl);
