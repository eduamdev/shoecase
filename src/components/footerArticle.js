import React from 'react';
import Input from './common/input';
import Icon from './common/icon';

const articles = {
  input: article => renderInput(article),
  categories: article => renderCategories(article),
  icons: article => renderIcons(article),
  default: () => null
};

const renderTitle = title => (
  <h3 className='capitalize font-medium font-sm mb-4 md:mb-6 text-gray-300'>
    {title}
  </h3>
);

const renderInput = ({ title, name, input }) => (
  <article className='w-full md:w-1/4 xl:w-2/6 px-4 md:px-6 lg:px-12 py-6 md:py-16 '>
    {renderTitle(title)}
    <Input name={name} placeholder={input.placeholder} dark></Input>
  </article>
);

const renderCategories = ({ title, categories }) => (
  <article className='inline-block align-top w-1/2 md:w-1/4 xl:w-1/6 px-4 md:px-6 lg:px-12 py-6 md:py-16 '>
    {renderTitle(title)}
    {categories &&
      categories.map(c => (
        <span
          key={c}
          className='block text-xs lg:text-sm tracking-wider font-light leading-loose lg:leading-relaxed text-gray-400 capitalize mb-2 lg:mb-4'
        >
          {c}
        </span>
      ))}
  </article>
);

const renderIcons = ({ title, icons }) => (
  <article className='w-full md:w-1/4 xl:w-1/6 px-4 md:px-6 lg:px-12 py-6 md:py-16 '>
    {renderTitle(title)}
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
