import { posts } from "../../../data";

export default function handler(req, res) {
  const id = req.query.id;
  const filtered = posts.filter((post) => {
    return post.id === id;
  });
  if (filtered.length > 0) {
    res.status(200).json(filtered[0]);
  } else {
    res.status(404).json({ message: `Post with ${id} not found` });
  }
}
