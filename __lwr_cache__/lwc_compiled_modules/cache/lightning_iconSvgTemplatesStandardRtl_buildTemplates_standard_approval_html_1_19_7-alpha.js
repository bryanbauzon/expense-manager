import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./approval.css";

import _implicitScopedStylesheets from "./approval.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M740 540H630c-33 0-60-27-60-60 5-89 46-94 50-151 4-60-34-114-93-127-78-16-147 43-147 118 0 66 45 66 50 160 0 33-27 60-60 60H260c-33 0-60 27-60 60v40c0 11 9 20 20 20h560c11 0 20-9 20-20v-40c0-33-27-60-60-60zm1 180H259c-11 0-19 9-19 19v1c0 33 27 60 60 60h401c33 0 59-27 59-60v-1c0-10-9-19-19-19z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-6sprb84giql";
freezeTemplate(tmpl);
