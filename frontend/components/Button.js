
export function Button(props) {
  console.log(props.secondary)
  return (
    <>
      {props.primary && (
        <button className='px-4 py-3 rounded text-white bg-purple-dark' onClick={props.onClick}>
          {props.children}
        </button>
      )}
      {props.secondary && (
        <button className='px-4 py-3 rounded text-gray' onClick={props.onClick}>
          {props.children}
        </button>
      )}
    </>
  )
}
