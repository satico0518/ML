import { ConditionEnum } from '../types';

export const currencyFormat = (num: number, decimals = 0): string =>
  '$ ' + num.toFixed(decimals).replace(/(\d)(?=(\d{3})+(?!\d))/g, '1.');

export const translateCondition = (condition: string): ConditionEnum => {
  switch (condition) {
    case ConditionEnum.new:
      return ConditionEnum.nuevo;
    case ConditionEnum.used:
      return ConditionEnum.usado;
    default:
      return ConditionEnum.unknown;
  }
};
