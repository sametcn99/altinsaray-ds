import Image from "next/image";

export default function LetterCard() {
  return (
    <div className="">
      <div className="relative h-60 w-60">
        <Image
          className=" z-0"
          src="/images/letter-top.png"
          alt="Letter Icon"
          width={300}
          height={300}
        />
        <Image
          className="absolute z-10"
          src="/images/letter-bottom.png"
          alt="Letter Icon"
          width={300}
          height={300}
        />
        <Image
          className="absolute left-0 top-16 px-2"
          src="/images/letter-page.png"
          alt="Letter Icon"
          width={300}
          height={300}
        />
      </div>
    </div>
  );
}
