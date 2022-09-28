class Calculadora {
    sumar(num1, num2) {
        return num1 + num2;
    }
    restar(num1, num2) {
        return num1 - num2;
    }
    dividir(num1, num2) {
        return num1 / num2;
    }
    multiplicar(num1, num2) {
        return num1 * num2;
    }
}
function hora(){
    let fecha;
    fecha=new Date();
    var cadena=fecha.getHours()+":"+fecha.getMinutes()+":"+fecha.getSeconds();
    return cadena;
}
function fecha(){
    let fecha;
    fecha=new Date();
    let cadena=fecha.getDate()+"/"+(fecha.getMonth()+1)+"/"+fecha.getFullYear();
    return cadena;
}