import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom61.css";

import _implicitScopedStylesheets from "./new_custom61.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M444 20h-32c-9 0-16 7-16 16v32c0 9-7 16-16 16h-16c-9 0-16-7-16-16V36c0-9-6-16-16-16h-32c-9 0-16 7-16 16v32c0 9-7 16-16 16h-16c-9 0-16-7-16-16V36c0-9-7-16-16-16h-32c-9 0-16 7-16 16v32c0 9-7 16-16 16h-16c-9 0-16-7-16-16V36c0-9-7-16-16-16H76c-9 0-16 7-16 16v80c0 26 22 48 48 48h304c26 0 48-22 48-48V36c0-9-7-16-16-16zm-36 205c-1-8-8-14-16-14H128c-8 0-15 6-16 14L76 481c-2 10 6 18 16 18h103c9 0 17-7 17-16v-77c0-26 20-50 46-50 27-1 50 21 50 48v80c0 9 8 16 17 16h103c10 0 18-9 16-18z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-7o3f7p5q9f7";
freezeTemplate(tmpl);
