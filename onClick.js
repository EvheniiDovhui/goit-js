function onClick(evt) {
  const { target } = evt;
  if (!target.classList.contains("js-item") || target.textContent) {
    return;
  }
  let result = false;
  const id = Number(target.dataset.id);
  if (player === "X") {
    historyX.push(id);
    result = checkWin(historyX);
  } else {
    historyO.push(id);
    result = checkWin(historyO);
  }
  if (result) {
    console.log(`Winner ${player}`);
  }

  target.textContent = player;
  player = player === "X" ? "O" : "X";
}
