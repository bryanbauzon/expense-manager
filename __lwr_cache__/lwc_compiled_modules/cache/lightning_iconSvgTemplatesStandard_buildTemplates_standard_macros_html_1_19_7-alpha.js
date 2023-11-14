import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./macros.css";

import _implicitScopedStylesheets from "./macros.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M647 675c-2 5-7 6-12 6h-58a9 9 0 01-9-9l1-5 1-1 2-2 128-155c4-5 5-12 2-17l-1-2-132-158-1-5c0-5 5-9 9-9h58c5 0 10 1 12 6l137 166c2 2 2 6 2 9l-2 10zm-143 0c-2 5-7 6-12 6h-58a9 9 0 01-9-9l1-5 1-1 2-2 127-155c4-5 5-12 2-17l-1-2-131-158-1-5c0-5 5-9 9-9h58c5 0 10 1 12 6l137 166c2 2 2 6 2 9l-2 10zm-144 0c-2 5-7 6-12 6H239a9 9 0 01-9-9l1-5 1-1 2-2 127-155c4-5 5-12 2-17l-1-2-130-158c-2-1-2-3-2-5 0-5 5-9 9-9h108c5 0 10 1 12 6l137 166c2 2 2 6 2 9l-2 10z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-540n36q24rk";
freezeTemplate(tmpl);
