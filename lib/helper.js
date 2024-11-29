const baseURL = 'http://localhost:3000';

export const getUsers = async () => {
    try {
        const response = await fetch(`${baseURL}/api/users`); // Added baseURL for consistency
        if (!response.ok) { // Check for a successful response
            console.error('HTTP error', response.status);
            throw new Error('Failed to fetch users');
        }
        const json = await response.json();
        return json;
    } catch (error) {
        console.error("Error getting users:", error);
        return { error: "Error fetching users" }; // Improved error handling
    }
};

export const getUser = async (id) => {
    try {
        const response = await fetch(`${baseURL}/api/users/${id}`);
        if (!response.ok) { // Check for a successful response
            console.error('HTTP error', response.status);
            throw new Error(`Failed to fetch user with id: ${id}`);
        }
        const json = await response.json();
        return json;
    } catch (error) {
        console.error("Error getting user:", error);
        return { error: "Error fetching user" };
    }
};


export const postUser = async (formData) => {
    try {
        console.log("formData being sent:", formData);  // Log the formData

        const options = {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),  // Stringify formData
        };

        const response = await fetch(`${baseURL}/api/users`, options);

        if (!response.ok) {
            console.error('HTTP error', response.status);
            throw new Error('Failed to post user'); // Handle failed response
        }

        const json = await response.json();
        return json;

    } catch (error) {
        console.error("Error posting user:", error);
        return { error: "Error posting user" }; // Graceful error handling
    }
};



// export const postUser = async (formData) => {
//     const baseURL = 'http://localhost:3000';
//     try {
//         const options = {
//             method: 'POST',
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify(formData),
//         };
//         const response = await fetch(`${baseURL}/api/users`, options);
//         if (!response.ok) { // Check for a successful response
//             console.error('HTTP error', response.status);
//             throw new Error('Failed to post user');
//         }
//         const json = await response.json();
//         return json;
//     } catch (error) {
//         console.error("Error posting user:", error);
//         return { error: "Error posting user" };
//     }
// };

export const updateUser = async (id, formData) => {
    try {
        const options = {
            method: 'PUT',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        };
        const response = await fetch(`${baseURL}/api/users/${id}`, options);
        if (!response.ok) { // Check for a successful response
            console.error('HTTP error', response.status);
            throw new Error(`Failed to update user with id: ${id}`);
        }
        const json = await response.json();
        return json;
    } catch (error) {
        console.error("Error updating user:", error);
        return { error: "Error updating user" };
    }
};

export const deleteUser = async (id) => {
    try {
        const options = {
            method: 'DELETE',
            headers: { "Content-Type": "application/json" },
        };
        const response = await fetch(`${baseURL}/api/users/${id}`, options);
        if (!response.ok) { // Check for a successful response
            console.error('HTTP error', response.status);
            throw new Error(`Failed to delete user with id: ${id}`);
        }
        const json = await response.json();
        return json;
    } catch (error) {
        console.error("Error deleting user:", error);
        return { error: "Error deleting user" };
    }
};