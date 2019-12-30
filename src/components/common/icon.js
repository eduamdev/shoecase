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
    trashCan: () => <SvgTrashCan className={classes}></SvgTrashCan>,
    filter: () => <SvgFilter className={classes}></SvgFilter>,
    plus: () => <SvgPlus className={classes}></SvgPlus>,
    minus: () => <SvgMinus className={classes}></SvgMinus>,
    arrowUp: () => <SvgArrowUp className={classes}></SvgArrowUp>,
    default: () => null
  };
  return (icons[type] || icons['default'])();
};

export default Icon;
