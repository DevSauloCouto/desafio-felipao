class HeroAventure{
    constructor(name,age,type){
        this.name = name;
        this.age = age;
        this.type = type;
    }
    walk(){
        const x = 5, y = 2.5;
        let positionHeroX = 0;
        let positionHeroY = 0;
        for(let i = 0; i <= x; i += 0.1){
            positionHeroX = i;
            if(positionHeroX == x){
                break;
            }
        }
        for(let i = 0; i <= y + 0.1; i += 0.1){
            positionHeroY = i;
            if(positionHeroY == y){
                break;
            }
        }
        return [+positionHeroX.toFixed(1), +positionHeroY.toFixed(1)];
    }

    viewTypeAttack(type){
        if(type == 'mago') return 'magia'; 
        if(type == 'guerreiro') return 'espada';
        if(type == 'monge') return 'artes marciais';
        if(type == 'ninja') return 'shuriken';
        else return 'Inválido';
    }

    attack(){
        return `O ${this.type} ${this.name} atacou usando ${this.viewTypeAttack(this.type)}`;
    }

    missions(){
        const objetive = {
            mission_1: {mission: "Destrua 10 inimigos", status: false},
            mission_2: {mission: "Colete uma porção mágica no vale", status: false},
            mission_3: {mission: "Faça uma espada de diamante", status: false}
        };
        return objetive;
    }

    completeMission(missions){
        let level = 1;
        const msg = "Mission Completed";
        const cong = "Congratulations";

        const mission1 = () => {
            let enemys = 10;
            for(let i = enemys; i > -1; i--) {
                enemys--;
                if(enemys == 0){
                    missions.mission_1.status = true;
                    return `${cong} - ${msg}`;
                }
            }
        }

        const mission2 = () => {
            let potionMagic = 0;
            const getPotion = () => {
                let cordinatePotion = {
                    x: 5,
                    y: 2.5
                };
                return cordinatePotion;
            }
            const [X, Y] = this.walk();
            if(X == getPotion().x && Y == getPotion().y){
                potionMagic++;
            }
            if(potionMagic > 0.9){
                missions.mission_2.status = true;
                return `${cong} - ${msg}`;
            }
        }

        const mission3 = () => {
            let swordDiamond = 0;
            const getMaterials = () => {
                let wood = 5;
                let workspace = 1;
                let stone = 10;
                let iron = 15;

                return [wood, workspace, stone, iron];
            }
            const [wood, workspace, stone, iron] = getMaterials();
            if(wood > 4 && workspace >= 1 && stone > 5 && iron > 10){
                swordDiamond++;  
            } 
            if(swordDiamond != 0){
                missions.mission_3.status = true;
                return `${cong} - ${msg}`;
            }
        }
        mission1();
        mission2();
        mission3();
        missions.mission_1.status == true ? level += 0.33 : level;
        missions.mission_2.status == true ? level += 0.33 : level;
        missions.mission_3.status == true ? level += 0.33 : level;
        
        return level.toFixed(2) == 1.99 ? `O herói ${this.name} completou as missões:\n- ${missions.mission_1.mission}\n- ${missions.mission_2.mission}\n- ${missions.mission_3.mission}\nSubiu para o nível ${Math.ceil(level)}` : `Complete the mission for next level`;
    }
}

const hero_1 = new HeroAventure("Saulo", 18, "monge");
console.log(hero_1.attack());
console.log(hero_1.completeMission(hero_1.missions()));
console.log("\n")
const hero_2 = new HeroAventure("Nevek", 20, "ninja");
console.log(hero_2.attack());
console.log(hero_2.completeMission(hero_2.missions()));