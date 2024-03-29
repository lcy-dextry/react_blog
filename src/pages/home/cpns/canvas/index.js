import React from 'react';
import { useEffect } from 'react';
import { CanvasWrapper } from './style';

export default function CanvasTitle() {
    let text = 'Grace的工具箱'
    useEffect(() => {
        let canvas = document.getElementById("canvas-title");
        let ctx = canvas.getContext("2d");
        canvas.width = window.innerWidth * 0.5;
        canvas.height = window.innerHeight * 0.5;

        function Particle({ x = 0, y = 0, tx = 0, ty = 0, radius = 2, color = "#F00000" }) {
            // 当前坐标
            this.x = x;
            this.y = y;
            // 目标点坐标
            this.tx = tx;
            this.ty = ty;
            this.radius = radius;
            this.color = color;

            this.draw = (ctx) => {
                ctx.save();
                ctx.translate(this.x, this.y);
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(0, 0, this.radius, 0, Math.PI * 2, true);
                ctx.closePath();
                ctx.fill();
                ctx.restore();
                return this;
            }
        }
        function drawFrame(particles, finished) {
            const timer = window.requestAnimationFrame(() => {
                drawFrame(particles, finished);
            });
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            // 缓动系数
            const easing = 0.08;
            const finishedParticles = particles.filter((particle) => {
                // 当前坐标和目标点之间的距离
                const dx = particle.tx - particle.x;
                const dy = particle.ty - particle.y;
                // 速度
                let vx = dx * easing;
                let vy = dy * easing;

                // 当距离小于0.1表示粒子已完成动画
                if (Math.abs(dx) < 0.1 && Math.abs(dy) < 0.1) {
                    particle.finished = true;
                    particle.x = particle.tx;
                    particle.y = particle.ty;
                } else {
                    particle.x += vx;
                    particle.y += vy;
                }
                particle.draw(ctx);
                return particle.finished;
            });

            if (finishedParticles.length === particles.length) {
                window.cancelAnimationFrame(timer);
                finished && finished();
            }

            return particles;
        }

        function getPixels(target, space = 5) {
            const canvas = document.createElement("canvas");
            const ctx = canvas.getContext("2d");
            const viewWidth = window.innerWidth * 0.5;
            const viewHeight = window.innerHeight * 0.5;

            canvas.width = viewWidth;
            canvas.height = viewHeight;

            if (typeof target === "string") {
                ctx.font = "110px bold";
                ctx.fillStyle = "#ff0000";
                ctx.textBaseline = "middle";
                ctx.textAlign = "center";
                ctx.fillText(target, viewWidth / 2, viewHeight / 2);
            }

            // 获取像素数据
            const { data, width, height } = ctx.getImageData(0, 0, viewWidth, viewHeight);
            const pixeles = [];
            for (let x = 0; x < width; x += space) {
                for (let y = 0; y < height; y += space) {
                    const pos = (y * width + x) * 4; // 每个像素点由 rgba 四个值组成，所以需要乘以4才能得到正确的位置
                    // 只提取 rgba 中透明度大于0.5的像素，imageData 里 aplha 128等于 rgba 中 alpha 的 0.5
                    if (data[pos + 3] > 128) {
                        pixeles.push({
                            x,
                            y,
                            rgba: [255, 255, 255, 1],
                        });
                    }
                }
            }

            return pixeles;
        }
        // 创建粒子
        function createParticles({ text, radius, space }) {
            const pixeles = getPixels(text, space);
            return pixeles.map(({ x, y, rgba: color }) => {
                return new Particle({
                    x: Math.random() * (50 + window.innerWidth * 0.5) - 50,
                    y: Math.random() * (50 + window.innerHeight * 0.5) - 50,
                    tx: x,
                    ty: y,
                    radius,
                    color: `rgba(${color})`,
                });
            });
        }

        function loop(targets) {
            return drawFrame(
                createParticles({ text: targets, radius: 3, space: 5 }),
                () => {
                    // loop(targets);
                }
            );
        }
        loop(text);
    }, [text]);

    return (
        <CanvasWrapper>
            <canvas id="canvas-title" />
        </CanvasWrapper>
    )
}
