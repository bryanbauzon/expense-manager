import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./service_appointment.css";

import _implicitScopedStylesheets from "./service_appointment.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M435 20H86c-35-1-65 27-66 63v355c1 35 30 62 65 62h48c-3-4-4-9-4-13V308c0-6 5-11 11-11h300c6 0 11 5 11 11v179l-2 12c29-6 50-32 51-61V83c1-34-29-63-65-63zM106 149c-12 0-21-10-22-22v-22c1-12 10-22 22-22h113c12 0 22 10 22 22v22c0 12-10 21-22 22zm345 113c0 6-5 11-11 11H140c-6 0-11-5-11-11v-18c0-16 13-29 29-29h37v-15a22 22 0 1144 0v14h102v-14a22 22 0 1144 0v14h36c17 0 30 13 30 30z"${3}/><rect width="44" height="44" x="343" y="348" rx="7"${3}/><rect width="44" height="44" x="343" y="421" rx="7"${3}/><rect width="44" height="44" x="269" y="348" rx="7"${3}/><rect width="44" height="44" x="269" y="421" rx="7"${3}/><rect width="44" height="44" x="196" y="348" rx="7"${3}/><rect width="44" height="44" x="196" y="421" rx="7"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-42f1rtrrejl";
freezeTemplate(tmpl);
