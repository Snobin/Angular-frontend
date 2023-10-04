export class Employee {

  
  transactionPK: {
    transactionReference: string;
    bankCode: string;
  };
  accountNo: string;
  amount: number;
  createdOn: string;
  iban: string;
  accountName: string;
  status: string;
  

  constructor(
    transactionReference: string,
    bankCode: string,
    accountNo: string,
    amount: number,
    createdOn: string,
    iban: string,
    accountName: string,
    status: string
  ) {
    this.transactionPK = { transactionReference, bankCode };
    this.accountNo = accountNo;
    this.amount = amount;
    this.createdOn = createdOn;
    this.iban = iban;
    this.accountName = accountName;
    this.status = status;
  }
}

export class Verifydto {
    
  transactionreference: string;
  bankcode: string;


  constructor(
    transactionreference: string,
    bankcode: string,

    
  ) {
    this.transactionreference = transactionreference;
    this.bankcode = bankcode;

  }


}
export class EmployeePostDTO {
  transactionReference: string;
  bankCode: string;
  accountNo: string;
  amount: number;
  iban: string;
  accountName: string;
 

  constructor(
    transactionReference: string,
    bankCode: string,
    accountNo: string,
    amount: number,
    iban: string,
    accountName: string,
    
  ) {
    this.transactionReference = transactionReference;
    this.bankCode = bankCode;
    this.accountNo = accountNo;
    this.amount = amount;
    this.iban = iban;
    this.accountName = accountName;
   
  }
}
