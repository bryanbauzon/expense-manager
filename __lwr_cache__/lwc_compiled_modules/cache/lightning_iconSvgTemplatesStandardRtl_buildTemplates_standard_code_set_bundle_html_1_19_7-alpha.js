import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./code_set_bundle.css";

import _implicitScopedStylesheets from "./code_set_bundle.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M298 626V316a58 58 0 00-58 58v368a58 58 0 0058 58h290a58 58 0 0058-58H414c-63 0-116 0-116-116zm365-297h85a11 11 0 0012-11 10 10 0 00-3-8L650 203a10 10 0 00-8-3 11 11 0 00-12 11v86a32 32 0 0033 32zm-175 0h-28l-7 26h28zm256 48H631a49 49 0 01-49-48V216a16 16 0 00-16-16H405a49 49 0 00-49 48v388a49 49 0 0049 48h306a49 49 0 0049-49V395a16 16 0 00-16-17zm-339-4v-1l3-13a5 5 0 015-3h16l7-27h-14a5 5 0 01-5-5v-1l4-13a5 5 0 015-4h16l7-26a5 5 0 015-4h14a5 5 0 015 5v1l-7 25h28l7-27a6 6 0 015-4h13a5 5 0 016 5v1l-7 25h13a8 8 0 014 1l2 1v3l-4 12a5 5 0 01-5 4l-16 1-7 26h14a5 5 0 015 5v1l-4 13a5 5 0 01-5 4h-16l-7 27a5 5 0 01-5 4h-13a5 5 0 01-5-5v-1l6-24h-27l-7 27a5 5 0 01-5 4h-15a5 5 0 01-5-5v-2l7-24h-13a5 5 0 01-5-5zm242 222a16 16 0 01-16 16H421a16 16 0 01-17-16v-16a16 16 0 0117-16h210a16 16 0 0116 16zm32-97a16 16 0 01-16 17H421a16 16 0 01-16-17v-16a16 16 0 0116-16h242a16 16 0 0116 16z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-66fd7n0m256";
freezeTemplate(tmpl);
