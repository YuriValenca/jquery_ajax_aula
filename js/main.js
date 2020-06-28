function consulta_cep(){
    var cep = document.getElementById("cep").value;
    var url = "https://viacep.com.br/ws/" + cep + "/json/";
    console.log(cep);
    $.ajax({
        url: url,
        type: "GET",
        success: function(response){
            //document.getElementById("resp").innerHTML = response.logradouro; //mostra o logradouro usando js
            $("#resp").html(response.logradouro); //mesmo resultado, porém utilizando a biblioteca jquery
            console.log(response); 
            $("#rua_av").html(response.logradouro);
            $("#bairro").html(response.bairro);
            $("#cidade").html(response.localidade);
            $("#uf").html(response.uf);
            $("#title_cep").html("CEP: " + response.cep);
            $(".site_vazio").show(); 
        }
    })
}

$(function(){
    $(".site_vazio").hide();
    $(".bar").hide();
});