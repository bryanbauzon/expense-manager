import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom79.css";

import _implicitScopedStylesheets from "./new_custom79.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M178 193c-29 0-52 23-52 52s23 52 52 52 52-23 52-52-23-52-52-52zm300 163H335v-59h15c8 0 15-7 15-15v-44c0-8-7-15-15-15h-17c-12-74-75-131-153-133-89-1-161 70-160 157 2 86 74 153 161 153h274v15c0 8 7 15 15 15h15c8 0 15-7 15-15v-37c0-12-10-22-22-22zm-300-15c-54 0-97-43-97-96s43-96 97-96 97 43 97 96-43 96-97 96z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-5t7qatf1jf";
freezeTemplate(tmpl);
