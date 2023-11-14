import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./recipe.css";

import _implicitScopedStylesheets from "./recipe.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M565 228a28 28 0 11-28-28 28 28 0 0128 28zM462 332a38 38 0 10-37-38 38 38 0 0037 38zm243 388L580 527V425a27 27 0 0030-24 23 23 0 000-4 25 25 0 00-22-27H415a25 25 0 00-25 25v3a27 27 0 0026 28 32 32 0 004 0v104L295 720a53 53 0 00-3 53 49 49 0 0044 27h327a49 49 0 0044-27 50 50 0 00-2-53zM470 544V430h60v116l59 94H411z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-73lhpftccuh";
freezeTemplate(tmpl);
