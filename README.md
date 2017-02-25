# Signature Tester

Essa ideia iniciou-se em uma madrugada, trocando ideia sobre testes com o [Lukas](https://gist.github.com/lukaswilkeer/), um grande colaborador da Webschool na área da Matemática, e em algum momento começamos a falar sobre as assinatura das funções pois eu sempre quis "documentar" minhas funções usando aquela nomenclatura sapeca da Matemática que sempre vejo nos projetos de Programação Funcional.

<br>

> Se você não sabe o que é a assinatura de um método eu irei sanar-lhe essa dúvida.

<br>

Vamos ver o que a Wikipedia nos diz:

> A function signature consists of the function prototype. It specifies the general information about a function like the name, scope and parameters.

fonte: [[https://en.wikipedia.org/wiki/Type_signature](https://en.wikipedia.org/wiki/Type_signature)]([https://en.wikipedia.org/wiki/Type_signature](https://en.wikipedia.org/wiki/Type_signature))

<br>


Vamos analisar essa assinatura abaixo:

```

f :: a -> b -> c

```


<br>

Nela temos uma função `f` que receberá um tipo `a`, ela retornará **outra função** a qual tem a entrada do tipo `b` e que retornará o `c`, traduzindo para JavaScript podemos escrever assim:

```js

const f = ( a ) => ( b ) => c

```


Por exemplo:


```

const f = ( a ) => {
  const b = a.age  
  return ( b ) => b >= 18
}

const b = f( {age: 32} )
const c = b(32)

console.log(c)
true

```

<br>

Como na assinatura que analisamos anteriormente a função `f` recebeu um parâmetro `a`, do tipo `Object` e retornou outra função. Essa recebe um parâmetro `b`, do tipo `Number` e irá retornar em `c` um valor `Boolean`, para testar se a idade é maior ou igual a 18. 


Vamos pegar um exemplo bem simples:

```js

const fn = ( x ) => !( x % 2 )

```

Com certeza você já deve saber para que serve essa função né???

Ótimo! Então vamos analisar sua assinatura:


```js

Number -> Boolean

```


![](http://m.memegen.com/opeo40.jpg)

<br>
<br>

Vou explicar melhor então.

> Qual o TIPO do argumento que a função recebe?
> 
> \- Sei lá! Tem soh um `x` nesse negócio.


Pois bem, primeiramente devemos saber que essa função irá TESTAR se o número que entrar é PAR, se você não tinha entendido ainda melhor estudar mais JS hein!

Ok! Entra um `Number` e o retorno dessa função será `true` ou `false`, logo o tipo do retorno é: `Boolean`!

<br>

>Ficou claro agora essa, `Number -> Boolean`, assinatura? 

<br>

Pois bem, como sabemos o JS é fraca e dinamicamente tipado, ou seja, **tamo fudido!**

<br>

Como eu vivo estudando um pouquinho de Funcional sempre me deparo com essas assinaturas, um exemplo bem claro disso é o [FantasyLand](https://github.com/fantasyland/fantasy-land), veja comigo como é a assinatura do método [`equals`](https://github.com/fantasyland/fantasy-land#equals-method):

```

equals :: Setoid a => a ~> a -> Boolean

```




[https://en.wikipedia.org/wiki/Arrow_(symbol)](https://en.wikipedia.org/wiki/Arrow_(symbol))



