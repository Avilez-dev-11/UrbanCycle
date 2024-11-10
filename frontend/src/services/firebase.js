import { db } from '../../firebase/firebaseConfig';

export const addHazardToFirestore = async (hazardData) => {
  try {
    await db.collection('hazards').add(hazardData);
    console.log('Hazard added to Firestore');
  } catch (error) {
    console.error('Error adding hazard: ', error);
  }
};