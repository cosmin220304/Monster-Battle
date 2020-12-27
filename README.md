## DSC React Homework

## 👨🏻 Monster Battle 👾  
Make a Monster Battle game, similar to the one [here](https://codepen.io/wostensen/pen/BRRPwz). The game should offer the following features: attack, special attack (an attack with a higher chance of damage), heal, flee, as well as an HP bar for Player and Monster. Attack, special attack and heal are random values and are actions unique to the Player, except for the attack which is also found in Monster, in this case being performed automatically, after the Player performs an action.  

# Coding Styles:
* ESLint config: Standard React ESLint Style  
* Files - PascalCase, Folder - camel_case  
* Folder structure inspired by [Patrick Ofilada](https://dev.to/pcofilada/simple-react-folder-structure-31lj):  
<pre>
.  
├── README.md  
├── package.json   
├── public/  
└── src/  
    ├── index.js    
    ├── assets/       
    ├── utils/  
    └── components/  
        └── common/  
        └── example_component/
            └─── index.js
            └─── ExampleComponent.js
            └─── SmallComponentUsedInExampleComponent.js
</pre>  
* src/ - Contains all of our react codebase
* index.js - Base react component   
* assets/ - Images, fonts and other static files.   
* utils/ - Helper functions (custom hooks)
* components/ - Components 
* components/common/ - Shared components
* components/example_component - Each uncommon component has its own folder
* components/example_component/index - Used for simplicity of import   

# Video:  
https://www.youtube.com/watch?v=hSFvmzzLVZU&feature=youtu.be&ab_channel=CosminEu 

# How to play:  
You are fighting a monter and have 4 skills to choose from. Both you and the monster have 100 hp.   
* Attacks will always deal 10 damage
* Special attacks can deal anywhere between 0 and 20 damage
* Heals will heal you between 0 and 20 hp
* Fleeing will end the game early (monsters have a 3% to flee)  

Either the player or the monster wins if his opponent reaches 0 hp.
