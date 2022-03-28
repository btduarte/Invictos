import { Button } from "./Button"

export function Page(props) {
  return (
    <div className='flex flex-col justify-between h-screen bg-black p-10'>
      <div name='top'>
        <Button secondary onClick={() => props.setPageIndex(4) }>PULAR</Button>
      </div>
      <div name='mid'>
        <div className='flex flex-col gap-6'>
          <div className='flex justify-center'>
            {props.children}
          </div>
          <div className=''>
          </div>
          <div className=''>
            <h1 className='text-white text-center text-3xl font-semibold mb-2'>
              {props.title}
            </h1>
            <p className='text-white text-center'>
              {props.description}
            </p>
          </div>
        </div>
      </div>
      <div name='bot' className='flex justify-between'>
        <Button secondary onClick={() => props.setPageIndex(parseInt(props.pageIndex)-1)}>VOLTAR</Button>
        <Button primary onClick={() => props.setPageIndex(parseInt(props.pageIndex)+1)}>PRÓXIMO</Button>
      </div>
    </div>
  )
}
