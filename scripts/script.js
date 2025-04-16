// On affiche le score du joueur
function afficherScore(score, nbMots) {
    let zoneScore = document.querySelector(".zoneScore span")
    zoneScore.innerText = `${score} / ${nbMots}`
    let differenceScore = nbMots - score
    
    // Si on a fait au moins un essai, une émoticône s'affiche pour représenter le nombre d'erreurs
    // TODO : passer en pourcentage de réussite
    if (nbMots != 0) {
        switch (differenceScore) {
            case 0:
                zoneScore.append(" 🦁")
                break
            case 1:
                zoneScore.append(" 🐺")
                break
            case 2:
                zoneScore.append(" 🦀")
                break
            case 3:
                zoneScore.append(" 🐰")
                break
            case 4:
                zoneScore.append(" 🐸")
                break
            default:
                zoneScore.append(" 💀")
                break
        }
    }
}

// On propose un pays
function proposePays(proposition) {
    let propositionPays = document.querySelector(".paysPropose")
    propositionPays.innerText = proposition
}


function lancerJeu() {
    let i = 0
    let listePropositions = listePays
    let listeReponses = listeCapitales
    let score = 0
    

    afficherScore(score, i)
    proposePays(listePropositions[i])

    // On récupère le mot saisi
    let btnValiderMot = document.getElementById("btnValiderMot")
    let inputEcriture = document.getElementById("inputEcriture")
    inputEcriture.value = ""

    btnValiderMot.addEventListener("click", () => {
        if (inputEcriture.value === listeReponses[i]) {
            score++
        }
        i++
        afficherScore(score, i)

        if (listePropositions[i] === undefined) {
            proposePays("Vous avez fini le jeu !")
            btnValiderMot.disabled="true"
        } else {
            proposePays(listePropositions[i])
        }
        inputEcriture.value = ""
    })
}