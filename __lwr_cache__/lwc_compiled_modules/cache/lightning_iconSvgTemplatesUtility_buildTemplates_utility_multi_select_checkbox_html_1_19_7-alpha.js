import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./multi_select_checkbox.css";

import _implicitScopedStylesheets from "./multi_select_checkbox.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M440 25H190a47 47 0 00-47 47v8c0 5 3 8 8 8h227c26 0 47 21 47 47v243c0 5 3 8 8 8h7c26 0 47-21 47-47V72c0-26-21-47-47-47zM330 135H80a47 47 0 00-47 47v266c0 26 21 47 47 47h250c26 0 47-21 47-47V182a46 46 0 00-47-47zm-20 133L190 388c-5 5-10 7-16 7-5 0-12-2-16-7l-58-58c-5-5-5-12 0-16l16-16c5-5 12-5 16 0l42 42 103-103c5-5 12-5 16 0l16 16c5 3 5 11 1 15z"${3}/></g>`;
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, h: api_element} = $api;
  return [api_element("svg", {
    className: $cmp.computedClass,
    attrs: {
      "focusable": "false",
      "data-key": $cmp.name,
      "aria-hidden": "true",
      "viewBox": "0 0 520 520",
      "part": "icon"
    },
    key: 0,
    svg: true
  }, [api_static_fragment($fragment1(), 2)])];
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
tmpl.stylesheetToken = "lwc-q5epn64cbk";
freezeTemplate(tmpl);
