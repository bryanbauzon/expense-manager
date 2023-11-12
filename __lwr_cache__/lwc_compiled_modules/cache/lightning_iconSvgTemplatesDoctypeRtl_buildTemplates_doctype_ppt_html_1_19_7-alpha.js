import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./ppt.css";

import _implicitScopedStylesheets from "./ppt.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path fill="#ff5d2d" d="M511 0A507 507 0 004 507v5384c0 280 227 508 507 508h4578c280 0 507-228 507-508V2031L3706 0z"${3}/><path fill="#d83a00" d="M5598 2035v100H4318s-631-126-613-671c0 1 21 571 600 571z"${3}/><path fill="#feb9a5" d="M3707 0v1456c0 166 111 579 611 579h1280z"${3}/><path fill="#281202" d="M1496 4901h-333v414c0 42-32 74-75 74-42 0-74-32-74-74V4285c0-59 49-108 108-108h374c242 0 377 166 377 362s-139 362-377 362zm-18-590h-315v457h315c143 0 240-94 240-229s-97-228-240-228zm1120 590h-333v414c0 42-33 74-76 74-41 0-74-32-74-74V4285c0-59 49-108 108-108h375c241 0 376 166 376 362s-138 362-376 362zm-18-590h-315v457h315c142 0 240-94 240-229-1-135-98-228-240-228zm1411 0h-328l1 1004c0 42-33 74-76 74-41 0-74-32-74-74V4310l-326 1c-36 0-65-29-65-69 1-36 29-65 65-65h803c36 0 65 29 65 69 0 36-29 65-65 65z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-640rd4384sv";
freezeTemplate(tmpl);
