import userModel from "../model/userModel"

export async function getUser(req, res) {
    try {
        const {userId} =  req.query;
        if (userId) {
            const user = await userModel.findById(userId)
            res.status(200).json(user)
        }
    } catch (error) {
        res.status(404).json({error: 'could not get user'})
    }
}

export async function getUsers(req, res) {
    try {
        // Fetch users from the database
        const users = await userModel.find({})
        
        // Check if users exist
        if (!users || users.length === 0) {
            return res.status(404).json({ error: 'No users found' });
        }
        
        // Return the users if they exist
        return res.status(200).json(users)
    } catch (error) {
        console.error('Error fetching users:', error)
        
        // Handle errors properly and respond to the client
        
    }
}



export async function postUsers(req, res) {
    try {
        const formData = req.body;

        // Check if formData exists
        if (!formData || Object.keys(formData).length === 0) {
            return res.status(400).json({ error: "Data Not Found" });  // Return 400 for bad request
        }

        // Create new user with the form data
        const newUser = await userModel.create(formData);

        // Return the newly created user
        return res.status(201).json(newUser);
    } catch (error) {
        console.error("Error creating user:", error);
        return res.status(500).json({ error: "Server error while creating user" });
    }
}



export async function putUser(req, res) {
    try {
        const { userId } = req.query;  // Extract the userId from query parameters
        const formData = req.body;     // Extract the form data from the request body

        // Check if both userId and formData exist
        if (!userId || !formData || Object.keys(formData).length === 0) {
            return res.status(400).json({ error: "Missing userId or data" });
        }

        // Find and update the user
        const updatedUser = await userModel.findByIdAndUpdate(userId, formData, { new: true });

        // If user not found, return 404
        if (!updatedUser) {
            return res.status(404).json({ error: "User not found" });
        }

        // Return the updated user
        return res.status(200).json(updatedUser);
    } catch (error) {
        console.error("Error updating user:", error);
        return res.status(500).json({ error: "Server error while updating user" });
    }
}




export async function deleteUser (req, res) {
    const { userId } = req.query;
    try {
        if (userId) {
            userModel.findByIdAndDelete(userId)
            res.status(200).json({message: `deleted the user with id ${userId}`})
        }
        res.status(204).json({err: 'Resource not selected for deleting'})
    } catch (error) {
        res.status(404).json({error: 'could not find data'})
    }
    
}