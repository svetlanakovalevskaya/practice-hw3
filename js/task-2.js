// Дана строка; нужно написать функцию, которая позволяет
// вернуть значение true, если строка является
// палиндромом, и false — если нет.

const isPalyndrom = (string) => 
    string.toLowerCase() === string.split('').reverse().join("").toLowerCase();

console.log(isPalyndrom("Anna"));