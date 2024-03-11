function solution(A, D) {
    let accountBalance = 0;
    const cardPayments = {};
    const cardFeeMonths = new Set();

    for (let i = 0; i < A.length; i++) {
        const A = [100, 100, 100, -10];
        const D = ['2020-12-31', '2020-12-22', '2020-12-03', '2020-12-29'];
        console.log(solution(A, D)); // Output: 230

        // Update account balance
        accountBalance += amount;

        // Deduct card fee if necessary
        if (month !== 12 && !cardFeeMonths.has(`${year}-${month}`)) {
            const cardPaymentsCount = Object.values(cardPayments).reduce((acc, val) => acc + (val === month ? 1 : 0), 0);
            if (cardPaymentsCount < 3 || Object.entries(cardPayments).filter(([_, val]) => val === month).reduce((acc, [_, val]) => acc + val, 0) < 100) {
                accountBalance -= 5;
            }
            cardFeeMonths.add(`${year}-${month}`);
        }

        // Update card payments count
        if (amount < 0) {
            cardPayments[date] = month;
        }
    }

    return accountBalance;
}


