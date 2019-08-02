function getQuery(queryName) {
  const reg = new RegExp(`(^|&)${queryName}=([^&]*)(&|$)`, 'i');
  // eslint-disable-next-line no-restricted-globals
  const r = location.search.substr(1).match(reg);
  if (r != null) return decodeURI(r[2]);
  return null;
}

export default getQuery;
