const API = "https://dummyjson.com/products/";

export const fetchById = async (ids) => {
  try {
    const wishProducts = await Promise.all(
      ids.map(async (id) => {
        const res = await fetch(`${API}${id}`);
        if (!res.ok) throw new Error(`Failed to fetch product with id ${id}`);
        return res.json();
      })
    );
    return wishProducts;
  } catch (error) {
    console.error("Error fetching products by ID:", error);
  }
};

export const fetchBySearchQuery = async (query) => {
  try {
    const res = await fetch(`${API}search?q=${query}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching products by query:", error);
  }
};

export const fetchCategories = async () => {
  try {
    const res = await fetch(`${API}categories`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching products by query:", error);
  }
};

fetchCategories();
