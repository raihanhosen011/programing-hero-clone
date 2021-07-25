import Button from "../components/Button";

export default function HeroCard({img,tittle}) {
  return (
    <div className="hero_single_carosel row">
      
      <div className="col-md-7 text-white d-flex flex-column align-items-baseline justify-content-center">
        <h2>{tittle}</h2>
        <p className="my-5 bangla">
          কোর্সের অংশ হিসেবে হাতে কলমে নতুন এগারোটা প্রজেক্ট (এসাইনমেন্ট) করবে
          তুমি। আমরা তোমার প্রজেক্ট এর ফিডব্যাক দিবো। মার্কস দিবো। যাতে
          প্রফেশনাল ওয়েবসাইট বানিয়েই চাকরির ইন্টারভিউতে যেতে পারো। 💪
        </p>
        <Button text="Enroll Now" icon={true} />
      </div>

      <div className="col-md-5 my-5">
        <div className="carosel__image_wrapper">
          <img
            className="cerousel__image img-fluid"
            src={img}
            alt="..."
          />
        </div>
      </div>

    </div>
  );
}
