import { createClient } from 'microcms-js-sdk';
import type {
  MicroCMSQueries,
  MicroCMSImage,
  MicroCMSDate,
  MicroCMSContentId,
} from 'microcms-js-sdk';
import { notFound } from 'next/navigation';

// ニュースの型定義
export type News = {
  title: string;
  description: string;
  content: string;
  thumbnail?: MicroCMSImage;
} & MicroCMSDate & MicroCMSContentId;

export type Contact = {
  name: string;
  email: string;
  message: string;
};

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error('MICROCMS_SERVICE_DOMAIN is required');
}

if (!process.env.MICROCMS_API_KEY) {
  throw new Error('MICROCMS_API_KEY is required');
}

// Initialize Client SDK.
export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});

// ニュース一覧を取得
export const getNewsList = async (queries?: MicroCMSQueries) => {
  const listData = await client
    .getList<News>({
    customRequestInit: {
      next: {
        tags: ['news'],
      },
    },
    endpoint: 'news',
    queries,
  })
    .catch(notFound);
  return listData;
};

// ニュースの詳細を取得
export const getNewsDetail = async (contentId: string, queries?: MicroCMSQueries) => {
  const detailData = await client
    .getListDetail<News>({
    customRequestInit: {
      next: {
        tags: ['news'],
      },
    },
    endpoint: 'news',
    contentId,
    queries,
  })
    .catch(notFound);

  return detailData;
};

// お問い合わせを送信
export const createContact = async (data: Contact) => {
  const response = await client.create<Contact>({
    endpoint: 'contact',
    content: data,
  });
  return response;
};

