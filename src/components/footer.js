import React from 'react';
import Icon from './common/icon';
import { footer } from '../config.json';

const Footer = () => {
  return (
    <footer className='bg-black border-t border-gray-300'>
      <section className='flex flex-wrap md:justify-between lg:text-lg py-6'>
        {footer &&
          footer.articles.map(article => {
            let footerArticle = null;

            if (article.input)
              footerArticle = (
                <article
                  key={article.title}
                  className='w-full md:w-1/4 xl:w-2/6 px-4 md:px-6 lg:px-12 py-6 md:py-16 lg:py-24'
                >
                  <h3 className='capitalize font-medium mb-4 md:mb-6 text-gray-300'>
                    {article.title}
                  </h3>
                  <input
                    className='w-full px-4 py-3 md:px-6 md:py-4 bg-gray-900 text-gray-400 border-none outline-none text-sm tracking-widest rounded-sm'
                    placeholder={article.input.placeholder}
                    type='text'
                  />
                </article>
              );
            else if (article.sections)
              footerArticle = (
                <article
                  key={article.title}
                  className='inline-block align-top w-1/2 md:w-1/4 xl:w-1/6 px-4 md:px-6 lg:px-12 py-6 md:py-16 lg:py-24'
                >
                  <h3 className='capitalize font-medium font-sm mb-4 md:mb-6 text-gray-300'>
                    {article.title}
                  </h3>
                  {article.sections &&
                    article.sections.map(sub => (
                      <span
                        key={sub}
                        className='block text-xs lg:text-sm tracking-wider font-light leading-loose lg:leading-relaxed text-gray-400 capitalize mb-2 lg:mb-4'
                      >
                        {sub}
                      </span>
                    ))}
                </article>
              );
            else if (article.icons)
              footerArticle = (
                <article
                  key={article.title}
                  className='w-full md:w-1/4 xl:w-1/6 px-4 md:px-6 lg:px-12 py-6 md:py-16 lg:py-24'
                >
                  <h3 className='capitalize font-medium font-sm mb-4 md:mb-6 text-gray-300'>
                    {article.title}
                  </h3>
                  <div className='flex mb-4 text-gray-400 fill-current'>
                    {article.icons &&
                      article.icons.map(icon => (
                        <Icon
                          key={icon.type}
                          type={icon.type}
                          classes={icon.classes}
                        ></Icon>
                      ))}
                  </div>
                </article>
              );

            return footerArticle;
          })}
      </section>

      <section className='bg-black px-6 py-10'>
        <p className='text-gray-200 text-sm tracking-wider font-thin text-center leading-loose'>
          Design & built by Eduardo Rodriguez
          {footer &&
            footer.links.map(link => (
              <span key={link.name}>
                ,{' '}
                <a
                  href={link.url}
                  rel='noreferrer noopener nofollow'
                  aria-label={`${link.name} account`}
                  className=' font-normal tracking-wider underline hover:no-underline'
                >
                  {link.name}
                </a>
              </span>
            ))}
        </p>
      </section>
    </footer>
  );
};

export default Footer;
