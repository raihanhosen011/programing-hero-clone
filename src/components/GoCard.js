export default function GoCard({num}) {
    return (
        <div className='gocard bangla col-lg-6 mb-4' >
          <div className='gocard__body bg-white radius shadow' >
            <div className='p-3 row' >
                <div className='gocard__numb fw-bold text-center col-lg-2' >
                  <h1>{num}</h1> 
                </div>
                <div className='col-lg-10' >
                  <p>প্রতিদিন রাত <strong>১</strong><strong>০</strong>.<strong>০</strong><strong>০</strong> এর সময় (বাংলাদেশ সময়) একটা মডিউল রিলিজ দেয়া হবে। তোমার কাজ হবে <strong>২</strong><strong>৪</strong> ঘন্টার মধ্যে সব ভিডিও দেখে শেষ করে ফেলা। মোটামুটি <strong>১</strong>.<strong>৫</strong> থেকে <strong>২</strong> ঘন্টার মতো ভিডিও থাকবে। </p>
                </div>
            </div>              
          </div>
        </div>
    )
}
