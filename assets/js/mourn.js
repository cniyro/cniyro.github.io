function initMourn() {
  const mourn = ['4-4'];
  const date = new Date();
  const today = (date.getMonth() + 1) + "-" + date.getDate()
  const mourn_days = JSON.stringify(mourn)
  if (mourn_days.includes(today)) {
    document.write('<link rel="stylesheet" href="/assets/css/mourn.css">');
  }
}
initMourn();