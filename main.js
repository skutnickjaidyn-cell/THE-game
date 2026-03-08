const app = document.getElementById("app");
const state = {
  screen: "title",
  p1: null,
  p2: null,
  stage: null
};

const fighterById = Object.fromEntries(window.GAME_DATA.fighters.map((f) => [f.id, f]));

const card = (fighter, selected = false) => `
  <button class="fighter-card ${selected ? "selected" : ""}" data-fighter="${fighter.id}">
    <div class="portrait" style="--accent:${fighter.color}">${fighter.name.split(" ")[0]}</div>
    <h3>${fighter.name}</h3>
    <p>${fighter.archetype}</p>
  </button>
`;

function renderTitle() {
  app.innerHTML = `
    <section class="screen title-screen">
      <div class="title-box">
        <h1>${window.GAME_DATA.title}</h1>
        <p>${window.GAME_DATA.tagline}</p>
        <button id="start-btn" class="primary">Start Fight Setup</button>
      </div>
    </section>`;
  document.getElementById("start-btn").onclick = () => {
    state.screen = "selectP1";
    render();
  };
}

function renderFighterSelect(playerNum) {
  const selected = playerNum === 1 ? state.p1 : state.p2;
  const opponent = playerNum === 1 ? state.p2 : state.p1;

  app.innerHTML = `
    <section class="screen">
      <header class="panel-head">
        <h2>Select Fighter P${playerNum}</h2>
        <p>22-fighter base roster \u2022 each has 7 standard moves + unique super</p>
      </header>
      <div class="grid">${window.GAME_DATA.fighters
        .map((f) => card(f, selected?.id === f.id))
        .join("")}</div>
      <aside class="detail" id="fighter-detail">${selected ? fighterDetail(selected.id) : "Pick a fighter to view moves."}</aside>
      <div class="actions">
        <button id="back" class="ghost">Back</button>
        <button id="next" class="primary" ${selected ? "" : "disabled"}>${playerNum === 1 ? "Lock P1" : "Lock P2"}</button>
      </div>
    </section>
  `;

  app.querySelectorAll(".fighter-card").forEach((btn) => {
    btn.onclick = () => {
      const fighter = fighterById[btn.dataset.fighter];
      if (opponent && opponent.id === fighter.id) return;
      if (playerNum === 1) state.p1 = fighter;
      else state.p2 = fighter;
      render();
    };
  });

  document.getElementById("back").onclick = () => {
    state.screen = playerNum === 1 ? "title" : "selectP1";
    render();
  };

  document.getElementById("next").onclick = () => {
    if (!selected) return;
    state.screen = playerNum === 1 ? "selectP2" : "stage";
    render();
  };
}

function fighterDetail(id) {
  const f = fighterById[id];
  if (!f) return "";
  return `
    <h3>${f.name}</h3>
    <p><strong>${f.archetype}</strong></p>
    <ul>
      <li><b>Jab:</b> ${f.moves.jab}</li>
      <li><b>Special 1:</b> ${f.moves.special1}</li>
      <li><b>Special 2:</b> ${f.moves.special2}</li>
      <li><b>Special 3:</b> ${f.moves.special3}</li>
      <li><b>Low:</b> ${f.moves.low}</li>
      <li><b>High:</b> ${f.moves.high}</li>
      <li><b>Aerial:</b> ${f.moves.aerial}</li>
      <li><b>Super:</b> ${f.moves.super}</li>
    </ul>
    <p><b>Intro:</b> ${f.intro}</p>
    <p><b>Victory:</b> ${f.victory}</p>
  `;
}

function renderStageSelect() {
  app.innerHTML = `
    <section class="screen">
      <header class="panel-head">
        <h2>Select Stage</h2>
      </header>
      <div class="stage-grid">
        ${window.GAME_DATA.stages
          .map(
            (s) => `<button class="stage-card ${state.stage === s ? "selected" : ""}" data-stage="${s}">${s}</button>`
          )
          .join("")}
      </div>
      <div class="actions">
        <button id="back" class="ghost">Back</button>
        <button id="fight" class="primary" ${state.stage ? "" : "disabled"}>Begin Match</button>
      </div>
    </section>
  `;

  app.querySelectorAll(".stage-card").forEach((btn) => {
    btn.onclick = () => {
      state.stage = btn.dataset.stage;
      render();
    };
  });

  document.getElementById("back").onclick = () => {
    state.screen = "selectP2";
    render();
  };

  document.getElementById("fight").onclick = () => {
    state.screen = "battle";
    render();
  };
}

function renderBattle() {
  const p1 = state.p1;
  const p2 = state.p2;
  const stage = state.stage === "Random" ? window.GAME_DATA.stages[Math.floor(Math.random() * (window.GAME_DATA.stages.length - 1))] : state.stage;

  app.innerHTML = `
    <section class="screen battle" data-stage="${stage}">
      <div class="hud">
        <div class="fighter-ui left">
          <h3>${p1.name}</h3>
          <div class="bar hp"><span style="width:100%"></span></div>
          <div class="bar meter"><span style="width:72%"></span></div>
        </div>
        <div class="round">ROUND 1</div>
        <div class="fighter-ui right">
          <h3>${p2.name}</h3>
          <div class="bar hp"><span style="width:100%"></span></div>
          <div class="bar meter"><span style="width:64%"></span></div>
        </div>
      </div>
      <div class="stage-banner">${stage}</div>
      <div class="fighters">
        <article class="sprite" style="--accent:${p1.color}">
          <h4>${p1.name}</h4>
          <p>${p1.moves.super}</p>
        </article>
        <article class="sprite" style="--accent:${p2.color}">
          <h4>${p2.name}</h4>
          <p>${p2.moves.super}</p>
        </article>
      </div>
      <div class="actions">
        <button id="reset" class="ghost">Return to Title</button>
      </div>
    </section>
  `;

  document.getElementById("reset").onclick = () => {
    state.screen = "title";
    state.p1 = null;
    state.p2 = null;
    state.stage = null;
    render();
  };
}

function render() {
  if (state.screen === "title") return renderTitle();
  if (state.screen === "selectP1") return renderFighterSelect(1);
  if (state.screen === "selectP2") return renderFighterSelect(2);
  if (state.screen === "stage") return renderStageSelect();
  if (state.screen === "battle") return renderBattle();
}

render();
