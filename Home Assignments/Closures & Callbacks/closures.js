function createBankAccount(name){
    const minDepositAmount = 0.1;
    let balance = 0.0;
    console.log(`Your bank account with the name ${name} is now ready for transactions.\n`);

    function checkAccountBalance(){
        console.log(`Your account balance is $${balance}.\n`);
    }

    function depositAmount(amount){
        if (amount < minDepositAmount){
            console.log(`Invalid transaction!\nMinimum deposit amount is $${minDepositAmount}.\n`);
        }else{
            balance += amount;
            console.log(`Transaction successful.\nYou deposited amount of $${amount}. Your current balance is now $${balance}.\n`);
        }
    }

    function withdrawAmount(amount){
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
    }

    return {checkAccountBalance, depositAmount, withdrawAmount};
}

const myAccount = createBankAccount("TRAGUY");
myAccount['depositAmount'](50);
myAccount['withdrawAmount'](100);
myAccount['depositAmount'](50);
myAccount['checkAccountBalance']();
myAccount['withdrawAmount'](80);
myAccount['withdrawAmount'](0);