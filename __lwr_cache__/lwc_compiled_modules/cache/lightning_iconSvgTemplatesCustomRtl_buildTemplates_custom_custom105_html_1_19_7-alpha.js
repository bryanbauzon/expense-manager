import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom105.css";

import _implicitScopedStylesheets from "./custom105.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M761 263H240a36 36 0 00-36 36v26c0 3 1 5 3 7l263 215a43 43 0 0059 0l263-215a9 9 0 003-7v-25a36 36 0 00-34-37zM204 379c0-3 2-6 5-8 3-1 7-1 10 2l127 113c2 1 3 4 3 6a9 9 0 01-2 7L219 619a8 8 0 01-9 2 9 9 0 01-6-8V379zm0 292c0-2 1-5 3-6l160-150a8 8 0 0112 0l68 60a77 77 0 00105 0l68-60c4-3 9-3 12 0l161 149a9 9 0 012 7v29a36 36 0 01-35 37H240a36 36 0 01-36-37v-29zm592-58a9 9 0 01-6 8 9 9 0 01-9-2L653 499a9 9 0 01-2-7c0-3 1-5 3-7l128-113a8 8 0 019-1 9 9 0 015 8v234z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-76cucg6mra7";
freezeTemplate(tmpl);
