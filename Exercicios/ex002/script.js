

function calculo() {
    let ano = document.getElementById('ano')

    
    ano = Number(ano.value)



    let sexo = document.getElementsByName('sexo')
    let sexoselecionado = ''


    if (sexo[0].checked) {
        sexoselecionado = "Masculino"
    } else if (sexo[1].checked) {
        sexoselecionado = "Feminino"    
    }

    let img = document.getElementById('img')
    let data = new Date() 
    let anoatual = data.getFullYear()



    let idade = anoatual - ano

    let texto = document.getElementById('texto')

    if (!ano || ano > anoatual) {
     texto.innerHTML = "Digite um ano válido"
     img.src = ""
    }

        if (sexoselecionado === "Masculino") {

            if (idade <= 13) {
            texto.innerHTML = `Você é uma criança com ${idade} anos`
            img.src = "imagens/meninocriança.jpg"
            
            }
            


            else if (idade >= 14 && idade <= 17) {
            texto.innerHTML = `Você é um adolescente ${idade} anos`
            img.src = "imagens/meninoadolecente.jpg"
            }



            else if (idade > 17 && idade < 60) {
            texto.innerHTML = `Você é um adulto ${idade} anos`
            img.src = "imagens/homemadulto.jpg"
            }


            else {
            texto.innerHTML = `Você é um idoso ${idade} anos`
            img.src = "imagens/homemvelho.jpg"
            }
        

        }

        else {
            if (idade <= 13) {
            texto.innerHTML = `Você é uma criança com ${idade} anos`
            img.src = "imagens/meninacriança.jpg"
            
            }
            


            else if (idade >= 14 && idade <= 17) {
            texto.innerHTML = `Você é uma adolescente ${idade} anos`
            img.src = "imagens/meninaadolecente.jpg"
            }



            else if (idade > 17 && idade < 60) {
            texto.innerHTML = `Você é uma adulta ${idade} anos`
            img.src = "imagens/mulheradulta.jpg"
            }


            else {
            texto.innerHTML = `Você é uma idosa ${idade} anos`
            img.src = "imagens/mulhervelha.jpg"
            }
        }
    }