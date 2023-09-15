SABREDELUZ = () => alert("Estrela da Morte");
mensagem = (mgs) => console.log(mgs);
Soma =(a,b)=> a + b; 
sub =(a,b)=> a - b; 
mult =(a,b)=> a * b; 
div =(a,b)=> a / b; 
juros_simples = (c,j) => mult(c,div(j,100));
montante_juros_simlples = (c,j) => soma(juros_simples(c,j),c);

mensagem(soma(15,soma(11,soma(4,soma))));

mensagem(sub(18,7));

mensagen(soma(2,div(2,2)));

mensagem(juros_simples(420,18));
