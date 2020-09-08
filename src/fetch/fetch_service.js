export  async function fetchData(URL) {
  try {
    let response = await fetch(URL);
    let json = await response.json();

    if (!response.ok) throw Error(response.error);

    return json;
  } catch (error) {
    alert(error);
  }
}
