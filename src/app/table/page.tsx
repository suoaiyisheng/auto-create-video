"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Upload } from "@/components/ui/upload"

interface TableItem {
  id: number
  script: string
  media: string
}

export default function TablePage() {
  const [items, setItems] = useState<TableItem[]>([
    { id: 1, script: "示例脚本1", media: "example1.jpg" },
    { id: 2, script: "示例脚本2", media: "example2.jpg" },
  ])
  const [editingId, setEditingId] = useState<number | null>(null)

  const handleEdit = (id: number) => {
    setEditingId(id)
  }

  const handleSave = (id: number) => {
    setEditingId(null)
  }

  return (
    <div className="container mx-auto py-10">
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">序号</TableHead>
              <TableHead>口播脚本</TableHead>
              <TableHead>配图/视频</TableHead>
              <TableHead className="w-[100px]">操作</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {items.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.id}</TableCell>
                <TableCell>
                  {editingId === item.id ? (
                    <Textarea
                      defaultValue={item.script}
                      className="min-h-[100px]"
                    />
                  ) : (
                    item.script
                  )}
                </TableCell>
                <TableCell>
                  {editingId === item.id ? (
                    <Upload
                      onChange={(file) => {
                        console.log("Selected file:", file)
                      }}
                    />
                  ) : (
                    item.media
                  )}
                </TableCell>
                <TableCell>
                  {editingId === item.id ? (
                    <Button onClick={() => handleSave(item.id)}>保存</Button>
                  ) : (
                    <Button onClick={() => handleEdit(item.id)}>编辑</Button>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
} 