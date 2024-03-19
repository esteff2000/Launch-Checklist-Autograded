// Write your JavaScript code here!


window.addEventListener("load", function() {

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let chosenPlanet = pickPlanet(listedPlanets) 
        addDestinationInfo(document, chosenPlanet.name, chosenPlanet.diameter, chosenPlanet.star, chosenPlanet.distance, chosenPlanet.moons, chosenPlanet.image)
    })
    let button = document.getElementById("formSubmit")
    button.addEventListener("click", function(e){
        e.preventDefault()
        formSubmission(
            document, document.getElementById("faultyItems"), document.getElementById("pilotName").value, document.querySelector("input[name=copilotName]").value,
            document.querySelector("input[name=fuelLevel]").value, document.querySelector("input[name=cargoMass]").value
        )
    })
 });