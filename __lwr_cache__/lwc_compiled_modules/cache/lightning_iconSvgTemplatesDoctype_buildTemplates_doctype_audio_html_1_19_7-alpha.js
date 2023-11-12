import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./audio.css";

import _implicitScopedStylesheets from "./audio.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path fill="#0d9dda" d="M515 1A507 507 0 008 509v5384c0 280 227 507 507 507h4578c280 0 507-227 507-507V2032L3710 1z"${3}/><path fill="#05628a" d="M5600 2036v100H4320s-631-126-613-671c0 0 21 571 600 571z"${3}/><path fill="#90d0fe" d="M3710 1v1456c0 165 110 579 610 579h1280z"${3}/><path fill="#fff" d="M2980 3404l-1417 181v1344c-74-21-163-24-253-7-201 40-332 171-294 292 39 122 233 188 434 148 176-35 299-139 300-247V4041l1043-129v831c-75-21-166-25-258-7-203 40-335 172-296 295 38 123 235 189 437 150 185-37 312-150 304-263z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-5snmreu46ut";
freezeTemplate(tmpl);
