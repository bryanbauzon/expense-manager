import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./formattedLocation.html";
const MAX_LONGITUDE = 180.0;
const MAX_LATITUDE = 90.0;
function isNumber(value) {
  return value !== '' && value !== null && isFinite(value);
}
function isLongitude(longitude) {
  return isNumber(longitude) && Math.abs(longitude) <= MAX_LONGITUDE;
}
function isLatitude(latitude) {
  return isNumber(latitude) && Math.abs(latitude) <= MAX_LATITUDE;
}

/**
 * Displays a geolocation in decimal degrees using the format [latitude, longitude].
 */
class LightningFormattedLocation extends LightningElement {
  constructor(...args) {
    super(...args);
    /**
     * The latitude of the geolocation. Latitude values must be within -90 and 90.
     * @type {number}
     * @required
     */
    this.latitude = void 0;
    /**
     * The longitude of the geolocation. Longitude values must be within -180 and 180.
     * @type {number}
     * @required
     */
    this.longitude = void 0;
  }
  get isValid() {
    const valid = isLatitude(this.latitude) && isLongitude(this.longitude);
    if (!valid) {
      // eslint-disable-next-line no-console
      console.warn(`<lightning-formatted-location> expects latitude in range [-90.0, 90.0], longitude in range [-180.0, 180.0].`);
    }
    return valid;
  }
  /*LWC compiler v3.0.0*/
}
_registerDecorators(LightningFormattedLocation, {
  publicProps: {
    latitude: {
      config: 0
    },
    longitude: {
      config: 0
    }
  }
});
export default _registerComponent(LightningFormattedLocation, {
  tmpl: _tmpl,
  sel: "lightning-formatted-location",
  apiVersion: 59
});