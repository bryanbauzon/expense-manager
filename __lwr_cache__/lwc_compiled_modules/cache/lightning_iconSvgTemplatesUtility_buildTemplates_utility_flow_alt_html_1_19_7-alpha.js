import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./flow_alt.css";

import _implicitScopedStylesheets from "./flow_alt.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M423 49H304a50 50 0 00-44-29c-26 0-48 22-48 48s22 48 48 48c20 0 37-12 44-29h119c21 0 38 17 38 38v77c0 21-17 38-38 38h-58v-58c0-16-13-29-29-29H183a29 29 0 00-29 29v58H97a77 77 0 00-77 77v77c0 42 34 77 77 77h119a47 47 0 0044 29c26 0 48-22 48-48s-22-48-48-48c-20 0-37 12-44 29H97a38 38 0 01-38-38v-77c0-21 17-38 38-38h58v58c0 16 13 29 29 29h154c16 0 29-13 29-29v-58h58c42 0 77-34 77-77v-77a80 80 0 00-79-77z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2ocb3efuevf";
freezeTemplate(tmpl);
