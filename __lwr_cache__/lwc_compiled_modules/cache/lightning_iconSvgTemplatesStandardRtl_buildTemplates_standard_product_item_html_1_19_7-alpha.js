import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./product_item.css";

import _implicitScopedStylesheets from "./product_item.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><rect height="160" rx="40" width="600" x="190" y="189"${3}/><rect height="160" rx="40" width="270" x="190" y="409"${3}/><rect height="160" rx="40" ry="49" width="270" x="190" y="629"${3}/><rect height="160" rx="40" width="270" x="520" y="409"${3}/><rect height="160" rx="40" width="270" x="520" y="629"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-4rq12205gso";
freezeTemplate(tmpl);
