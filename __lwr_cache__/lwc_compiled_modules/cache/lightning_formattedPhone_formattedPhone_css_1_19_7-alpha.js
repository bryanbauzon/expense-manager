function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  var suffixToken = token ? ("-" + token) : "";
  return ((useActualHostSelector ? (useNativeDirPseudoclass ? '' : '[dir="rtl"]') + " :host" : (useNativeDirPseudoclass ? '' : '[dir="rtl"]') + " " + hostSelector)) + (useNativeDirPseudoclass ? ':dir(rtl)' : '') + " {direction: ltr;unicode-bidi: embed;}";
  /*LWC compiler v3.0.0*/
}
export default [stylesheet];