function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * Optional static parent definition on extended LightningOverlay
 * Ex: static [parent] = CustomOverlayBase;
 */
export const parent = Symbol('parent');

/**
 * Optional static instanceName for CustomOverlayBase;
 * Ex: static [instanceName] = 'custom-overlay';
 * This makes it easier to debug in the dom.
 */
export const instanceName = Symbol('instanceName');

/**
 * Secure access to events
 */
export const secure = Symbol('secure event');

/**
 * optional static properties
 * Ex: static [properties] = <array of public attribute names>
 * This will be used to assign value to restricted set of attributes
 */
export const properties = Symbol('properties');

/**
 * optional static requiredProperties
 * Ex: static [properties] = <array of public required attribute names>
 * This will be used verifying if required attributes have value assigned.
 */
export const requiredProperties = Symbol('requiredProperties');

/**
 * Only allow CSS Variables
 * @param {string|Object} style Style string or object
 * @returns {string} sanitized style string
 */
export function normalizeStyle(style) {
  const props = {};
  if (typeof style === 'string') {
    const regex = /([\w-]*)\s*:\s*([^;]*)/g;
    let match;
    while (match = regex.exec(style)) {
      if (match[1].startsWith('--')) {
        props[match[1]] = match[2].trim();
      } else {
        // eslint-disable-next-line no-console
        console.warn(`Overlay 'style' only supports CSS Variables (invalid '${match[1]}' set)`);
      }
    }
  } else if (style && typeof style === 'object') {
    Object.keys(style).forEach(property => {
      if (property.startsWith('--') && typeof style[property] === 'string') {
        props[property] = style[property];
      } else {
        // eslint-disable-next-line no-console
        console.warn(`Overlay 'style' only supports CSS Variables (invalid '${property}' set)`);
      }
    });
  }
  return Object.keys(props).map(property => {
    return `${property}:${props[property]}`;
  }).join(';');
}

/**
 * Normalize the overlay apis.
 * @param {Object} apis Apis passed to overlay
 * @returns {Object} Normalized object of apis
 */
export function normalizeApis(apis) {
  if (apis && typeof apis === 'object') {
    const normalizedApis = _objectSpread({}, apis);
    // Normalize Style
    if (apis.style) {
      normalizedApis.style = normalizeStyle(apis.style);
    }
    return normalizedApis;
  }
  return {};
}