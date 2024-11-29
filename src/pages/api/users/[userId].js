import connectDb from "../../../../database/connect";
import { getUser} from "../../../../database/controller";

export default async function User (req, res) {
    connectDb().catch(() => res.status(405).json({err: 'Not Found'}))
    const {method} = req;

    switch (method) {
        case 'GET':
            getUser(req, res)
            break;
        default:
            res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
            res.status(405).end(`Method ${method} not allowed`)
    }
}