
async function validarTelefone() {

    try {
        var numeroTelefone =  document.getElementById('telefone').value;
        var url = `http://apilayer.net/api/validate?access_key=aa7394a36d96dfc12460d78c6794db6f&number=${numeroTelefone}&country_code=BR&format=1`;
        var response = await fetch(url);
        var fone = await response.json();
        if (fone.valid == false) {
            alert('O número: "' + numeroTelefone + '" não é valido favor verificar as informações e digitar novamente.');
            document.getElementById('telefone').value = '';
        }
    } catch (error) {
        console.error(error);
    }
      
}

document.getElementById('telefone')
        .addEventListener('focusout', validarTelefone);



