import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom57.css";

import _implicitScopedStylesheets from "./custom57.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M530 526v244c0 8 8 12 15 9l194-110c19-11 31-31 31-53V397c0-8-8-12-15-9L540 509c-6 4-10 10-10 17zm-20-68l216-121c7-4 7-13 0-17L531 209a62 62 0 00-62 0L274 320c-7 4-7 13 0 17l216 121c6 3 14 3 20 0zm-50 51L245 388c-7-4-15 1-15 9v218c0 22 12 42 31 53l194 110c7 4 15-1 15-9V526c0-7-4-13-10-17z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-3tgmcrgmf87";
freezeTemplate(tmpl);
