import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom36.css";

import _implicitScopedStylesheets from "./new_custom36.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M172 436h-32c-5 0-11 3-13 8l-11 19c-6 11-4 26 6 33 4 3 9 4 13 4 8 0 16-4 20-12l23-40c4-6 0-12-6-12zm222 8c-3-5-8-8-13-8h-32c-6 0-10 6-7 12l23 40c5 8 13 12 20 12 5 0 9-2 13-4 10-7 13-22 6-33zm-1-424H127c-26 0-47 22-47 48v272c0 26 21 48 47 48h266c26 0 47-22 47-48V68c0-26-21-48-47-48zM150 356c-13 0-23-10-23-24s10-24 23-24 23 10 23 24-9 24-23 24zm220 0c-13 0-23-10-23-24s10-24 23-24 23 10 23 24-10 24-23 24zm23-96c0 9-7 16-16 16H143c-9 0-16-7-16-16V100c0-9 7-16 16-16h235c9 0 16 7 16 16v160z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-8llmbg6atg";
freezeTemplate(tmpl);
