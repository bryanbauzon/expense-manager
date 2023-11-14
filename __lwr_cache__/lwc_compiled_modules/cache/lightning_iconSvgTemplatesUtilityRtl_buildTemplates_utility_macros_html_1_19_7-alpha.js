import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./macros.css";

import _implicitScopedStylesheets from "./macros.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate, sanitizeAttribute} from "lwc";
const $fragment1 = parseSVGFragment`<path d="M140 402c-2 4-6 5-10 5H42a7 7 0 01-7-7l1-4 1-1 2-2 103-125c3-4 4-10 2-14l-1-2L36 125l-1-4c0-4 4-7 7-7h87c4 0 8 1 10 5l111 134c2 2 2 5 2 7l-2 8z"${3}/>`;
const stc0 = {
  key: 1,
  svg: true
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {gid: api_scoped_id, h: api_element, st: api_static_fragment, fid: api_scoped_frag_id} = $api;
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
  }, [api_element("g", stc0, [api_element("path", {
    attrs: {
      "id": api_scoped_id("kna"),
      "d": "M372 402c-2 4-6 5-10 5h-47a7 7 0 01-7-7l1-4 1-1 2-2 103-125c3-4 4-10 2-14l-1-2-107-127-1-4c0-4 4-7 7-7h47c4 0 8 1 10 5l111 134c2 2 2 5 2 7l-2 8z"
    },
    key: 2,
    svg: true
  }), api_static_fragment($fragment1(), 4), api_element("use", {
    attrs: {
      "xlink:href": sanitizeAttribute("use", "http://www.w3.org/2000/svg", "xlink:href", api_scoped_frag_id("#kna")),
      "x": "-116"
    },
    key: 5,
    svg: true
  })])])];
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
tmpl.stylesheetToken = "lwc-3g8jgk3epet";
freezeTemplate(tmpl);
