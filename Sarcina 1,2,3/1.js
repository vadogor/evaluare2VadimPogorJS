class Tour {
    constructor(name, costOneDay, days, insurance) {
      this.name = name;
      this.costOneDay = costOneDay;
      this.days = days;
      this.insurance = insurance;
    }
  
    getPrice() {
      return this.costOneDay * this.days + this.insurance;
    }
}
console.log(`Sarcina 1`);
var tour = new Tour('Turkey', 1500, 7, 750);
console.log(tour.name);
console.log(tour.costOneDay);
console.log(tour.days);
console.log(tour.insurance);
console.log(tour.getPrice());
console.log(``);

// Sarcina 2
// let firstTour = new Tour('Poland', 1600, 14, 1500);
// let secondTour = new Tour('Izrael', 1800, 10, 700);
// console.log(firstTour);
// console.log(secondTour)
//sau
console.log(`Sarcina 2`);
let tours = [];
tours.push(new Tour('Poland', 1600, 14, 1500));
tours.push(new Tour('Izrael', 1800, 10, 700));

for(let i = 0; i < tours.length; i++){
    console.log(`Turul ${i+1} are urmatoarele date:`);
    console.log(`Destinatia: ${tours[i].name}`);
    console.log(`Costul pe zi: ${tours[i].costOneDay}`);
    console.log(`Nr de zile: ${tours[i].days}`);
    console.log(`Insurance: ${tours[i].insurance}`);
    console.log(`Pret total: ${tours[i].getPrice()}`);
}
console.log(``);

//Sarcina 3
console.log(`Sarcina 3`);
let firstTourPrice = tours[0].getPrice();
let secondTourPrice = tours[1].getPrice();

if (firstTourPrice < secondTourPrice) {
    console.log(`Turul ${tours[0].name} este mai mic cu ${secondTourPrice - firstTourPrice}`);
} else if(firstTourPrice > secondTourPrice){
    console.log(`Turul ${tours[1].name} este mai mic cu ${firstTourPrice - secondTourPrice}`);
} else console.log(`Tururile au acelasi pret`);