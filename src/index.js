// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    
    if(currency > 10000) return {error:'You are rich, my friend! We don\'t have so much coins for exchange'};

    let coins = {};
    let divider = 50;

    while(currency) {
        switch(divider) {
            case 50: 
                if(currency >= 50) {
                    coins.H = Math.floor(currency/divider);
                    currency = currency%divider;
                } 
                divider = 25;
                break;
            case 25: 
                if(currency >= 25) {
                    coins.Q = Math.floor(currency/divider);
                    currency = currency%divider;
                }
                divider = 10;
                break;
            case 10: 
                if(currency >= 10) { 
                    coins.D = Math.floor(currency/divider);
                    currency = currency%divider;
                }
                divider = 5;
                break;
            case 5: 
                if(currency >= 5) {
                    coins.N = Math.floor(currency/divider);
                    currency = currency%divider;
                }
                divider = 1;
                break;
            case 1: 
                if(currency >= 1) coins.P = currency;
                currency = 0;
                break;
        }
    }
    return coins;    
}

