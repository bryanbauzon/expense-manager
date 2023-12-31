import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./activity.css";

import _implicitScopedStylesheets from "./activity.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M376 117a287 287 0 00-65 30 441 441 0 01-8 104l61 46 9 8 43-18 1-1a222 222 0 0015-55c3-19 4-40 2-63l-58-51zm-15-27l-1-3a198 198 0 00-157-19v27a235 235 0 0188 29 366 366 0 0135-20 298 298 0 0135-14zM222 430a611 611 0 00111-22 321 321 0 0017-46l6-33-11-9a1307 1307 0 00-63-48 170 170 0 01-37 17c-11 3-28 6-52 8a247 247 0 00-17 45 402 402 0 00-7 44 195 195 0 0022 23 269 269 0 0031 20zM94 374h46a248 248 0 0123-83 431 431 0 01-30-37c-5-8-13-17-22-39a59 59 0 00-13 3 158 158 0 00-37 19 201 201 0 0033 137zm359-61a202 202 0 006-66 252 252 0 01-12 44l4 8a70 70 0 012 14zM106 185l1-2a444 444 0 0133-49c7-9 19-19 34-32a589 589 0 01-1-22A202 202 0 0070 197l19-8a87 87 0 0117-4zm266 243c-17 6-40 12-69 20a603 603 0 01-77 11 200 200 0 00146-31zm128-167c0 133-108 241-240 241a241 241 0 010-482c132 0 240 108 240 241z"${3}/></g>`;
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, h: api_element} = $api;
  return [api_element("svg", {
    className: $cmp.computedClass,
    attrs: {
      "focusable": "false",
      "data-key": $cmp.name,
      "aria-hidden": "true",
      "viewBox": "0 0 520 520",
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
tmpl.stylesheetToken = "lwc-79jeqhdj34m";
freezeTemplate(tmpl);
