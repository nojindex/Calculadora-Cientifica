
        //operandoa es el primer numero; operandob es el segundo numero; operacion es cuando se realiza el calculo
        var operandoa;
        var operandob;
        var operacion;
        

        function init() {
            //variables // cuando los enventos funcionan se ejecuta en este apartado;
            var resultado = document.getElementById("resultado")
            //angulos
            var cos = document.getElementById("cos")
            var sin = document.getElementById("sin")
            var tan = document.getElementById("tan")
            //
            var reset = document.getElementById("reset")
            var rad = document.getElementById("rad")
            var suma = document.getElementById("suma")
            var resta  = document.getElementById("resta")
            var multiplicacion = document.getElementById("multiplicacion")
            var division = document.getElementById("division")
            var igual = document.getElementById("igual")
            var uno = document.getElementById("uno")
            var dos = document.getElementById("dos")
            var tres = document.getElementById("tres")
            var cuadro = document.getElementById("cuadro")
            var cinco = document.getElementById("cinco")
            var seis = document.getElementById("seis")
            var siete  = document.getElementById("siete")
            var ocho  = document.getElementById("ocho")
            var nueve = document.getElementById("nueve")
            var cero = document.getElementById("cero")
            var punto = document.getElementById("punto")
            var borrar = document.getElementById("borrar")
            var PI = document.getElementById("PI")
            var e = document.getElementById("e")
            var raiz = document.getElementById("raiz")
            var exponente = document.getElementById("exponente")
            var porcentaje = document.getElementById("porcentaje")
            var factorial = document.getElementById("factorial")
            var cubica = document.getElementById("cubica")
            var natural = document.getElementById("natural")
            var comunes = document.getElementById("comunes")
            var absoluto = document.getElementById("absoluto")
            var resetdos = document.getElementById("resettdos")





            /*negativo*/

            var para = document.getElementById("para")


            /*angulos secante cotangete cosecante*/


            var  secante = document.getElementById("Secante")
            var cosecante = document.getElementById("cosecante")
            var cotangente = document.getElementById("cotangente")

            /**/

            /*calculos arccoseno hiperbólico  , arcotangente hiperbólica ,arcoseno hiperbólico*/

            var acosh = document.getElementById("acosh")
            var atanh = document.getElementById("atanh")
            var asinh = document.getElementById("asinh")

            asinh.onclick = function(){
                resultado.textContent = resultado.textContent  = "asinh"
            }

       

            acosh.onclick = function (){
                resultado.textContent = resultado.textContent =  "acosh"
            }

            atanh.onclick = function (){
                resultado.textContent = resultado.textContent = "atanh"
            }

            /*funcion hipotenusa*/

            var hp = document.getElementById("hp")


            /*creacion */

            hp.onclick = function(){
                resultado.textContent = resultado.textContent = "FH"
            }
            /*finish*/


            secante.onclick = function(){
                resultado.textContent = resultado.textContent + "sinh(x)"
            }

            cosecante.onclick = function() {
                resultado.textContent = resultado.textContent + "cosh(x)"
            }

            cotangente.onclick = function(){
                resultado.textContent = resultado.textContent + "tanh(x)"
            }

            /*fin de las operaciones de secante , cosecante */


            //eventos inprimir valores numericos y signos 
            //angulos
            cos.onclick = function() {
                resultado.textContent = resultado.textContent + "cos"
            }
            tan.onclick = function() {
                resultado.textContent = resultado.textContent + "tan"
            }
            sin.onclick = function() {
                resultado.textContent = resultado.textContent + "sin"
            }

            ////////////////////////////////
            rad.onclick = function() {
                resultado.textContent = resultado.textContent + "rad"
            }
            absoluto.onclick = function(){
                resultado.textContent = resultado.textContent + "|x|";
            }
            comunes.onclick = function (){
                resultado.textContent = resultado.textContent + "log"
            }
            natural.onclick = function(){
                resultado.textContent = resultado.textContent + "ln"
            }
                cubica.onclick = function(){
                resultado.textContent = resultado.textContent + " ∛ ";
            }

            factorial.onclick = function(){
                resultado.textContent = resultado.textContent + "!";
            }

            porcentaje.onclick = function(){
                resultado.textContent = resultado.textContent + "%";
            }

            exponente.onclick = function(){
                resultado.textContent = resultado.textContent + "^";
            }

            raiz.onclick = function(){
                resultado.textContent = resultado.textContent + "√";
            }
                e.onclick = function(){
                    resultado.textContent = resultado.textContent + "2.718";
                }

            PI.onclick = function(){
                resultado.textContent = resultado.textContent + "3.1416";
            }
            borrar.onclick = function(){
                resultado.textContent = resultado.textContent.toString().slice(0,-1)
            }

           

           

            punto.onclick = function(){
                resultado.textContent = resultado.textContent + ".";
            }
            uno.onclick = function(){
            resultado.textContent = resultado.textContent + "1";
            }
            dos.onclick = function(){
                resultado.textContent = resultado.textContent + "2";
            }
            tres.onclick = function(){
                resultado.textContent = resultado.textContent + "3";
            }
            cuadro.onclick = function(){
                resultado.textContent = resultado.textContent + "4";
            }
            cinco.onclick = function(){
                resultado.textContent = resultado.textContent + "5";
            }
            seis.onclick = function(){
                resultado.textContent = resultado.textContent + "6";
            }
            siete.onclick = function(){
                resultado.textContent = resultado.textContent + "7";
            }
            ocho.onclick = function(){
                resultado.textContent = resultado.textContent + "8";
            }
            nueve.onclick = function(){
                resultado.textContent = resultado.textContent + "9";
            }
            cero.onclick = function(){
                resultado.textContent = resultado.textContent + "0";
            }

            /*secante y cosecante */



            secante.onclick = function(){
                operandoa = resultado.textContent;
                operacion = "sinh(x)";
                limpiar();
            }


            cosecante.onclick = function() {
                operandoa = resultado.textContent;
                operacion = "cosh(x)";
                limpiar();
            }

            cotangente.onclick = function(){
                operandoa = resultado.textContent;
                operacion = "tanh(x)";
                limpiar();
            }


            /*calculos arccoseno hiperbólico  , arcotangente hiperbólica   */


            acosh.onclick = function(){
                operandoa = resultado.textContent;
                operacion = "acosh";
                limpiar();
            }

            atanh.onclick = function(){
                operandoa = resultado.textContent;
                operacion = "atanh";
                limpiar();
            }

            asinh.onclick = function(){
                operandoa = resultado.textContent;
                operacion = "asinh";
                limpiar();
            }


            /*funcion hipotenusa*/



            hp.onclick = function() {
                operandoa = resultado.textContent;
                operacion = "FH";
                limpiar();
            }


            /*resetdos*/


            resetdos.onclick = function(){
                reseatear();
            }


            //operaciones aritmeticas//

            reset.onclick = function(){
                reseatear();
            }

            suma.onclick=function(){
                operandoa = resultado.textContent;
                operacion ="+";
                limpiar();
            }

            igual.onclick=function(){
                    operandob = resultado.textContent;

                    if(operandoa == ""){
                        alert("Error")
                        resultado.innerHTML = "Error";
                    }
                    else{
                        resolver();
                        addToOperacionesHistorial();    
                    }
                   
            }

            resta.onclick = function(){
                operandoa = resultado.textContent;
                operacion ="-";
                limpiar();
            }

            multiplicacion.onclick=function(){
                operandoa = resultado.textContent;
                operacion ="*";
                limpiar();
            }

            division.onclick = function(){
                operandoa = resultado.textContent;
                operacion ="/"
                limpiar();
            }

            raiz.onclick = function(){
                operandoa = resultado.textContent;
                operacion = "√"
                limpiar();
            }

            cubica.onclick = function(){
                operandoa = resultado.textContent;
                operacion = "∛"
                limpiar();
            }

    
            exponente.onclick = function(){
                operandoa = resultado.textContent;
                operacion = "^"
                limpiar();
            }
            porcentaje.onclick = function(){
                operandoa = resultado.textContent;
                operacion = "%"
                limpiar();
            }
            factorial.onclick = function(){
                operandoa = resultado.textContent;
                operacion = "!"
                limpiar();
                fac();
            }  
            
            natural.onclick = function(){
                operandoa = resultado.textContent;
                operacion = "ln"
                limpiar();
            }

            comunes.onclick = function(){
                operandoa = resultado.textContent;
                operacion = "log"
                limpiar();
            }
            absoluto.onclick = function(){
                operandoa = resultado.textContent;
                operacion = "|x|"
                limpiar();
            }

            //ejecucion de los angulos
            cos.onclick = function(){
                operandoa = resultado.textContent;
                operacion = "cos"
                limpiar();
            }
            tan.onclick = function() {
                operandoa = resultado.textContent;
                operacion = "tan"
                limpiar();
            }
            sin.onclick = function() {
                operandoa = resultado.textContent;
                operacion = "sin"
                limpiar();
            }
            rad.onclick = function() {
                operandoa = resultado.textContent;
                operacion = "rad"
                limpiar();
            }
        }

        //factorial numero//
        function fac(operandoa){
            if(operandoa <= 1){
                return 1 
            }
            else{
                return operandoa * fac(operandoa-1)
            }
        }

    
        
            //limpiar los enunciados
            //da la pauta para el enunciado
            function limpiar(){
                resultado.textContent = "";
            }


            //funcion de limpiar los resultados 
            function reseatear(){
                resultado.textContent = "";
                operandoa= 0;
                operandob= 0;
                operacion= "";
                
            }


            //tabla ejemplo;

            var tabla = (["queso","pollo","pescado"])
          
            const x = tabla.push("Pizza","Tomate");
            console.table(x);
            console.table(tabla);
            console.log("Historial")

                       // ... (Código anterior de la calculadora)


 
     // Arreglo para almacenar el historial de operaciones
     const operacionesHistorial = [];


     // Función para borrar el historial de operaciones
    function borrarHistorial() {
    operacionesHistorial.length = 0; // Vaciar el arreglo
    updateOperacionesHistorial(); // Actualizar la interfaz
  }

     // Función para agregar una nueva entrada al historial de operaciones
     function addToOperacionesHistorial(entrada) {
       operacionesHistorial.push(entrada);
       updateOperacionesHistorial();
     }
 
     // Función para actualizar el historial de operaciones en la interfaz
     function updateOperacionesHistorial() {
       const operacionesList = document.getElementById("operaciones-list");
       operacionesList.innerHTML = "";
 
       operacionesHistorial.forEach((entrada, index) => {
         const listItem = document.createElement("li");
         listItem.textContent = `${index + 1}. ${entrada}`;
         operacionesList.appendChild(listItem);
       });
     }

     // Vincular la función borrarHistorial al botón "Borrar Historial"
        const borrarBoton = document.getElementById("resettdos");
        borrarBoton.addEventListener("click", borrarHistorial);
 


            //ejecuta las operaciones aritmeticas esto basicamente sumar los dos objetos ejemplo (5 + 5) = 10 y que te los devuelva en decimal luego se
            //segun el icono precionado por ejmplo( + , - , * , /) se realiza la operacion 
            function resolver(){
                    var res;
                switch(operacion){
                        case "+":
                            res = parseFloat(operandoa) + parseFloat(operandob);
                            console.log(parseFloat(operandoa).toLocaleString("en-US") + " + " + parseFloat(operandob).toLocaleString("en-US") +  " = "+ res.toLocaleString("es-US")); 
                            addToOperacionesHistorial(`${parseFloat(operandoa).toLocaleString("es-US")} +  ${parseFloat(operandob).toLocaleString("es-US")} = ${res.toLocaleString("es-US")}`);
                         break;
    
                        case "-" :
                            res = parseFloat(operandoa) - parseFloat(operandob);
                            console.log(parseFloat(operandoa).toLocaleString("en-US") + " - " + parseFloat(operandob).toLocaleString("en-US") +  " = "+ res.toLocaleString("es-US")) ;
                            addToOperacionesHistorial(`${parseFloat(operandoa).toLocaleString("es-US")} -  ${parseFloat(operandob).toLocaleString("es-US")} = ${res.toLocaleString("es-US")}`);
    
                        break;
    
                        case "*":
                            res = parseFloat(operandoa) * parseFloat(operandob);
                            console.log(parseFloat(operandoa).toLocaleString("en-US") + " * " + parseFloat(operandob).toLocaleString("en-US") +  " = "+ res.toLocaleString("es-US"));
                            addToOperacionesHistorial(`${parseFloat(operandoa).toLocaleString("es-US")} *  ${parseFloat(operandob).toLocaleString("es-US")} = ${res.toLocaleString("es-US")}`);
                        break;
                          
                        case "/":
                            res = parseFloat(operandoa) / parseFloat(operandob);
                            console.log(parseFloat(operandoa).toLocaleString("en-US") + " / " + parseFloat(operandob).toLocaleString("en-US") +  " = "+ res.toLocaleString("es-US")) ;
                            addToOperacionesHistorial(`${parseFloat(operandoa).toLocaleString("es-US")} /  ${parseFloat(operandob).toLocaleString("es-US")} = ${res.toLocaleString("es-US")}`);
                           
    
                        break; 
    
                        case "√":
                            res = parseFloat(Math.sqrt(operandoa));
                            addToOperacionesHistorial(Math.sqrt(operandoa).toLocaleString("es-US"));
                            console.log(parseFloat(operandoa).toLocaleString("en-US") + " √ "  + " = "+ res);
                        break; 
    
                        case "^":
                            res = parseFloat(Math.pow(operandoa,operandob));
                            addToOperacionesHistorial(Math.pow(operandoa,operandob).toLocaleString("es-US"));
                            console.log(parseFloat(operandoa).toLocaleString("en-US") + " ^ " + parseFloat(operandob).toLocaleString("en-US") +  " = "+ res.toLocaleString("es-US")) ;
                        break;
                        
                        case "%":
                            res = parseFloat(operandoa) * parseFloat(operandob) / 100;
                            addToOperacionesHistorial((operandoa) * parseFloat(operandob) / 100);
                            console.log(parseFloat(operandoa).toLocaleString("en-US") + " % " + parseFloat(operandob).toLocaleString("en-US") +  " = "+ res.toLocaleString("es-US")) ;
                        break;   
                        
                        case"!":
                            res = parseFloat(operandoa) * fac(operandoa-1)
                            addToOperacionesHistorial(`${operandoa} *  ${ fac(operandoa-1)} = ${res.toLocaleString("es-US")}`);
                            console.log(parseFloat(operandoa).toLocaleString("en-US") + " ! " + " = " + res) ;
                         break; 
                         
                        case "∛":
                            res = parseFloat(Math.pow(operandoa,1/3))
                            addToOperacionesHistorial(parseFloat(Math.pow(operandoa,1/3).toLocaleString("es-US")));
                            console.log(parseFloat(operandoa).toLocaleString("en-US") + " ∛ " + " = " + res) ;
                        break;
    
                        case "ln":
                            res = parseFloat(Math.log(operandoa))
                            addToOperacionesHistorial(parseFloat(Math.log(operandoa).toLocaleString("es-US")));
                            console.log(parseFloat(operandoa).toLocaleString("en-US") + " ln " + " = " + res) ;
                        break;  
                        
                        case "log":
                            res = parseFloat(Math.log10(operandoa))
                            addToOperacionesHistorial(parseFloat(Math.log10(operandoa).toLocaleString("es-US")));
                            console.log(parseFloat(operandoa).toLocaleString("en-US") + " log "  + " = " + res) ;
                         break;   
    
                        case "|x|":
                            res = parseFloat(Math.abs(operandoa));
                            addToOperacionesHistorial(parseFloat(Math.abs(operandoa).toLocaleString("es-US")));
                            console.log(parseFloat(operandoa).toLocaleString("en-US") + " |x| "  + " = " + res) ;
                         break;   
    
                         case "cos":
                            res = parseFloat(Math.cos(operandoa* Math.PI / 180));
                            addToOperacionesHistorial(parseFloat(Math.cos(operandoa * Math.PI / 180).toLocaleString("es-US")));
                            console.log(parseFloat(operandoa).toLocaleString("en-US")  + " = " +  parseFloat(Math.cos(operandoa* Math.PI / 180)) + " coseno")
                        break;
    
                        case "tan":
                            res = parseFloat(Math.tan(operandoa * Math.PI / 180));
                            addToOperacionesHistorial(parseFloat(Math.tan(operandoa * Math.PI /180).toLocaleString("es-US")));
                            console.log(parseFloat(operandoa).toLocaleString("en-US") + " = " + parseFloat(Math.tan(operandoa * Math.PI / 180)) + " tangente ")
                         break;
                         
                         case "sin":
                            res = parseFloat(Math.sin(operandoa * Math.PI / 180));
                            addToOperacionesHistorial(parseFloat(Math.sin(operandoa * Math.PI /180 ).toLocaleString("es-US")));
                            console.log(parseFloat(operandoa).toLocaleString("en-US") + " = " + parseFloat(Math.sin(operandoa * Math.PI / 180)) +   " seno ")
                           break; 
    
                          case "rad":
                            res = parseFloat(operandoa*Math.PI / 180);
                            addToOperacionesHistorial(parseFloat(operandoa * Math.PI / 180).toLocaleString("es-US"));
                            console.log(parseFloat(operandoa) + " = " + parseFloat(operandoa*Math.PI / 180)); + " radianes " ;
                           break; 
    
    
                        case "sinh(x)":
                        res = parseFloat(Math.sinh(operandoa));
                        addToOperacionesHistorial(parseFloat(Math.sinh(operandoa).toLocaleString("es-US")));
                        console.log(parseFloat(Math.sinh(operandoa).toLocaleString("en-US")))
                        break;
    
                        case "cosh(x)":
                            res = parseFloat(Math.cosh(operandoa).toLocaleString("es-US"));
                            addToOperacionesHistorial(parseFloat(Math.cosh(operandoa)));
                            console.log(parseFloat(Math.cosh(operandoa)))
                         break;
    
                         case "tanh(x)":
                            res = parseFloat(Math.tanh(operandoa));
                            addToOperacionesHistorial(parseFloat(Math.tanh(operandoa).toLocaleString("es-US")));
                            console.log(parseFloat(Math.tanh(operandoa)))
                            break;
    
                            case "FH":
                                res = parseFloat(Math.hypot(operandoa , operandob));
                                addToOperacionesHistorial(parseFloat(Math.hypot(operandoa).toLocaleString("es-US")));
                                console.log(parseFloat(Math.hypot(operandoa,operandob)));
                                break;
    
    
                                case "acosh":
                                    res = parseFloat(Math.acosh(operandoa))
                                    addToOperacionesHistorial(parseFloat(Math.acosh(operandoa).toLocaleString("es-US")));
                                    console.log(parseFloat(Math.acosh(operandoa)))
                                    break;
    
    
                                    case "atanh":
                                        res = parseFloat(Math.atanh(operandoa));
                                        addToOperacionesHistorial(parseFloat(Math.atanh(operandoa).toLocaleString("es-US")));
                                        console.log(parseFloat(Math.atanh(operandoa)));
                                        break;
                                    
    
                                        case "asinh":
                                        res = parseFloat(Math.asinh(operandoa));
                                        addToOperacionesHistorial(parseFloat(Math.asinh(operandoa).toLocaleString("es-US")));
                                        console.log(parseFloat(Math.asinh(operandoa)));
                                        break;
    
                                        
                            default:
                                break;
                              
                }
                
                


               /* if(res > 150){
                    alert("Stop" +  " = " +  res)
                }
                else{
                    console.log("Dont stop")
                }*/

                    //Esto resetea la vista de la calculadora 
                reseatear();

                //Esto la cantidad de decimales en una operacion por ejemplo 25.636
                resultado.textContent = parseFloat(res).toFixed(3)


            }


    

     
  


    