import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./global_constant.css";

import _implicitScopedStylesheets from "./global_constant.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M533 531c33-25 68-29 92-29l89-1c9 0 17 0 27-1 11 0 22-1 33-1h26c0-165-135-300-300-300S200 334 200 499c0 144 103 265 239 294-2-10-1-20 1-30 4-17 14-31 24-42-31-32-58-103-63-191h69v80c2-6 4-12 8-18 12-17 26-37 43-53 3-3 6-5 8-7zm205-60h-79c-3-71-19-133-43-180 66 37 112 103 122 180zM530 274c34 29 64 103 69 197h-69zm-60 0v197h-69c5-94 35-168 69-197zM262 531h79c3 71 19 133 43 180a242 242 0 01-122-180zm79-60h-79c10-77 56-143 122-180-24 47-39 109-43 180zm142 232c4-3 7-7 10-9 3-4 7-8 10-12-16-7-28-21-33-38v72c5-6 9-10 13-13zm314-150c-2-2-4-3-6-3-25-1-51 1-76 1l-89 1c-27 0-49 6-70 25-13 12-26 29-36 44-1 2-2 4-2 6 0 6 5 10 10 10 6 0 7-4 10-8s6-8 10-12c14-13 33-20 51-18-16 44-38 94-70 129-13 14-36 29-41 49-5 21 16 26 32 20 20-8 32-29 43-46 12-22 24-45 33-68l29-69c6-14 8-14 22-14h39l-41 97c-10 25-28 61-15 88s48 17 67 3c20-14 32-36 43-57 2-4 4-8 2-13-2-4-5-6-9-6-9 0-11 11-14 17-5 11-17 21-30 19-29-4-3-57 2-71 5-15 11-29 18-43 4-8 7-17 11-25 5-10 5-10 17-11 10 0 39 5 48-1 7-5 11-22 15-35 0-3 0-6-3-9z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-7lm2024oodd";
freezeTemplate(tmpl);
