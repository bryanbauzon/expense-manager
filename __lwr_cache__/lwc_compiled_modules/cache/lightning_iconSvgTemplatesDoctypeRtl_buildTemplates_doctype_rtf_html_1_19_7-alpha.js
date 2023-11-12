import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./rtf.css";

import _implicitScopedStylesheets from "./rtf.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path fill="#1b96ff" d="M511 1A507 507 0 004 508v5384c0 280 227 508 507 508h4578c280 0 507-228 507-508V2032L3706 1z"${3}/><path fill="#0b5cab" d="M5598 2035v100H4318s-631-126-613-671c0 1 21 571 600 571z"${3}/><path fill="#aacbff" d="M3707 0v1456c0 166 111 579 611 579h1280z"${3}/><path fill="#fff" d="M1561 4883l258 390a73 73 0 01-63 110c-24 0-45-11-60-32l-293-456h-240v414c0 42-32 74-75 74-42 0-74-32-74-74V4279c0-59 48-108 108-108h374c220 0 377 141 377 362 0 216-148 335-312 350zm-398-578v459h315c142 0 240-96 240-231s-97-229-240-229h-315zm1747 0h-328v1004c0 42-33 74-76 74-41 0-74-32-74-74V4304l-325 1c-36 0-65-29-65-69 0-36 29-65 65-65h803c36 0 64 29 64 69 0 36-28 65-64 65zm1029 0h-583v387h570c37 0 65 28 65 68 0 36-28 65-64 65h-571v484c0 42-33 74-76 74-41 0-74-32-74-74V4279c0-59 49-108 108-108h625c36 0 65 29 65 69 0 36-29 65-65 65z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-7undo7bttqb";
freezeTemplate(tmpl);
