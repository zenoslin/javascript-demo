export default function getShareURL(
  $delete = [],
  $add = [],
  targetURL = window.location.origin
) {
  let record = [];
  let addArr = [];
  if (window.location.href.indexOf("?") !== -1) {
    let search = window.location.search;
    let params = search.substr(1);
    let paramArr = params.split("&");
    $delete.map(val => {
      if (search.indexOf(val) === -1) return;
      for (let i = 0; i < paramArr.length; i++) {
        if (paramArr[i].indexOf(val) !== -1) {
          let temp = paramArr[i].split("=");
          if (temp[0] === val) record.push(i);
        }
      }
    });
    for (let i = 0; i < paramArr.length; i++) {
      if (record.indexOf(i) === -1) addArr.push(paramArr[i]);
    }
  }
  let searchArr = addArr.concat($add);
  let newSearch = "";
  if (searchArr.length > 0) {
    searchArr.map(val => {
      newSearch = newSearch + `&${val}`;
    });
    newSearch = `?${newSearch.substr(1)}`;
  }
  return `${targetURL + newSearch}`;
}
