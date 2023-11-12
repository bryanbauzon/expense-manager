import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom46.css";

import _implicitScopedStylesheets from "./new_custom46.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M348 156H172c-9 0-16 7-16 16v176c0 9 7 16 16 16h176c9 0 16-7 16-16V172c0-9-7-16-16-16zm140-78c7-3 12-8 12-16V36c0-9-7-16-16-16h-26c-7 0-13 5-15 12a40 40 0 01-76 0c-4-7-9-12-17-12h-37c-7 0-13 5-15 12a40 40 0 01-76 0c-3-7-8-12-16-12h-36c-7 0-13 5-15 12-5 16-21 28-39 28S83 48 78 32c-3-7-8-12-16-12H36c-9 0-16 7-16 16v26c0 8 5 13 12 16a40 40 0 010 76c-7 3-12 8-12 16v37c0 7 5 13 12 15a40 40 0 010 76c-7 3-12 8-12 16v36c0 7 5 13 12 15 16 5 28 21 28 39s-12 33-28 38c-7 3-12 8-12 16v26c0 9 7 16 16 16h26c7 0 13-5 15-12a40 40 0 0176 0c2 7 8 12 15 12h37c7 0 13-5 15-12a40 40 0 0176 0c2 7 8 12 15 12h39c7 0 13-5 15-12a40 40 0 0176 0c2 7 8 12 15 12h26c9 0 16-7 16-16v-26c0-7-5-13-12-15a40 40 0 010-76c7-2 12-8 12-15v-37c0-7-5-13-12-15a40 40 0 010-76c7-2 12-8 12-15v-39c0-7-5-13-12-15-16-5-28-20-28-38s14-34 30-39zm-76 286c0 26-22 48-48 48H156c-26 0-48-22-48-48V156c0-26 22-48 48-48h208c26 0 48 22 48 48v208z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2pjkbj5lcdd";
freezeTemplate(tmpl);
