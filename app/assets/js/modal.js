export function openModal() {
  document.querySelector('.modal').style.display = 'flex';
  document.querySelector('body').style.overflow = 'hidden';
}

export function closeModal() {
  document.querySelector('.modal').style.display = 'none';
  document.querySelector('body').style.overflow = 'visible';
}
