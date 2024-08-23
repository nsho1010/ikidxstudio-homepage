import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const serviceData = [
  {
    name: "イキプログラミング塾",
    description:
      "初心者から上級者まで対応するプログラミング教育プログラム。地域の個人を対象に、実践的なITスキルを身につける機会を提供します。",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    url: "https://iki-programming-juku.notion.site/613d13e8d5a94e59a498aaedf5e44692?pvs=4",
  },
  {
    name: "企業団体・教育機関向けIT研修",
    description:
      "地域の企業や団体・教育機関向けにカスタマイズされたIT研修プログラム。社員のITリテラシーを向上させ、デジタル化による業務効率の向上を支援します。",
    image:
      "https://images.unsplash.com/photo-1614064548237-096f735f344f?q=80&w=1080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    url: "#",
  },
  // {
  //   name: "地域コミュニティIT導入支援",
  //   description:
  //     "地域のコミュニティに向けたIT導入支援サービス。地元の生活をより便利で豊かにするためのITソリューションを提供し、地域全体の発展をサポートします。",
  //   image:
  //     "https://images.unsplash.com/photo-1506485338023-6ce5f36692df?q=80&w=1080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   url: "#",
  // },
  {
    name: "Coming Soon...",
    description:
      "Coming Soon（現在プロダクトの準備中です。）リリースをお待ちください。",
    image: "/comingsoon.jpg",
    url: "",
  },
];

const Service = () => {
  return (
    <section id="service">
      <div className="flex flex-col items-center justify-center text-center mx-auto gap-4 lg:gap-8 p-8">
        <div className="space-y-4 mx-auto">
          <h2 className="text-3xl font-bold tracking-tighter  decoration-1 underline-offset-8 border-b-2 border-cyan-600">
            Service
          </h2>
          <p className="mx-auto max-w-[700px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-muted-foreground">
            サービス紹介
          </p>
        </div>
        <div className="mx-auto grid items-start gap-6 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
          {serviceData.map((service) => (
            <Card
              key={service.name}
              className="transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:shadow-lg border-cyan-600"
            >
              <Link href={service.url} target="_brank">
                <CardHeader className="flex justify-center items-center">
                  <Image
                    alt="Product Image"
                    className="aspect-video rounded-t-lg object-cover"
                    height="240"
                    src={service.image}
                    width="360"
                  />
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <CardTitle>{service.name}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </div>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
