const students = [
    {
        nome: "Dener",
        nota1: 5,
        nota2: 10
    },
    {
        nome: "Vinícius",
        nota1: 3,
        nota2: 3
    }
]

function media(student) {
    const mediaNotas = (student.nota1 + student.nota2 /2);
    
    if (mediaNotas >= 7){
    alert (`
        O aluno ${student.nome} está aprovado
    `)
    } else {
        alert (`
        O aluno ${student.nome} está reprovado
    `)    
    }
}

for (let student of students) {    
    media(student) ;
}

