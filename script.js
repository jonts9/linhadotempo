let jonatas = {"ano":1989, "mes":6, "dia":28};
let hellen = {"ano":1990, "mes":10, "dia":5};
console.log(percentualDoAno(jonatas.dia, jonatas.mes));
console.log(percentualDoAno(hellen.dia, hellen.mes));
window.addEventListener('scroll', () => {
    if (
        window.scrollY + window.innerHeight >= document.body.offsetHeight - 1000
    ) {
        appendP();
    }
});

function appendP() {
    const paragrafo = document.createElement("p");
    paragrafo.textContent = "Este é um parágrafo inserido dinamicamente." + new Date();
    document.getElementsByClassName("teste")[0].append(paragrafo);
}

function percentualDoAno(dia, mes) {
  const anoAtual = new Date().getFullYear();
  const dataAtual = new Date(anoAtual, mes - 1, dia);
  const inicioDoAno = new Date(anoAtual, 0, 1);
  const fimDoAno = new Date(anoAtual, 11, 31);
  const msPassados = dataAtual - inicioDoAno;
  const msAno = fimDoAno - inicioDoAno;
  const percentual = (msPassados / msAno) * 100;
  return percentual.toFixed(0);
}