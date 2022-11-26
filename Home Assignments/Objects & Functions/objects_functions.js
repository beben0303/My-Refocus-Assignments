var accountIdRecord = 0
function createBankAccount(accountNumber, userName, password, pin){
    let account = {
        'bankAccountId': accountIdRecord++,
        'accountNumber': accountNumber,
        'credentials': [userName, password, pin],
        'balance': 0.0,
        'createAt': new Date().toUTCString(),
        'changePin': function(pin){
            this.credentials[2] = pin;
        },
        'creditToAccount': function(amount){
            if (amount > 0){
                this.balance += amount;
            }
        },
        'debitToAccount': function(amount){
            if (this.balance > amount){
                this.balance -= amount;
            }
        }
    }

    console.log(`Bank account has been created with the following informations.`)
    console.log(`Account ID: ${account.bankAccountId}`)
    console.log(`Account Number: ${account.accountNumber}`)
    console.log(`Balance: ${account.balance}`)
    console.log(`Date Created: ${account.createAt}\n`)
    return account;
}

function createUserAccount(username, password, firstName, lastName, birthDate, createBankAccount){
    let account = {
        'bankAccount': null,
        'debitCard': null,
        'firstName': firstName,
        'lastName': lastName,
        'birthDate': birthDate,
        'validID': ["type", "idNumber"],
        'address': null,
        'getFullName': function(){
            return `${account.firstName} ${account.lastName}`;
        },
        'getBankAccountDetails' : function(){
            return {
                'accountNumber': this.bankAccount.accountNumber,
                'debitCard': this.debitCard,
                'balance': this.bankAccount.balance,
                'dateCreated': this.bankAccount.createAt
            }
        },
        'depositAmout': function(amount){
            if (amount >= 100){
                this.bankAccount.creditToAccount(amount);
                console.log(`Transaction successful.\nYou deposited amount of ${amount}. Your current balance is now ${this.bankAccount.balance}.\n`)
            }else{
                console.log(`Invalid transaction!\nMininum deposit amount is 100.\n`);
            }
        },
        'withdrawAmout': function(amount){
            if (this.bankAccount.balance == 0){
                console.log(`Invalid transaction!\nYou have 0 balance in your account.\n`);
            }else if (amount <= 0){
                console.log(`Invalid transaction!\nEnter higher than 0 for valid transaction.\n`);
            }else if (this.bankAccount.balance < amount){
                console.log(`Invalid transaction!\nYou only have ${this.bankAccount.balance} balance on your account.\n`);
            }else{
                this.bankAccount.debitToAccount(amount);
                console.log(`Transaction successful.\nYou withdrew amount of ${amount}. Your current balance is now ${this.bankAccount.balance}.\n`)
            }
        }
    }

    console.log(`New User Account has been created with the following informations.`)
    console.log(`Username: ${username}`)
    console.log(`Password: ${password}`)
    console.log(`Name: ${account.getFullName()}`)
    console.log(`Birth Date: ${account.birthDate}\n`)

    function addAddress(address){
        account.address = address;
        console.log(`Address added.\n${account.address}\n`);
    }

    function addValidId(type, idNumber){
        account.validID[0] = type;
        account.validID[1] = idNumber;
        console.log(`Valid Id added.\n${account.validID}\n`)
    }

    function addBankAccount(accountNumber){
        const defaultPin = 000000
        account.bankAccount = createBankAccount(accountNumber, username, username, defaultPin);
        console.log(`Bank account added.\n`)
    }

    function addDebitCard(debitCardNumber){
        account.debitCard = debitCardNumber;
        console.log(`DebitCard added.\n${account.debitCard}\n`);
    }

    function changePin(newPin){
        account.bankAccount.changePin(newPin);
        console.log(`Pin changed.\n${account.bankAccount.credentials[2]}.\n`)
    }

    function getAccount(){
        return account;
    }

    return {addAddress, addValidId, addDebitCard, addBankAccount, changePin, getAccount};
}

function checkCredentials(credentials, username, password, pin){
    return (credentials[0] === username && credentials[1] === password && credentials[2] === pin);
}

function checkAccountNumber(bankAccount, accountNumber){
    return bankAccount.accountNumber == accountNumber;
}

function getBankAccountDetails(userAccount, username, password, pin, isValidCredentials){
    console.log(`Request for ${userAccount.getFullName()}'s bank account details.`);
    if(isValidCredentials(userAccount.bankAccount.credentials, username, password, pin)){
        let details = userAccount.getBankAccountDetails();
        console.log(`Account Number: ${details.accountNumber}`);
        console.log(`Debit Card: ${details.debitCard}`);
        console.log(`Balance: ${details.balance}`);
        console.log(`Date Created: ${details.dateCreated}\n`);
    }else{
        console.log(`Invalid transaction!\nInput credentials didn't match with the user's credentials.\n`);
    }
}

function depositMoney(userAccount, accountNumber, amount, isValidAccountNumber){
    console.log(`Deposit amount of ${amount} to account number ${accountNumber}.`);
    if (isValidAccountNumber(userAccount.bankAccount, accountNumber)){
        userAccount.depositAmout(amount);
    }else{
        console.log(`Invalid transaction!\nThere is no account number ${accountNumber} in the system.\nCheck account number.\n`);
    }
}

function withdrawMoney(userAccount, username, password, pin, accountNumber, amount, isValidCredentials, isValidAccountNumber){
    console.log(`Withdraw amount of ${amount} from account number ${accountNumber}.`)
    if (isValidCredentials(userAccount.bankAccount.credentials, username, password, pin)){
        if (isValidAccountNumber(userAccount.bankAccount, accountNumber)){
            userAccount.withdrawAmout(amount);
        }else{
            console.log(`Invalid transaction!\nThere is no account number ${accountNumber} in the system.\nCheck account number.\n`);
        }
    }else{
        console.log(`Invalid transaction!\nInput credentials didn't match with the user's credentials.\n`);
    }
}

//Create user account
var accountCreator = createUserAccount("traguy", "traguy", "Water Law", "Trafalgar", "05-30-2000", createBankAccount);
accountCreator.addAddress("Pasig City");
accountCreator.addValidId("Driver License", "DHL662929J");
//Create bank account and to user account default pin is 000000
accountCreator.addBankAccount("000012344772");
//Add Debit Card to user account
accountCreator.addDebitCard("6138946231131124");
//Change pin
accountCreator.changePin(123456);

const lawUserAccount = accountCreator.getAccount();
getBankAccountDetails(lawUserAccount, "traguy", "traguy", 123456, checkCredentials);

accountCreator = createUserAccount("luffy", "luffy", "Luffy", "Monkey", "06-11-2004", createBankAccount);
accountCreator.addAddress("Quezon City");
accountCreator.addValidId("Passport", "UDO1245Y");
accountCreator.addBankAccount("000012344773");
accountCreator.addDebitCard("0000112224356667");
accountCreator.changePin(111222);

const luffyUserAccount = accountCreator.getAccount();

getBankAccountDetails(luffyUserAccount, "luffy", "luffy", 111222, checkCredentials);
withdrawMoney(luffyUserAccount, "luffy", "luffy", 111222, "000012344773", 300, checkCredentials, checkAccountNumber);
depositMoney(luffyUserAccount, "000012384773", 10, checkAccountNumber);
depositMoney(luffyUserAccount, "000012344773", 10, checkAccountNumber);
depositMoney(luffyUserAccount, "000012344773", 10000, checkAccountNumber);
getBankAccountDetails(luffyUserAccount, "luffy", "luffy", 111222, checkCredentials);
withdrawMoney(luffyUserAccount, "luffy", "luffy", 111222, "000012344773", 300, checkCredentials, checkAccountNumber);
getBankAccountDetails(luffyUserAccount, "luffy", "luffy", 111222, checkCredentials);
