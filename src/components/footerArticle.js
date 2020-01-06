import React from 'react';
import NewsletterInput from './newsletterInput';
import Icon from './common/icon';

const articles = {
  input: article => <ArticleInput {...article}></ArticleInput>,
  categories: article => <ArticleCategories {...article}></ArticleCategories>,
  icons: article => <ArticleIcons {...article}></ArticleIcons>,
  default: () => null
};

const ArticleTitle = ({ children }) => (
  <h3 className='capitalize font-medium mb-4 md:mb-6 text-gray-300 tracking-wide'>
    {children}
  </h3>
);

const ArticleInput = ({ title, name, input }) => (
  <article className='w-full md:w-1/4 xl:w-2/6 px-4 md:px-6 lg:px-12 py-3 md:py-12 lg:py-16 '>
    <ArticleTitle>{title}</ArticleTitle>
    <NewsletterInput
      name={name}
      placeholder={input.placeholder}
    ></NewsletterInput>
  </article>
);

const ArticleCategories = ({ title, categories }) => (
  <article className='inline-block align-top w-1/2 md:w-1/4 xl:w-1/6 px-4 md:px-6 lg:px-12 py-3 md:py-12 lg:py-16 '>
    <ArticleTitle>{title}</ArticleTitle>
    {categories &&
      categories.map(c => (
        <span
          key={c}
          className='block text-xs lg:text-sm tracking-wider lg:tracking-widest font-light leading-loose lg:leading-relaxed text-gray-400 capitalize mb-2 lg:mb-4'
        >
          {c}
        </span>
      ))}
  </article>
);

const ArticleIcons = ({ title, icons }) => (
  <article className='w-full md:w-1/4 xl:w-1/6 px-4 md:px-6 lg:px-12 py-3 md:py-12 lg:py-16 '>
    <ArticleTitle>{title}</ArticleTitle>
    <div className='flex mb-4 text-gray-400 fill-current'>
      {icons &&
        icons.map(i => (
          <Icon key={i.type} type={i.type} className={i.className}></Icon>
        ))}
    </div>
  </article>
);

const FooterArticle = ({ article }) => {
  return (articles[article.type] || articles['default'])(article);
};

export default FooterArticle;
