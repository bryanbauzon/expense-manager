import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./identifier.css";

import _implicitScopedStylesheets from "./identifier.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M797 767l-66-65a102 102 0 10-187-67 96 96 0 000 20 102 102 0 00158 76l66 65a13 13 0 0017 0l11-10a14 14 0 001-19zm-151-61a61 61 0 01-61-60v-1a61 61 0 1161 61zM229 443h62v38a19 19 0 0019 19h19a19 19 0 0019-19v-38h63a29 29 0 0029-28V229a29 29 0 00-29-29H229a29 29 0 00-29 29v185a29 29 0 0029 29zm34-131a19 19 0 0119-19h75a19 19 0 0119 19v19a19 19 0 01-19 19h-75a19 19 0 01-19-19zm297 102a29 29 0 0029 29h182a29 29 0 0029-28V229a29 29 0 00-29-29H589a29 29 0 00-29 29v64h-41a19 19 0 00-19 19v19a19 19 0 0019 19h41zm64-130a19 19 0 0119-19h75a19 19 0 0119 19v75a19 19 0 01-19 19h-19a19 19 0 01-19-19v-37h-37a19 19 0 01-19-19zM481 650h-41v-64a29 29 0 00-29-29H229a29 29 0 00-29 29v185a29 29 0 0029 29h182a29 29 0 0029-29v-64h41a19 19 0 0019-19v-19a19 19 0 00-19-19zm-104 66a19 19 0 01-19 19h-75a19 19 0 01-19-19v-75a19 19 0 0119-19h19a19 19 0 0119 19v37h37a19 19 0 0119 19z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-31ngofrt5nn";
freezeTemplate(tmpl);
