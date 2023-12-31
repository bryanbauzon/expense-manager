import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./snippet_alt.css";

import _implicitScopedStylesheets from "./snippet_alt.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M356 250H219c-10 0-19 9-19 19v162c0 10 9 19 19 19h137c10 0 19-9 19-19V269c0-10-9-19-19-19zm425 0H444c-10 0-19 9-19 19v37c0 10 9 19 19 19h337c10 0 19-9 19-19v-37c0-10-9-19-19-19zM444 450h212c10 0 19-9 19-19v-37c0-10-9-19-19-19H444c-10 0-19 9-19 19v37c0 10 9 19 19 19zm-88 100H219c-10 0-19 9-19 19v162c0 10 9 19 19 19h137c10 0 19-9 19-19V569c0-10-9-19-19-19zm425 0H444c-10 0-19 9-19 19v37c0 10 9 19 19 19h337c10 0 19-9 19-19v-37c0-10-9-19-19-19zM656 675H444c-10 0-19 9-19 19v37c0 10 9 19 19 19h212c10 0 19-9 19-19v-37c0-10-9-19-19-19z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-3vjimu58lr0";
freezeTemplate(tmpl);
