export default function WhyCard({image}) {
  return (
    <>
      <div className={`whycard col-md-6 col-lg-3 mb-md-4`} >
        
        <div className={`whycard__body p-2 ps-3 bg-white shad radius`} >
          <div><img className='w-60 mb-3' src={image} alt='...' /></div>
          <div className='whycard__content bangla text-sm-left mt-lg-0' >
             <h5 className='fs-17 mb-2 fw-550' >এইটা কমপ্লিট ওয়েব ডেভেলপমেন্ট এর কোর্স:</h5>
             <p className='mb-2 fs-14' >শূন্য থেকে একজন জুনিয়র ওয়েব ডেভেলপার হিসেবে চাকরি পাওয়ার জন্য যা যা লাগে তার সবকিছুই ধরে ধরে শিখানো</p>
             <span className='pink pointer fs-15 fw-bold' >আরও দেখুন</span>
          </div>
        </div>

      </div>
    </>
  );
}
