import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./picklist_choice.css";

import _implicitScopedStylesheets from "./picklist_choice.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M69 337H37c-9 0-16 7-16 16v32c0 9 7 16 16 16h33c9-1 15-8 14-16v-32c1-9-6-16-15-16zm96-219h316c9 0 16-7 16-16V70c0-9-7-16-16-16H165c-9 0-16 7-16 16v32c0 9 7 16 16 16zm0 142h316c9 0 16-7 16-16v-32c0-9-7-16-16-16H165c-9 0-16 7-16 16v32c0 8 7 16 16 16zM69 54H37c-9 0-16 7-16 16v32c0 9 7 16 16 16h33c9-1 15-8 14-16V69c1-8-6-15-15-15zm0 141H37c-9 0-16 7-16 16v32c0 9 7 16 16 16h33c9-1 15-8 14-16v-32c1-8-6-16-15-16zm140 202c0-18 6-36 17-50v-11h-61c-9 0-16 7-16 16v32c0 9 7 16 16 16h44v-3zm143-83c8-8 19-13 32-13 17 0 31 9 39 22 6-2 14-5 22-5 29 0 54 25 54 53 0 29-25 53-54 53l-10-1c-6 12-20 20-34 20-6 0-12-2-17-4a45 45 0 01-41 27c-20 0-36-12-42-29l-9 1a41 41 0 01-42-41 40 40 0 0121-36c-2-6-4-12-4-19 0-26 22-48 48-48a50 50 0 0137 20z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2b4677qqf7a";
freezeTemplate(tmpl);
