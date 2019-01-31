let starWars = {name: 'Luke Skywalker', occupation: 'Jedi', powers: 'The Force'};
for(const prop in starWars){
    console.log(`starWars.${prop} = ${starWars[prop]}`);
}