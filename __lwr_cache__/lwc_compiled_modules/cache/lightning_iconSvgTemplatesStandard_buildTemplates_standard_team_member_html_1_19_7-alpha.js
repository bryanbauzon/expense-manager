import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./team_member.css";

import _implicitScopedStylesheets from "./team_member.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M570 440H450c-33 0-60 27-60 60v90c0 11 5 21 12 28s17 12 28 12v90c0 33 27 60 60 60h40c33 0 60-27 60-60v-90c11 0 21-4 28-12 7-7 12-17 12-28v-90c0-33-27-60-60-60zM366 667l-7-6c-19-20-30-45-30-71v-90c0-32 13-62 34-83 6-6 1-17-7-17h-96c-33 0-60 27-60 60v90c0 11 5 21 12 28s17 12 28 12v90c0 33 27 60 60 60h40c9 0 17-2 24-5 4-2 6-5 6-9v-51c0-3-1-6-4-8zm394-267h-96c-9 0-13 10-7 17 21 22 34 51 34 83v90c0 26-10 51-30 71l-7 6c-2 2-4 5-4 8v51c0 4 2 8 6 9 7 3 15 5 24 5h40c33 0 60-27 60-60v-90c11 0 21-4 28-12 7-7 12-17 12-28v-90c0-33-27-60-60-60z"${3}/><circle cx="510" cy="330" r="70"${3}/><circle cx="320" cy="290" r="70"${3}/><circle cx="700" cy="290" r="70"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-o3ljejjlvb";
freezeTemplate(tmpl);
