import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./image.css";

import _implicitScopedStylesheets from "./image.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path fill="#06a59a" d="M513 4A507 507 0 005 512v5384c0 280 227 507 508 507h4577c280 0 507-227 507-507V2035L3707 4H512z"${3}/><path fill="#056764" d="M5598 2035v100H4318s-631-126-613-671c0 1 21 571 600 571z"${3}/><path fill="#acf3e4" d="M3707 0v1456c0 166 111 579 611 579h1280z"${3}/><path fill="#fff" d="M1012 5374V3283h2091v2091zm1880-1884H1223v1260h1669zm-959 838l391-526 121 213 140-44 98 563H1375l349-332zm-385-364c-91 0-165-69-165-154s74-154 165-154 165 69 165 154-74 154-165 154z"${3}/></g>`;
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, h: api_element} = $api;
  return [api_element("svg", {
    className: $cmp.computedClass,
    attrs: {
      "focusable": "false",
      "data-key": $cmp.name,
      "aria-hidden": "true",
      "viewBox": "0 0 5600 6400",
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
tmpl.stylesheetToken = "lwc-150375a46eb";
freezeTemplate(tmpl);
