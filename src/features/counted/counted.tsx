'use client'
import { useState } from "react"
import { update, get } from 'idb-keyval';
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"


export default function Counted() {

  const [counted, setListCounted] = useState({
    data: '',
    endereco: '',
    unidade: '' ,
    peso: '',
    caixa: '',
    lote: '',
    sku: ''
  })

  async function addCounted() {
    const response = await get('listCounted')
    if(response) {
      await update('listCounted', (listCounted: any) =>  [...response, counted])
      return
    }
    await update('listCounted', (listCounted: any) =>  [counted])
  }

  return (
    <div className="p-2">
      <Label>Data</Label>
      <Input value={counted.data} onChange={(e) => setListCounted({...counted, data: e.target.value})} />
      <Label>Endereço</Label>
      <Input value={counted.endereco} onChange={(e) => setListCounted({...counted, endereco: e.target.value})} />
      <Label>Unidade</Label>
      <Input type="number" value={counted.unidade} onChange={(e) => setListCounted({...counted, unidade: e.target.value})} />
      <Label>Peso</Label>
      <Input type="number" value={counted.peso} onChange={(e) => setListCounted({...counted, peso: e.target.value})} />
      <Label>Caixa</Label>
      <Input type="number" value={counted.caixa} onChange={(e) => setListCounted({...counted, caixa: e.target.value})} />
      <Label>Lote</Label>
      <Input type="number" value={counted.lote} onChange={(e) => setListCounted({...counted, lote: e.target.value})} />
      <Label>Sku</Label>
      <Input type="number" value={counted.sku} onChange={(e) => setListCounted({...counted, sku: e.target.value})} />
      <Button onClick={addCounted} className="w-full p-4 mt-8">
        Add
      </Button>
    </div>
  )
}