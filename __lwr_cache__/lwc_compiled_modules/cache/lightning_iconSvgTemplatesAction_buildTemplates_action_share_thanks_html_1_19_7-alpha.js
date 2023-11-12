import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./share_thanks.css";

import _implicitScopedStylesheets from "./share_thanks.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M452 140h-70c20-31 18-73-6-98a72 72 0 00-51-22c-21 0-42 10-57 26l-8 10-8-10a76 76 0 00-57-26c-19 0-37 8-50 22-25 26-26 67-6 98H69c-27 0-49 22-49 48v32c0 9 7 16 16 16h448c9 0 16-7 16-16v-32c0-26-22-48-48-48zm-216 0c-17 0-41-6-54-21-12-13-14-34-2-44 5-5 10-6 15-6 8 0 16 4 22 10 14 15 19 41 19 57v4zm102-21a84 84 0 01-54 21v-5c0-16 6-42 19-57 6-6 14-10 22-10 4 0 10 1 16 6 10 12 9 32-3 45zm114 165H284v216h138c26 0 46-21 46-46V300c0-9-7-16-16-16zM52 300v152c0 26 22 48 48 48h136V284H68c-9 0-16 7-16 16z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-u4shkb76mr";
freezeTemplate(tmpl);
