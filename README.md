*****This repo is a work-in-progress and will not be finished until Q2 2023******


# Greetings Earthlings :)

My name is Marsyas Codex, I am a dev and artist. 

This is an art generator program originally made by Hashlips and then NFT Chef.

Now I have forked NFT Chef's work and added new storytelling tool that will make your metadata rich with details and stories.

# But first things first


If you aren't familiar with the hashlips art generator, that ReadMe comes first.

https://github.com/HashLips/hashlips_art_engine


If you aren't familiar with the NFT Chef generator,  that ReadMe comes second.

https://github.com/nftchef/art-engine/blob/main/README.md


Everything from those two pieces of software are incorporated here, in the Aulos Generator. 

When there is a discrepancy between Hash Lips and NFT Chef generator code / readme -- always favor NFT Chef.


## Okay I understand how the art generator and advanced layering controls, now I want my NFT's to have stories. 


Okay great! :) 


In Hashlips/NFTChef, your NFT's Name and Description come out in this format. 

In this example, the <collection name> will be "Slippery Skunks" and the token ID 144

On the OpenSea page:

Name: Slippery Skunk #144
Description: Slippery Skunks are a conniving gang of pranksters and thieves scheming on the Ethtereum blockchain. 



When you use this fork, the NFT's Names and Description (and metadata) will look like this:

Name: Sylvano Garcia Jr.

Description: Son of the Warlord and Mafia Don by the same name, Sylvano has spent his entire life proving he's worthy of his father's legacy. Born in Miami Florida, he is an urban skunk that lives in a high rise. 

Birthday: 12/15/1995

Zodiac Sign: Virgo

Lucky Number: 21

Strength: 8

Intelligence: 9

## WOW ok I understand but please show me how. 

Okay here is part one of the trick. 

In this directory you'll find a folders named "Strength" and "Intelligence".

These folders have blank png's labeled 1-10.

When you generate your first NFT's, you'll see that in the corresponding json metadata file, each NFT is assigned a Strength and Intelligence number between 1-10. 

That is the first tool -- using blank PNG's where the TITLE of the file becomes a piece of storytelling that's randomly assigned to your character. So for instance, you could change the folder name to ZODIAC SIGN and then have 12 blank PNG's that are "Virgo, Leo, Capricorn, Gemini...."

## The next level

Part two of the trick is using the MARSYAS RENAMER in the utilities folder. 

The txt inside MarsyasRenamer.js file will run you through it and guide you on how to make your own backstory sentences. 


My contact info:

Twitter: @MarsyasCodex
Discord: #Marsyas9999
Email: 0xMarsyas@protonmail.com


Reach out to me on twitter or Discord if you need help! 
