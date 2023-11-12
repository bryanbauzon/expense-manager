import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./visio.css";

import _implicitScopedStylesheets from "./visio.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path fill="#0b5cab" d="M511 1A507 507 0 004 508v5384c0 280 227 508 507 508h4578c280 0 507-228 507-508V2032L3706 1z"${3}/><path fill="#032d60" d="M5598 2035v100H4318s-631-126-613-671c0 1 21 571 600 571z"${3}/><path fill="#aacbff" d="M3707 0v1456c0 166 111 579 611 579h1280z"${3}/><path fill="#fff" d="M2092 4269l-416 1033c-20 49-69 81-119 81h-4c-52 0-101-32-121-81l-414-1033c-3-9-5-18-5-29 0-36 32-79 81-79 31 0 59 18 72 48l389 999 389-999c11-29 39-48 72-48a80 80 0 0176 108zm314 1114c-41 0-74-32-74-74V4232c0-39 33-72 78-72 39 0 72 33 72 72v1077c0 42-33 74-76 74zm790 11c-178 0-318-60-421-150a71 71 0 01-23-54c0-36 27-75 70-75 14 0 30 3 43 14 83 74 198 132 337 132 214 0 282-116 282-208 0-309-711-138-711-567 0-198 177-333 413-333 154 0 288 47 385 128 16 14 25 34 25 54 0 36-31 72-70 72-15 0-31-5-43-16a483 483 0 00-308-105c-144 1-247 78-247 191 0 270 711 116 711 564 0 175-119 353-443 353z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2fc8bsvfeie";
freezeTemplate(tmpl);
