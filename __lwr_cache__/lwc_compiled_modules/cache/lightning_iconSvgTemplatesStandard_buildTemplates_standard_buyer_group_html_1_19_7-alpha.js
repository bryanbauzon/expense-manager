import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./buyer_group.css";

import _implicitScopedStylesheets from "./buyer_group.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M373 431c-15-24-24-52-24-83 0-52 22-96 57-122a73 73 0 00-66-36c-51 0-79 41-79 88 0 26 9 47 26 63 10 9 18 20 18 33 0 12-4 23-33 35-41 19-79 42-80 81 0 26 17 44 41 44h38c6 0 12-4 15-9 19-33 53-55 82-69 7-5 11-17 5-25zm211 233h133c4 0 8-3 8-7l24-86c2-6-3-11-8-11H536l-3-13c-2-6-7-10-13-10h-22c-7 0-14 6-14 13-1 8 6 14 13 14h13l12 40 30 103c2 6 7 10 13 10h156c7 0 14-6 14-13 1-8-6-14-13-14H584c-6 0-11-4-13-9v-1c-2-8 4-16 13-16zm-100-48l-4-15a53 53 0 01-35-53c1-28 26-50 54-50h21c18 0 34 9 44 23h57c-16-11-35-20-54-28-32-13-36-26-36-39s9-26 19-36c19-17 29-41 29-70 0-52-32-97-88-97s-88 45-88 97c0 28 11 52 29 70 11 10 19 23 19 36s-5 26-36 39c-48 19-92 42-93 85 0 28 20 53 47 53h118zm147-268c0 31-8 59-24 83-6 9-3 20 7 26 28 13 60 33 79 64h48c10 0 19 3 27 9 13-7 21-21 21-39-1-39-39-63-80-82-29-12-33-24-33-35 0-12 8-24 18-33 17-16 26-37 26-63 0-48-28-88-79-88-31 0-53 14-66 36 34 26 56 69 56 122z"${3}/><circle cx="587" cy="767" r="22"${3}/><circle cx="695" cy="767" r="22"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-6iee0fhmflu";
freezeTemplate(tmpl);
