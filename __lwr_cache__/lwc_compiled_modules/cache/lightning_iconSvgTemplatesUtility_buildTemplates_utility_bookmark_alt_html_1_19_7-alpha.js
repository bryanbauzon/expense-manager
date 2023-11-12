import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./bookmark_alt.css";

import _implicitScopedStylesheets from "./bookmark_alt.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M460 20H60a32 32 0 00-32 32v416a32 32 0 0049 27l183-114 183 114a32 32 0 0049-27V52a32 32 0 00-32-32zm-70 155l-75 55 29 88a6 6 0 01-4 7 5 5 0 01-5 0l-75-55-75 55a6 6 0 01-8-2 6 6 0 010-5l28-88-75-55a6 6 0 014-10h92l29-88a6 6 0 017-4 6 6 0 014 4l29 88h92a6 6 0 015 7 6 6 0 01-2 3z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-6c057gs8uns";
freezeTemplate(tmpl);
