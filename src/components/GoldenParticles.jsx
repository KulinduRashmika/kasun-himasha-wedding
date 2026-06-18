import { useEffect, useRef } from "react";

const GoldenParticles = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationId;
    let particles = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    class Particle {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = canvas.height + Math.random() * 100;
        this.size = Math.random() * 3 + 0.5;
        this.speedY = -(Math.random() * 0.8 + 0.3);
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.opacity = 0;
        this.maxOpacity = Math.random() * 0.6 + 0.2;
        this.fadeIn = true;
        this.life = 0;
        this.maxLife = Math.random() * 300 + 200;
        // Alternate between circles and diamond shapes
        this.shape = Math.random() > 0.5 ? "circle" : "diamond";
        const hue = Math.random() * 20 + 40; // golden hues
        this.color = `hsl(${hue}, 80%, 60%)`;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.life++;
        if (this.fadeIn && this.opacity < this.maxOpacity) {
          this.opacity += 0.01;
        } else {
          this.fadeIn = false;
        }
        if (this.life > this.maxLife * 0.7) {
          this.opacity -= 0.008;
        }
        if (this.opacity <= 0 || this.y < -50) {
          this.reset();
        }
      }
      draw() {
        ctx.save();
        ctx.globalAlpha = Math.max(0, this.opacity);
        ctx.fillStyle = this.color;
        ctx.shadowColor = this.color;
        ctx.shadowBlur = this.size * 3;

        if (this.shape === "circle") {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fill();
        } else {
          ctx.translate(this.x, this.y);
          ctx.rotate(Math.PI / 4);
          ctx.fillRect(-this.size, -this.size, this.size * 2, this.size * 2);
        }
        ctx.restore();
      }
    }

    // Create initial particles
    for (let i = 0; i < 60; i++) {
      const p = new Particle();
      p.y = Math.random() * canvas.height;
      p.life = Math.random() * p.maxLife;
      p.opacity = Math.random() * p.maxOpacity;
      particles.push(p);
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.update();
        p.draw();
      });
      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.7 }}
    />
  );
};

export default GoldenParticles;
