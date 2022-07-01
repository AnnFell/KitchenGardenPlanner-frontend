type d = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 0;
type oneToNine = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

type YYYY = `19${d}${d}` | `20${d}${d}`;
type MM = `0${oneToNine}` | `1${0 | 1 | 2}`;
type DD = `${0}${oneToNine}` | `${1 | 2}${d}` | `3${0 | 1}`;

export type DateYMString = `${YYYY}-${MM}`;
export type DateYMDString = `${DateYMString}-${DD}`;

function dateToDateYMDString(date: Date): DateYMDString {
  const month: String = date.getMonth().toString().padStart(2, "0");
  const day: String = date.getDay().toString().padStart(2, "0");
  return `${date.getFullYear()}-${month}-${day}` as DateYMDString;
}

export {dateToDateYMDString};
