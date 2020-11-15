function mostraTotal(input) {
    var valor =   input.value.toUpperCase();
    var id    =    input.id;
    if (valor == id) {
        input.value = `${input.value}`;
        input.style = `background-color:rgb(94, 230, 94); color:black; border:1px solid`;

    }else{
        input.style = `background-color:rgb(226, 45, 45); border:1px solid`;
        input.value = ``;
    }
}