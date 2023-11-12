import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom50.css";

import _implicitScopedStylesheets from "./new_custom50.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M475 313a146 146 0 01-133-5c-2-2-6-2-8 0a146 146 0 01-144 0c-2-2-6-2-8 0-21 13-46 19-72 19-22 0-43-5-61-14-6-3-12 1-12 7v98c0 19 11 36 29 45 40 18 83 31 129 37 10 2 18-6 18-16v-61c0-27 22-48 47-48h1c26 0 47 22 47 48v61c0 10 9 17 18 16 45-6 88-19 129-37 18-8 29-25 29-45v-98c2-6-4-10-9-7zm-366-35c29 0 54-12 70-32 3-4 9-4 12 0a93 93 0 00140 0c3-4 9-4 12 0 16 19 42 32 70 32 45 0 83-32 87-71 1-6-2-11-6-15L290 30a47 47 0 00-59 0L26 192c-4 3-6 9-6 15 6 40 44 71 89 71z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-61e39q5575s";
freezeTemplate(tmpl);
