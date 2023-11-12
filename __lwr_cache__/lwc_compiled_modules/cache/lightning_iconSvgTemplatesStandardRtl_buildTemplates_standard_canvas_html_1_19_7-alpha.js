import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./canvas.css";

import _implicitScopedStylesheets from "./canvas.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M739 659c-2 34-6 71-12 106-2 11-12 21-23 22a1552 1552 0 01-406 0c-11-1-21-12-23-22a965 965 0 01-1-338c2-11 12-21 23-23 41-5 82-8 122-10 0 0 33-2 31-32-2-28-50-46-50-94 0-38 38-68 99-68s99 31 99 68c0 47-47 66-49 94-2 31 30 32 30 32 41 2 83 5 124 10 11 2 21 12 23 23 7 39 11 74 13 112 1 11-9 20-21 20l-11-1c-12 0-29-7-37-16 0 0-27-27-55-27-46-1-82 41-82 85s35 86 81 85c28-1 55-29 55-29 9-8 25-16 37-16l11-1c14 1 23 10 22 20z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-763lnth7vpa";
freezeTemplate(tmpl);
