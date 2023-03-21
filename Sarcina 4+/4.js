class Tour {
  constructor(name, costOneDay, days, insurance) {
    this.name = name;
    this.costOneDay = costOneDay;
    this.days = days;
    this.insurance = insurance;
    this.tax = 0;
  }

  getName() {
    return this.name;
  }

  getCostOneDay() {
    return this.costOneDay;
  }

  getDays() {
    return this.days;
  }

  getInsurance() {
    return this.insurance;
  }

  getPrice() {
    return this.costOneDay * this.days + this.insurance;
  }

  increaseDays(numDays) {
    this.days += numDays;
  }

  setTax(taxPercentage) {
    this.tax = taxPercentage / 100;
  }

  getPriceNetto() {
    return this.getPrice() + this.getPrice() * this.tax;
  }
}

console.log(`Sarina 4`);
var tour = new Tour('Turkey', 1500, 7, 750);
console.log(tour.getName());
console.log(tour.getCostOneDay());
console.log(tour.getDays());
console.log(tour.getInsurance());
console.log(tour.getPrice());
console.log(``);

console.log(`Sarina 5`);
console.log(tour.getName());
console.log(tour.getCostOneDay());
console.log(tour.getDays());
console.log(tour.getInsurance());
console.log(tour.getPrice());

tour.increaseDays(3);

console.log(tour.getPrice());
console.log(``);

console.log(`Sarina 6`);
tour.setTax(5); 
console.log(tour.getPriceNetto());
console.log(``);