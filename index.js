// Write your code here
class Breakfast {
    constructor(protein,drink){
        this.food = protein
        this.drink = drink 
    }
}

class Lunch {
    constructor(salad, soup, drink){
        this.salad = salad
        this.soup = soup
        this.drink = drink
    }
}

class Dinner {
    constructor(salad, soup, entree, desert){
        this.salad = salad
        this.soup = soup
        this.entree = entree
        this._dessert = desert
    }

}