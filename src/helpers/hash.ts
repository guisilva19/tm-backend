import bcrypt from 'bcrypt';

export class Hash {
  public run(text: string) {
    return text && bcrypt.hashSync(text, 10);
  }

  public compare(password: string, hash: string) {
    return password && bcrypt.compareSync(password, hash);
  }
}
