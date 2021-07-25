import { StarIcon } from '@heroicons/react/solid';
import { useState } from 'react';

export default function CarouselFeedback({img,desc}) {
    const [rating] = useState(Math.floor(Math.random() * (5 - 1 + 1)) + 1)
    
    return (
      <>
        <div className='single__feedback text-center' >
          <div className='single__feedback__wrapper p-4 radius shad bg-white' >
            
            <div className='feedback__student_image' >
              <img src={img} alt='...' />    
            </div>
          
            <h5 className='my-2' >Himel Khan</h5>
          
            <div className="feedback__rating justify-content-center color-rating color-ama mb-2 mx-auto d-flex">
                {Array(rating)
                .fill()
                .map(() => (
                    <StarIcon className="w-15" />
                ))}
            </div>

            <p className='feedback__comment bangla mb-2 text-clamp-6 fs-14' >
               {desc}
            </p>
          </div>
        </div>
      </>
    );
  }
  