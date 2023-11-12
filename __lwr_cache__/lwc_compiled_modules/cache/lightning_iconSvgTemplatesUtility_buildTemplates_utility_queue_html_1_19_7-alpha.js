import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./queue.css";

import _implicitScopedStylesheets from "./queue.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M401 20c-23 0-43 17-51 40 30 14 53 44 61 80 25-6 44-30 44-59 0-34-24-61-54-61zm50 143a72 72 0 01-38 18c-2 22-10 42-22 58h88c12 0 20-9 20-20v-10c0-21-24-35-48-46zm-85 97a86 86 0 01-58 23c-2 25-9 47-20 67h112c13 0 24-11 24-24v-10c-1-26-29-42-58-56zM262 382a120 120 0 01-171-2c-36 18-71 40-71 73v15c0 18 14 32 31 32h251c17 0 31-15 31-32v-14c0-34-34-55-71-72zm44-286c-30 0-55 21-62 52 29 19 51 52 60 90h2c35 0 64-33 64-72 1-38-28-70-64-70z"${3}/><ellipse cx="177" cy="273" rx="86" ry="95"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-6d6ecpffkc";
freezeTemplate(tmpl);
