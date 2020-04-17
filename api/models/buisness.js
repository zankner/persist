module.exports = class Buisness {
  constructor(
    name,
    email_list,
    schedule,
    billing,
    products,
    receipts,
    logo,
    requests,
    orders,
    address,
    phone,
    buisnesses
  ) {
    this.name = name;
    this.email_list = email_list;
    this.products = products;
    this.logo = logo;
    this.billing = billing;
    this.buisnesses = buisnesses;
    this.orders = orders;
    this.schedule = schedule;
    this.receipts = receipts;
    this.requests = requests;
    this.address = address;
    this.phone = phone;
  }

  serialize() {
    return {
      name: this.name,
      email_list: this.email_list || [],
      products: this.products || {},
      logo: this.logo || '',
      billing: this.billing || {},
      buisnesses: this.buisnesses || [],
      orders: this.orders || [],
      schedule: this.schedule || [],
      recipe: this.receipts || [],
      requests: this.requests || [],
      address: this.address || '',
      phone: this.phone || ''
    }
  }
};