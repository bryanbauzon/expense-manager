import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./opportunity.css";

import _implicitScopedStylesheets from "./opportunity.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M711 690H289c-10 0-19 9-19 19v1c0 33 27 60 60 60h340c33 0 60-27 60-60v-1c0-10-9-19-19-19zm49-410a60 60 0 00-39 106c-17 39-56 66-102 64-53-3-96-46-99-99 0-9 0-17 2-25a60 60 0 00-22-116 60 60 0 00-22 116c2 8 2 16 2 25-3 53-46 96-99 99-46 3-86-25-102-64a60 60 0 00-39-106c-33 0-60 27-60 60s27 60 60 60l28 214c1 9 9 16 19 16h426c9 0 17-7 19-16l28-214c33 0 60-27 60-60s-27-60-60-60z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-3hfsptffcfg";
freezeTemplate(tmpl);
