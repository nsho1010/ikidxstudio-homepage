import Image from "next/image";
import { Metadata } from "next";
import { getNewsDetail } from "@/lib/microcms";
import { formatDate } from "@/lib/utils";
import { getSEOTags } from "@/lib/seo";
import config from "@/config";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import parse, {
  HTMLReactParserOptions,
  Element,
  Text,
} from "html-react-parser";
import hljs from "highlight.js";
import "highlight.js/styles/hybrid.css";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const data = await getNewsDetail(params.slug);
  return getSEOTags({
    title: data.title + " | " + config.appName,
    description: data.description,
    openGraph: {
      title: data.title + " | " + config.appName,
      description: data.description,
    },
  });
}

const NewsDetailPage = async ({ params }: { params: { slug: string } }) => {
  const data = await getNewsDetail(params.slug);
  const options: HTMLReactParserOptions = {
    replace: (domNode) => {
      if (domNode instanceof Element && domNode.name === "img") {
        return (
          <Image
            src={domNode.attribs.src}
            alt={domNode.attribs.alt}
            width={Number(domNode.attribs.width)}
            height={Number(domNode.attribs.height)}
          />
        );
      }
      if (domNode instanceof Element && domNode.name === "pre") {
        if (
          domNode.children[0] instanceof Element &&
          domNode.children[0].name === "code" &&
          domNode.children[0].children[0] instanceof Text
        ) {
          const code = domNode.children[0].children[0].data;
          const highlightCode = hljs.highlightAuto(code);
          return (
            <pre>
              <code className="hljs">{parse(highlightCode.value)}</code>
            </pre>
          );
        }
      }
    },
  };
  const content = parse(data.content, options);

  return (
    <main className="max-w-prose mx-auto space-y-8 gap-16 lg:gap-24 py-16 lg:pt-24 px-8">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">トップ</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/news">お知らせ</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{data.title}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      {/* TODO: gray scaleをcolor paletteに合わせる */}
      <article className="prose prose-slate mx-auto dark:prose-invert">
        <div className="space-y-4">
          <p className="text-muted-foreground">
            {formatDate(data.publishedAt || data.createdAt)}
          </p>
          <h1 className="text-4xl font-bold tracking-tight">{data.title}</h1>
          <h2 className="text-2xl font-semibold tracking-tight">
            {data.description}
          </h2>
          <hr className="my-16 border-t " />
          {data.thumbnail && (
            <Image
              src={data.thumbnail?.url}
              alt="New product launch"
              className="rounded-lg object-cover object-center"
              height="400"
              style={{
                aspectRatio: "800/400",
                objectFit: "cover",
              }}
              width="800"
            />
          )}
          {content}
        </div>
      </article>
    </main>
  );
};

export default NewsDetailPage;
