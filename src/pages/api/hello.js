// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectDb from "../../../database/connect"

export default function handler(req, res) {
  connectDb()
  res.status(200).json({ name: 'John Doe' })
}
