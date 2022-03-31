import Image from 'next/image'
import { useState } from 'react';
import { IntroductionPageContext } from '../contexts/Introduction';

import { Page } from './Page';

export function Introduction(props) {
  const [pageIndex, setPageIndex] = useState(0);
  return (
    <>
    {pageIndex == 0 && (
      <div onClick={() => setPageIndex(1)} className='flex justify-center h-screen bg-black text-white'>
        <div className='flex flex-col justify-center gap-2'>
          <Image src="/invictos.svg" alt="Vercel Logo" width={100} height={100} />
          <p className='text-white text-center text-3xl'>Invictos</p>
        </div>
      </div>
    )}

    {pageIndex == 1 && (
      <Page
        title='Centralize seus problemas'
        description='Passe suas anotações em blocos de notas, cadernos e listas para aqui.'
        pageIndex={pageIndex}
        setPageIndex={setPageIndex}
        >
        <Image 
          src='/homem_digitando.svg' 
          alt='Um homem digitando em seu computador'
          width={500} height={250} 
        />
      </Page>
    )}

    {pageIndex == 2 && (
      <Page
        title='Sincronize sua agenda'
        description='A agenda precisa trabalhar junto com as suas demais ferramentas de organização.'
        pageIndex={pageIndex}
        setPageIndex={setPageIndex}
        >
        <Image 
          src='/calendario.svg' 
          alt='Um calendario roxo.'
          width={500} height={250} 
        />
      </Page>
    )}

    {pageIndex == 3 && (
      <Page
        title='Crie, edite e complete tarefas'
        description='A qualquer momento você pode criar, editar e marcar como completo qualquer tipo de tarefa.'
        pageIndex={pageIndex}
        setPageIndex={setPageIndex}
        loginButton
        >
        <Image 
          src='/mulher_pagina.svg' 
          alt='Mulher navegando pela Web.'
          width={500} height={250} 
        />
      </Page>
    )}

    {pageIndex == 4 && (
      <div className=''>Tela de Login</div>
    )}
    </>
  )
}