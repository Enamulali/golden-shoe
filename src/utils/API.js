export const getItems = (query) => {
  let queryStr = `https://goldennn-shoe.herokuapp.com/api/items`;
  if (query) {
    queryStr += `?category_name=${query}`;
  }

  return fetch(queryStr)
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      return response.items;
    });
};

export const getItemById = (item_id) => {
  return fetch(`https://goldennn-shoe.herokuapp.com/api/items/${item_id}`)
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      return response.item;
    });
};

export const getCategories = () => {
  return fetch("https://goldennn-shoe.herokuapp.com/api/categories")
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      return response.categories;
    });
};

export const postItems = (newProductObject) => {
  return fetch("https://goldennn-shoe.herokuapp.com/api/items", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newProductObject),
  }).then(() => {
    console.log("new product added!");
  });
};
