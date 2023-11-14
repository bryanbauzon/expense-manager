import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./employee_job.css";

import _implicitScopedStylesheets from "./employee_job.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M488 796c27 0 12-19 12-19a196 196 0 01-25-201l2-4a12 12 0 00-9-19 185 185 0 00-24-1 243 243 0 00-240 209c0 12 4 35 42 35h242zm164-284a142 142 0 10142 142 143 143 0 00-142-142zm-48 228a35 35 0 1135-35 35 35 0 01-35 35zm35-119a13 13 0 01-4 7l-27 15a5 5 0 01-7 0l-27-15a10 10 0 01-4-7v-31a10 10 0 014-7l27-15a5 5 0 017 0l27 15a10 10 0 014 7zm26-43a7 7 0 017-7h52a7 7 0 017 7v52a7 7 0 01-7 7h-51a7 7 0 01-7-7l-1-52zm69 132l-31 32a5 5 0 01-7 0l-31-32a5 5 0 010-7l31-32a5 5 0 017 0l31 32a5 5 0 010 7z"${3}/><circle cx="446" cy="363" r="160"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-12iu7rlojvv";
freezeTemplate(tmpl);
