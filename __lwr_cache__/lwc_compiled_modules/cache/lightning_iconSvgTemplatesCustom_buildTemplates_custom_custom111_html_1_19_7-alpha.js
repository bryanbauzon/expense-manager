import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom111.css";

import _implicitScopedStylesheets from "./custom111.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M534 451l-1-1c-24-10-57-37-108-46 13-13 23-35 33-61 6-14 5-27 5-45 0-13 2-34-1-46-11-40-39-51-72-51s-62 11-73 51c-3 12 0 33 0 46 0 18-1 31 5 46 10 25 20 47 32 61-50 9-84 35-107 45-47 21-47 44-47 44v76h237a201 201 0 0197-119zm94 254a78 78 0 1178-78 78 78 0 01-78 78zm172-60v-38l-5-2-42-13-11-27 21-45-28-28-5 3-39 20-27-11-16-48h-40l-1 5-14 42-27 11-46-21-27 27 2 6 20 39-11 26-47 17v39l6 2 41 14 11 27-22 46 28 27 5-3 39-20 27 12 17 47h39l2-6 13-41 27-12 45 22 28-28-3-5-20-39 11-27z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-k49q5cc8vq";
freezeTemplate(tmpl);
