var maxProfit = function (prices) {

    let maxProfit = 0;
    let l = 0;

    for(let r = 1; r < prices.length; r++){

        if(prices[l] < prices[r]){
            maxProfit=Math.max(prices[r] - prices[l], maxProfit);
        }else {
            l = r;
        }
    }

    return maxProfit;
    

}