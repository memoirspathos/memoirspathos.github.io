// Get the menu buttons and article elements
const menuButtons = document.querySelectorAll('#contact menu button');
const articles = document.querySelectorAll('#contact article');

// Add click event listener to each menu button
menuButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    // Remove 'aria-selected' attribute from all menu buttons
    menuButtons.forEach(btn => btn.removeAttribute('aria-selected'));
    // Hide all articles
    articles.forEach(article => article.setAttribute('hidden', true));
    // Set 'aria-selected' attribute on the clicked button
    button.setAttribute('aria-selected', true);
    // Show the corresponding article
    articles[index].removeAttribute('hidden');
  });
});
