const BASE_URL = `${import.meta.env.VITE_BACKEND_URL}/hoots`;

const create = async (hootId, commentFormData) => {
    try {
      const res = await fetch(`${BASE_URL}/${hootId}/comments`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(commentFormData)
      });
      return res.json();
    } catch (error) {
      console.log(error);
    }
};

export { create }