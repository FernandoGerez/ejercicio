var lista_clientes = [];
var lista_productos = [
    {
        tipo: "celular",
        marca: "samsung",
        monto_pesos : 15000
    },
    {
        tipo: "celular",
        marca: "apple",
        monto_pesos : 25000
    },
    {
        tipo: "televisor",
        marca: "lg",
        monto_pesos : 30000
    },
    {
        tipo: "televisor",
        marca: "samsung",
        monto_pesos : 35000
    },
    {
        tipo: "tablet",
        marca: "apple",
        monto_pesos : 20000
    },
    {
        tipo: "tablet",
        marca: "samsung",
        monto_pesos : 15000
    },
    {
        tipo: "lavarropa",
        marca: "philco",
        monto_pesos : 22000
    },
    {
        tipo: "lavarropa",
        marca: "phillips",
        monto_pesos : 18000
    }
]
var vendedor = prompt('Buen día, ingrese nombre de vendedor:');
do{
    var flag=prompt('Ha iniciado sistema de calculo de cuotas, para empezar ingrese [1], para finalizar ingrese [0]');
    if(flag==1){
        var cliente = prompt('Ingrese nombre de cliente');
        lista_clientes.push(cliente);
        alert('Bienvenido ' + cliente);
        var producto = prompt('Productos disponibles: \n*Celular\n*Televisor\n*Tablet\n*Lavarropa\nIngrese producto deseado:')
        producto = producto.toLowerCase()
        var tipo_productos = lista_productos.filter(producto_tipo => producto_tipo.tipo == producto)
        //for(var z = 0; z<tipo_productos.length; z++){
            //alert(tipo_productos[z])
            //alert(tipo_productos.join('\n'))
            alert(JSON.stringify(tipo_productos, '', 1));
            console.log(JSON.stringify(tipo_productos, '', 1))
        //}
        var marca = prompt('Seleccione la marca deseada')
        marca = marca.toLowerCase()
        var marca_producto = tipo_productos.filter(lista_marcas => lista_marcas.marca == marca)
        console.log(marca_producto)
        console.log(marca_producto.monto_pesos)
        monto = parseInt(marca_producto.monto_pesos)
        console.log(monto)
        var cant_cuotas = parseInt(prompt('Selecciona la cantidad de cuotas que desea pagar: [1], [3], [6], [9], [12], [18], [24]'));
        switch (cant_cuotas) {
            case 1:
                var monto_x_cuota=monto/cant_cuotas;
                alert('Estimado ' + cliente + ', es ' + cant_cuotas + ' cuota de $' + monto_x_cuota);
                break;
            case 3:
                var monto_x_cuota = monto/cant_cuotas;
                alert('Estimado ' + cliente + ', son ' + cant_cuotas + ' cuotas de $' + monto_x_cuota);
                break;
            case 6:
                var monto_x_cuota = monto/cant_cuotas;
                alert('Estimado ' + cliente + ', son ' + cant_cuotas + ' cuotas de $' + monto_x_cuota);
                break;
            case 9:
                var monto_x_cuota = monto/cant_cuotas;
                alert('Estimado ' + cliente + ', son ' + cant_cuotas + ' cuotas de $' + monto_x_cuota);
                break;
            case 12:
                var monto_x_cuota = monto/cant_cuotas;
                alert('Estimado ' + cliente + ', son ' + cant_cuotas + ' cuotas de $' + monto_x_cuota);
                break;
            case 18:
                var monto_x_cuota = monto/cant_cuotas;
                alert('Estimado ' + cliente + ', son ' + cant_cuotas + ' cuotas de $' + monto_x_cuota);
                break;
            case 24:
                var monto_x_cuota = monto/cant_cuotas;
                alert('Estimado ' + cliente + ', son ' + cant_cuotas + ' cuotas de $' + monto_x_cuota);
                break;                
            default:
                alert('Ingreso un número equivocado');
        };
    }if(flag!=0 && flag!=1){
        alert('Ingresó un número distinto de 1');
    }if(flag==0){
        alert('Gracias por usar el sistema de calculo de cuotas, vuelva pronto');
        for (var i = 0; i < lista_clientes.length; i++){
            console.log(lista_clientes[i]);
            alert('Los clientes que le han comprado a ' + vendedor + ' han sido: ' + (i+1) + '- ' + lista_clientes[i]);
        }
    }
}while(flag==1 || flag!=0)


