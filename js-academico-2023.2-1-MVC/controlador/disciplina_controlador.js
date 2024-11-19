class DisciplinaControlador {
  constructor() {
    this.servico = new DisciplinaService();
  }

  inserir() {
    const nomeElemento = document.querySelector("#nome");
    const codigoElemento = document.querySelector("#codigo");
    const disciplinaInserida = this.servico.inserir(
      nomeElemento.value,
      Number(codigoElemento.value)
    );
    const listaDisciplinasElemento =
      document.querySelector("#listaDisciplinas");
    if (disciplinaInserida) {
      this.inserirDisciplinaNoHtml(
        disciplinaInserida,
        listaDisciplinasElemento
      );
    }
  }

  inserirDisciplinaNoHtml(disciplina, elementoDestino) {
    const disciplinaElemento = document.createElement("li");
    disciplinaElemento.textContent = `Código: ${disciplina.codigo} - Nome: ${disciplina.nome} - Alunos: ${disciplina.alunos}`;
    elementoDestino.appendChild(disciplinaElemento);
  }
}
