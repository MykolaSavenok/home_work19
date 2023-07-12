class Recept {
   constructor(name, listIngredients, descriptionCoocing, timeCoocing) {
      this.name = name;
      this.listIngredients = listIngredients;
      this.descriptionCoocing = descriptionCoocing;
      this.timeCoocing = timeCoocing;
   }
   isValid() {
      return !!(this.name && this.listIngredients && this.descriptionCoocing && this.timeCoocing);
   }
}

class ReceptBoks {
   constructor() {
      this.recipes = [];
   }

   addRecipe(recipe) {
      if (recipe.isValid()) {
         this.recipes.push(recipe);
      }
   }

   findRecipeTime(timeCoocing) {
      return this.recipes.filter((recipe) => recipe.timeCoocing <= timeCoocing);
   }

   findRecipeIngredients(listIngredients) {
      return this.recipes.filter((recipe) =>
         listIngredients.every((ingredient) =>
            recipe.listIngredients.includes(ingredient)
         )
      );
   }
}

const recipeOne = new Recept("Паста Карбонара", ["спагетті", "бекон", "яйце", "сир", "чорний перець"], "Сварити спагетті. Обсмажити бекон до хрумкого стану. Взбити яйця та змішати з сиром. Змішати готові спагетті з беконом та яєчною сумішшю. Посипати чорним перцем.", 30);
const recipeTwo = new Recept("Курка з овочами на сковороді", ["куряча грудка", "броколі", "морква", "соєвий соус", "часник", "імбир", "рослинна олія"], "Нарізати курячу грудку та обсмажити до готовності. Додати броколі, моркву, дрібно нарізаний часник та натертий імбир. Приправити соєвим соусом. Готувати до м'якості овочів.", 90);
const recipeThree = new Recept("Овочеве рагу", ["картопля", "морква", "лук", "томатна паста", "перець", "сіль"], "Нарізати картоплю, моркву та лук. Обсмажити лук, додати моркву та картоплю. Додати томатну пасту, нарізаний перець та сіль. Тушкувати до готовності овочів.", 60);
const recipeFour = new Recept("", ["інградіент1", "інградіент2"], "опис", 120);
const recipeFive = new Recept("Пюре", ["картопля", "морква"], "швидко і смачно", 90);

const receptBoks = new ReceptBoks();

receptBoks.addRecipe(recipeOne);
receptBoks.addRecipe(recipeTwo);
receptBoks.addRecipe(recipeThree);
receptBoks.addRecipe(recipeFour);

console.log("Рецепти з часом приготування до 60 хвилин:");
const recipesByTime = receptBoks.findRecipeTime(60);
recipesByTime.forEach((recipe) => {
  console.log(recipe.name);
});

console.log("Рецепти з інградіентами 'картопля' та 'морква':");
const recipesByIngredients = receptBoks.findRecipeIngredients(["картопля", "морква"]);
recipesByIngredients.forEach((recipe) => {
  console.log(recipe.name);
});
