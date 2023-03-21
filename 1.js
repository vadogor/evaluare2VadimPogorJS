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

var tour = new Tour('Turkey', 1500, 7, 750);
console.log(tour.name);
console.log(tour.costOneDay);
console.log(tour.days);
console.log(tour.insurance);
console.log(tour.getPrice());