"use client";
import { atom, useAtom } from "jotai"

import { Analytics, posts } from "@/data/analytics/data"

type Config = {
  selected: Analytics["id"] | null
}

const configAtom = atom<Config>({
  // selected: posts[0].id,
  selected: null,
})

export function useAnalytics() {
  return useAtom(configAtom)
}