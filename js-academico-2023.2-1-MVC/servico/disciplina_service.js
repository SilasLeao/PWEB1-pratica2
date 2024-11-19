class DisciplinaService {
  constructor() {
    this.repositorio = new DisciplinaRepositorio();
  }

  inserir(codigo, nome) {
    const disciplinaPesquisada = this.pesquisarPorCodigo(codigo);
    if (disciplinaPesquisada.length > 0) {
      throw new Error("Disciplina já cadastrada!");
    }
    const disciplinaNova = new Disciplina(codigo, nome);
    this.repositorio.inserir(disciplinaNova);
    return disciplinaNova;
  }

  pesquisarPorCodigo(codigo) {
    return this.repositorio
      .listar()
      .filter((disciplina) => disciplina.codigo === codigo);
  }

  pesquisarPorNome(nome) {
    return this.repositorio
      .listar()
      .filter((disciplina) => disciplina.nome === nome);
  }

  remover(codigo) {
    this.repositorio.remover(codigo);
  }

  inserirAlunoNaDisciplina(aluno, codigo) {
    const disciplinaPesquisada = this.pesquisarPorCodigo(codigo);
    disciplinaPesquisada.inserirAluno(aluno);
  }
}
