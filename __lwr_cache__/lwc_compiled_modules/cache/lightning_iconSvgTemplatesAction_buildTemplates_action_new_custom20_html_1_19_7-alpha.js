import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom20.css";

import _implicitScopedStylesheets from "./new_custom20.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M164 242c0-6-8-10-13-6L39 321c-12 9-19 24-19 39v33c0 6 6 10 10 7l123-46c6-2 10-8 10-15zm177 223l-33-22V81c0-22-23-46-38-58-6-5-14-5-20 0-14 12-38 36-38 58v363l-37 24c-6 5-11 12-11 20v5c0 4 3 7 7 7h177c4 0 9-3 9-7-1-12-7-21-16-28zm140-144l-112-86c-6-4-13 0-13 6v98c0 6 4 13 10 15l124 47c6 2 10-2 10-7v-33c0-16-7-31-19-40z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-4rdhq26r9a8";
freezeTemplate(tmpl);
