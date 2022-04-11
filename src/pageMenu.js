import { menuData } from './menuData.js';

export function pageMenu() {
  let mainContent = document.getElementById('mainContent');
  mainContent.innerHTML = '';

  let menuWrapper = document.createElement('div');
  menuWrapper.id = 'menuWrapper';

  let list = document.createElement('dl');
  list.id = 'menuList';

  menuData.forEach(element => {
    let item = document.createElement('dt');
    item.textContent = element.item;
    list.append(item);

    let itemDesc = document.createElement('dd');
    itemDesc.textContent = element.desc;
    list.append(itemDesc);

    let itemPrice = document.createElement('dd');
    itemPrice.id = 'price';
    itemPrice.textContent = `$${element.price}`;
    list.append(itemPrice);
  });

  menuWrapper.append(list);
  mainContent.appendChild(menuWrapper);
}