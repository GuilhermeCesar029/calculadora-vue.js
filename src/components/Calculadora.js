export default {
    methods: {
        calcular(){
            let valor1 = parseInt(document.getElementById("valor1").value);
            let valor2 = parseInt(document.getElementById("valor2").value);
            let sinal = document.getElementById("sinal").value;
            let result = document.getElementById("result");
        
            switch(sinal) {
                case '+':
                    result.value = valor1 + valor2;
                    break;
                case '-':
                    result.value = valor1 - valor2;
                    break;
                case '*':
                    result.value = valor1 * valor2;
                    break;
                case '/':
                    result.value = valor1 / valor2;
                    break;    
            }
        
        }
    }
}