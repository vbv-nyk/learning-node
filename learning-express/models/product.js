const items = [];
function Product(title) {
  function addItem() {
    items.push(title);
  }
  return { addItem };
}

module.exports = { items, Product };
