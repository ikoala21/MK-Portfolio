import Image from 'next/image';
import { getBlogViews, getStarCount } from 'lib/metrics';
import {
  ArrowIcon,
  GitHubIcon,
  TwitterIcon,
  ViewsIcon,
} from 'components/icons';
import { name, about, bio, avatar } from 'lib/info';

export const revalidate = 60;

export const metadata = {
  description: 'Developer, writer, and creator.',
  openGraph: {
    title: 'Manasa',
    description: 'Developer, writer, and creator.',
    url: 'https://mksighs.dev',
    siteName: 'Manasa',
    images: [
      {
        url: 'https://mksighs.dev/og.jpg',
        width: 1920,
        height: 1080,
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
};

export default async function HomePage() {


  return (
    <section className="">
      <h1 className="font-bold text-3xl font-serif">{name}</h1>
      <p className="my-5 max-w-[460px] text-neutral-800 dark:text-neutral-200">
        {about()}
      </p>
      <div className="flex items-start md:items-center my-8 flex-col md:flex-row">
        <Image
          alt={name}
          className="rounded-full grayscale"
          src={avatar}
          placeholder="blur"
          width={100}
          priority
        />
        <div className="mt-8 md:mt-0 ml-0 md:ml-6 space-y-2 text-neutral-500 dark:text-neutral-400">

          <a
            className="flex items-center hover:text-neutral-700 dark:hover:text-neutral-200 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="https://twitter.com/mksighs"
          >
            <ArrowIcon />
            <p className="h-7">&nbsp;&nbsp;follow me on twitter</p>
          </a>
        </div>
      </div>
      <p className="my-5 max-w-[600px] text-neutral-800 dark:text-neutral-200">
        {bio()}
      </p>
      
    </section>
  );
}
