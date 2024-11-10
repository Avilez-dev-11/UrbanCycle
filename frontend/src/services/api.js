export const reportHazard = async (hazardData) => {
  const response = await fetch('http://localhost:5000/report_hazard', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(hazardData),
  });
  return response.json();
};