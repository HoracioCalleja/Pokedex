export default class Pokemon{

  /**
  * @param {String} name - Name of the pokemon
  * @param {Number} id - ID of the pokemon
  * @param {String} height - Height of the pokemon
  * @param {String} weight - Weight of the pokemon
  * @param {String} front_img - URL of front image
  * @param {String} back_img - URL of back image
  * @param {String} hp - Hp of the pokemon
  * @param {Array <String>} abilities - Abilities of the pokemon
  * @param {Array <String>} types - Types of the pokemon
  **/


  constructor(id,name,height,weight,abilities = [],front_img = undefined ,back_img = undefined,hp, types = []){
    this.id = id;
    this.name = name;
    this.height = height;
    this.weight = weight;
    this.front_img = front_img;
    this.back_img = back_img;
    this.hp = hp;
    this.types = types;
    this.abilities = abilities;
  }
}