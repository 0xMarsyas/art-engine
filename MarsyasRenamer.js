//have youe ver wanted to name your NFTs instead of some boring description from opensea?//
//this script depends on you using blank PNGs for the system//
//there must be three folders labeled "First", "Middle", "Surname"//
//also "Essence" and "Life Force", maybe I'll have to change those//
//If you don't want a middle name leave it blank mofo//

//ok lets dive in//


// pull up the constants here//
//filesync and shit//
//define the directory we fuckin with, and the

const fs = require("fs");
const args = process.argv.slice(2);
const inputFoldy = args[0];
const dir = `${__dirname}/${inputFoldy}/`;
const inputFiles = fs.readdirSync(dir).sort();

console.log("butt")

//here we are going to take the JSON string of "attributes" and step-by-step chop it up until it gives us what we want///
//let's get it//

inputFiles.forEach((file) => {

    //so we define ID with the title of jpeg//

    let id = file.split(".").shift();
    console.log("butt2")
    //we define data with the json files, all of them in the directory we specifiy when we run the script//

    let data = JSON.parse(fs.readFileSync(`${dir}/${file}`));
    console.log("butt3")
    //in each json file, let's pull the attributes//

    let attbs = JSON.stringify(data["attributes"]);

    //let's chop everything before the "First Name" trait, and some other characters from the attributes we don't need//

    let first1 = attbs.substring(attbs.indexOf('First Name'));
    let typo1 = first1.replaceAll('"},{"trait_type":"', ' ');
    let first3 = first2.slice(21);
    console.log("butt4")
    //now let's pull the middle name in//

    let first4 = first3.replaceAll('Middle Name","value":"', '');

    //and then the last name//

    let first5 = first4.replaceAll('Surname","value":"', '');

    //here, we are going to count how many characters it takes to get to the word "Lucky"//

    let first6 = first5.indexOf(" Lucky");

    //now we're gonna cut the string off before the word "Lucky"//
    //and with that, you've pared down the whole attributes folder to a beautiful, clean name string//

    let first7 = first5.slice(0, first6);



    //here we apply a similar system to the Lore, which is the Essence and Life Force attributes//

    let lore1 = attbs.substring(attbs.indexOf('Essence'));
    let lore2 = lore1.slice(18);
    let lore3 = lore2.replaceAll('"},{"trait_type":"Life Force","value":"', '. ');
    let lore4 = lore3.replaceAll('"},{"trait_type":"Zodiac Year","value":"', '. Born in the year of the ');
    let lore5 = lore4.replaceAll('"},{"trait_type":"Zodiac Month","value":"', ' during the month of ');
    let lore6 = lore5.replaceAll('"},{"trait_type":"Planet","value":"', '. Your psyche is in ');
    let lore7 = lore6.replaceAll('."}]', '.');
    let lore8 = lore7.replaceAll('"},{"trait_type":"Characteristics","value":"', '. ');
    let lore9 = lore8.replaceAll('"}]', '.');

    


    '"},{"trait_type":"Characteristics","value":"'

    //here we define what data we want to rewrite in all JSON files//

    data.name = `${first7}`
    data.description = `${lore9}`

    //now write it to the file and then pull the data to make sure it worked//
    
    fs.writeFileSync(`${dir}/${file}`, JSON.stringify(data, null, 2));

    console.log(data);
});

//nice job! you a gangsta!//