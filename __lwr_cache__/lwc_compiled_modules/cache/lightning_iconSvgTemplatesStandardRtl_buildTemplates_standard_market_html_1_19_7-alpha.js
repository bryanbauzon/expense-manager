import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./market.css";

import _implicitScopedStylesheets from "./market.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M256 414a214 214 0 11358 158h-23c-8 0-15 1-22 3-3-6-7-10-12-14 45-27 76-73 83-126h-57c-2 49-12 91-28 124-6-3-13-6-20-6h-19l-7 1c16-27 29-69 32-119h-50v128c-7 7-12 17-12 28 0 15 10 29 24 34l-33 3c-118 0-214-96-214-214zm327-21h57c-8-55-40-102-88-129 18 34 29 78 31 129zm-135 0V252c-24 21-45 74-49 141zm0 183V435h-49c4 67 25 120 49 141zm43-324v141h50c-4-67-25-120-50-141zM357 393c2-51 13-95 30-129-47 27-80 74-87 129zm0 42l-57 1c7 54 40 102 87 128-17-34-28-78-30-129zm237 253h120c4 0 7-2 8-6l22-75c2-5-2-10-8-10H550l-3-11c-2-6-7-9-12-9h-19c-7 0-13 5-13 11-1 7 5 13 12 13h11l38 126c2 6 6 9 12 9h142c7 0 13-5 13-11 1-7-5-13-12-13H594c-5 0-10-3-11-8v-1c-3-7 3-15 11-15zm2 112c11 0 21-9 21-20s-9-20-21-20-20 9-20 20 9 20 20 20zm98 0c12 0 21-9 21-20s-9-20-21-20-20 9-20 20 9 20 20 20z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-5uk4n5ditce";
freezeTemplate(tmpl);
