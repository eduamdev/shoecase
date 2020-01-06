import React from 'react';
import FooterArticle from './footerArticle';
import AnchorLink from './common/anchorLink';
import { footer as data } from '../config.json';

const Footer = () => {
  return (
    <footer className='bg-black border-t border-gray-300'>
      <section className='flex flex-wrap md:justify-between lg:text-lg pt-6 lg: p-0'>
        {data &&
          data.articles &&
          data.articles.map(article => (
            <FooterArticle key={article.title} article={article} />
          ))}
      </section>

      <section className='bg-black px-6 py-10 lg:pt-0 lg:pb-16'>
        <p className='text-gray-200 text-sm tracking-widest font-thin text-center leading-loose'>
          Design & built by Eduardo Rodriguez
          {data &&
            data.links &&
            data.links.map(link => (
              <span key={link.name}>
                , <AnchorLink url={link.url}>{link.name}</AnchorLink>
              </span>
            ))}
        </p>
      </section>
    </footer>
  );
};

export default Footer;
