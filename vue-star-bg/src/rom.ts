/**
 * 生成范围内的随机数
 * @param min 最小值
 * @param max 最大值
 * @param isFloat 是否包含小数点
 * @returns number
 */
export const random = (min = 0, max = 100, isFloat = false) => {
    const array = new Uint32Array(1);
    const maxUint = 0xffffffff;
    const randomNumber = crypto.getRandomValues(array)[0] / maxUint;
    const randomRangeValue = (max - min + 1) * randomNumber + min;
    return isFloat ? randomRangeValue : Math.floor(randomRangeValue);
  };
  
  /**
   * 计算最大运行轨道
   * @param x 轨道坐标x
   * @param y 轨道坐标y
   * @returns 最大的运行轨道坐标
   */
  export const maxOrbit = (x: number, y: number) => {
    const max = Math.max(x, y);
    const diameter = Math.round(Math.sqrt(max * max + max * max));
    return diameter / 2;
  };