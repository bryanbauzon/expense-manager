import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./slack_conversations.css";

import _implicitScopedStylesheets from "./slack_conversations.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M399 222c0-98-84-177-189-178-104 0-189 78-190 175 0 32 8 61 23 87 2 3 3 7 2 10l-18 56c-4 10 6 19 16 16l56-19c3-2 7-1 10 1a195 195 0 00100 27c104 1 189-77 190-175zM174 82a28 28 0 0128 28v28h-28a28 28 0 010-56zm-42 168c0 15-13 28-28 28s-28-13-28-28 13-28 28-28h28zm70 70c0 15-13 28-28 28s-28-13-28-28v-70a28 28 0 1156 0zm-28-112h-70a28 28 0 110-56h70a28 28 0 110 56zm112-28a28 28 0 1128 28h-28zm-70-70a28 28 0 1156 0v70c0 15-13 28-28 28s-28-13-28-28zm28 238a28 28 0 01-28-28v-28h28a28 28 0 010 56zm70-70h-70c-15 0-28-13-28-28s13-28 28-28h70c15 0 28 13 28 28s-13 28-28 28zm185 181l-13-42a101 101 0 0012-47 105 105 0 00-59-94c-15 73-64 124-147 155a116 116 0 0092 44c21 0 41-5 58-14l41 14a13 13 0 0016-16z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-k9v3suugk";
freezeTemplate(tmpl);
