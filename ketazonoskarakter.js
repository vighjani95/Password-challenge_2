const allatok = ["malac", "cica", "fácán", "egér"]
const gyumolcsok = ["alma", "körte", "kiwi", "füge"]

function ketAzonosKarakter (szo){
    const szamolo = {}
    for (const betu of szo){
        if (!(betu in szamolo)){
            szamolo[betu] = 1
        } else {
            szamolo[betu]++
            if (szamolo[betu] === 2){
                return true
            }
        }
    }
    return false;
}

function tombKetAzonosKarakter(tomb){
    const osszes = [];
    for (const szo of tomb){
        if (ketAzonosKarakter(szo) === true){
            osszes.push(szo)
        }
    }
    return osszes
}

const allatokOsszes = tombKetAzonosKarakter(allatok);
const gyumolcsokOsszes = tombKetAzonosKarakter(gyumolcsok);


const osszes = [];

function tombOsszeado(tomb1,tomb2){
    for (const elem1 of tomb1){
        osszes.push(elem1)
    }
    for (const elem2 of tomb2){
        osszes.push(elem2)
    }
}

tombOsszeado(allatokOsszes,gyumolcsokOsszes);
console.log(osszes)

document.querySelector('#jelszo').addEventListener('change', jelszoValtozoKereso);
document.querySelector('#jelszo').addEventListener('keyup', jelszoValtozoKereso);

function jelszoValtozoKereso(event){
    megjelenito(jelszoEllenorzo(event))
}

function jelszoEllenorzo(event){
    const beirtJelszo = event.target.value;
    for (const elvartJelszo of osszes){
        if (elvartJelszo === beirtJelszo){
            return true
        }
    }
    return false;
}

function megjelenito(megjelenit){
    const helyesJelszoIras = document.querySelector('#szoveg');
    helyesJelszoIras.style.display = megjelenit ? 'block' : 'none'
}
