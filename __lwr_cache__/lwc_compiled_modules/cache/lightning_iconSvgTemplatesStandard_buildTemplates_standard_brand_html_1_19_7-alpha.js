import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./brand.css";

import _implicitScopedStylesheets from "./brand.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M794 391c-29-119-154-191-292-191-167 0-302 134-302 300s135 300 303 300c232 0 214-118 140-164-44-28-68-91-24-136 81-84 212 50 175-109zM337 600c-35 0-63-28-63-62s28-62 63-62 62 28 62 62-27 62-62 62zm13-238c0-35 28-62 62-62 35 0 62 28 62 62s-28 62-62 62c-35 1-62-26-62-62zm137 363c-35 0-62-28-62-62s28-62 62-62c35 0 62 28 62 62s-27 62-62 62zm113-325c-35 0-62-28-62-62s28-62 62-62c35 0 62 28 62 62s-27 62-62 62z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-ejiuc6sh3a";
freezeTemplate(tmpl);
