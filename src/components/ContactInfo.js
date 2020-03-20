export default class ContactInfo {
  constructor(postalCode, address1, address2, company, fullname) {
    this.postalCode_ = postalCode || ''
    this.address1_ = address1 || ''
    this.address2_ = address2 || ''
    this.company_ = company || ''
    this.fullname_ = fullname || ''
  }

  get postalCode() { return this.postalCode_ }
  get address1() { return this.address1_ }
  get address2() { return this.address2_ }
  get company() { return this.company_ }
  get fullname() { return this.fullname_ }
}