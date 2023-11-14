import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./hierarchy.css";

import _implicitScopedStylesheets from "./hierarchy.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M463 463H294c-10 0-19 8-19 18v144h-56c-10 0-19 9-19 19v137c0 10 9 19 19 19h187c10 0 19-9 19-19V644c0-10-9-19-19-19h-56v-87h300v87h-56c-10 0-19 9-19 19v137c0 10 9 19 19 19h188c10 0 18-9 18-19V644c0-10-8-19-18-19h-57V481c0-10-9-18-19-18H538v-88h56c10 0 18-9 18-19V219c0-10-8-19-18-19H406c-10 0-19 9-19 19v137c0 10 9 19 19 19h57v88z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-64ldum0u0nl";
freezeTemplate(tmpl);
