import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./product_item_transaction.css";

import _implicitScopedStylesheets from "./product_item_transaction.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M650 725a15 15 0 0021 0l115-114a15 15 0 000-21L670 475a15 15 0 00-21 0l-21 21a15 15 0 000 21l36 36a10 10 0 01-7 17H536a16 16 0 00-16 15v30a17 17 0 0016 15h122a10 10 0 017 17l-36 36a15 15 0 000 21z"${3}/><rect width="600" height="160" x="190" y="189" rx="40"${3}/><rect width="270" height="160" x="190" y="409" rx="40"${3}/><rect width="270" height="160" x="190" y="629" rx="40"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-6pcg3n6mh9c";
freezeTemplate(tmpl);
