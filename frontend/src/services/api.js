const API_URL = 'http://127.0.0.1:5000';
// services/api.js
export const reportHazard = async () => {
  try {
    const response = await fetch(`${API_URL}hazard-report`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ hazard: 'example' }),
    });
    const data = await response.json();
    console.log('Hazard reported successfully:', data);
  } catch (error) {
    console.error('Error reporting hazard:', error);
  }
};