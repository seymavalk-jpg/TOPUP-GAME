const adminGameList = document.getElementById('admin-game-list');
const transactionList = document.getElementById('transaction-list');
games.forEach(game => {
  const div = document.createElement('div');
  div.innerHTML = `<h3>${game.name}</h3>`;
  game.packages.forEach(pkg => {
    const p = document.createElement('p');
    p.textContent = `${pkg.name} - Rp${pkg.price}`;
    div.appendChild(p);
  });
  adminGameList.appendChild(div);
});
function renderTransactions() {
  transactionList.innerHTML = '';
  const transactions = JSON.parse(localStorage.getItem('transactions'));
  transactions.forEach(trx => {
    const li = document.createElement('li');
    li.textContent = `${trx.date} - Total: Rp${trx.total} - Items: ${trx.items.map(i=>i.name).join(', ')}`;
    transactionList.appendChild(li);
  });
}
renderTransactions();
