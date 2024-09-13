import Link from "next/link";
import { getNewsList } from "@/lib/microcms";
import { formatDate } from "@/lib/utils";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";

const News = async () => {
  const data = await getNewsList({
    limit: 3,
  });

  return (
    <section id="news">
      <div className="flex flex-col items-center justify-center gap-4 lg:gap-8 p-8 w-full">
        {" "}
        {/* 親コンテナに w-full を追加 */}
        <Link href="/news">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-3xl font-bold tracking-tighter decoration-1 underline-offset-8 border-b-2 border-cyan-600">
              News
            </h2>
            <ChevronRight className="w-6 h-6" />
          </div>
        </Link>
        <p className="mx-auto max-w-[700px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-muted-foreground">
          お知らせ
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 w-full">
          {" "}
          {/* grid にも w-full を追加 */}
          {data.contents.length > 0 ? (
            data.contents.map((news, id) => (
              <Card key={id}>
                <Link href={`/news/${news.id}`}>
                  <CardHeader>
                    <time
                      className="text-sm text-muted-foreground"
                      dateTime={news.publishedAt}
                    >
                      {formatDate(news.publishedAt ?? news.createdAt)}
                    </time>
                  </CardHeader>
                  <CardContent>
                    <h3 className="mb-2 text-xl font-semibold leading-snug group-hover:underline">
                      {news.title}
                    </h3>
                    <p className="text-muted-foreground">{news.description}</p>
                  </CardContent>
                </Link>
              </Card>
            ))
          ) : (
            <div className="sm:col-span-2 lg:col-span-3 flex justify-center items-center w-full lg:px-52">
              <div className="bg-cyan-600 h-48 flex justify-center items-center w-full p-4 ">
                <p className="text-4xl font-semibold text-center text-white">
                  Coming soon...
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default News;
