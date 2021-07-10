const n = new Date();
const y = n.getFullYear();
const m = n.getMonth() + 1;
const d = n.getDate();
document.getElementById('date').innerHTML = `${m}/${d}/${y}`;
