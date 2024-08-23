import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import "highlight.js/styles/hybrid.css";
import { getSEOTags } from "@/lib/seo";
import config from "@/config";

export const metadata = getSEOTags({
  title: "利用規約 | " + config.appName,
  description: config.appDescription,
  openGraph: {
    title: "利用規約 | " + config.appName,
    description: config.appDescription,
  },
});

const TermsOfServicePage = () => {
  return (
    <main className="max-w-prose mx-auto space-y-8 gap-16 lg:gap-24 pt-16 lg:pt-24">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">トップ</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>利用規約</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <article className="prose prose-slate mx-auto dark:prose-invert">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold mb-4">利用規約</h1>
          <p className="mb-4">
            IKI DX
            STUDIO（以下、「当社」といいます。）は、本ウェブサイトの情報やコンテンツの正確性、完全性、有用性、最新性、適法性を保証するものではありません。また、本ウェブサイトの利用によって生じたいかなる損害についても、当社は一切の責任を負いません。
          </p>
          <p className="mb-4">
            本ウェブサイトに掲載された情報やコンテンツは、予告なしに変更または削除することがあります。また、本ウェブサイトへのアクセスや利用が中断または停止することがあります。
          </p>
          <p className="mb-4">
            本ウェブサイトに掲載された情報やコンテンツを利用したことによって生じたいかなる損害についても、当社は一切の責任を負いません。
          </p>
          <h2 className="text-2xl font-bold mb-2">著作権について</h2>
          <p className="mb-4">
            本ウェブサイトに掲載されているすべてのコンテンツ（文章、画像、動画、デザイン等）の著作権は、当社または原著作者に帰属します。無断での複製、転載、改変、販売等は禁止します。
          </p>
          <p className="text-right">以上</p>
        </div>
      </article>
    </main>
  );
};

export default TermsOfServicePage;
