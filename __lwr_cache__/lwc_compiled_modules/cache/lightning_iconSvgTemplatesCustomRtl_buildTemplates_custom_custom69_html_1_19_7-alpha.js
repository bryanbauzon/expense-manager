import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom69.css";

import _implicitScopedStylesheets from "./custom69.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M526 451c-57-43-115-22-153 14-14 13-36 21-60 28-28 9-57 18-78 39-56 55-45 121 33 198l1 1 1 1c46 45 88 67 126 67 28 0 53-11 77-34 21-20 31-49 40-76 8-23 16-46 29-59 23-22 36-48 39-74 2-19-2-46-24-74 0 0-12-16-31-31zM402 692c-5 5-12 8-20 8s-14-3-19-8l-55-55a27 27 0 010-39c11-11 28-11 39 0l55 55c11 11 11 28 0 39zm48-82c-28 0-50-22-50-50s22-50 50-50 50 22 50 50-22 50-50 50zm344-358l-46-46c-8-8-22-8-31 0l-51 51c-8 8-8 22 0 31l2 2-103 103c-4 4-4 11 0 15l29 27c4 4 10 4 14 0l102-102 2 2c8 8 22 8 31 0l51-51c8-9 8-23 0-32z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-gkc20fmr5p";
freezeTemplate(tmpl);
