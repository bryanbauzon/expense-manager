function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  var suffixToken = token ? ("-" + token) : "";
  return ".slds-checkbox_add-button" + shadowSelector + " {display: flex;}";
  /*LWC compiler v3.0.0*/
}
export default [stylesheet];