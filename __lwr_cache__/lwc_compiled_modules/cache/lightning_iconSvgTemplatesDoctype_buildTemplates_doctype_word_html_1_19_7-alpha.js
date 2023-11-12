import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./word.css";

import _implicitScopedStylesheets from "./word.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path fill="#107cad" d="M511 0A507 507 0 000 500v5388a507 507 0 00511 512h4578a507 507 0 00511-512V2028L3706 0z"${3}/><path fill="#084968" d="M5600 2035v100H4318s-631-126-613-671c0 0 21 571 600 571z"${3}/><path fill="#90d0fe" d="M3707 0v1456a578 578 0 00611 579h1282z"${3}/><path fill="#fff" d="M1424 5386h-300a108 108 0 01-108-108v-985a108 108 0 01108-108h300a600 600 0 110 1200zm0-1067h-261v934h261a441 441 0 00461-466 438 438 0 00-461-468zm1442 1089a586 586 0 01-600-621 600 600 0 111192 0 587 587 0 01-592 621zm0-1109c-270 0-441 207-441 488s171 488 441 488 441-209 441-488-172-487-441-487zm1845 38a75 75 0 0120 52 71 71 0 01-70 72 64 64 0 01-51-24 406 406 0 00-300-138 461 461 0 00-463 488 463 463 0 00463 488 400 400 0 00300-137 70 70 0 0151-24 72 72 0 0170 74 78 78 0 01-20 51 533 533 0 01-400 169 622 622 0 010-1243 526 526 0 01400 172z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-4tjnlb5cqbk";
freezeTemplate(tmpl);
