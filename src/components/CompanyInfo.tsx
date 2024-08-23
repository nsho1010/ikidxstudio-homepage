// import Image from "next/image";
const companyInfoData = {
  name: "IKI DX STUDIO",
  location: "長崎県壱岐市(バーチャルオフィスとなります。)",
  established: "2024年8月",
  president: "永村 奨平",
  business: "Webアプリ開発・DX人材教育・IT研修",
};

const CompanyInfo = () => {
  return (
    <section
      id="company-info"
      className="flex flex-col items-center justify-center space-y-8 p-8"
    >
      <h2 className="text-3xl font-bold tracking-tighter  decoration-1 underline-offset-8 border-b-2 border-cyan-600">
        運営情報
      </h2>
      <div className="flex flex-col-reverse md:flex-row gap-16">
        <div className="hidden md:flex md:w-1/2 justify-center items-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6635.037567898468!2d129.67908911499234!3d33.74725761365943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x356a152dd77d1c2b%3A0xf76c730b62764b90!2z44CSODExLTUxMzUg6ZW35bSO55yM5aOx5bKQ5biC6YO344OO5rWm55S66YO344OO5rWm!5e0!3m2!1sja!2sjp!4v1723188274913!5m2!1sja!2sjp"
            width="600"
            height="450"
            loading="lazy"
          ></iframe>
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">{companyInfoData.name}</h2>
          <dl className="space-y-6">
            <div className="border-b-1">
              <dt className="font-medium">所在地</dt>
              <dd className="mb-4">{companyInfoData.location}</dd>
            </div>
            <div className="border-b-1">
              <dt className="font-medium">設立</dt>
              <dd className="mb-4">{companyInfoData.established}</dd>
            </div>
            <div className="border-b-1">
              <dt className="font-medium">代表者</dt>
              <dd className="mb-4">{companyInfoData.president}</dd>
            </div>
            <div className="border-b-1">
              <dt className="font-medium">活動内容</dt>
              <dd className="mb-4">{companyInfoData.business}</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
};

export default CompanyInfo;
