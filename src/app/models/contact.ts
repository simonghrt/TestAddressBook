export class Contact {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  pictureUrl: string;
  skypeUrl: string;
  linkedinUrl: string;
  mail: string;

  constructor(firstName: string, lastName: string, phoneNumber: string, pictureUrl: string,
  skypeUrl: string, linkedinUrl: string, mail: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
    this.pictureUrl = pictureUrl;
    this.skypeUrl = skypeUrl;
    this.linkedinUrl = linkedinUrl;
    this.mail = mail;
  }
}
