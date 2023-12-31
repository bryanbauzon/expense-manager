import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./share_link.css";

import _implicitScopedStylesheets from "./share_link.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M272 417l-21-3-21-6c-4-1-9 0-12 3l-5 5a79 79 0 01-106 6 77 77 0 01-4-112l76-76c10-10 22-16 34-20a79 79 0 0174 20l10 13c4 7 13 8 18 2l28-28c4-4 4-10 1-15l-14-16a128 128 0 00-71-37 143 143 0 00-124 37l-73 73C9 316 5 402 56 456c53 58 143 59 198 4l25-25c7-5 2-17-7-18zM456 58c-55-51-141-47-193 6l-23 22c-7 7-2 19 7 20 14 1 28 4 42 8 4 1 9 0 12-3l5-5c29-29 76-32 106-6 34 29 35 81 4 112l-76 76a85 85 0 01-34 20 79 79 0 01-74-20l-10-13c-4-7-13-8-18-2l-28 28c-4 4-4 10-1 15l14 16a130 130 0 0070 37 143 143 0 00124-37l76-76c56-55 54-145-3-198z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-23eg5isiuk1";
freezeTemplate(tmpl);
