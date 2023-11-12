import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./contact.css";

import _implicitScopedStylesheets from "./contact.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M200 350v290c0 33 27 60 60 60h480c33 0 60-27 60-60V350c0-33-27-60-60-60H260c-33 0-60 27-60 60zm282 239c1-30 32-50 65-64 23-9 26-18 26-28s-6-19-14-26a64 64 0 01-21-50c0-38 23-70 63-70s63 32 63 70c0 20-8 38-21 50-8 7-14 16-14 26s3 19 26 29c33 15 64 33 65 63 0 20-15 41-34 41H514c-19 0-34-21-32-41zm-202-59c0-11 9-20 20-20h90c11 0 20 9 20 20v30c0 11-9 20-20 20h-90c-11 0-20-9-20-20zm0-110c0-11 9-20 20-20h150c11 0 20 9 20 20v30c0 11-9 20-20 20H300c-11 0-20-9-20-20z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-758uep698mk";
freezeTemplate(tmpl);
