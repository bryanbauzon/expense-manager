import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./household.css";

import _implicitScopedStylesheets from "./household.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M515 206c-9-8-22-8-30 0L207 462c-15 14-5 38 15 38h38v240c0 33 27 60 60 60h360c33 0 60-27 60-60V500h38c20 0 30-24 15-38zM369 639c-2 3-6 1-10 1h-24c-15 0-25-8-25-24 1-24 25-36 51-47 18-8 21-15 21-23s-5-15-11-21a52 52 0 01-16-40c0-30 18-56 50-56 19 0 33 9 42 23a97 97 0 00-37 79c0 19 5 37 15 52 4 6 2 11-5 14-17 9-39 21-51 42zm207 71H424c-17 0-30-16-30-34 1-27 29-41 58-54 20-9 23-16 23-25s-6-17-12-23a57 57 0 01-18-44c0-33 20-62 56-62s56 29 56 62c0 18-6 33-18 44-7 6-12 14-12 23 0 8 3 16 23 25 29 13 57 27 58 54-2 18-15 34-32 34zm89-70h-24c-4 0-8 2-10-1-12-21-34-30-52-39-6-3-8-10-4-16 10-15 15-33 15-52 0-33-14-61-36-78 8-14 22-23 42-23 33 0 50 26 50 56 0 16-5 30-16 40-6 6-11 13-11 21s3 15 21 23c26 12 51 23 51 47-1 14-11 22-26 22z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-79r2hobik9c";
freezeTemplate(tmpl);
