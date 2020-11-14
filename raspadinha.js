function mostraTotal(input) {
    var valor =  input.value;
    var id    =    input.id;
    if (valor == id) {
        input.value = `${input.value}`;
    }else{
        input.value = "" ;
    }
}