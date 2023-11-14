import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./service_contract.css";

import _implicitScopedStylesheets from "./service_contract.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M392 114l-91-90a9 9 0 00-7-3 10 10 0 00-10 10v72a28 28 0 0028 28h73c6 0 10-4 10-10a9 9 0 00-3-7zm3 72c0-7-6-14-14-14h-97a42 42 0 01-41-41V34c0-7-6-14-14-14H91a42 42 0 00-41 43v331a42 42 0 0040 42h141c11 0 14-8 13-20s-5-62 30-102 91-43 100-43 21 0 20-12v-72zM98 107l34-4 2-2 15-30c1-3 4-3 6 0l15 30 2 2 34 4c2 1 3 4 1 5l-25 24v3l5 34c0 2-2 4-4 3l-30-16a2 2 0 00-3 0l-30 16c-3 1-6 0-5-3l6-34-1-3-25-24c0-1 0-4 3-4zm124 231c0 8-6 14-14 14h-90c-7 0-13-6-13-14v-14c0-7 6-13 14-13h90c7 0 13 6 13 13v14zm76-83c0 8-6 14-14 14H120c-8 0-14-6-14-14v-14c0-7 6-13 14-13h165c8 0 14 6 14 13v14zm75 48a99 99 0 100 198 99 99 0 000-198zm17 108l-8-2-38 38a10 10 0 01-9 3 10 10 0 01-8-3 14 14 0 010-17l38-38a25 25 0 01-1-8 30 30 0 0130-33c2 0 5 0 8 2v2l-16 18c-2 0-2 3 0 4l12 11c0 2 3 2 4 0l17-16h3l1 9a30 30 0 01-33 30z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-6c4eb5abnqe";
freezeTemplate(tmpl);
