# Revisão do javascript

## Começando

Os exemplos são baseados no livro "O melhor do javascript" do Douglas Crockford.

### Pré-requesitos

Os exemplos podem ser executados no console dos navegadores ou no terminal com nodejs.

#### Objetos

Os tipos mais simples no Javascript são os números, strings, booleanos, null, e underfined. Todos os demais são objetos . Números, sequência de caracteres e booleanos são parecidos com obejtos por que possuem métodos, mas são imutáveis. Objetos no JavaScript sãp grupos mutáveis cpm índices. No JavaScript, matrizes são objetos, funções são objetos, expressões regulares são objetos, e claro objetos são objetos.

Um objeto é um contêiner de propriedades, e elas possuem um nome e um valor. Um nome de pode ser qualquer sequência de caracter, incluindo uma vazia. Um valor pode ser qualquer um no JavaScript exceto underdefined.

Objeto em JavaScript são livres de classe. Não nenhuma restrição para nomes de novas propriedades ou seus valores. Os objetos são úteis para coletar e organizar dados. Eles podem conter outros objetos, podendo ser representados estruturas de árvore ou gráfica.

O JavaScript tem uma caraterística de associação prototipica que permite um objeto herdar as propriedades de outro. Quando bem usadas, podem reduzir o tempo de inicialização de objetos e o consumo de memória.

#### Objetos Literais

A forma literal é uma notação muito conviente para criar novos valores de objetos. Um objeto literal é um par de chaves contendo nome/valor. Podem aparecer em qualquer lugar onde uma expressão possa ser usada.
Vide __objetos/exemplo1.js__.

Um nome de propriedade pode ser qualquer sequência de caracteres, incluindo a vazia. As aspas no nome da propriedade num objeto literal são opcionais se eela for legal no JavaScript e não uma palavra reservada.
Então são necessárias para "*primeiro nome*", mas opcionais para *primero_nome*.

Um valor da propriedade pode ser obtido de qualquer expressão, incluindo outro objetos. Objetos podem ser aninhados, vide __exemplo2.js__.


#### Recuperação

Valores pode ser recuperados de um objeto envolvendo-se uma expressão de sequência de caracteres com um par []. Se expressão for literal, e se for um nome JavaScript legal, não uma palavra reservada, então a notação poderá ser usada em vez disso. A notação é melhor porque é mais compacta e mais legíveis, vide  __exemplo2.js__.

O valor *undefined* é obtido se uma tentativa for feito de extrair um membro não-existente.

O operador || pode ser usado para fornecedor valores padrão, vide __exemplo2.js__.

Tentar extrair valores de undefined lançará uma exceção *TypeError*. Pode-se previnir isso com operador *&&*, vide exemplo1.js.

#### Atualização

Uma valor num objeto pode ser atualizado por atribuição. Se o nome da propriedade já existe no objeto, o valor da propriedade é substituído, vide __exemplo1.js__.

Se o objeto já não possuir aquele nome de propriedade, ele é acrescentado, vide __exemplo1.js__.

