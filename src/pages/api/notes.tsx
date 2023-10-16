// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const Api = (req, res) => {
  if (req.method === "GET") {
    // Implement your logic for fetching items (Read operation) here
    res.status(200).json({ message: "GET /api/items" });
  } else if (req.method === "POST") {
    // Implement your logic for creating an item (Create operation) here
    res.status(200).json({ message: "POST /api/items" });
  } else if (req.method === "PUT") {
    // Implement your logic for updating an item (Update operation) here
    res.status(200).json({ message: "PUT /api/items" });
  } else if (req.method === "DELETE") {
    // Implement your logic for deleting an item (Delete operation) here
    res.status(200).json({ message: "DELETE /api/items" });
  } else {
    res.status(405).end(); // Method Not Allowed
  }
};
export default Api;
