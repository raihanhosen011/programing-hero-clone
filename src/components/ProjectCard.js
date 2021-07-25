import Button from "./Button";

export default function ProjectCard({image}) {
  return (
    <div className="card projects__card radius shad" style={{ width: "18rem" }}>
      <img src={image} className="card-img-top" alt="..." />
      <div className="card-body">
        <div className='card__btns my-2' >
          <Button cls='blue__gd' text='React js' />
          <Button cls='yellow__gd' text='Next js' />
          <Button text='Node' />
        </div>
        <h5>Creative agency</h5>
        <p className='card_text fs-15 bangla' >কিভাবে CRUD অপারেশন করে API ইউজ করতে হয়। GET POST রিকুয়েস্ট পাঠাতে হয়। সেগুলা শিখবে। একদম ভ্যানিলা জাভাস্ক্রিপ্ট দিয়ে। </p>
      </div>
    </div>
  );
}
