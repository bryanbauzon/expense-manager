import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./kanban.css";

import _implicitScopedStylesheets from "./kanban.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M565 383c0-10-9-19-19-19H434c-10 0-19 9-19 19v337c0 10 9 19 19 19h112c10 0 19-9 19-19zm-225 0c0-10-9-19-19-19H209c-10 0-19 9-19 19v387c0 10 9 19 19 19h112c10 0 19-9 19-19zm450 0c0-10-9-19-19-19H659c-10 0-19 9-19 19v287c0 10 9 19 19 19h112c10 0 19-9 19-19zm0-175c0-10-9-19-19-19H209c-10 0-19 9-19 19v62c0 10 9 19 19 19h562c10 0 19-9 19-19z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2kl1vd549ri";
freezeTemplate(tmpl);
