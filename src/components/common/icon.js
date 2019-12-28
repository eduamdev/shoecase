import React from 'react';
import { ReactComponent as SvgMenu } from '../../icons/menu.svg';
import { ReactComponent as SvgClose } from '../../icons/close.svg';
import { ReactComponent as SvgUser } from '../../icons/user.svg';
import { ReactComponent as SvgShoppingBag } from '../../icons/shopping-bag.svg';
import { ReactComponent as SvgMagnifier } from '../../icons/magnifier.svg';
import { ReactComponent as SvgFacebook } from '../../icons/facebook.svg';
import { ReactComponent as SvgTwitter } from '../../icons/twitter.svg';
import { ReactComponent as SvgInstagram } from '../../icons/instagram.svg';

const Icon = ({ type, classes = 'h-4 w-4' }) => {
  const icons = {
    close: () => <SvgClose className={classes}></SvgClose>,
    menu: () => <SvgMenu className={classes}></SvgMenu>,
    user: () => <SvgUser className={classes}></SvgUser>,
    shoppingBag: () => <SvgShoppingBag className={classes}></SvgShoppingBag>,
    magnifier: () => <SvgMagnifier className={classes}></SvgMagnifier>,
    facebook: () => <SvgFacebook className={classes}></SvgFacebook>,
    twitter: () => <SvgTwitter className={classes}></SvgTwitter>,
    instagram: () => <SvgInstagram className={classes}></SvgInstagram>,
    default: () => null
  };
  return (icons[type] || icons['default'])();
};

export default Icon;
