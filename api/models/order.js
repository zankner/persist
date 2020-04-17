module.exports = class Order {
  constructor(
    buisness,
    buisnessRef,
    contents,
    dateOrdered,
    status,
    dateFinished,
    customer,
    customerRef
  ) {
    this.buisness = buisness;
    this.buisnessRef = buisnessRef;
    this.contents = contents;
    this.dateOrdered = dateOrdered;
    this.status = status;
    this.dateFinished = dateFinished;
    this.customer = customer;
    this.customerRef = customerRef;
  }

  serialize() {
    return {
      buisness: this.buisness,
      buisnessRef: this.buisnessRef,
      contents: this.contents,
      dateOrdered: this.dateOrdered,
      status: this.status || '',
      dateFinished: this.dateFinished || '',
      customer: this.customer,
      customerRef: this.customerRef
    }
  }
};