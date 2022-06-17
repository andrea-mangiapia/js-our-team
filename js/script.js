// Viene fornito un layout di base in cui è presente una card di esempio inserita staticamente nell’html.
// Questa card serve solo come timbro del markup necessario per ottenere il risultato finale e dovrà quindi essere rimossa dall’html.
// Aggiungere un file js in cui definire un array di oggetti che rappresentano i membri del team.
// Ogni membro ha le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
// Una volta definita la struttura dati, prendendo come riferimento la card di esempio presente nell'html, stampare dinamicamente una card per ogni membro del team.

// BONUS:
// Utilizzare gli input presenti nella pagina per permettere all'utente di aggiungere nuovi membri del team:
// cliccando sul pulsante "add" viene creato un nuovo oggetto,
// il quale viene inserito nell'array iniziale e viene stampata una nuova card con tutte le informazioni inserite dall'utente.

// creo un array per contenere 6 oggetti
// nell'oggetto inserire le proprietà del nome (name), ruolo (role), immagine (photo)

const teamMembersArray = [
    // primo oggetto: membro 1
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        photo: 'wayne-barnett-founder-ceo.jpg'
    },
    // secondo oggetto: membro 2
    {
        name: 'Angela Carrol',
        role: 'Chief Editor',
        photo: 'angela-caroll-chief-editor.jpg'
    },
    // terzo oggetto: membro 3
    {
        name: 'Walter Gordon',
        role: 'Office Manage',
        photo: 'walter-gordon-office-manager.jpg'
    },
    // quarto oggetto: membro 4
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        photo: '/angela-lopez-social-media-manager.jpg'
    },
    // quinto oggetto: membro 5
    {
        name: 'Scott Estrada',
        role: 'Developer',
        photo: 'scott-estrada-developer.jpg'
    },
    // sesto oggetto: membro 6
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        photo: 'barbara-ramos-graphic-designer.jpg'
    }  
]
    
// richiamo il container delle card dove appendere le card
const teamContainer = document.querySelector('.team-container');

// scorro l'array degli oggetti
for(i = 0; i < teamMembersArray.length; i++){
    // scorro gli oggetti dentro l'array
    const teamMembers = teamMembersArray[i];
    // console.log(teamMembers);

    // creo variabile per poi appendarla
    const teamContent = `
    <div class="team-card">
        <div class="card-image">
            <img src= 'img/${teamMembers.photo}'/>
        </div>
        
        <div class="card-text">
            <h3>${teamMembers.name}</h3>
            <p>${teamMembers.role}</p>
        </div>
    </div>`

    teamContainer.innerHTML += teamContent;
//   console.log(teamContainer);

}