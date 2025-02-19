'use server'

import { db } from '@/lib/firebase'
import { collection, getDocs } from 'firebase/firestore'

export const getFeatureFlags = async (flagName) => {
  const flagsRef = collection(db, 'gymapp')
  const snapshot = await getDocs(flagsRef)

  const flags = snapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }))

  return flags?.find((flag) => flag.id == flagName)
}
