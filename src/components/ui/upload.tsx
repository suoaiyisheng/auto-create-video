"use client"

import { useState } from "react"
import Image from "next/image"

interface UploadProps {
  accept?: string
  onChange?: (file: File) => void
}

export function Upload({ accept = "image/*,video/*", onChange }: UploadProps) {
  const [preview, setPreview] = useState<string>("")

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    // 创建预览URL
    const url = URL.createObjectURL(file)
    setPreview(url)

    // 触发onChange回调
    onChange?.(file)
  }

  return (
    <div className="flex flex-col gap-2">
      <input
        type="file"
        accept={accept}
        onChange={handleFileChange}
        className="text-sm text-gray-500
        file:mr-4 file:py-2 file:px-4
        file:rounded-full file:border-0
        file:text-sm file:font-semibold
        file:bg-violet-50 file:text-violet-700
        hover:file:bg-violet-100"
      />
      {preview && (
        <div className="mt-2">
          {preview.startsWith("data:video") ? (
            <video src={preview} controls className="max-w-[200px]" />
          ) : (
            <Image 
              src={preview} 
              alt="Preview" 
              width={200}
              height={200}
              className="max-w-[200px] object-contain"
            />
          )}
        </div>
      )}
    </div>
  )
} 