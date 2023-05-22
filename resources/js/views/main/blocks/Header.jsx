import { Image } from "antd";
import nadya_photo from "../../../../images/nadya_photo.jpg";
import banner from "../../../../images/banner.jpg";

export default function Header() {
  return (
    <>
      <img className="h-96 w-full" src={banner} alt="" />
      <div className="mt-40">
        <div className="lg:flex gap-y-10 justify-around items-center">
          <Image
            width={400}
            src={nadya_photo}
            alt="NADYA_PHOTO"
            preview={true}
          />
          <div className="rounded-lg bg-gray-700 mx-auto max-w-md text-yellow-300 p-5 text-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem ut facilis quam qui perferendis maiores quaerat nihil
            deleniti? Amet, corporis voluptatem distinctio eos earum reiciendis
            fugit repellat alias facere obcaecati? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Vitae nemo possimus architecto,
            quibusdam totam perferendis consequatur, tenetur dolorum optio eum
            tempore? Sunt assumenda veritatis quod consequatur ipsum, dolorem
            impedit error.
          </div>
        </div>
      </div>
    </>
  );
}
