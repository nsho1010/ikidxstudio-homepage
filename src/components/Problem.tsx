"use client";
import Image from "next/image";
import { AlertTriangle, Users, DollarSign, Shield } from "lucide-react";
import { motion } from "framer-motion";

const problemData = [
  {
    icon: <Users className="h-8 w-8" />, // 人口減少と高齢化を象徴するアイコン
    title: "人口減少と高齢化",
    description:
      "若年層の流出と高齢化が進む中、高齢者に対するIT教育やサポート。現役世代への実践的なIT教育ができておらず、人材が確保できない状況。",
  },
  {
    icon: <DollarSign className="h-8 w-8" />, // コストの問題を象徴するアイコン
    title: "コストの問題",
    description:
      "外部委託に頼ることによるコストの増加、これが島内企業がIT活用できない障壁となっている。",
  },
  {
    icon: <Shield className="h-8 w-8" />, // 技術サポートの不足を象徴するアイコン
    title: "技術サポートの不足",
    description:
      "離島では、IT関連の技術サポートが少なく、問題が発生した際に迅速に対応できる人材や企業が限られている。",
  },
  {
    icon: <AlertTriangle className="h-8 w-8" />, // 地域コミュニティの抵抗感を象徴するアイコン
    title: "地域コミュニティの抵抗感",
    description:
      "伝統的な生活様式やコミュニティの中で、IT導入に対する抵抗感がある場合があり、新しい技術の導入が難しい。",
  },
];

const Problem = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.3 }}
      className="lg:px-20"
    >
      <div className="grid items-center justify-center text-center gap-8 p-8">
        <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
          離島で<span className="text-primary">IKI DX STUDIO</span>
          がサポートします
        </h2>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          離島でのIT普及には多くの課題があります。IKI DX
          LABは、プログラミング塾や企業団体向けIT研修を通じて、これらの課題を解決し、DX人材を養成し、壱岐島のICT化を推進します。
        </p>
        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-10">
          <Image
            src="/problem.jpg"
            width="400"
            height="880"
            alt="ICT and DX"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
          />
          <div className="space-y-4">
            <div className="grid gap-6">
              {problemData.map((problem, index) => (
                <div key={index} className="grid gap-2">
                  <div className="flex items-center gap-2">
                    {problem.icon}
                    <h3 className="text-xl font-bold">{problem.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-left">
                    {problem.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Problem;
