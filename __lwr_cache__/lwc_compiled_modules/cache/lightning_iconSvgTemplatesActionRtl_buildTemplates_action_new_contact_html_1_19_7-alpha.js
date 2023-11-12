import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_contact.css";

import _implicitScopedStylesheets from "./new_contact.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M10 140v240c0 28 22 50 50 50h400c27 0 50-23 50-50V140c0-28-23-50-50-50H60c-28 0-50 22-50 50zm236 198c1-25 27-41 54-53 20-7 22-15 22-23 0-9-5-16-12-22-11-9-17-24-17-41 0-31 19-58 52-58s52 26 52 58c0 16-6 31-17 41-7 6-12 14-12 22s3 16 22 24c27 12 53 27 54 52 0 17-12 34-28 34H272c-16 0-29-17-26-34zM77 289c0-10 8-17 17-17h75c9 0 17 8 17 17v25c0 10-8 17-17 17H94c-9 0-17-8-17-17zm-1-66v-25c0-10 8-17 17-17h125c9 0 17 8 17 17v25c0 10-8 17-17 17H94c-9 0-17-8-18-17z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-o1f120h2nt";
freezeTemplate(tmpl);
