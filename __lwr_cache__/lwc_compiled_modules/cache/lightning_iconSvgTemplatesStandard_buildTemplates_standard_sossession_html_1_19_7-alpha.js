import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./sossession.css";

import _implicitScopedStylesheets from "./sossession.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M496 180a320 320 0 109 641 320 320 0 00-9-641zm0 42c48-1 93 11 132 31l-43 72a190 190 0 00-170 0l-43-72c37-19 79-31 124-31zM325 585l-72 43a276 276 0 010-257l72 43a190 190 0 000 171zm179 193c-48 1-93-11-132-31l43-72a190 190 0 00170 0l43 72c-37 19-79 31-124 31zm-4-125a153 153 0 110-306 153 153 0 010 306zm175-68a190 190 0 000-170l72-43a276 276 0 010 257z"${3}/></g>`;
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, h: api_element} = $api;
  return [api_element("svg", {
    className: $cmp.computedClass,
    attrs: {
      "focusable": "false",
      "data-key": $cmp.name,
      "aria-hidden": "true",
      "viewBox": "0 0 1000 1000",
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
tmpl.stylesheetToken = "lwc-11soh3l3pbv";
freezeTemplate(tmpl);
