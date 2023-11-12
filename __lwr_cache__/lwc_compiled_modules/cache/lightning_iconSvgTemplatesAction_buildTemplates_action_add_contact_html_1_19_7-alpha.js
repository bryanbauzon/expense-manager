import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./add_contact.css";

import _implicitScopedStylesheets from "./add_contact.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M460 90H60c-27 0-50 22-50 50v240c0 27 23 50 50 50h400c28 0 50-22 50-50V140c0-28-22-50-50-50zM248 372H104c-16 0-28-17-28-34 1-25 27-40 54-52 19-8 22-16 22-24s-5-16-12-22a55 55 0 01-17-41c0-32 19-58 52-58s52 27 52 58c0 17-6 32-17 41-7 6-12 13-12 22 0 8 2 16 22 23 27 12 53 28 54 53 3 17-10 34-26 34zm195-58c0 9-8 17-17 17h-75c-9 0-17-7-17-17v-25c0-9 8-17 17-17h75c9 0 17 7 17 17zm0-91c0 9-8 17-17 17H302c-9 0-17-7-17-17v-25c0-9 8-17 17-17h125c9 0 17 7 17 17v25z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-5hcu3l1aa6c";
freezeTemplate(tmpl);
