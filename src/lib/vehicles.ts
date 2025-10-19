
import { Vehicle } from '@/types/vehicle';
import { collection, getDocs, doc, getDoc, updateDoc, deleteDoc, query, where, limit, addDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase/config';
import { v4 as uuidv4 } from 'uuid';

// Define a type that includes the Firestore document ID
export type VehicleWithDocId = Vehicle & { docId: string };

// This function now fetches all vehicles directly from the Firestore database
// and includes the Firestore document ID.
export async function getAllVehicles(): Promise<VehicleWithDocId[]> {
  try {
    const vehiclesCollection = collection(db, 'vehicles');
    const querySnapshot = await getDocs(vehiclesCollection);

    if (querySnapshot.empty) {
      return [];
    }

    const vehicles: VehicleWithDocId[] = querySnapshot.docs.map(doc => {
      const data = doc.data();
      return {
        ...(data as Vehicle),
        docId: doc.id,
      };
    });

    return vehicles;
  } catch (error) {
    console.error("Error fetching vehicles from Firestore:", error);
    return [];
  }
}

// Fetches a single vehicle by its internal UUID (the 'id' field).
export async function getVehicleById(id: string): Promise<VehicleWithDocId | null> {
   try {
    const q = query(collection(db, "vehicles"), where("id", "==", id), limit(1));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
        return null;
    }

    const docSnapshot = querySnapshot.docs[0];
    const vehicleData = docSnapshot.data() as Vehicle;
    
    return { ...vehicleData, docId: docSnapshot.id };
  } catch (error) {
    console.error(`Error fetching vehicle with ID ${id}:`, error);
    return null;
  }
}

// Fetches a single vehicle by its Firestore Document ID.
export async function getVehicleByDocId(docId: string): Promise<VehicleWithDocId | null> {
  try {
    const docRef = doc(db, 'vehicles', docId);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      return null;
    }

    return { ...(docSnap.data() as Vehicle), docId: docSnap.id };
  } catch (error) {
    console.error(`Error fetching vehicle with document ID ${docId}:`, error);
    return null;
  }
}

// Adds a new vehicle to Firestore
export async function addVehicle(vehicleData: Omit<Vehicle, 'id'>): Promise<void> {
    const newVehicle: Vehicle = {
        ...vehicleData,
        id: uuidv4(), // Generate a unique ID for the new vehicle
    };

    try {
        await addDoc(collection(db, 'vehicles'), newVehicle as any);
    } catch (error) {
        console.error("Error adding vehicle to Firestore:", error);
        throw error;
    }
}

// Updates a vehicle document in Firestore.
export async function updateVehicle(docId: string, dataToUpdate: Partial<Vehicle>): Promise<void> {
    try {
        const docRef = doc(db, 'vehicles', docId);
        await updateDoc(docRef, dataToUpdate);
    } catch (error) {
        console.error(`Error updating vehicle with doc ID ${docId}:`, error);
        throw error;
    }
}

// Deletes a vehicle document from Firestore.
export async function deleteVehicle(docId: string): Promise<void> {
    try {
        const docRef = doc(db, 'vehicles', docId);
        await deleteDoc(docRef);
    } catch (error) {
        console.error(`Error deleting vehicle with doc ID ${docId}:`, error);
        throw error;
    }
}
