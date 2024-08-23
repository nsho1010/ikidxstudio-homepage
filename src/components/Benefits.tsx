"use client";
import Image from "next/image";
import config from "@/config";
import { motion } from "framer-motion";

const benefitsData = [
  {
    image: "/educator.svg",
    title: "企業団体向けのIT研修支援",
    description:
      "地域の企業や団体に向けて、ITスキルの向上を目指した研修プログラムを提供します。これにより、社員のITリテラシーを高め、業務効率の向上とデジタル化による競争力の強化を実現します。",
  },
  {
    image: "/programming.svg",
    title: "個人向けのITスキル習得",
    description:
      "地域の個人を対象に、ITスキルの習得をサポートします。初心者から上級者まで、個々のニーズに合わせたプログラムを提供し、キャリアアップや新たなビジネス機会の創出を支援します。",
  },
  {
    image: "/teaching.svg",
    title: "地域コミュニティへのIT導入",
    description:
      "地域コミュニティのIT導入を推進し、地元の生活をより便利で豊かにします。デジタル技術を活用して、コミュニティ内の連携や情報共有を強化し、地域全体の発展を支援します。",
  },
];

const Benefits = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.3 }}
      className="lg:px-20"
    >
      <div className="flex flex-col items-center justify-center space-y-8 text-center p-8">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
            離島での<span className="text-primary">DX推進</span>を支援します
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            {config.appName}が、離島のIT導入を全面的にサポートします。
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {benefitsData.map((benefit, index) => (
            <div key={index} className="flex flex-col items-center space-y-4">
              <Image
                alt={benefit.title}
                width={360}
                height={240}
                src={benefit.image}
                style={{
                  objectFit: "cover",
                }}
              />
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Benefits;
