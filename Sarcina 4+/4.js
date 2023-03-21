class Tour {
    constructor(name, costOneDay, days, insurance) {
      this.name = name;
      this.costOneDay = costOneDay;
      this.days = days;
      this.insurance = insurance;
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
  }
  
  var tour = new Tour('Turkey', 1500, 7, 750);
  
  console.log(tour.getName());
  console.log(tour.getCostOneDay());
  console.log(tour.getDays());
  console.log(tour.getInsurance());
  console.log(tour.getPrice());

  