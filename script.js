const btnCalcular = document.querySelector(".btn-calcular")
const form = document.querySelector("form")


btnCalcular.addEventListener("click", (event) => {
    event.preventDefault()

    const campos = [ ...document.querySelectorAll(".input-block input")]

    campos.forEach(campos => {
        if(campos.value === "") form.classList.add("validation-error")
    })

    const formError = document.querySelector("validation-error")
    if(formError){
        formError.addEventListener("animationend", (event) => {
            if(event.animationName === "nao"){
                formError.classList.remove("validation-error")
            }
        })
    }else{
        form.classList.add("form-hide")
    }
})


form.addEventListener("animationend", () =>{
    if(event.animationName === "moverBaixo"){
        form.style.display = "none"
        document.querySelector("body").style.overflow = "none"
    } 
})


function calcular() {
    var valorPeso = Number(document.getElementById("peso").value);
    var valorAltura = Number(document.getElementById("altura").value);
    var elemResult = document.getElementById("resultado");

       elemResult.innerText = "O seu IMC é " + String(valorPeso / (valorAltura * valorAltura)) + ".";
    
}