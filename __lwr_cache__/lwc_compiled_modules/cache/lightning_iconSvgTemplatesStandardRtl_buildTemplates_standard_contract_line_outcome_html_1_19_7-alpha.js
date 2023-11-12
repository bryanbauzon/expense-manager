import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./contract_line_outcome.css";

import _implicitScopedStylesheets from "./contract_line_outcome.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path fill-rule="evenodd" d="M743 415H595c-35 0-63-28-63-63V204c0-12-10-21-21-21H299c-35 0-63 28-63 63v508c0 35 28 63 63 63h226c-27-35-44-79-44-127h-37c-12 0-21-9-21-21v-21c0-11 9-21 21-21h47c8-23 19-45 34-63h-81c-12 0-21-10-21-21v-22c0-11 9-21 21-21h165a205 205 0 01155 0v-63c0-12-9-21-21-21zM337 691c-18 0-33-15-33-33s15-32 33-32 33 15 33 33-15 32-33 32zm-33-159c0 18 15 32 33 32s33-13 33-32c0-18-15-33-33-33s-33 15-33 33zm85-136l-46 25c-4 2-8-1-7-5l9-51-1-5-39-36c-1-3 2-7 5-8l51-7 4-2 23-48c2-3 6-3 8 0l24 48 3 2 52 7c3 1 5 5 2 8l-38 37-1 4 8 51c1 4-3 7-6 5l-47-25zm360-44H637c-23 0-42-19-42-42V198c0-9 6-15 15-15 4 0 7 1 10 4l140 140c3 3 4 6 4 10 0 9-6 15-15 15zm87 338a149 149 0 11-299 0 149 149 0 01299 0zm-128-82l-1-1c-3-3-8-3-10 1l-12 11v1c-3 3-3 8 0 11l29 32 2 4c0 3-2 6-5 6H601c-4 0-7 4-8 8v17c1 5 4 9 8 9l110 1 3 1c2 2 3 6 1 8l-29 32h-1c-2 4-2 9 1 12l11 12c3 4 8 4 10 0l70-77h1c2-3 2-9-1-12z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-36flk73f421";
freezeTemplate(tmpl);
