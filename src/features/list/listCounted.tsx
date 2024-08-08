'use client'
import { get, set } from 'idb-keyval';
import { useEffect, useState } from "react"
import { CountedType } from '../types/countedType';
import apiClient from '@/config/axios';
import { Button } from '@/components/ui/button';

export default function ListCounted() {

  const [listCounted, setListCounted] = useState<CountedType[]>([])

  const loadListCounted = async () => {
    const response = await get('listCounted')
    if(response) {
      setListCounted(response)
    }
  }

  async function addCounted() {
    await apiClient.post('/cadastrarcontagem', listCounted)
  }

  useEffect(() => {
    loadListCounted()
  },[])

  return (
    <div>
      <Button onClick={addCounted}>Sincronizar</Button>
      {listCounted?.map((counted, index) => (
        <div key={index} className="p-2">
          <div>Data: {counted.data}</div>
          <div>Endereço: {counted.endereco}</div>
          <div>Unidade: {counted.unidade}</div>
          <div>Peso: {counted.peso}</div>
          <div>Caixa: {counted.caixa}</div>
          <div>Lote: {counted.lote}</div>
          <div>Sku: {counted.sku}</div>
          </div>
          )
          )
          }
        
    </div>
  )
}