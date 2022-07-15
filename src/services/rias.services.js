import { db } from "../firebase";

import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const riaCollectionRef = collection(db, "rias");
class RiasDataService {

  getAllRias = () => {
    return getDocs(riaCollectionRef);
  };

}

export default new RiasDataService();