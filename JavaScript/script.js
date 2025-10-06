var front = ["html", "css", "js"];
var back = ["java", "php", "node"];

function exibition() {
    // 1️⃣ Concatenação (não afeta front ou back)
    let temp = front.concat(back);
    console.log("Concat:", temp);

    // 2️⃣ Join transforma em string (sem alterar front)
    let joined = front.join("-");
    console.log("Join com '-':", joined);

    // 3️⃣ Cópia segura de front para testes
    let tempCopy = [...front];

    // 4️⃣ Adiciona "react" e imprime
    tempCopy.push("react");
    console.log("Após push('react'):", tempCopy);

    // 5️⃣ Remove o último ("react")
    tempCopy.pop();
    console.log("Após pop():", tempCopy);

    // 6️⃣ Remove o primeiro ("html")
    tempCopy.shift();
    console.log("Após shift():", tempCopy);

    // 7️⃣ Inverte a ordem
    let reversed = [...front].reverse(); // nova cópia, não afeta front
    console.log("Reverse de front:", reversed);

    // 8️⃣ Mostrar o front original intacto
    console.log("Front original intacto:", front);
}

function learning_loop() {
    for(let i = 0; i < 5; i++) {
        console.log(i);
    }
}