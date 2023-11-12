import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./gpres.css";

import _implicitScopedStylesheets from "./gpres.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path fill="#fcc003" d="M511 1A507 507 0 004 508v5384c0 281 227 508 507 508h4578c280 0 507-227 507-508V2032L3706 1z"${3}/><path fill="#2e2204" d="M1012 3747v1190h1242V3747zm1129 964H1125v-739h1016zm68-513v226h838v738H2031v-284h-113v510h1242V4198z"${3}/><path fill="#e4a201" d="M5596 2038v100H4316s-631-126-613-671c0 0 21 571 601 571z"${3}/><path fill="#f9e3b6" d="M3706 3v1456c0 165 110 579 610 579h1280L3706 2z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2gq43msq03i";
freezeTemplate(tmpl);
