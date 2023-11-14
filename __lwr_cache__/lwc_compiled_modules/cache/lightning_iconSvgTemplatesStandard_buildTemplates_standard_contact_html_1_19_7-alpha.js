import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./contact.css";

import _implicitScopedStylesheets from "./contact.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M740 290H260c-33 0-60 27-60 60v290c0 33 27 60 60 60h480c33 0 60-27 60-60V350c0-33-27-60-60-60zM486 630H314c-19 0-34-21-34-41 1-30 32-48 65-63 23-10 26-19 26-29s-6-19-14-26a68 68 0 01-21-50c0-38 23-70 63-70s63 32 63 70c0 20-7 38-21 50-8 7-14 16-14 26s3 19 26 28c33 14 64 34 65 64 2 20-13 41-32 41zm234-70c0 11-9 20-20 20h-90c-11 0-20-9-20-20v-30c0-11 9-20 20-20h90c11 0 20 9 20 20v30zm0-110c0 11-9 20-20 20H550c-11 0-20-9-20-20v-30c0-11 9-20 20-20h150c11 0 20 9 20 20v30z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-74i53gb6r72";
freezeTemplate(tmpl);
