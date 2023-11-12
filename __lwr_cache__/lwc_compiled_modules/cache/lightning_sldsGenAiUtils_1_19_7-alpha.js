function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  var suffixToken = token ? ("-" + token) : "";
  return ((useActualHostSelector ? ":host([class*=\"gen-ai-enabled\"]) {" : hostSelector + "[class*=\"gen-ai-enabled\"] {")) + "padding: 0;margin-bottom: 0;}";
  /*LWC compiler v3.0.0*/
}
export default [stylesheet];