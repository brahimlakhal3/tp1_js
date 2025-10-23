const reponses = ['b', 'b', 'c', 'a', 'b'];
const reponse2 = [
    ['html', 'css', 'javascript'],
    ['div', 'section'],
    ['display', 'margin', 'padding']
];

const btn = document.getElementById('btn');
const btn2 = document.getElementById('btn2');
const dialog = document.getElementById('scoreDialog');
const dialogContent = document.getElementById('dialogContent');
const closeDialog = document.getElementById('closeDialog');
const items = document.querySelectorAll('.true');

btn.addEventListener('click', () => {

    let score = 0;

    const radiosChecked = document.querySelectorAll('input[type="radio"]:checked');
    const boxChecked = document.querySelectorAll('[data-question]');

    const resultDiv = document.getElementById('result');

    if (radiosChecked.length !== reponses.length) {
        resultDiv.innerHTML = "⚠️ S'il vous plaît, complétez les réponses de la partie 1";
    } else {
        resultDiv.innerHTML = "";
        for (let i = 0; i < radiosChecked.length; i++) {
            if (radiosChecked[i].value === reponses[i]) score++;
        }
        for (let i = 0; i < boxChecked.length; i++) {
            const res = boxChecked[i].querySelectorAll('input[type=\"checkbox\"]:checked');
            const rep = Array.from(res).map(x => x.value);
            for (let j = 0; j < rep.length; j++) {
                if (reponse2[i].includes(rep[j])) score++;
            }
        }

        items.forEach(item => item.classList.add('active'));

        const note = (score * 20.0 / 13).toFixed(2);
        dialogContent.innerHTML = `✅ Votre score est <strong>${note}</strong> / 20`;
        dialog.showModal();
    }
});


btn2.addEventListener('click', () => {
    location.reload();
});

closeDialog.addEventListener('click', () => {
    dialog.close();
});
