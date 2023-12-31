import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom18.css";

import _implicitScopedStylesheets from "./custom18.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M500 320V214c0-8-6-14-14-14-4 0-7 1-10 4L344 336c-3 3-4 6-4 10 0 8 6 14 14 14h106c22 0 40-18 40-40zM226 526l154 154 4 1h33c3 0 3-2 3-5v-37L266 484c-8-8-20-8-28 0l-12 12c-8 8-8 20 0 30zm115 226c5 27 30 48 59 48h380c33 0 60-27 60-60V260c0-33-27-60-60-60H580c-11 0-20 9-20 20v140c0 33-27 60-60 60H360c-11 0-20 9-20 20v26c0 5 2 10 6 14l123 124c8 7 11 17 11 28v70c0 21-17 38-38 38h-91c-6 0-11 6-10 12zm419-352c0 11-9 20-20 20h-80c-11 0-20-9-20-20v-20c0-11 9-20 20-20h80c11 0 20 9 20 20zM560 620c0-11 9-20 20-20h160c11 0 20 9 20 20v20c0 11-9 20-20 20H580c-11 0-20-9-20-20zm-40-120c0-11 9-20 20-20h200c11 0 20 9 20 20v20c0 11-9 20-20 20H540c-11 0-20-9-20-20z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-31mcqirb3ro";
freezeTemplate(tmpl);
