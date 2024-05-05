var forename = prompt("Zadejte své křestní jméno (bez diakritiky)").toLowerCase()
var surname = prompt("Zadejte příjmení (bez diakritiky)").toLowerCase()

forename = forename.trim()
surname = surname.trim()

forename = forename.slice(0, 3)
surname = surname.slice(0, 5)

document.body.innerHTML = "<p>" + surname + forename + "@fit.cvut.cz</p>"