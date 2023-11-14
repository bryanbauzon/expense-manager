import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./walkthroughs.css";

import _implicitScopedStylesheets from "./walkthroughs.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M355 240c0-17 12-30 27-30h381c15 0 27 13 27 30v304c0 17-12 30-27 30h-45V316c0-17-12-30-28-30H355zM237 361c-15 0-27 13-27 30v305c0 17 12 30 27 30h132l32 51c9 14 26 17 38 7l6-6 38-53h135c15 0 27-13 27-29V391c0-17-12-30-27-30z"${3}/></g>`;
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, h: api_element} = $api;
  return [api_element("svg", {
    className: $cmp.computedClass,
    attrs: {
      "focusable": "false",
      "data-key": $cmp.name,
      "aria-hidden": "true",
      "viewBox": "0 0 1000 1000",
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
tmpl.stylesheetToken = "lwc-2cn2ff6dktp";
freezeTemplate(tmpl);
