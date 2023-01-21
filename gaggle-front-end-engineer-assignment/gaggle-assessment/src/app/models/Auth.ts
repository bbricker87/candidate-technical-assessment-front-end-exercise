export class Auth {
  username: string;
  password: string;
  company: string;
  isAuthenticated: boolean;

  constructor(
    Username: string,
    Password: string,
    Company: string,
    IsAuthenticated: boolean
  ) {
    this.username = Username;
    this.password = Password;
    this.company = Company;
    this.isAuthenticated = IsAuthenticated;
  }
}
