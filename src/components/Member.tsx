import Image from "next/image";

const members = [
  {
    name: "永村奨平",
    // role: "代表",
    description:
      "島外のベンチャー・スタートアップ企業でWebエンジニアとして従事しながら、壱岐島内のICT推進活動をおこなっています。",
    image: "/myprofile.jpg",
  },
];

const Member = () => {
  return (
    <section>
      <div className="flex flex-col items-center justify-center gap-16 p-8">
        <div className="space-y-3 text-center">
          <h2 className="inline-block text-3xl font-bold tracking-tighter  decoration-1 underline-offset-8 border-b-2 border-cyan-600">
            Member
          </h2>
          <p className="mx-auto max-w-[700px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-muted-foreground">
            メンバー
          </p>

          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            私たちはテクノロジーを中心としたスキルを持つメンバーです。それぞれのできると、得意なことを活かしながら適したサービスを提供します。
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 ">
          {members.map((member) => (
            <div
              key={member.name}
              className="flex flex-col items-center justify-center space-y-4 max-w-sm"
            >
              <Image
                alt={member.name}
                className="aspect-square w-32 rounded-full object-cover"
                src={member.image}
                width={100}
                height={100}
              />
              <div className="text-center">
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-muted-foreground pt-4">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Member;
