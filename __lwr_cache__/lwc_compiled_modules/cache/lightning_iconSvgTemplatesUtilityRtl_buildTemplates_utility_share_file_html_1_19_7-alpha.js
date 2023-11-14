import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./share_file.css";

import _implicitScopedStylesheets from "./share_file.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M410 159h78c4 0 7-5 4-9l-83-83c-4-3-9 0-9 4v78c0 6 4 10 10 10zm80 40H380a20 20 0 01-20-20V69c0-6-4-10-10-10H215c-8 0-15 7-15 15v40c0 4 2 8 4 11l56 56c8 8 14 19 16 31 2 16-3 31-14 43l-16 15c-5 5-10 8-16 11 7 3 15 5 23 6 26 2 47 24 47 51v22a52 52 0 01-56 50l-32-5c-6-2-12 3-12 10v31c0 8 7 15 15 15h270c8 0 15-7 15-15V210c0-6-4-10-10-11zM260 358v-22c0-6-5-10-11-11a110 110 0 01-99-108v-12c0-6 8-10 12-5l40 40a10 10 0 0015 0l15-15a10 10 0 000-15l-97-97a10 10 0 00-15 0l-97 97a10 10 0 000 15l15 15c4 4 11 5 15 1l42-40c5-5 14-1 14 5v19c0 72 63 138 139 144 7 0 12-5 12-11z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-6a67jon16b3";
freezeTemplate(tmpl);
