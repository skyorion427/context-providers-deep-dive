// converts an Array with objects that have `{uid: string}` to an Object map where `uid` is the key
export const arrayToMap = <T extends Array<{uid: string}>>(
  array: T | undefined
) =>
  array
    ? {...array.reduce((prev, curr) => ({...prev, [curr.uid]: curr}), {})}
    : {};

export default arrayToMap;
