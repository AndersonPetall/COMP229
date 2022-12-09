export class User {
  generateGuid(): string {
    return 'xxyyxxyyxxyyxxyyxxyyxxyy'.replace(/[xy]/g, function (c) {
      var r = (Math.random() * 16) | 0,
        v = c == 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }
  _id?: string = this.generateGuid();
  username?: string;
  password?: string;
  email?: string;
}
