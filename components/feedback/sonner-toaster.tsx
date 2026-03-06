"use client"

import { Toaster } from "sonner"

export function SonnerToaster() {
  return (
    <Toaster
      theme="system"
      position="top-center"
      richColors
      closeButton
    />
  )
}
