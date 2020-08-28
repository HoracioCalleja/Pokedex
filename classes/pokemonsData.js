export default class pokemonsApiData{

  /**
   * @param {Number} count - Cuenta de pokemones disponibles
   * @param {String} previousPage - Anterior pagina
   * @param {String} nextPage - Proxima pagina
   * @param {Array <String>} pokemonsUrls - Array de URL de los pokemones
   */


  constructor(count,previousPage,nextPage,pokemonsUrls = []){
    this.count = count;
    this.previousPage = previousPage;
    this.nextPage = nextPage;
    this.pokemonsUrls = pokemonsUrls;
  }
}