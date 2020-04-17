module.exports = class User {
  constructor(
    first_name,
    last_name,
    birthdate,
    billing,
    buisnesses,
    orders,
    schedule,
    receipts
  ) {
    this.first_name = first_name;
    this.last_name = last_name;
    this.birthdate = birthdate;
    this.billing = billing;
    this.buisnesses = buisnesses;
    this.orders = orders;
    this.schedule = schedule;
    this.receipts = receipts;
  }

  serialize() {
    return {
      first_name: this.first_name,
      last_name: this.last_name,
      birthdate: this.birthdate || '',
      billing: this.billing || {},
      buisnesses: this.buisnesses || [],
      orders: this.orders || [],
      schedule: this.schedule || [],
      recipe: this.receipts || []
    }
  }
};