const Server = "https://script.google.com/macros/s/AKfycbwl4Bfldw3afwufNGS3V2Q9QHA9RECioeigwNMI-wi71LZRkIdv0tWB0WBcHJIVbcy2Yg/exec";

const Database = {
    request: async (type, apiKey, data = null) => {
        let url = `${Server}?type=${type}&apiKey=${apiKey}`;
        if (data) url += `&data=${encodeURIComponent(JSON.stringify(data))}`;
        
        try {
            let response = await fetch(url);
            let resp = await response.json();
            return resp.data
        } catch (error) {
            console.error("Database Error:", error);
            return { error: "Request failed!" };
        }
    },

    Read: async (apiKey) => {
        return await Database.request("Read", apiKey);
    },

    Create: async (apiKey, data) => {
        return await Database.request("Create", apiKey, data);
    },

    Update: async (apiKey, data) => {
        return await Database.request("Update", apiKey, data);
    },

    Delete: async (apiKey) => {
        return await Database.request("Delete", apiKey);
    },
};

// Export the module (if using ES6)
export { Database };
