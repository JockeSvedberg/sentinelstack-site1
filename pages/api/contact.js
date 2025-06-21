export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Only POST requests allowed' });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing fields' });
  }

  try {
    console.log("Kontaktformulär:");
    console.log("Namn:", name);
    console.log("E-post:", email);
    console.log("Meddelande:", message);

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Fel i kontaktformulär:", error);
    return res.status(500).json({ error: 'Server error' });
  }
}
