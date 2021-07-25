import { ArrowRightIcon } from '@heroicons/react/solid'

export default function Button({icon,text,cls}) {
  return (
    <>
      <div className={`button position-relative ${cls}`} >
        <span className={icon && 'me-5 text-white'} >{text}</span>
        {icon && <div className='button_icon position-absolute' >
            <ArrowRightIcon className='w-26' />
        </div>}
      </div>
    </>
  );
}
