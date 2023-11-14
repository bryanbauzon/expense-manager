import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./shift_pattern.css";

import _implicitScopedStylesheets from "./shift_pattern.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M436 68h-40V52a32 32 0 00-64 0v16H188V52a32 32 0 00-64 0v16H84a48 48 0 00-48 48v16a16 16 0 0016 16h416a16 16 0 0016-16v-16a48 48 0 00-48-48zm32 128a16 16 0 0116 16v240a48 48 0 01-48 48H84a48 48 0 01-48-48V212a16 16 0 0116-16h416zM360 415h-94a10 10 0 00-10 9v26a10 10 0 0010 10h94a10 10 0 0010-10v-26a10 10 0 00-10-10zm0-108H155a10 10 0 00-9 9v63a10 10 0 0010 10h204a10 10 0 0010-10v-63a10 10 0 00-10-10zm-110-71h-95a10 10 0 00-9 10v26a10 10 0 0010 10h93a10 10 0 0010-10v-27a10 10 0 00-10-9z"${3}/></g>`;
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, h: api_element} = $api;
  return [api_element("svg", {
    className: $cmp.computedClass,
    attrs: {
      "focusable": "false",
      "data-key": $cmp.name,
      "aria-hidden": "true",
      "viewBox": "0 0 520 520",
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
tmpl.stylesheetToken = "lwc-203949063sv";
freezeTemplate(tmpl);
