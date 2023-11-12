import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./dynamic_record_choice.css";

import _implicitScopedStylesheets from "./dynamic_record_choice.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M208 430v-3c-71-23-123-88-123-167 0-96 79-175 175-175a175.8 175.8 0 01169 222c2 2 5 3 7 5 3 0 6-1 9-1 16 0 32 5 44 12 6-20 9-41 9-63-1-132-108-239-239-239S21 128 21 259c0 126 98 229 222 237-20-14-35-39-35-66zm105-142c15 0 29 4 42 10 3-1 6-2 10-2a109.7 109.7 0 00-104-146c-61 0-110 49-110 110 0 49 32 90 76 105 4-44 41-77 86-77zm39 58c8-8 19-13 32-13 17 0 31 9 39 22 6-2 14-5 22-5 29 0 54 25 54 53 0 29-25 53-54 53-3 0-7 0-10-1-6 12-20 20-34 20-6 0-12-2-17-4a45 45 0 01-41 27c-20 0-36-12-42-29-2 0-6 1-9 1-23 0-42-18-42-41 0-15 8-29 21-36-2-6-4-12-4-19 0-26 22-48 48-48 14 1 28 9 37 20z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-18ar70trgo4";
freezeTemplate(tmpl);
