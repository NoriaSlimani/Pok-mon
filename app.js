///
/// ARRAYS
///

// les arrays permettent de stocker plusieurs valeurs
//dans un array

let myArray =[27, true,"text",["27",true,103]];
let val1 = myArray[1]; // true (la première occurence)
let val2 = myArray [3][2]; // 103

let nbrElems = myArray;length;
myArray.push-("Samih"); //pour la ligne15
// pouvoir récuperer le nombre d'éléments dans un array
//j'aimerais pouvoir ajouter un  élément à myArray
// => propriétés et méthodes pré-définies pour les arrays

console.log(myArray);

///
/// FONCTIONS
///

// déclarer ma fonction
//l'argument c'est une variable à l'entrée d'une fonction
//qui va contenir les informations les passées en paramètre
function sayHello(firstName){//camelCase
  // code exécuté lorsque la fonction sayHello est appelée
     console.log("Salamalikoum " + firstName)};

     //appeler ma fonction
     sayHello("Théo");
     sayHello("Lamis");
     
     //exercice
     //mettre en place une série de chiffre en Array
    //calculer
     myArray=[]

///
///OBJETS
///


///
/// CLASSES
///

///
/// EXERCICE
///créer une catégorie de pokémon
/// creer 2 pokémons
class Pokemon {
    constructor(name, attack, defense, hp, luck) {
      this.name = name;
      this.attack = attack;
      this.defense = defense;
      this.hp = hp;
      this.luck = luck;
    }
  
    isLucky() {
      return Math.random() < this.luck % 100;
    }
  
    attackPokemon(target) {
      if (this.isLucky()) {
        const damage = this.attack - target.defense;
        if (damage > 0) {
          target.hp = target.hp - damage;
        }
        return damage;
      } else {
        return 0;
      }
    }
  }
  
  let pokemon1 = new Pokemon("Pikachu", 90, 30, 100, 70); 
  let pokemon2 = new Pokemon("Bulbizar", 100, 50, 120, 60); 
  
  while (pokemon1.hp > 0 && pokemon2.hp > 0) {
    // Premier Pokémon attaque le second
    let damage1 = pokemon1.attackPokemon(pokemon2);
    console.log(pokemon1.name + " attaque " + pokemon2.name + " et inflige " +damage1 +" dégâts.");
    console.log(pokemon2.name + " a " + pokemon2.hp + " points de vie restants.");
  
    if (pokemon2.hp <= 0) {
      console.log(pokemon2.name + " est KO! " + pokemon1.name + " gagne!");
      break;
    }
  
    // Deuxième Pokémon attaque le premier
    let damage2 = pokemon2.attackPokemon(pokemon1);
    console.log(pokemon2.name + " attaque " + pokemon1.name + " et inflige " + damage2 + " dégâts.");
    console.log(pokemon1.name + " a " + pokemon1.hp + " points de vie restants.");
  
    if (pokemon1.hp <= 0) {
      console.log(pokemon1.name + " est KO! " + pokemon2.name + " gagne!");
      break;
    }
  }
  