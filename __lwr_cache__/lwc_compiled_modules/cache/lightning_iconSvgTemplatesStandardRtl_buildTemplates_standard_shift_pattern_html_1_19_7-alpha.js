import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./shift_pattern.css";

import _implicitScopedStylesheets from "./shift_pattern.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M717 260h-50v-20a40 40 0 10-80 0v20H407v-20a40 40 0 00-80 0v20h-50a60 60 0 00-60 60v20a20 20 0 0020 20h520a20 20 0 0020-20v-20a60 60 0 00-60-60zm40 160a20 20 0 0120 20v300a60 60 0 01-60 60H277a60 60 0 01-60-60V440a20 20 0 0120-20h520zM622 693H505a12 12 0 00-12 12v33a12 12 0 0012 12h117a12 12 0 0012-12v-33a12 12 0 00-12-12zm0-135H367a12 12 0 00-12 12v79a12 12 0 0012 12h255a12 12 0 0012-12v-79a12 12 0 00-12-12zm-138-88H367a12 12 0 00-12 12v33a12 12 0 0012 11h117a12 12 0 0012-11v-33a12 12 0 00-12-12z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2fu36ur60of";
freezeTemplate(tmpl);
