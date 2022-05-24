export const  countryOptions = [
    { key: 'a', value: 'Health & Fitness', text: 'Health & Fitness' }
]

export const getSubTotal = (expenseList) => {
    let sum = 0;
    expenseList.forEach(getSum);
    console.log(expenseList)

    function getSum(item) {
    sum += item.amount;
    }

    return sum;
}