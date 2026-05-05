// getter
// setter

class BankAccount {
  public readonly userId: number;
  public userName: string;
  protected userBalance: number;

  constructor(userId: number, userName: string, userBalance: number) {
    this.userId = userId;
    this.userName = userName;
    this.userBalance = userBalance;
  }

  //   addBalance(val :number){
  //     this.userBalance+=val
  //   }

  //using set

  set addBalance(val: number) {
    this.userBalance += val;
  }

  //   getBalance() {
  //     return this.userBalance;
  //   }

  //get

  get getBalance(){
    return this.userBalance
  }
}

class StudentAcc extends BankAccount {
  test() {
    this.userBalance;
  }
}

const IbrahimAccount = new BankAccount(12, "Mohammad Ibrahim Abdullah", 1000);

// IbrahimAccount.addBalance(20);
// IbrahimAccount.addBalance(80);
// console.log(IbrahimAccount.getBalance());

IbrahimAccount.addBalance = 20
IbrahimAccount.addBalance = 80

console.log(IbrahimAccount);
console.log(IbrahimAccount.getBalance);

