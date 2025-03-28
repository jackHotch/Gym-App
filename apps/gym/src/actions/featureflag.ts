'use server'

import { db } from '@/lib/firebase'
import { FeatureFlag } from '@/types'
import { collection, getDocs } from 'firebase/firestore'

export const getFeatureFlags = async (flagName: string) => {
  const flagsRef = collection(db, 'gymapp')
  const snapshot = await getDocs(flagsRef)

  const flags: FeatureFlag[] = snapshot.docs.map((doc) => ({
    ...(doc.data() as FeatureFlag),
    name: doc.id,
  }))

  const env = process.env.NODE_ENV

  const flag = flags?.find((flag) => flag.name == flagName)
  return flag.type == 'toggle' ? flag.data[env].toggle : flag.data[env]
}
