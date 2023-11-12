import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom43.css";

import _implicitScopedStylesheets from "./new_custom43.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M498 212l1-4v-10l-1-2-1-1-1-2-1-1-87-123c-4-5-10-9-17-9H129c-7 0-14 4-18 9L23 191l-1 1-1 2-1 1-1 2v10l1 4v1l1 3 1 1 1 1 219 236 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1h16l1-1 1-1 1-1 1-1 1-1 1-1 1-1 1-1 1-1 219-236 1-1 1-1zm-238-30h-35l35-58 35 58zm0 43h44l-44 141-44-141zm38-122h55l-20 57zm-110 57l-20-57h55zm-17 65l40 130L91 225zm178 0h80L309 355zm87-43h-66l22-61zm-309-61l22 61H84z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-4ksav78babq";
freezeTemplate(tmpl);
