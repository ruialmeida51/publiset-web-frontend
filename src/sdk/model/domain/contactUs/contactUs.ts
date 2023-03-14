export default class ContactUs {
  email: string;
  phone_number: string;
  address: string;
  open_hours: string;

  constructor(
    email: string,
    phone_number: string,
    address: string,
    open_hours: string
  ) {
    this.email = email;
    this.phone_number = phone_number;
    this.address = address;
    this.open_hours = open_hours;
  }
}
