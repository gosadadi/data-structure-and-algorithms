//given a number of cents, return an object with the count
//of how many of each coin should be returned
//67 -> 2 quarters, 1 dime, 1 nickel, 2 pennies
//78 -> 3 quarters, 0 dimes, 0 nickels, 3 pennies
function coinChange(cents){
    var quarterCount=0;
    var dimeCount=0;
    var nickelCount=0;
    var penniesCount=0;
    for (cents>0){
        if(cents>=25){
        quarterCount=math.floor(cents/25)}
        if(cents >=25 || centsb)

    }

    var count={
        quarters:"quarterCount",
        dimes:"dimeCount",
        nickels:"nickelCount",
        pennies:"penniesCount"

    }

return count;
}

//if you get the time, work on dollarAndCoinChange
//given a cent amount, return an object with the count
//of how many dollars(1s, 5s, 10s) and how many coins
//should be returned. NOTE: use whole cents, not decimals
//4632 -> 4 tens, 1 five, 1 one, 1 quarter, 0 dimes, 1 nickel, 2 pennies
function dollarAndCoinChange(cents){
}