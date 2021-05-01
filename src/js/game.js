
class Choice{
    constructor(id,imgPath,desc ,targetLevel) {
        this.id = id;
        this.imgPath = imgPath;
        this.desc = desc;
        this.targetPage = targetLevel;
    }
    gotoPage(currentPage){
        tabLevel[this.targetPage].display();
        console.log(this.targetPage , currentPage);
    }
}

class level{
    constructor(id,choices,title,imgPath,lore,isDeath=false, isSuccess = false ) {
        this.id = id;
        this.choices = choices;
        this.title = title;
        this.imgPath = imgPath;
        this.lore = lore;
        this.isDeath = isDeath;
        this.isSuccess = isSuccess;

    }
    display(){
        if (!this.isDeath && !this.isSuccess){

                document.getElementById("main-container").innerHTML =
                `
                <div id="game-page">
                    <div class="choice-container" onclick="tabLevel[${this.id}].choices[0].gotoPage(${this.id});">
                        <div class="choice-img" >
                             <img src=${this.choices[0].imgPath}  alt="Choice 1" >   
                        </div>
                        <div class="choice-text">
                            <h3>${this.choices[0].desc}</h3>
                        </div>
                    </div>
                    <div class="lore-container">
                        <div class="lore-title">
                              <h1>${this.title}</h1>
                        </div>
                        <div class="lore-img">
                             <img src=${this.imgPath} alt="Level image">
                        </div>
                        <div class="lore-text">
                            <h3>${this.lore}</h3>
                        </div>
                    </div>
                    <div class="choice-container" onclick="tabLevel[${this.id}].choices[1].gotoPage(${this.id});">
                        <div class="choice-img">
                             <img src=${this.choices[1].imgPath}  alt="Choice 2" >
                        </div>
                        <div class="choice-text">
                            <h3>${this.choices[1].desc}</h3>
                        </div>
                    </div>
                </div>
            `;



        } else if(this.isSuccess){
            document.getElementById("main-container").innerHTML =
                `
                <div id="game-page">
                    
                    <div class="lore-container" id="success">
                        <div class="lore-title">
                              <h1>${this.title}</h1>
                        </div>
                        <div class="lore-img">
                             <img src=${this.imgPath} alt="Level image">
                        </div>
                        <div class="lore-text">
                            <h3>${this.lore}</h3>
                        </div>
                    </div>
                    
                </div>
            `;
        }else if(this.isDeath && !this.isSuccess){
            this.choices = constChoice[0];
            document.getElementById("main-container").innerHTML =
                `
                <div id="game-page">
                    <div class="choice-container" style="width: 45%; margin: 30px" onclick="tabLevel[${this.id}].choices.gotoPage(${this.id});">
                        <div class="choice-img">
                             <img src=${this.choices.imgPath}  alt="Choice 1" >   
                        </div>
                        <div class="choice-text">
                            <h3>${this.choices.desc}</h3>
                        </div>
                    </div>
                    <div class="lore-container" style="width: 45%; margin:30px;">
                        <div class="lore-title">
                              <h1>${this.title}</h1>
                        </div>
                        <div class="lore-img">
                             <img src=${this.imgPath} alt="Level image">
                        </div>
                        <div class="lore-text">
                            <h3>${this.lore}</h3>
                        </div>
                    </div>
                </div>
            `;
        }else {
            document.getElementById("main-container").innerHTML =
                `
                <div id="game-page">
                    
                    <div class="lore-container" id="success">
                        <div class="lore-title">
                              <h1>${this.title}</h1>
                        </div>
                        <div class="lore-img">
                             <img src=${this.imgPath} alt="Level image">
                        </div>
                        <div class="lore-text">
                            <h3>${this.lore}</h3>
                        </div>
                    </div>
                    
                </div>
            `;
        }
    }

}


let constChoice = [new Choice(0,`src/assets/img/choices/choice-${0}.png`,"Tu décides de remonter dans le temps !",0)]
let choiceNbr = 15;

/*for (let i = 0; i<choiceNbr; i++){
    let choice1 = new Choice(i,`src/assets/img/choices/choice-${i+1}.png`,"",i+1);
    let choice2 = new Choice(i+1,`src/assets/img/choices/choice-${i+2}.png`,"",i+2);
    tabChoice.push([choice1,choice2]);
}*/
for (let i = 1; i<choiceNbr; i++) {
    let choice1 = new Choice(i,`src/assets/img/choices/choice-${i}.png`,"", i);
    constChoice.push(choice1);
}
//Différents choix ici

constChoice[1].desc = "Tu commences directement à programmer";
constChoice[1].targetPage = 1;

constChoice[2].desc = "Tu te fais des recherches sur comment tu pourrais faire";
constChoice[2].targetPage = 2;

constChoice[3].desc = "Tu continues au feeling ";
constChoice[3].targetPage = 3;

constChoice[4].desc = "Tu commences à creer le site";
constChoice[4].targetPage = 4;

constChoice[5].desc = "Tu décides de mettre en commun avec les autres Makers";
constChoice[5].targetPage = 5;

constChoice[6].desc = "Tu créés la base du site en créant des fichier html, css et javascript ";
constChoice[6].targetPage = 6;

constChoice[7].desc = "Tu créés ton un arbre de décision avec les différentes situations et choix de ton histoire";
constChoice[7].targetPage = 7;

constChoice[8].desc = "Tu recommences tes recheches depuis le début";
constChoice[8].targetPage = 8;

constChoice[9].desc = "Tu décides de faire ton histoire au fur et à mesure que tu programmes";
constChoice[9].targetPage = 9;

constChoice[10].desc = "Tu créés ton un arbre de décision avec les différentes situations et choix de ton histoire ";
constChoice[10].targetPage = 10;

constChoice[11].desc = "Tu créés la base du site en créant des fichier html, css et javascript";
constChoice[11].targetPage = 10;

constChoice[12].desc = "Tu choisis de rajouter plein de scénario a ton histoire !";
constChoice[12].targetPage = 11;

constChoice[13].desc = "Tu créés toutes tes pages sur le même modèles";
constChoice[13].targetPage = 12;

constChoice[14].desc = "Tu créés toutes tes pages de manières différentes";
constChoice[14].targetPage = 13;

//Niveaux ici
let tabLevel = [];
for (let i = 0; i<15; i++){
    tabLevel.push(new level(i, [], ``,`src/assets/img/level/level-lore-${i}.png`,``,false ));
}

//On créer nos description ici
tabLevel[0].title = "Le Jeu dont tu es le héro !";
tabLevel[0].lore = "Hello maker! <br> Cette semaine la tâche est de la plus haute importance, tu dois créer un jeu dont tu es le héro ! <br><br> Pour commencer, tu hésites :";
tabLevel[0].choices = [constChoice[1], constChoice[2]];

tabLevel[1].title = "Tu commences à programmer";
tabLevel[1].lore = "Tu à décider de programmer dès le départ, seulement tu n'es pas sûr de comment commencer.";
tabLevel[1].choices = [constChoice[3], constChoice[2]];

tabLevel[2].title = "Euréka";
tabLevel[2].lore = "Tu à trouver comment faire !";
tabLevel[2].choices = [constChoice[4], constChoice[5]];

tabLevel[3].title = "Fin : Ho non! Tu es coincé ";
tabLevel[3].lore = "Tu n'as peut-être pas abordé le sujet de la bonne manière ...";
tabLevel[3].isDeath = true;

tabLevel[4].title = "Par où commencer ?";
tabLevel[4].lore = "Tu veux commencer à programmer le site, tu commences par :";
tabLevel[4].choices = [constChoice[6], constChoice[7]];

tabLevel[5].title = "Conflit !";
tabLevel[5].lore = "Tu as mis en commun avec d'autres maker, seulement, vous n'êtes pas d'accord sur comment faire ! Que fais tu ?";
tabLevel[5].choices = [constChoice[4], constChoice[8]];

tabLevel[6].title = "Base, Check!";
tabLevel[6].lore = "La base de ton site est prête, ensuite tu:";
tabLevel[6].choices = [constChoice[9], constChoice[10]];

tabLevel[7].title = "Story, Check!";
tabLevel[7].lore = "Ton histoire est prête, ensuite tu:";
tabLevel[7].choices = [constChoice[11], constChoice[12]];

tabLevel[8].title = "Fin : Mauvaise influence";
tabLevel[8].lore = "Les autres makers n'ont pas toujours raison ... <br> Tu peux néanmoins demander a ton animateur, n'ai pas peur";
tabLevel[8].isDeath = true;

tabLevel[9].title = "Fin : un choix fastidieux";
tabLevel[9].lore = "Tu t'es perdu dans l'avancement de ton histoire !  Il es conseiller de mettre au propre afin d'éviter cette situation !";
tabLevel[9].isDeath = true;

tabLevel[10].title = "Tout est prêt";
tabLevel[10].lore = "Tu es sûr la dernière ligne droite ! Le temps presse !";
tabLevel[10].choices = [constChoice[13], constChoice[14]];

tabLevel[11].title = "Fin : Un peu trop ambitieux";
tabLevel[11].lore = "Ton histoire est incroyable! Seulement maintenant il y a trop d'éléments, tu n'auras jamais fini à temps !";
tabLevel[11].isDeath = true;

tabLevel[12].title = "BRAVO !!!";
tabLevel[12].lore = "Ton site est terminé Maker ! <br> Tu peux être fier de toi !!!";
tabLevel[12].isSuccess = true;


tabLevel[13].title = "Fin : Trop Créatif";
tabLevel[13].lore = "Tu n'as pas réussi a finir ... <br> En effet, tes pages sont magnifiques. Malheureusement, il vau mieux paufiner à la fin ";
tabLevel[13].isDeath = true;

tabLevel[14].title = "Secret du jeu";
tabLevel[9].imgPath += `\ onclick="tabLevel[14].display()"` ;
tabLevel[14].lore = "Tu as trouvé mon secret je ne peux rien te caché";
tabLevel[14].isDeath = true;
tabLevel[14].isSuccess = true;


let preload = function (){
    tabLevel.forEach(element => {
        document.getElementById("main-container").innerHTML += `<img src=${element.imgPath} id="preload" alt=""> `;
        document.getElementById("main-container").innerHTML -= `<img src=${element.imgPath} id="preload" alt=""> `;
    });
    constChoice.forEach(element => {
        document.getElementById("main-container").innerHTML += `<img src=${element.imgPath} id="preload" alt=""> `;
        document.getElementById("main-container").innerHTML -= `<img src=${element.imgPath} id="preload" alt=""> `;
    });
}
//Display first page
preload();
tabLevel[0].display();