import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./collection_variable.css";

import _implicitScopedStylesheets from "./collection_variable.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M738 200H262c-34 0-62 28-62 62v476c0 34 28 62 62 62h476c34 0 62-28 62-62V262c0-34-28-62-62-62zm-30 493h-1c0 8-8 14-16 14H304c-8 0-14-8-14-16V307c0-8 8-14 16-14h388c8 0 14 8 14 16zM588 456c13 0 39-11 39-45s-25-36-32-36c-15 0-30 11-43 34l-28 49h-1l-7-36c-3-14-19-45-53-45s-65 20-65 20a21 21 0 0011 39l9-2s26-14 31 0l5 14c7 22 13 49 18 73l-22 32s-25-9-38-9-39 11-39 45 25 36 32 36c15 0 30-11 43-34l28-49 10 45c9 24 28 39 54 39 0 0 27 0 58-18 8-3 13-11 13-19 0-11-9-21-21-21l-9 2s-23 13-30 3c-6-10-10-24-14-42l-11-51 23-33c1 0 26 9 39 9z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-1gplbo9scum";
freezeTemplate(tmpl);
