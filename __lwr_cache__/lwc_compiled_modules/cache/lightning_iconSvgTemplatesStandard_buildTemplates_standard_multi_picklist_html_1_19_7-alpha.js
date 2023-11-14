import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./multi_picklist.css";

import _implicitScopedStylesheets from "./multi_picklist.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M730 200H410c-33 0-60 27-60 60v10c0 6 4 10 10 10h290c33 0 60 27 60 60v310c0 6 4 10 10 10h10c33 0 60-27 60-60V260c0-33-27-60-60-60zM590 340H270c-33 0-60 27-60 60v340c0 33 27 60 60 60h320c33 0 60-27 60-60V400c0-33-27-60-60-60zM350 700c0 11-9 20-20 20h-20c-11 0-20-9-20-20v-20c0-11 9-20 20-20h20c11 0 20 9 20 20zm0-120c0 11-9 20-20 20h-20c-11 0-20-9-20-20v-20c0-11 9-20 20-20h20c11 0 20 9 20 20zm0-120c0 11-9 20-20 20h-20c-11 0-20-9-20-20v-20c0-11 9-20 20-20h20c11 0 20 9 20 20zm220 240c0 11-9 20-20 20H412c-11 0-20-9-20-20v-20c0-11 9-20 20-20h138c11 0 20 9 20 20zm0-120c0 11-9 20-20 20H412c-11 0-20-9-20-20v-20c0-11 9-20 20-20h138c11 0 20 9 20 20zm0-120c0 11-9 20-20 20H412c-11 0-20-9-20-20v-20c0-11 9-20 20-20h138c11 0 20 9 20 20z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-b37c68a1q0";
freezeTemplate(tmpl);
