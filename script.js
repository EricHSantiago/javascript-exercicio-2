/*
  Bora praticar e rever tudo o que foi ensinado na aula? 💜

  Nesse desafio você irá criar uma lista de estudantes e,
  cada estudante dentro dessa lista, deverá conter os seguintes dados:

  - nome;
  - nota da primeira prova;
  - nota da segunda prova.

  Depois de criada a lista:

  [X] Crie uma função que irá calcular a média das notas de cada aluno;
  [X] Supondo que a média, para esse concurso é 7, verifique se cada
  aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.
*/

const students = [
  {
    name: "Luiz",
    noteOne: 10,
    noteTwo: 5,
  },
  {
    name: "Ana Paula",
    noteOne: 5,
    noteTwo: 7,
  },
  {
    name: "Jhon",
    noteOne: 2,
    noteTwo: 6,
  },
  {
    name: "Aninha",
    noteOne: 10,
    noteTwo: 7,
  },
]

function average(noteOne, noteTwo) {
  return (noteOne + noteTwo) / 2
}

function printStudentsAverage(student) {
  
  const overallAverage = average(student.noteOne, student.noteTwo);

  if (overallAverage >= 7) {
    return `
    A média do(a) Aluno(a) ${student.name} é: ${overallAverage} 
    Parabéns, ${student.name}! Você foi aprovado(a) no concurso
    `
  } else {
    return `
    A média do(a) Aluno(a) ${student.name} é: ${overallAverage} 
    Não foi dessa vez, ${student.name}! Tente novamente!
    `
  }
}

for (let student of students) {
  let averageMessage = printStudentsAverage(student)
  alert(averageMessage)
}