import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom46.css";

import _implicitScopedStylesheets from "./custom46.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M610 370H390c-11 0-20 9-20 20v220c0 11 9 20 20 20h220c11 0 20-9 20-20V390c0-11-9-20-20-20zm175-98c9-3 15-10 15-19v-33c0-11-9-20-20-20h-33c-9 0-16 6-19 15-6 20-25 35-48 35s-41-15-48-35c-3-9-10-15-19-15h-46c-9 0-16 6-19 15-6 20-25 35-48 35s-41-15-48-35c-3-9-10-15-19-15h-46c-9 0-16 6-19 15-6 20-25 35-48 35-22 0-41-15-48-35-3-9-10-15-19-15h-33c-11 0-20 9-20 20v33c0 9 6 16 15 19 20 6 35 25 35 48s-15 41-35 48c-9 3-15 10-15 19v46c0 9 6 16 15 19 20 6 35 25 35 48s-15 41-35 48c-9 3-15 10-15 19v46c0 9 6 16 15 19 20 6 35 25 35 48s-15 41-35 48c-9 3-15 10-15 19v33c0 11 9 20 20 20h33c9 0 16-6 19-15 6-20 25-35 48-35 22 0 41 15 48 35 3 9 10 15 19 15h46c9 0 16-6 19-15 6-20 25-35 48-35s41 15 48 35c3 9 10 15 19 15h46c9 0 16-6 19-15 6-20 25-35 48-35s41 15 48 35c3 9 10 15 19 15h33c11 0 20-9 20-20v-33c0-9-6-16-15-19-20-6-35-25-35-48s15-41 35-48c9-3 15-10 15-19v-46c0-9-6-16-15-19-20-6-35-25-35-48s15-41 35-48c9-3 15-10 15-19v-46c0-9-6-16-15-19-20-6-35-25-35-48s15-41 35-48zm-95 358c0 33-27 60-60 60H370c-33 0-60-27-60-60V370c0-33 27-60 60-60h260c33 0 60 27 60 60v260z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-6mlva356ok5";
freezeTemplate(tmpl);
