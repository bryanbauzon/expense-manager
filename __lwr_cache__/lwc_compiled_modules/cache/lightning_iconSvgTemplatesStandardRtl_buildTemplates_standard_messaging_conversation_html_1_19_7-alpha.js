import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./messaging_conversation.css";

import _implicitScopedStylesheets from "./messaging_conversation.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M547 713c106-39 168-104 187-197 45 23 76 67 76 119 0 22-6 42-15 61l16 54c4 12-8 24-20 20l-53-19c-21 12-46 19-73 19-49 0-92-22-118-57zM441 220c133 0 241 100 242 225 0 125-108 225-241 225-47 0-90-12-127-34-4-2-9-3-14-1l-70 25c-13 4-25-8-21-21l22-71c2-4 1-9-1-13-20-33-31-70-31-110 0-125 108-225 241-225zM320 370c-11 0-20 9-20 20v20c0 11 9 20 20 20h260c11 0 20-9 20-20v-20c0-11-9-20-20-20zm0 110c-11 0-20 9-20 20v20c0 11 9 20 20 20h140c11 0 20-9 20-20v-20c0-11-9-20-20-20z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-95l09gqc75";
freezeTemplate(tmpl);
