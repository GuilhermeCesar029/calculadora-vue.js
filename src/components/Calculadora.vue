<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="container text-center">
            <div class="border ">
                <div class="title">
                    <h3 id="title" class="text-center">Calculadora</h3>
                </div>
                <label class="badge badge-pill badge-secondary">Valor 1:</label>
                <input class=""  type="text" name="valor1" id="valor1" placeholder="Digite um Valor Valido"><br>
            
                <select class="btn btn-outline-info button" name="sinal" id="sinal">
                    <option value="+">+</option>
                    <option value="-">-</option>
                    <option value="*">x</option>
                    <option value="/">÷</option>
                </select><br>
                <label class="badge badge-pill badge-secondary">Valor 2:</label>
                <input class=""  type="text" name="valor2" id="valor2" placeholder="Digite um Valor Valido"><br>
            
                <input id="sinal" class="btn btn-outline-info button" type="button" value="=" v-on:click="calcular"><br>
                <label class="badge badge-pill badge-info">Resultado:</label>
                <input class="" type="text" name="result" id="result">
            </div>
        </div>
  </div>
  
</template>

<script src="./Calculadora.js">
  export default {
    name: 'HelloWorld',
    props: {
      msg: String
    }
  }
  
</script>


