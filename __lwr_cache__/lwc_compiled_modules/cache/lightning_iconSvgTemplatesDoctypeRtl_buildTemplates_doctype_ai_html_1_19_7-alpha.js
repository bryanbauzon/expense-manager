import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./ai.css";

import _implicitScopedStylesheets from "./ai.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path fill="#fcc003" d="M508 1A507 507 0 000 508v5384c0 280 227 508 508 508h4577c280 0 507-228 507-508V2032L3702 1H507z"${3}/><path fill="#e4a201" d="M5592 2036v100H4312s-631-126-612-671c0 0 25 571 600 571z"${3}/><path fill="#f9e3b6" d="M3702 1v1456c0 165 110 579 610 579h1280z"${3}/><path fill="#2e2204" d="M2014 5392c-31 0-60-18-72-48l-90-229h-598l-90 229a78 78 0 01-72 48 80 80 0 01-76-108l414-1033a130 130 0 01241 0l418 1033c4 9 6 20 6 29 0 36-33 79-81 79zm-461-1057l-256 647h509zm851 1057c-42 0-74-32-74-74V4242c0-40 32-72 77-72 40 0 72 32 72 72v1076c0 42-32 74-75 74z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-mt2cjovp3h";
freezeTemplate(tmpl);
