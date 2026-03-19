const candidates = [
  { id: 1, name: "Avanish Sharma", votes: 0 },
  { id: 2, name: "Anurand", votes: 0 },
  { id: 3, name: "Tillu Dakait", votes: 0 }
];

const container = document.getElementById("candidates");

candidates.forEach(c => {
  const div = document.createElement("div");
  div.className = "card";

  div.innerHTML = `
    <h2>${c.name}</h2>
    <p>Votes: <span id="vote-${c.id}">${c.votes}</span></p>
    <button onclick="vote(${c.id})">Vote</button>
  `;

  container.appendChild(div);
});

function vote(id) {
  let candidate = candidates.find(c => c.id === id);
  candidate.votes++;

  document.getElementById(`vote-${id}`).innerText = candidate.votes;
}
