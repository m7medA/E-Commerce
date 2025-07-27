const API = "https://dummyjson.com/products";

export const fetchByIds = async (ids) => {
  try {
    const productsId = await Promise.all(
      ids.map(async (id) => {
        const res = await fetch(`${API}/${id}`);
        if (!res.ok) throw new Error(`Failed to fetch product with id ${id}`);
        return res.json();
      })
    );
    return productsId;
  } catch (error) {
    console.error("Error fetching products by ID:", error);
  }
};

export const fetchById = async (id) => {
  try {
    const res = await fetch(`${API}/${id}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching product by id:", error);
  }
};

export const fetchBySearchQuery = async (query) => {
  try {
    const res = await fetch(`${API}/search?q=${query}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching products by query:", error);
  }
};

export const fetchCategories = async () => {
  try {
    const res = await fetch(`${API}/categories`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching products by query:", error);
  }
};

export const fetchCategory = async (query) => {
  try {
    const res = await fetch(`${API}/category/${query}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching products by query:", error);
  }
};

export const fetchProductsByLimit = async (limit, skip) => {
  try {
    const res = await fetch(`${API}?limit=${limit}&skip=${skip}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching products by query:", error);
  }
};

// export const addToCartAPI = async (title, price) => {
//   try {
//     const res = await fetch(`${API}/add`, {
//       method: "POST",
//       header: {
//         "Content-Type": "application/json",
//       },
//       body: {
//         title: title,
//         price: price,
//       },
//     });
//     const data = await res.json();
//     console.log(data);
//     return data;
//   } catch (error) {
//     console.error("Error fetching products by query:", error);
//   }
// };

// addToCartAPI("Gucci Bloom Eau de", 99);

export const loginAPI = async (email, password) => {
  try {
    const res = await fetch(`https://reqres.in/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "reqres-free-v1",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err);
    throw new Error(err);
  }
};
