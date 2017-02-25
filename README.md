# Signature Tester

Essa ideia iniciou-se em uma madrugada, trocando ideia sobre testes com o [Lukas](https://gist.github.com/lukaswilkeer/), um grande colaborador da Webschool na área da Matemática, e em algum momento começamos a falar sobre as assinatura das funções pois eu sempre quis "documentar" minhas funções usando aquela nomenclatura sapeca da Matemática que sempre vejo nos projetos de Programação Funcional.

<br>

> Se você não sabe o que é a assinatura de um método eu irei sanar-lhe essa dúvida.

<br>

Vamos ver o que a Wikipedia nos diz:

> A function signature consists of the function prototype. It specifies the general information about a function like the name, scope and parameters.

fonte: [https://en.wikipedia.org/wiki/Type_signature](https://en.wikipedia.org/wiki/Type_signature)
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

<br>

Agora vamos pegar um exemplo bem simples já com JavaScript:

```js

const fn = ( x ) => !( x % 2 )

```

<br>

>**Com certeza você já deve saber para que serve essa função né???**

<br>

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


E isso me incentivou a querer usar essa forma de "descrever" uma função, por isso criamos um projetinho para testar essas assinaturas de forma bem simples.

<br>

Por exemplo:

```js

const test = require('./testSignature')

const { fn, signature } = require('./actions/isEven')

console.log('test: ', test(signature, [4], fn))

```

<br>
Para que isso funcione precisamos modularizar as funções com esse padrão:
<br>

```js

const fn = ( x ) => !( x % 2 )
const signature = `Number -> Boolean`

module.exports = { fn, signature }

```

<br>

> **E pronto! **

<br>

O módulo que faz isso acontecer, ainda está em desevolvimento pois é uma Prova de Conceito, é esse aqui:

```js

const TYPES = require( './types' )

const signature = ( anotattion ) => anotattion.split( ' -> ' )

const check = ( test, type ) => test( type )

const checkType = ( TYPES, typeIn ) => 
  ( type, i ) => check( TYPES[typeIn], type )

const checkThis = ( data, TYPES, typeIn ) => 
  data.map( checkType( TYPES, typeIn ) )

const checkSignature = ( anotattion = [], data = [], fn ) => {
  const [ typeIn, typeOut ] = signature( anotattion )
  const computed = fn( ...data )
  const _in = checkThis( data, TYPES, typeIn )
  const _out = checkThis( [computed], TYPES, typeOut )

  return { _in, _out }
}

module.exports = checkSignature

```


## Exemplos


- toString:
```js

const fn = ( x ) => x.toString()
const signature = `* -> String`

module.exports = { fn, signature }

```

- toDouble:
```js

const fn = ( x ) => x * 2
const signature = `Number -> Number`

module.exports = { fn, signature }

```

- sum:
```js

const sum = ( acc, cur ) => acc + cur

const fn = ( arr ) => arr.reduce( sum )
const signature = `Array -> Number`

module.exports = { fn, signature }

```


## Embasamento Teórico

- [https://en.wikipedia.org/wiki/Type_signature](https://en.wikipedia.org/wiki/Type_signature)
- [https://en.wikipedia.org/wiki/Arrow_(symbol)](https://en.wikipedia.org/wiki/Arrow_(symbol))
- [https://en.wikipedia.org/wiki/Function_(mathematics)](https://en.wikipedia.org/wiki/Function_(mathematics))



