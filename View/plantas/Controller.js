var familia = new Array();
    function agregarAFamilia(){
        var nombre = document.getElementById('IngresoNombre').value;
        if(!(typeof nombre ==="undefined") && nombre!=null && nombre.trim()!=''){
            familia.push(nombre);
        }
        console.log(familia);
        document.getElementById('IngresoNombre').value = '';
        console.log(familia[0])
    }
    function seleccionarFamilia(){
        seleccionar = document.getElementById('selector');
        for(var i = 0; i < familia.length; i++){
            if(!(seleccionar.options.length > familia.length)){
                option = document.createElement('option');
                option.text=familia[i]
                seleccionar.add(option)
            }
        }      
    }