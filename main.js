class Aluno {
    constructor(nome, nota) {
        this.nome = nome;
        this.nota = nota;
    }

    apresentar() {
        return `Nome: ${this.nome}, Nota: ${this.nota}`;
    }
}


let alunos = [];

let aluno1 = new Aluno("João", 10);
let aluno2 = new Aluno("Maria", 7);

alunos.push(aluno1, aluno2);

alunos.forEach(aluno => console.log(aluno.apresentar()));