import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./magicwand.css";

import _implicitScopedStylesheets from "./magicwand.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M282 210a10 10 0 00-14 0L29 449a29 29 0 000 42c12 12 30 12 42 0l239-239c4-4 4-10 0-14l-28-28zm70 0l32-32c6-6 6-15 0-21l-21-21c-6-6-15-6-21 0l-32 32a10 10 0 000 14l28 28c4 4 10 4 14 0zm-248-94a120 120 0 0180 80c2 6 10 6 12 0a120 120 0 0180-80c6-2 6-10 0-12a120 120 0 01-80-80 6 6 0 00-12 0 120 120 0 01-80 80c-5 2-5 10 0 12zm392 189a110 110 0 01-71-71 6 6 0 00-11 0 110 110 0 01-71 71c-5 2-5 9 0 11a110 110 0 0171 71c2 5 9 5 11 0a110 110 0 0171-71c5-2 5-10 0-11zM383 84c26 8 45 27 53 53 1 4 7 4 8 0a78 78 0 0153-53c4-1 4-7 0-8a78 78 0 01-53-53c-1-4-7-4-8 0a78 78 0 01-53 53c-4 1-4 7 0 8z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-4f7p6q85l12";
freezeTemplate(tmpl);
