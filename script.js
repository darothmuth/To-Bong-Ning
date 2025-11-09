let currentPage = 1;

function nextPage() {
  document.getElementById(`page${currentPage}`).classList.remove('active');
  currentPage++;
  const next = document.getElementById(`page${currentPage}`);
  if (next) next.classList.add('active');
}

function finish() {
  const page = document.getElementById(`page${currentPage}`);
  page.innerHTML = `
    <h2>សូមអរគុណសម្រាប់ការអានលិខិតមួយនេះដល់ចប់!</h2>
    
    <p>💖 </p>
  `;
}