
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


let constChoice = [new Choice(0,`src/assets/img/choices/choice-${0}.png`,"Tu d??cides de remonter dans le temps !",0)]
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
//Diff??rents choix ici

constChoice[1].desc = "Tu commences directement ?? programmer";
constChoice[1].targetPage = 1;

constChoice[2].desc = "Tu te fais des recherches sur comment tu pourrais faire";
constChoice[2].targetPage = 2;

constChoice[3].desc = "Tu continues au feeling ";
constChoice[3].targetPage = 3;

constChoice[4].desc = "Tu commences ?? creer le site";
constChoice[4].targetPage = 4;

constChoice[5].desc = "Tu d??cides de mettre en commun avec les autres Makers";
constChoice[5].targetPage = 5;

constChoice[6].desc = "Tu cr????s la base du site en cr??ant des fichier html, css et javascript ";
constChoice[6].targetPage = 6;

constChoice[7].desc = "Tu cr????s ton un arbre de d??cision avec les diff??rentes situations et choix de ton histoire";
constChoice[7].targetPage = 7;

constChoice[8].desc = "Tu recommences tes recheches depuis le d??but";
constChoice[8].targetPage = 8;

constChoice[9].desc = "Tu d??cides de faire ton histoire au fur et ?? mesure que tu programmes";
constChoice[9].targetPage = 9;

constChoice[10].desc = "Tu cr????s ton un arbre de d??cision avec les diff??rentes situations et choix de ton histoire ";
constChoice[10].targetPage = 10;

constChoice[11].desc = "Tu cr????s la base du site en cr??ant des fichier html, css et javascript";
constChoice[11].targetPage = 10;

constChoice[12].desc = "Tu choisis de rajouter plein de sc??nario a ton histoire !";
constChoice[12].targetPage = 11;

constChoice[13].desc = "Tu cr????s toutes tes pages sur le m??me mod??les";
constChoice[13].targetPage = 12;

constChoice[14].desc = "Tu cr????s toutes tes pages de mani??res diff??rentes";
constChoice[14].targetPage = 13;

//Niveaux ici
let tabLevel = [];
for (let i = 0; i<15; i++){
    tabLevel.push(new level(i, [], ``,`src/assets/img/level/level-lore-${i}.png`,``,false ));
}

//On cr??er nos description ici
tabLevel[0].title = "Le Jeu dont tu es le h??ro !";
tabLevel[0].lore = "Hello maker! <br> Cette semaine la t??che est de la plus haute importance, tu dois cr??er un jeu dont tu es le h??ro ! <br><br> Pour commencer, tu h??sites :";
tabLevel[0].choices = [constChoice[1], constChoice[2]];

tabLevel[1].title = "Tu commences ?? programmer";
tabLevel[1].lore = "Tu ?? d??cider de programmer d??s le d??part, seulement tu n'es pas s??r de comment commencer.";
tabLevel[1].choices = [constChoice[3], constChoice[2]];

tabLevel[2].title = "Eur??ka";
tabLevel[2].lore = "Tu ?? trouver comment faire !";
tabLevel[2].choices = [constChoice[4], constChoice[5]];

tabLevel[3].title = "Fin : Ho non! Tu es coinc?? ";
tabLevel[3].lore = "Tu n'as peut-??tre pas abord?? le sujet de la bonne mani??re ...";
tabLevel[3].isDeath = true;

tabLevel[4].title = "Par o?? commencer ?";
tabLevel[4].lore = "Tu veux commencer ?? programmer le site, tu commences par :";
tabLevel[4].choices = [constChoice[6], constChoice[7]];

tabLevel[5].title = "Conflit !";
tabLevel[5].lore = "Tu as mis en commun avec d'autres maker, seulement, vous n'??tes pas d'accord sur comment faire ! Que fais tu ?";
tabLevel[5].choices = [constChoice[4], constChoice[8]];

tabLevel[6].title = "Base, Check!";
tabLevel[6].lore = "La base de ton site est pr??te, ensuite tu:";
tabLevel[6].choices = [constChoice[9], constChoice[10]];

tabLevel[7].title = "Story, Check!";
tabLevel[7].lore = "Ton histoire est pr??te, ensuite tu:";
tabLevel[7].choices = [constChoice[11], constChoice[12]];

tabLevel[8].title = "Fin : Mauvaise influence";
tabLevel[8].lore = "Les autres makers n'ont pas toujours raison ... <br> Tu peux n??anmoins demander a ton animateur, n'ai pas peur";
tabLevel[8].isDeath = true;

tabLevel[9].title = "Fin : un choix fastidieux";
tabLevel[9].lore = "Tu t'es perdu dans l'avancement de ton histoire !  Il es conseiller de mettre au propre afin d'??viter cette situation !";
tabLevel[9].isDeath = true;

tabLevel[10].title = "Tout est pr??t";
tabLevel[10].lore = "Tu es s??r la derni??re ligne droite ! Le temps presse !";
tabLevel[10].choices = [constChoice[13], constChoice[14]];

tabLevel[11].title = "Fin : Un peu trop ambitieux";
tabLevel[11].lore = "Ton histoire est incroyable! Seulement maintenant il y a trop d'??l??ments, tu n'auras jamais fini ?? temps !";
tabLevel[11].isDeath = true;

tabLevel[12].title = "BRAVO !!!";
tabLevel[12].lore = "Ton site est termin?? Maker ! <br> Tu peux ??tre fier de toi !!!";
tabLevel[12].isSuccess = true;


tabLevel[13].title = "Fin : Trop Cr??atif";
tabLevel[13].lore = "Tu n'as pas r??ussi a finir ... <br> En effet, tes pages sont magnifiques. Malheureusement, il vau mieux paufiner ?? la fin ";
tabLevel[13].isDeath = true;

tabLevel[14].title = "Secret du jeu";
tabLevel[9].imgPath += `\ onclick="tabLevel[14].display()"` ;
tabLevel[14].lore = "Tu as trouv?? mon secret je ne peux rien te cach??";
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