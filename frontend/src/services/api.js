const API_URL = 'http://127.0.0.1:5000';

export const reportHazard = async (hazardData) => {
  try {
    const response = await fetch(`${API_URL}/report_hazard`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(hazardData),
    });
    return await response.json();
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};