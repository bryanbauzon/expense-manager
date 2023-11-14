import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./service_crew_member.css";

import _implicitScopedStylesheets from "./service_crew_member.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M773 455h-55v-63c0-83-47-155-115-192v109c0 56-46 102-102 102s-102-46-102-102V199a217 217 0 00-118 194v63h-55c-15 0-28 12-28 28v5c0 15 12 28 28 28h546c15 0 28-12 28-28v-5c1-16-12-29-27-29zM501 351c23 0 42-19 42-42V178a202 202 0 00-83 0v131c0 23 18 42 41 42zm-1 475c-127 0-230-113-230-251h60c0 105 76 191 170 191s170-86 170-191h60c0 138-103 251-230 251z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-3lk2og8reev";
freezeTemplate(tmpl);
