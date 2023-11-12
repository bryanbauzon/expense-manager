import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./asset_action.css";

import _implicitScopedStylesheets from "./asset_action.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M642 724a37 37 0 01-37-39v-21a35 35 0 0110-31l116-116V268a24 24 0 00-24-24H293a24 24 0 00-24 24v415a24 24 0 0024 24h53v25a24 24 0 0024 24h28a24 24 0 0024-24v-25h158v25a24 24 0 0024 24h28a24 24 0 0024-24v-8zM363 368a8 8 0 019-9h257a8 8 0 019 9v9a8 8 0 01-9 9H371a8 8 0 01-9-9v-9zm272 43v129a8 8 0 01-9 9h-17a8 8 0 01-9-9V411a8 8 0 019-9h17q9 2 9 9zm-59 0v129a9 9 0 01-18 0V411a8 8 0 019-9q9 2 9 9zm-33 0v129a8 8 0 01-9 9h-34a8 8 0 01-9-9V411a8 8 0 019-9h34c5 1 9 4 9 9zm-77 0v129a8 8 0 01-9 9h-17a8 8 0 01-9-9V411a8 8 0 019-9h17c5 1 9 4 9 9zm-103 0a8 8 0 019-9h34a8 8 0 019 9v129a8 8 0 01-9 9h-34a8 8 0 01-9-9zm8 179a8 8 0 01-9-9v-9a8 8 0 019-9h257a8 8 0 019 9v9a8 8 0 01-9 9zm419-43l-9-9a16 16 0 00-22 0L640 657v28c0 2 0 4 2 4h26l3-1 119-118a15 15 0 000-23z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-4bfeit6g0uv";
freezeTemplate(tmpl);
