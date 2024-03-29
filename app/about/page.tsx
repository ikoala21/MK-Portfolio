import {
  GitHubIcon,
  YoutubeIcon,
  ArrowIcon,
  TwitterIcon,
} from 'components/icons';

export default function AboutPage() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif">About Me</h1>
      
      <div className="prose prose-neutral dark:prose-invert text-neutral-800 dark:text-neutral-200">
        <p>
        Hi visitor, My name is Manasa and I'm a software developer. 
        I'm from Hyderabad, India.
        </p>
        <hr />
        <p>
         On this page you can find some information about me and persuits I follow.
         Most of them are about topics that I'm most interested in, such as backend architecture, 
         microservices, CI/CD, or about programming languages like Python or Go. 
        </p>
        <p>
         I'm passionate about many creative persuits, which includes music, art,
         books, cooking, cats and of course, coding. These combination of interests is what
         makes me feel alive and pushes me to think differently. 
        </p>
        
        <div className="flex flex-col gap-2 md:flex-row md:gap-2">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://twitter.com/mksighs"
            className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
          >
            <div className="flex items-center">
              <TwitterIcon />
              <div className="ml-3">Twitter</div>
            </div>
            <ArrowIcon />
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/ikoala21"
            className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
          >
            <div className="flex items-center">
              <GitHubIcon />
              <div className="ml-3">GitHub</div>
            </div>
            <ArrowIcon />
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.youtube.com/@manasa11"
            className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
          >
            <div className="flex items-center">
              <YoutubeIcon />
              <div className="ml-3">YouTube</div>
            </div>
            <ArrowIcon />
          </a>
        </div>
      </div>
    </section>
  );
}
