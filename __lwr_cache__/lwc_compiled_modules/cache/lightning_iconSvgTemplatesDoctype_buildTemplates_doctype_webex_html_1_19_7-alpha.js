import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./webex.css";

import _implicitScopedStylesheets from "./webex.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path fill="#3ba755" d="M515 1A507 507 0 008 509v5384c0 280 227 507 507 507h4578c280 0 507-227 507-507V2032L3710 1z"${3}/><path fill="#22683e" d="M5598 2035v100H4318s-631-126-613-671c0 1 21 571 600 571z"${3}/><path fill="#cdefc4" d="M3707 0v1456c0 166 111 579 611 579h1280zM2046 5385a978 978 0 000-1953z"${3}/><path fill="#fff" d="M1934 5385a978 978 0 010-1952z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-6lg6pvd8vc9";
freezeTemplate(tmpl);
