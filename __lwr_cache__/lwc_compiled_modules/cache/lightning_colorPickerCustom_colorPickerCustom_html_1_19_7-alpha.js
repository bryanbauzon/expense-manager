import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./colorPickerCustom.css";

import _implicitScopedStylesheets from "./colorPickerCustom.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  classMap: {
    "slds-color-picker__custom": true
  },
  attrs: {
    "part": "color-picker-custom"
  },
  key: 0
};
const stc1 = {
  "slds-assistive-text": true
};
const stc2 = {
  "slds-m-bottom_small": true
};
const stc3 = {
  "data-id": "color-gradient"
};
const stc4 = {
  "slds-color-picker__range-indicator": true
};
const stc5 = [["position", "absolute", false], ["display", "inline", false]];
const stc6 = {
  classMap: {
    "slds-assistive-text": true
  },
  key: 5
};
const stc7 = {
  classMap: {
    "slds-color-picker__hue-and-preview": true
  },
  key: 6
};
const stc8 = {
  "slds-color-picker__hue-slider": true
};
const stc9 = {
  "slds-swatch": true
};
const stc10 = {
  "data-id": "color-preview"
};
const stc11 = {
  classMap: {
    "slds-assistive-text": true
  },
  attrs: {
    "aria-hidden": "true"
  },
  key: 10
};
const stc12 = {
  classMap: {
    "slds-color-picker__custom-inputs": true
  },
  key: 11
};
const stc13 = {
  classMap: {
    "slds-form-element": true,
    "slds-color-picker__input-custom-hex": true
  },
  attrs: {
    "part": "input-text"
  },
  key: 12
};
const stc14 = {
  "slds-form-element__label": true
};
const stc15 = {
  classMap: {
    "slds-form-element__control": true
  },
  attrs: {
    "part": "input-container"
  },
  key: 14
};
const stc16 = {
  "slds-input": true
};
const stc17 = {
  classMap: {
    "slds-form-element": true
  },
  attrs: {
    "part": "input-text"
  },
  key: 16
};
const stc18 = {
  classMap: {
    "slds-form-element__control": true
  },
  attrs: {
    "part": "input-container"
  },
  key: 19
};
const stc19 = {
  classMap: {
    "slds-form-element": true
  },
  attrs: {
    "part": "input-text"
  },
  key: 21
};
const stc20 = {
  classMap: {
    "slds-form-element__control": true
  },
  attrs: {
    "part": "input-container"
  },
  key: 24
};
const stc21 = {
  classMap: {
    "slds-form-element": true
  },
  attrs: {
    "part": "input-text"
  },
  key: 26
};
const stc22 = {
  classMap: {
    "slds-form-element__control": true
  },
  attrs: {
    "part": "input-container"
  },
  key: 29
};
const stc23 = {
  classMap: {
    "slds-form-element__help": true
  },
  attrs: {
    "aria-live": "assertive"
  },
  key: 31
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {gid: api_scoped_id, d: api_dynamic_text, t: api_text, h: api_element, b: api_bind} = $api;
  const {_m0, _m1, _m2, _m3, _m4, _m5, _m6, _m7, _m8, _m9} = $ctx;
  return [api_element("div", stc0, [api_element("p", {
    classMap: stc1,
    attrs: {
      "id": api_scoped_id("color-picker-instructions")
    },
    key: 1
  }, [api_text(api_dynamic_text($cmp.i18n.colorPickerInstructions))]), api_element("div", {
    classMap: stc2,
    style: $cmp.gradientStyle,
    attrs: stc3,
    key: 2,
    on: {
      "mousedown": _m0 || ($ctx._m0 = api_bind($cmp.handleMouseDown))
    }
  }, [api_element("canvas", {
    attrs: {
      "width": $cmp.canvasRect.x,
      "height": $cmp.canvasRect.y
    },
    key: 3
  }), api_element("a", {
    classMap: stc4,
    styleDecls: stc5,
    attrs: {
      "data-id": "color-anchor",
      "href": "javascript:void(0)",
      "aria-live": "assertive",
      "aria-atomic": "true",
      "aria-describedby": api_scoped_id("color-picker-instructions")
    },
    key: 4,
    on: {
      "mousedrag": _m1 || ($ctx._m1 = api_bind($cmp.handlePreventDefault)),
      "mousedown": _m2 || ($ctx._m2 = api_bind($cmp.handlePreventDefault)),
      "keydown": _m3 || ($ctx._m3 = api_bind($cmp.handleKeydown))
    }
  }, [api_element("span", stc6, [api_text(api_dynamic_text($cmp.computedSaturationAndBrightness))])])]), api_element("div", stc7, [api_element("label", {
    classMap: stc1,
    attrs: {
      "for": api_scoped_id("rainbow")
    },
    key: 7
  }, [api_text(api_dynamic_text($cmp.i18n.hueInput))]), api_element("input", {
    classMap: stc8,
    attrs: {
      "data-id": "hue-slider",
      "type": "range",
      "min": "0",
      "max": "360",
      "id": api_scoped_id("rainbow")
    },
    props: {
      "value": $cmp._hueValue
    },
    key: 8,
    on: {
      "mousedown": _m4 || ($ctx._m4 = api_bind($cmp.handleDrag)),
      "change": _m5 || ($ctx._m5 = api_bind($cmp.onChange))
    }
  }), api_element("span", {
    classMap: stc9,
    style: $cmp.thumbnailStyle,
    attrs: stc10,
    key: 9
  }, [api_element("span", stc11, [api_text(api_dynamic_text($cmp._hex))])])]), api_element("div", stc12, [api_element("div", stc13, [api_element("label", {
    classMap: stc14,
    attrs: {
      "part": "label",
      "for": api_scoped_id("input")
    },
    key: 13
  }, [api_text(api_dynamic_text($cmp.i18n.hexLabel))]), api_element("div", stc15, [api_element("input", {
    classMap: stc16,
    attrs: {
      "data-primary-input": "",
      "type": "text",
      "id": api_scoped_id("input"),
      "part": "input",
      "minlength": "4",
      "maxlength": "7",
      "pattern": "^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$",
      "placeholder": "#FFFFFF"
    },
    props: {
      "value": $cmp._hex
    },
    key: 15,
    on: {
      "change": _m6 || ($ctx._m6 = api_bind($cmp.handleHexChange))
    }
  })])]), api_element("div", stc17, [api_element("label", {
    classMap: stc14,
    attrs: {
      "part": "label",
      "for": api_scoped_id("red")
    },
    key: 17
  }, [api_element("abbr", {
    attrs: {
      "title": $cmp.i18n.redAbbr
    },
    key: 18
  }, [api_text(api_dynamic_text($cmp.i18n.rInput))])]), api_element("div", stc18, [api_element("input", {
    classMap: stc16,
    attrs: {
      "type": "text",
      "id": api_scoped_id("red"),
      "data-color-name": "red",
      "part": "input",
      "placeholder": "255"
    },
    props: {
      "value": $cmp._rgb.red
    },
    key: 20,
    on: {
      "change": _m7 || ($ctx._m7 = api_bind($cmp.handleRgbChange))
    }
  })])]), api_element("div", stc19, [api_element("label", {
    classMap: stc14,
    attrs: {
      "part": "label",
      "for": api_scoped_id("green")
    },
    key: 22
  }, [api_element("abbr", {
    attrs: {
      "title": $cmp.i18n.greenAbbr
    },
    key: 23
  }, [api_text(api_dynamic_text($cmp.i18n.gInput))])]), api_element("div", stc20, [api_element("input", {
    classMap: stc16,
    attrs: {
      "type": "text",
      "id": api_scoped_id("green"),
      "data-color-name": "green",
      "part": "input",
      "placeholder": "255"
    },
    props: {
      "value": $cmp._rgb.green
    },
    key: 25,
    on: {
      "change": _m8 || ($ctx._m8 = api_bind($cmp.handleRgbChange))
    }
  })])]), api_element("div", stc21, [api_element("label", {
    classMap: stc14,
    attrs: {
      "part": "label",
      "for": api_scoped_id("blue")
    },
    key: 27
  }, [api_element("abbr", {
    attrs: {
      "title": $cmp.i18n.blueAbbr
    },
    key: 28
  }, [api_text(api_dynamic_text($cmp.i18n.bInput))])]), api_element("div", stc22, [api_element("input", {
    classMap: stc16,
    attrs: {
      "type": "text",
      "id": api_scoped_id("blue"),
      "data-color-name": "blue",
      "part": "input",
      "placeholder": "255"
    },
    props: {
      "value": $cmp._rgb.blue
    },
    key: 30,
    on: {
      "change": _m9 || ($ctx._m9 = api_bind($cmp.handleRgbChange))
    }
  })])])]), $cmp._errorMessage ? api_element("div", stc23, [api_text(api_dynamic_text($cmp._errorMessage))]) : null])];
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
tmpl.stylesheetToken = "lwc-5mnumbh5e5i";
freezeTemplate(tmpl);
