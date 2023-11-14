import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./channel_program_history.css";

import _implicitScopedStylesheets from "./channel_program_history.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M307 481a213 213 0 11424 43c-10 92-97 179-190 188-69 7-134-18-179-68-6-7-14-11-21-1l-23 28c-5 6-1 10 4 15a271 271 0 10-72-205l-1 10h-44c-13 0-19 15-12 23l73 88c6 7 16 7 22 0l73-88c8-10 1-23-12-23h-43zm214-100c-65 0-119 54-119 119s54 119 119 119 119-54 119-119-53-119-119-119zm95 107h-31c-1-28-8-53-17-71 26 14 44 41 48 71zm-106-78v78h-27c1-37 13-66 27-78zm0 102v78c-13-11-25-41-27-78zm23 78v-78h27c-1 37-13 66-27 78zm0-102v-78c13 11 25 41 27 78zm-57-71c-10 19-15 43-17 71h-31c3-30 21-57 48-71zm-49 95h31c1 28 8 53 17 71a95 95 0 01-48-71zm140 71c10-19 15-43 17-71h31c-3 30-21 57-48 71z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-t40r9cfbir";
freezeTemplate(tmpl);
