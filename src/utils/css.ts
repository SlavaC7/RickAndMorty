import {Dimensions, ScaledSize} from 'react-native';

import {RFValue} from 'react-native-responsive-fontsize';

type TDimenstions = {
  screen: ScaledSize;
  window: ScaledSize;
};
export const DIMENSIONS: TDimenstions = {
  screen: Dimensions.get('screen'),
  window: Dimensions.get('window'),
};

// export const FontFamily: string = 'FiraSans';

export type TFontVariants = 'Bold' | 'Medium' | 'Regular' | 'SemiBold';

export interface IFontConstructor {
  (size?: number, color?: string): string;
}

export const FONT: IFontConstructor = (
  // type = 'Regular',
  size = 20,
  color = '#333333',
) => {
  return `
    font-size: ${RFValue(size, Dimensions.get('window').height)}px;
    color: ${color};
  `;
};
// type?: TFontVariants,
// font-family: '${FontFamily}-${type}';

export type TFlexDirectionVariants =
  | 'row'
  | 'column'
  | 'row-reverse'
  | 'column-reverse';
export type TFlexAlignVariants =
  | 'center'
  | 'flex-start'
  | 'flex-end'
  | 'stretch'
  | 'baseline';
export type TFlexJustifyVariants =
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'flex-start'
  | 'flex-end';
export type TFlexWrapVariants = 'wrap' | 'nowrap';
export interface IFlexConstructor {
  (
    direction?: TFlexDirectionVariants,
    align?: TFlexAlignVariants,
    justify?: TFlexJustifyVariants,
    wrap?: TFlexWrapVariants,
  ): string;
}

export const FLEX: IFlexConstructor = (
  direction = 'row',
  align = 'center',
  justify = 'center',
  wrap = 'nowrap',
) => {
  return `
    display: flex;
    flex-direction: ${direction};
    align-items: ${align};
    justify-content: ${justify};
    flex-wrap: ${wrap};
  `;
};

interface IResponsibleOnePartyAction {
  (pxTo: number): boolean;
}
interface IResponsibleMultiPartyAction {
  (pxFrom: number, pxTo: number): boolean;
}
type TDeviceSelector = boolean;

const _oneParty: IResponsibleOnePartyAction = pxTo =>
  Math.round(Dimensions.get('window').width) <= pxTo;
const _multiParty: IResponsibleMultiPartyAction = (from, to) => {
  let height = Math.round(Dimensions.get('screen').height);
  return height <= to && height >= from;
};
export const isDeviceS: TDeviceSelector =
  (_oneParty(360) && _multiParty(0, 664)) || _oneParty(320) ? true : false;
export const isDeviceM: TDeviceSelector = _multiParty(667, 736) ? true : false;
