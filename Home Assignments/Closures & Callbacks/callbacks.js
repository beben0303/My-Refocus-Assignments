function checkAccountBalance(balance){
    console.log(`Your account balance is $${balance}.\n`);
}

function depositAmount(balance, amount, minDepositAmount){
    if (amount < minDepositAmount){
        console.log(`Invalid transaction!\nMinimum deposit amount is $${minDepositAmount}.\n`);
    }else{
        balance += amount;
        console.log(`Transaction successful.\nYou deposited amount of $${amount}. Your current balance is now $${balance}.\n`);
    }
    return balance;
}

function withdrawAmount(balance, amount){
    if (balance == 0){
        console.log(`Invalid transaction!\nYou have $0 balance in your account.\n`);
    }else if (amount <= 0){
        console.log(`Invalid transaction!\nEnter higher than $0 for valid transaction.\n`);
    }else if (balance < amount){
        console.log(`Invalid transaction!\nYou only have $${balance} balance on your account.\n`);
    }else{
        balance -= amount;
        console.log(`Transaction successful.\nYou withdrew amount of $${amount}. Your current balance is now $${balance}.\n`)
    }
    return balance;
}

function createBankAccount(name, checkAccountBalance, depositAmount, withdrawAmount){
    const minDepositAmount = 0.1;
    let balance = 0.0;
    console.log(`Your bank account with the name ${name} is now ready for transactions.\n`);
    function checkBalance(){
        checkAccountBalance(balance);
    }

    function deposit(amount){
        balance = depositAmount(balance, amount, minDepositAmount);
    }

    function withdraw(amount){
        balance = withdrawAmount(balance, amount);
    }

    return {checkBalance, deposit, withdraw};
}

const myAccount = createBankAccount("TRAGUY", checkAccountBalance, depositAmount, withdrawAmount);

myAccount.checkBalance();
myAccount.deposit(600);
myAccount.checkBalance();
myAccount.withdraw(120);
myAccount.checkBalance();
myAccount.withdraw(0);
myAccount.checkBalance();
myAccount.withdraw(1000);
myAccount.deposit(0.0001);