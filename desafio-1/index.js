function xpHero({hero, xp}) {
    var name = hero;
    var XP = xp;
    var level;
    if(XP < 1000) {
        level = "Ferro"
    }
    if(XP > 1000 && XP < 2001) {
        level = "Bronze"
    }
    if(XP > 2000 && XP < 5001) {
        level = "Prata"
    }
    if(XP > 5000 && XP < 7001) {
        level = "Ouro"
    }
    if(XP > 7000 && XP < 8001) {
        level = "Platina"
    }
    if(XP > 8000 && XP < 9001) {
        level = "Ascendente"
    }
    if(XP >= 10001) {
        level = "Radiante"
    }
    return `O Herói de nome ${name} está no nível de ${level}`;
}

const hero1 = {
    hero: "MrCastle",
    xp: 1003
}
const hero2 = {
    hero: "BatMonster",
    xp: 7545
}
const hero3 = {
    hero: "Dj",
    xp: 5425
}
const hero4 = {
    hero: "LightRobot",
    xp: 6896
}
const hero5 = {
    hero: "Dragon",
    xp: 3699
}
console.log(xpHero(hero1));
console.log("-------------------------------------");
console.log(xpHero(hero2));
console.log("-------------------------------------");
console.log(xpHero(hero3));
console.log("-------------------------------------");
console.log(xpHero(hero4));
console.log("-------------------------------------");
console.log(xpHero(hero5));


