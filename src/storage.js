export function checkLocalStorage(cacheBase) {
  try {
    let cachedItem = localStorage.getItem(cacheBase);
    if (cachedItem) {
      return cachedItem;
    } else {
      throw Error("No se ecuentra ese item");
    }
  } catch (e) {
    console.log(e);
    return;
  }
}
