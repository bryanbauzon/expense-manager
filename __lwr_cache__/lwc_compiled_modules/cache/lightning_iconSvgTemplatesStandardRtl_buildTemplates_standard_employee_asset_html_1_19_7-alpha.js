import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./employee_asset.css";

import _implicitScopedStylesheets from "./employee_asset.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M748 203H252a50 50 0 00-50 50v343a50 50 0 0050 50h495a50 50 0 0050-50V252a49 49 0 00-49-49zm-25 349a20 20 0 01-19 19H296a19 19 0 01-19-19V296a20 20 0 0119-19h407a20 20 0 0120 19zM413 723a50 50 0 00-50 50v6a20 20 0 0019 19h235a20 20 0 0019-19v-6a50 50 0 00-50-50zm89-279h-4a88 88 0 00-87 75c0 4 1 12 15 12h149c14 0 15-9 15-12a90 90 0 00-88-75z"${3}/><circle cx="501" cy="376" r="58"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-mdqdbtssfv";
freezeTemplate(tmpl);
