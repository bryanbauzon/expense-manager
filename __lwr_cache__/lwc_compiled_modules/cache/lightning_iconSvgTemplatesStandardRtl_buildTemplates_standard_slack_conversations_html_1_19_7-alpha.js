import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./slack_conversations.css";

import _implicitScopedStylesheets from "./slack_conversations.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M673 452c0-122-105-221-235-222-131-1-237 97-238 219 0 40 10 76 29 108 3 4 3 9 2 13l-23 70c-4 13 8 24 21 20l69-24c5-2 10-1 13 1 37 22 79 34 125 34 130 1 236-97 237-219zM392 277c19 0 35 16 35 35v35h-35c-19 0-35-15-35-35s16-35 35-35zm-52 210a35 35 0 01-70 0c0-19 16-35 35-35h35zm87 88c0 19-16 35-35 35s-35-16-35-35v-88c0-19 16-35 35-35s35 16 35 35zm-35-140h-87c-20 0-35-16-35-35s16-35 35-35h87c20 0 35 16 35 35s-16 35-35 35zm140-35c0-19 16-35 35-35s35 16 35 35-16 35-35 35h-35zm-87-88c0-19 16-35 35-35s34 16 34 35l1 88c0 19-16 35-35 35s-35-16-35-35zm35 298c-19 0-35-16-35-35v-35h35a35 35 0 010 70zm87-88h-87c-19 0-35-15-35-34s16-36 35-36h87c20 0 35 17 35 36s-15 34-35 34zm232 227l-16-53c9-18 15-38 15-59 0-51-30-94-75-117-18 91-79 155-183 194 26 33 68 55 116 55 26 0 51-6 72-18l51 18c12 4 24-7 20-20z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-5nnmqhglsph";
freezeTemplate(tmpl);
