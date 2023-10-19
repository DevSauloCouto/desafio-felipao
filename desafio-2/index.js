function rank(win, lose) {
    const wins = win - lose;
    let levelRank = function(){
        if(wins <= 10) {
            return "Ferro";
        }
        if(wins > 10 && wins < 21) {
            return "Bronze";
        }
        if(wins > 20 && wins < 51) {
            return "Prata";
        }
        if(wins > 50 && wins < 81) {
            return "Ouro";
        }
        if(wins > 80 && wins < 91) {
            return "Diamante";
        }
        if(wins > 90 && wins < 101) {
            return "Lendário";
        }
        if(wins > 100) {
            return "Imortal";
        }
    }
    const msg = `O Herói tem um saldo de ${wins} e está no nível ${levelRank()}`;
    return msg;
}

console.log(rank(20,5));
console.log(rank(75,21));
console.log(rank(99,73));
console.log(rank(50,20));