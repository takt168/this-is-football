export function sortByLeagueName(a, b) {
  const itemA = a.strLeague;
  const itrmB = b.strLeague;

  let comparison = 0;
  if (itemA > itrmB) {
    comparison = 1;
  } else if (itemA < itrmB) {
    comparison = -1;
  }
  return comparison;
}