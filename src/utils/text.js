// "NGOUYE DIEGANE GNING" -> "Ngouye Diegane Gning"
export function titleCase(str) {
  return str.toLowerCase().replace(/(^|\s)\S/g, (c) => c.toUpperCase())
}
