# Signature Tester

Essa ideia iniciou-se em uma madrugada, trocando ideia sobre testes com o [Lukas](https://gist.github.com/lukaswilkeer/), um grande colaborador da Webschool na área da Matemática, e em algum momento começamos a falar sobre as assinatura das funções pois eu sempre quis "documentar" minhas funções usando aquela nomenclatura sapeca da Matemática que sempre vejo nos projetos de Programação Funcional.

<br>

> Se você não sabe o que é a assinatura de um método eu irei sanar-lhe essa dúvida.

<br>

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

Pois bem, como sabemos o JS é fraca e dinamicamente tipado, ou seja, **tamo fudido!**
