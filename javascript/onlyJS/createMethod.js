const people={
    printIntroduction(){
        console.log(`my name is ${this.name} am I human? ${this.ishuman}`);
        console.log(`hello,welcome to ${this.websiteName} and the rating for this website is ${this.rating}`);
    }
    
};
const me=Object.create(people);
me.name="Marry";
me.ishuman=true;
me.websiteName="littleprincessCoding";
me.rating=5;
me.printIntroduction();