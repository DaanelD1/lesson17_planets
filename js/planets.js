let planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];
console.log(planets);
console.log(planets[0]);
console.log(planets[1]);
console.log(planets[2]);
console.log(planets[3]);
console.log(planets[4]);
console.log(planets[5]);
console.log(planets[6]);
console.log(planets.length);

for(let i = 0; i < 6; i++){
    let message = `${i+1}. ${planets[i]}`;
   console.log(message);
}

planets.push("Pluto");
    console.log(planets);

    const html = `
    <ul>
        <li> ${planets[0]}</li>
        <li> ${planets[1]}</li>
        <li> ${planets[2]}</li>
        <li> ${planets[3]}</li>
        <li> ${planets[4]}</li>
        <li> ${planets[5]}</li>
        <li> ${planets[6]}</li>
    </ul>
    `;
    document.body.innerHTML = html;
