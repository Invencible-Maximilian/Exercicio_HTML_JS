const form = document.getElementById("form-AB");

form.addEventListener("submit", function(e){
    e.preventDefault();

    const campoB = document.getElementById("campo-B").value;
    const campoA = document.getElementById("campo-A").value;

    if (campoB > campoA){
        alert("formulário Validado com Sucesso")
    } else{
        alert("Valor do campo A é maior que o campo B. Formulário Invalido")
    }
})

console.log(form);