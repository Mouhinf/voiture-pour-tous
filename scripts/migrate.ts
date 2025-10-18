
import { initializeApp, applicationDefault } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { staticVehicles } from '../src/lib/vehicles';

// Initialize Firebase Admin SDK
initializeApp({
  credential: applicationDefault(),
});

const db = getFirestore();

async function migrateData() {
  console.log('Starting vehicle data migration...');

  const vehiclesCollection = db.collection('vehicles');
  let migrationCount = 0;

  for (const vehicle of staticVehicles) {
    try {
      // Use the static ID as the document ID in Firestore
      const docRef = vehiclesCollection.doc(vehicle.id);
      await docRef.set(vehicle);
      migrationCount++;
      console.log(`Successfully migrated vehicle with ID: ${vehicle.id}`);
    } catch (e) {
      console.error(`Error migrating vehicle with ID: ${vehicle.id}`, e);
    }
  }

  console.log(`Migration finished. Migrated ${migrationCount} out of ${staticVehicles.length} vehicles.`);
}

migrateData();
