import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./eps.css";

import _implicitScopedStylesheets from "./eps.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path fill="#fcc003" d="M511 1A507 507 0 003 508v5384c0 281 227 508 508 508h4577c280 0 507-227 507-508V2032L3705 1z"${3}/><path fill="#2e2204" d="M1745 5391h-625c-59 0-108-49-108-108v-985c0-59 49-108 108-108h625c36 0 65 29 65 69 0 35-29 64-65 64h-583v387h570c37 0 65 29 65 69 0 36-29 65-65 65h-570v414h583c36 0 65 29 65 65 0 39-29 68-65 68zm819-477h-333v414c0 42-33 74-76 74-41 0-74-32-74-74V4298c0-59 49-108 109-108h374c241 0 376 166 376 362s-138 362-376 362zm-18-591h-315v458h315c142 0 239-94 239-229s-97-229-239-229zm1026 1090c-178 0-319-60-421-150a71 71 0 01-24-54c0-36 27-76 70-76 15 1 31 4 43 15 83 74 199 131 337 131 214 0 283-115 283-207 0-310-711-138-711-567 0-198 176-333 412-333 155 0 288 47 385 128 16 14 25 34 25 54 0 36-30 72-70 72-14 0-30-6-43-16a483 483 0 00-308-105c-144 0-247 78-247 191 0 270 712 115 712 564 0 174-119 353-443 353z"${3}/><path fill="#e4a201" d="M5600 2036v100H4320c-244 0-631-126-613-671 0 0 21 571 601 571z"${3}/><path fill="#f9e3b6" d="M3710 1v1456c0 165 110 579 610 579h1280z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-7d1s5bv9lk2";
freezeTemplate(tmpl);
