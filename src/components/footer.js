import React from 'react';
import Icon from './common/icon';
import Input from './common/input';
import { footer } from '../config.json';

const renderTitle = title => (
  <h3 className='capitalize font-medium font-sm mb-4 md:mb-6 text-gray-300'>
    {title}
  </h3>
);

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
                  className='w-full md:w-1/4 xl:w-2/6 px-4 md:px-6 lg:px-12 py-6 md:py-16 '
                >
                  {renderTitle(article.title)}
                  <Input
                    name={article.name}
                    placeholder={article.input.placeholder}
                    dark
                  ></Input>
                </article>
              );
            else if (article.sections)
              footerArticle = (
                <article
                  key={article.title}
                  className='inline-block align-top w-1/2 md:w-1/4 xl:w-1/6 px-4 md:px-6 lg:px-12 py-6 md:py-16 '
                >
                  {renderTitle(article.title)}
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
                  className='w-full md:w-1/4 xl:w-1/6 px-4 md:px-6 lg:px-12 py-6 md:py-16 '
                >
                  {renderTitle(article.title)}
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
