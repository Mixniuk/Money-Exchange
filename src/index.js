// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    if(currency >= 10000) return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    if(currency < 0) return {};
    exchange = {};
    h = Math.floor(currency / 50);
    if(h > 0){
        currency -= h*50;
        exchange.H = h;
    }
    q = Math.floor(currency / 25);
    if(q > 0){
        currency -= q*25;
        exchange.Q = q;
    }
    d = Math.floor(currency / 10);
    if(d > 0){
        currency -= d*10;
        exchange.D = d;
    }
    n = Math.floor(currency / 5);
    if(n > 0){
        currency -= n*5;
        exchange.N = n;
    }
    if(currency != 0) exchange.P = currency;
    return exchange;
}
