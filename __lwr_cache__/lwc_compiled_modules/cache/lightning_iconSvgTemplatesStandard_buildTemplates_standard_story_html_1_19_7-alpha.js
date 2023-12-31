import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./story.css";

import _implicitScopedStylesheets from "./story.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M440 631c11 0 20-14 20-30s-9-30-20-30-21 13-21 30 9 30 21 30zm127 0c11 0 20-14 20-30s-9-30-20-30-21 13-21 30 9 30 21 30zm36 60c-10-9-35-28-68-36-6 9-17 14-29 14s-25-6-30-14c-20 4-42 14-65 31-5 5-9 12-9 19 0 49 51 9 101 10 52 1 106 35 106-9 0-6-2-11-6-15z"${3}/><path d="M421 734c-6 0-11-1-15-5-6-4-8-12-8-24 0-8 4-17 11-22 21-17 43-27 66-32 2-1 3 0 4 2 5 7 15 12 27 12s20-5 25-12l5-2c34 9 60 29 69 37 6 4 9 11 8 18 0 10-2 17-8 22-11 9-30 4-53-1-15-3-32-7-49-7-17-1-34 4-50 8-12 3-23 6-32 6zm53-75c-20 5-41 16-60 31-5 3-8 9-8 15 0 9 2 15 6 18 7 5 22 1 39-4 16-4 34-8 52-8s35 4 51 8c21 4 38 8 46 2 3-3 5-8 5-15 0-5-2-9-5-12-9-8-32-26-64-34-7 8-18 13-31 13s-25-5-31-14zm-118 47c-41 25-80 4-94-7 24-17 33-23 34-35-33 1-58-2-90-56 34-10 26-17 81-35-2-9-44-3-59-18 13-10 27-50 41-57l-53 1c10-36 42-68 74-87-5-7-19-12-25-17 22-22 78-37 101-19-3-57 44-73 44-113 24 7 59 39 65 64 15-20 66-39 97-47 11 5 18 17 22 29s3 41 2 54c82-34 129 8 146 30-5 8-20 21-28 27 31 18 49 36 58 67-20 6-33 8-53 16 9 12 31 18 46 24-10 31-29 24-44 26 21 42 50 43 73 48-14 39-52 71-94 70 3 8 13 22 21 23-23 25-43 23-71 17 46-87 9-180-9-204-2 10-7 20-22 21-22-36-83-68-125-77-3 21 3 44 17 60-22 0-72-18-89-32-60 46-115 100-66 227z"${3}/><path d="M316 724c-28 0-50-14-58-20-2-1-3-3-3-5l3-5c17-12 26-18 29-24-30 0-56-7-86-59l-1-5 4-4c15-4 21-8 29-12 7-5 16-10 35-17h-3c-14-2-32-4-42-14l-2-5 3-4c5-4 11-14 16-24l13-21h-37l-5-2c-1-1-2-4-1-6 9-31 34-62 69-86l-9-5-9-6a6 6 0 01-1-10c21-19 70-36 100-25 1-27 14-44 25-60 10-14 18-26 18-42 0-2 1-4 3-5 1-2 3-2 5-1 23 7 55 33 66 58a273 273 0 0197-41c12 6 21 18 25 34 3 10 4 29 4 46 85-31 131 19 144 35 1 2 2 5 0 7-4 7-14 17-22 24 30 18 45 37 53 66 1 3-1 7-4 8a505 505 0 01-43 12l26 11 10 4c3 1 4 5 3 8-8 28-26 29-39 30 17 28 38 31 58 34l6 1c2 0 3 2 4 3v6c-14 40-50 70-89 74l11 11c3 0 5 2 5 4 1 2 1 4-1 6-25 27-48 25-77 19-2 0-3-1-4-3v-6c41-77 14-156-2-187-4 7-10 12-22 13-3 1-5 0-6-3-20-32-73-61-114-72-1 17 4 35 16 48 1 2 2 5 0 7-1 2-3 3-5 3-22 0-68-15-89-30-59 45-107 97-60 217 1 3 0 6-3 8-15 9-30 12-44 12zm-43-25c15 9 44 20 75 4-47-127 9-183 70-229 3-2 6-2 8 0 13 11 48 25 72 29-9-16-13-35-10-53 0-2 1-3 3-4 1-1 3-2 5-1a248 248 0 01126 76c8-2 11-7 13-15l5-5c2-1 5 1 6 3 22 29 53 119 13 203 21 3 35 3 51-11-8-7-14-17-16-22a6 6 0 017-9c34 1 69-24 84-59-22-4-49-10-70-49v-6l5-4 10-1c11 0 20-1 27-16l-4-1c-14-5-30-11-39-22-1-1-2-3-1-5 0-2 2-4 4-5l36-11 11-3c-8-24-23-41-53-57-2-1-3-3-3-5 0-3 1-5 3-6 7-5 18-15 23-22-15-17-58-56-135-24l-6-1c-2-1-3-3-3-5 0-25-1-44-3-52-3-11-9-20-17-24-34 9-78 28-91 44-1 2-4 3-6 2-2 0-4-2-5-5-3-17-29-45-53-56-2 16-11 28-20 40-12 17-24 34-23 63 1 3-1 5-3 6-2 2-5 1-7 0-18-14-62-4-87 13l1 1c7 4 15 8 19 13a6 6 0 01-2 9c-33 20-58 48-68 75h44a6 6 0 013 12c-6 2-14 16-20 28l-14 22c7 4 19 5 28 6 14 2 26 3 27 12 1 3-1 6-4 7-29 10-40 16-50 21-6 4-12 8-23 11 28 45 49 48 80 46l4 2c2 2 2 3 2 5-1 14-9 21-29 35z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-fp7bvph4q0";
freezeTemplate(tmpl);
