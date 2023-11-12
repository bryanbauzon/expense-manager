import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./loader.css";

import _implicitScopedStylesheets from "./loader.scoped.css?scoped=true";

import {parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<div class="loader-wrapper${0}"${2}><div class="lds-ellipsis${0}"${2}><div${3}></div><div${3}></div><div${3}></div><div${3}></div></div></div>`;
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment} = $api;
  return [api_static_fragment($fragment1(), 1)];
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
tmpl.stylesheetToken = "lwc-7o8q6sl5j8q";
freezeTemplate(tmpl);
