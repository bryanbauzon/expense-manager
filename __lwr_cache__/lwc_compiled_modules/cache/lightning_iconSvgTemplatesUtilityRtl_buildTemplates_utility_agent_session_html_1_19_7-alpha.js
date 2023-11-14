import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./agent_session.css";

import _implicitScopedStylesheets from "./agent_session.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M260 40C127 40 21 138 21 259c0 38 11 74 29 106 3 5 4 11 2 17l-31 85c-3 8 5 15 13 13l86-33c5-2 11-1 17 2 36 20 79 32 125 32 131-1 238-98 238-220-1-123-108-221-240-221zm-65 320c0 5-4 9-9 9h-42a9 9 0 01-9-9v-54c0-5 4-9 9-9h42c5 0 9 4 9 9zm96 0c0 5-4 9-9 9h-42a9 9 0 01-9-9V233c0-5 4-9 9-9h42c5 0 9 4 9 9zm96 0c0 5-4 9-9 9h-42a9 9 0 01-9-9V161c0-5 4-9 9-9h42c5 0 9 4 9 9z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-6rgcpfg5kli";
freezeTemplate(tmpl);
