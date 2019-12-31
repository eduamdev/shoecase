import React from 'react';
import { ReactComponent as SvgMenu } from '../../icons/menu.svg';
import { ReactComponent as SvgClose } from '../../icons/close.svg';
import { ReactComponent as SvgUser } from '../../icons/user.svg';
import { ReactComponent as SvgShoppingBag } from '../../icons/shopping-bag.svg';
import { ReactComponent as SvgMagnifier } from '../../icons/magnifier.svg';
import { ReactComponent as SvgFacebook } from '../../icons/facebook.svg';
import { ReactComponent as SvgTwitter } from '../../icons/twitter.svg';
import { ReactComponent as SvgInstagram } from '../../icons/instagram.svg';
import { ReactComponent as SvgTrashCan } from '../../icons/trash-can.svg';
import { ReactComponent as SvgFilter } from '../../icons/filter.svg';
import { ReactComponent as SvgPlus } from '../../icons/plus.svg';
import { ReactComponent as SvgMinus } from '../../icons/minus.svg';
import { ReactComponent as SvgArrowUp } from '../../icons/arrow-up.svg';

const Icon = ({ type, className = 'h-4 w-4', ...rest }) => {
  const icons = {
    close: () => <SvgClose  className={className} {...rest}></SvgClose>,
    menu: () => <SvgMenu  className={className} {...rest}></SvgMenu>,
    user: () => <SvgUser  className={className} {...rest}></SvgUser>,
    shoppingBag: () => <SvgShoppingBag  className={className} {...rest}></SvgShoppingBag>,
    magnifier: () => <SvgMagnifier  className={className} {...rest}></SvgMagnifier>,
    facebook: () => <SvgFacebook  className={className} {...rest}></SvgFacebook>,
    twitter: () => <SvgTwitter  className={className} {...rest}></SvgTwitter>,
    instagram: () => <SvgInstagram  className={className} {...rest}></SvgInstagram>,
    trashCan: () => <SvgTrashCan  className={className} {...rest}></SvgTrashCan>,
    filter: () => <SvgFilter  className={className} {...rest}></SvgFilter>,
    plus: () => <SvgPlus  className={className} {...rest}></SvgPlus>,
    minus: () => <SvgMinus  className={className} {...rest}></SvgMinus>,
    arrowUp: () => <SvgArrowUp  className={className} {...rest}></SvgArrowUp>,
    default: () => null
  };
  return (icons[type] || icons['default'])();
};

export default Icon;
