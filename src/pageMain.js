function headerInit() {
  const header = document.createElement('header');
  const headerTitle = document.createElement('h1');
  const nav = document.createElement('nav');
  const navButtonContact = document.createElement('button');
  const navButtonMenu = document.createElement('button');
  const navButtonOrder = document.createElement('button');
  
  headerTitle.textContent = `Alice's Restaurant`;
  navButtonContact.textContent = `Contact`;
  navButtonContact.id = 'contactBtn';
  navButtonMenu.textContent = `Menu`;
  navButtonMenu.id = 'menuBtn';
  navButtonOrder.textContent = `Order Online`;
  navButtonOrder.id = 'orderBtn';
  
  nav.append(navButtonContact, navButtonMenu, navButtonOrder);
  
  header.append(headerTitle, nav);
  return header;
}

function mainInit() {
  const main = document.createElement('main');
  const mainTitle = document.createElement('h2');
  mainTitle.id = 'mainTitle';
  const mainParagraph = document.createElement('p');
  mainParagraph.id = 'mainParagraph';
  const mainContent = document.createElement('div');
  mainContent.id = 'mainContent';

  mainTitle.textContent = `You can get anything you want.`;
  mainParagraph.textContent = `...at Alice's Restaurant.`;

  main.append(mainTitle, mainParagraph, mainContent);
  return main;
}

export function pageMain() {
  let content = document.querySelector('.content');
  
  content.append(headerInit(), mainInit());
}