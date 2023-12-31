import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./data_cloud.css";

import _implicitScopedStylesheets from "./data_cloud.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M800 291c-2-18-10-45-42-70-27-21-70-23-93-19-5 1-29 7-48 21-36 27-52 62-64 92-10 28-17 77-21 113a201 201 0 00-64 0c-7-36-33-132-98-192-27-24-55-36-81-36-44 0-73 32-83 64-23 69 25 122 66 138 36 14 42 19 49 27l7 6c11 10 22 28 30 45-51 44-83 108-83 166 0 96 84 154 225 154s225-58 225-154c0-59-33-123-85-167l5-11 56-93h26c24-3 42-11 54-25 14-15 21-37 19-59zm-51 31c-5 5-14 9-28 11a59 59 0 01-24-3c-10-3-19 1-24 9-17 26-43 69-66 109l-1 1-1 4-31-14v-6c3-19 10-77 20-103 13-35 27-57 49-72 11-9 27-13 30-14 17-3 45 0 58 11 16 12 25 26 26 40 1 13-5 23-8 27zM500 757c-43 0-182-8-182-111 0-81 81-179 182-179s182 98 182 179c0 103-139 111-182 111zM356 403l-5-5c-12-12-22-20-64-36-20-8-56-39-41-85 5-16 19-34 42-34 16 0 35 9 53 24 57 53 79 142 86 172-12 4-23 9-34 16-9-19-22-38-37-52zm47 258c12 0 22-15 22-32s-10-33-22-33-21 15-21 33 10 32 21 32zm193 0c12 0 22-15 22-32s-10-33-22-33-21 15-21 33 10 32 21 32zm-96-11c-15 0-27 10-27 21s12 22 27 22 27-10 27-22-12-21-27-21z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-50sjfmt050r";
freezeTemplate(tmpl);
