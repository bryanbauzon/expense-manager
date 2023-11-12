import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./pricing_workspace.css";

import _implicitScopedStylesheets from "./pricing_workspace.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M151 21a16 16 0 0117 17v11a16 16 0 01-17 17h-51a34 34 0 00-34 32v322a34 34 0 0032 34h322a34 34 0 0034-32v-53a16 16 0 0117-17h11a16 16 0 0117 17v62a68 68 0 01-68 68H89a68 68 0 01-68-68V89a68 68 0 0168-68zm146 28l84 2a40 40 0 0118 7l33 33 33 33a24 24 0 017 18l2 84a26 26 0 01-7 19L329 384a25 25 0 01-36 0l-76-76-76-76a25 25 0 010-36L279 57a23 23 0 0118-8zm-47 135l-14 14a8 8 0 000 9l81 81a8 8 0 009 0l14-14a8 8 0 000-9l-81-81a6 6 0 00-9 0zm38-38l-13 14a8 8 0 000 9l81 81a8 8 0 009 0l14-14a8 8 0 000-9l-81-81c-3-3-6-3-10 0zm131-41a25 25 0 100 36 25 25 0 000-36z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-636kgk5qrkd";
freezeTemplate(tmpl);
