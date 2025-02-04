export const compactObject = (obj) => {
  //return Object.fromEntries(Object.entries(obj).filter(([_, v]) => (v != null) || (v != '')));
  return Object.keys(obj).forEach((k) => obj[k] == '' && delete obj[k])
}
