// pages/api/proxy.js
import axios from 'axios';

export default async function handler(req, res) {
  try {
    const response = await axios.get('https://consumet-90tlp0wdo-ms-projects-bf21d06f.vercel.app/anime/gogoanime/popular');
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching data' });
  }
}
