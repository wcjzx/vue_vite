import { maxOrbit, random } from '../../rom';

/**
 * 星星的构造函数参数
 */
export interface IStarOptions {
  /** 画布尺寸宽度 */
  w: number;
  /** 画布尺寸高度 */
  h: number;
  /** 星星数量  */
  maxStars: number;
}
export default class Star {
  /** 运行的最大轨道 */
  orbitRadius: number;
  /** 半径 */
  radius: number;
  /** 运动轨道坐标x */
  orbitX: number;
  /** 运动轨道坐标y */
  orbitY: number;
  /** 事件流逝速度 */
  timePassed: number;
  /** 运动速度 */
  speed: number;
  /** 透明度 */
  alpha: number;
  constructor(options: IStarOptions) {
    const { w, h, maxStars } = options;
    this.orbitRadius = random(maxOrbit(w, h));
    this.radius = random(60, this.orbitRadius) / 12;
    this.orbitX = w / 2;
    this.orbitY = h / 2;
    this.timePassed = random(0, maxStars);
    this.speed = random(this.orbitRadius) / 900000;
    this.alpha = random(2, 10) / 1;
  }
  draw(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
    const x = Math.sin(this.timePassed) * this.orbitRadius + this.orbitX;
    const y = Math.cos(this.timePassed) * this.orbitRadius + this.orbitY;
    // 闪烁频率
    const twinkle = random(10);

    if (twinkle === 1 && this.alpha > 0) {
      this.alpha -= 0.05;
    } else if (twinkle === 2 && this.alpha < 1) {
      this.alpha += 0.05;
    }

    ctx.globalAlpha = this.alpha;
    ctx.drawImage(
      canvas,
      x - this.radius / 2,
      y - this.radius / 2,
      this.radius,
      this.radius
    );
    this.timePassed += this.speed;
  }
}