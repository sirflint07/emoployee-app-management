import connectDb from "../../../../database/connect";
import { getUsers, postUsers, putUser, deleteUser} from "../../../../database/controller";
import userModel from "../../../../model/userModel";
export default async function handler(req, res) {
    await connectDb().catch(() => res.status(405).json({err: 'Error connecting'}))
    const { method } = req;

    switch (method) {
        case 'GET':
            try {
                const users = await getUsers(req, res);
                res.status(200).json(users);
            } catch (error) {
                res.status(500).json({ error: "Failed to fetch users" });
            }
            break;
        case 'POST':
            try {
                // Validate and create the user
                const user = await userModel.create(req.body); // req.body should contain {name, email, password, etc.}
                res.status(201).json({ success: true, data: user });
            } catch (error) {
                console.error(error); // Log error for debugging
                res.status(400).json({ success: false, message: error.message });
            }
            break;
        case 'PUT':
            try {
                const user = await putUser(req, res);
                res.status(200).json(user);
            } catch (error) {
                res.status(500).json({ error: "Failed to update user" });
            }
            break;
        case 'DELETE':
            try {
                const user = await deleteUser(req.body, res);
                res.status(200).json(user);
            } catch (error) {
                res.status(500).json({ error: "Failed to update user" });
            }
            break;
        default:
            res.setHeader('Allow', ['GET', 'POST']);
            res.status(405).json({ error: `Method ${method} Not Allowed` });
            break;
    }
}
