export async function fetchAvailableMeals() {
  const response = await fetch("http://localhost:3000/available-meals");
  const resData = await response.json();

  if (!response.ok) {
    throw new Error("Failed to fetch available meals");
  }

  return resData.availableMeals;
}

export async function fetchOrders() {
  const response = await fetch("http://localhost:3000/orders");
  const resData = await response.json();

  if (!response.ok) {
    throw new Error("Failed to fetch order.");
  }

  return resData.products;
}

export async function updateOrders(orders) {
  const response = await fetch("http://localhost:3000/orders", {
    method: "PUT",
    body: JSON.stringify({ orders }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const resData = await response.json();

  if (!response.ok) {
    throw new Error("Failed to update order.");
  }

  return resData.message;
}
