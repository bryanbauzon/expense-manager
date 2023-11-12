import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./channel_program_members.css";

import _implicitScopedStylesheets from "./channel_program_members.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M487 681c0-59 28-112 72-145l-40-18c-43-18-49-34-49-52s12-34 26-47c25-23 39-54 39-91 0-69-43-128-119-128s-119 59-119 128c0 37 14 69 39 91 14 13 26 30 26 47s-7 34-49 52c-62 26-121 56-122 112 0 37 28 70 63 70h227l7-1zm183-118a119 119 0 000 238 119 119 0 000-238zm95 107h-31c-1-28-8-53-17-71 25 14 44 41 48 71zm-106-78v78h-27c1-37 13-66 27-78zm0 102v78c-13-11-25-41-27-78zm23 78v-78h28c-2 37-14 66-28 78zm0-102v-78c13 11 25 41 27 78zm-58-71c-10 19-15 43-17 71h-31c4-30 22-57 48-71zm-48 95h31c1 28 8 53 17 71a97 97 0 01-48-71zm140 71c10-19 15-43 17-71h31c-3 30-22 56-48 71z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2p7mq85ltvd";
freezeTemplate(tmpl);
