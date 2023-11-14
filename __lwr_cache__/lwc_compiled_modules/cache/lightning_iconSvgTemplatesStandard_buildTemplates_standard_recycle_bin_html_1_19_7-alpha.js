import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./recycle_bin.css";

import _implicitScopedStylesheets from "./recycle_bin.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M744 300H588v-50c0-27-22-50-50-50h-75c-27 0-50 22-50 50v50H256c-10 0-19 9-19 19v37c0 10 9 19 19 19h487c10 0 19-9 19-19v-37c0-10-8-19-18-19zm-208 0h-74v-37c0-7 5-12 12-12h50c7 0 12 5 12 12v37zm158 125H306c-10 0-19 9-19 19v294c0 35 27 62 62 62h300c35 0 62-27 62-62V444c1-10-7-19-17-19zM466 736l-63 1c-2 0-26 0-42-25-17-27-4-50 15-83l-18-12c-2-1-3-3-2-5 0-2 1-3 4-4l49-12 4-1c2 0 4 0 6 4l1 4 11 50c0 2 0 4-2 5h-6l-16-10c-17 29-20 38-15 45 5 8 12 9 12 9l62-1c6 0 12 3 15 8l3 9c0 10-8 18-18 18zm45-182c0-2 1-4 3-5l17-8c-15-30-21-37-30-37-10 0-13 5-14 6l-33 53c-3 5-9 8-15 8l-9-3c-8-5-11-16-5-24l33-53c1-2 14-22 43-22 32 0 44 24 62 58l20-9c2-1 4 0 5 1s2 3 1 5l-17 51-3 3h-4l-51-19c-2-1-3-3-3-5zm131 153c-15 28-42 28-80 27l-1 22c0 2-1 4-3 4-1 0-3 1-5-1l-37-39c-3-3 0-6 0-6l2-2 40-35c2-1 3-2 5-1s3 3 3 5l-1 19c33 0 43-1 47-9s2-14 1-15l-31-54c-3-5-3-12 0-17l7-7c8-5 19-2 24 7l31 54c1 2 12 22-2 48z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-4h0odj1ofjd";
freezeTemplate(tmpl);
