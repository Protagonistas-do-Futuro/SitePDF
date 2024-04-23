function selectNavItem(element) {
    // Remove a classe 'selected' de todos os itens do menu
    var navItems = document.querySelectorAll('.navbar-nav .nav-link');
    navItems.forEach(function(item) {
      item.classList.remove('selected');
    });
  
    // Adiciona a classe 'selected' ao item do menu clicado
    element.classList.add('selected');
  }
  