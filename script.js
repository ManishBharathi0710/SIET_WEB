/**
 * SIET Higher Education & Admissions Portal
 * Hero Dotted Globe & Stats Count-Up Animation
 */

document.addEventListener('DOMContentLoaded', () => {

  // =========================================================================
  // 1. DOTTED WORLD-MAP GLOBE (Canvas + D3 / TopoJSON / Fallback Matrix)
  // =========================================================================
  const canvas = document.getElementById('globe');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let width = 0;
    let height = 0;
    let projection;
    let landPoints = [];
    let rotation = [-15, -18, 12]; // Africa / Europe / Asia facing viewer, slightly tilted
    let animationFrameId = null;
    let isVisible = true;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Responsive Canvas Size with High-DPI support
    function resizeCanvas() {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      width = rect.width;
      height = rect.height;

      if (width === 0 || height === 0) return;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);

      const radius = width / 2;
      projection = d3.geoOrthographic()
        .scale(radius * 0.95)
        .translate([width / 2, height / 2])
        .rotate(rotation)
        .clipAngle(90);

      drawGlobe();
    }

    let resizeTimer = null;
    function debouncedResize() {
      if (resizeTimer) cancelAnimationFrame(resizeTimer);
      resizeTimer = requestAnimationFrame(() => {
        resizeCanvas();
      });
    }

    // High-Density Geographic Land Points Grid
    function generateLandPoints(landGeoJson) {
      const points = [];
      const step = 2.0; // Optimized grid density for instant response

      for (let lat = -80; lat <= 80; lat += step) {
        for (let lon = -180; lon <= 180; lon += step) {
          if (d3.geoContains(landGeoJson, [lon, lat])) {
            points.push([lon, lat]);
          }
        }
      }
      return points;
    }

    // High-Resolution Fallback Continents Matrix
    function generateFallbackLandPoints() {
      const points = [];
      const continents = [
        { minLat: -35, maxLat: 38, minLon: -18, maxLon: 52 }, // Africa
        { minLat: 36, maxLat: 70, minLon: -10, maxLon: 45 },  // Europe
        { minLat: 5, maxLat: 72, minLon: 45, maxLon: 145 },   // Asia
        { minLat: 15, maxLat: 72, minLon: -168, maxLon: -55 }, // N America
        { minLat: -55, maxLat: 12, minLon: -82, maxLon: -34 }, // S America
        { minLat: -42, maxLat: -11, minLon: 112, maxLon: 154 } // Australia
      ];

      const step = 2.0;
      continents.forEach(c => {
        for (let lat = c.minLat; lat <= c.maxLat; lat += step) {
          for (let lon = c.minLon; lon <= c.maxLon; lon += step) {
            if (Math.sin(lat * 0.1) + Math.cos(lon * 0.1) > -0.6) {
              points.push([lon, lat]);
            }
          }
        }
      });
      return points;
    }

    // Render Ultra-Attractive Glowing Globe Frame
    function drawGlobe() {
      if (!ctx || !projection || width === 0) return;

      const cx = width / 2;
      const cy = height / 2;
      const radius = (width / 2) * 0.95;

      ctx.clearRect(0, 0, width, height);

      // 1. Atmosphere Base Radial Shading
      const bgGradient = ctx.createRadialGradient(cx, cy, radius * 0.05, cx, cy, radius);
      bgGradient.addColorStop(0, 'rgba(15, 120, 75, 0.45)');
      bgGradient.addColorStop(0.5, 'rgba(5, 60, 42, 0.25)');
      bgGradient.addColorStop(0.85, 'rgba(3, 35, 25, 0.1)');
      bgGradient.addColorStop(1, 'rgba(3, 25, 18, 0)');

      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.fillStyle = bgGradient;
      ctx.fill();

      // 2. Faint Latitude & Longitude Planetary Grid Arcs for 3D Depth
      ctx.save();
      ctx.strokeStyle = 'rgba(74, 222, 128, 0.12)';
      ctx.lineWidth = 0.8;
      
      const graticule = d3.geoGraticule().step([20, 20]);
      const pathGenerator = d3.geoPath(projection, ctx);
      
      ctx.beginPath();
      pathGenerator(graticule());
      ctx.stroke();
      ctx.restore();

      // 3. Globe Sphere Outer Glowing Rim Outline
      ctx.save();
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.lineWidth = 1.2;
      ctx.strokeStyle = 'rgba(245, 184, 0, 0.35)';
      ctx.shadowColor = 'rgba(74, 222, 128, 0.6)';
      ctx.shadowBlur = 14;
      ctx.stroke();
      ctx.restore();

      // 4. Render Dotted Continents with Luminous Multi-tone Particles
      const dpr = window.devicePixelRatio || 1;
      const dotRadius = dpr > 1 ? 1.4 : 1.15;

      for (let i = 0; i < landPoints.length; i++) {
        const coords = landPoints[i];
        const proj = projection(coords);

        if (proj) {
          const px = proj[0];
          const py = proj[1];

          // Calculate depth/distance from center for realistic sphere curvature shading
          const dx = px - cx;
          const dy = py - cy;
          const distFromCenter = Math.sqrt(dx * dx + dy * dy) / radius;

          // Diagonal lighting factor
          const diagFactor = (px / width) * 0.4 + (py / height) * 0.6;
          const alpha = Math.min(0.98, Math.max(0.3, (1 - distFromCenter * 0.3) * diagFactor + 0.25));

          ctx.beginPath();
          ctx.arc(px, py, dotRadius, 0, Math.PI * 2);

          // Golden-yellow highlights on illuminated side, emerald green elsewhere
          if (diagFactor > 0.55 && (i % 3 === 0)) {
            ctx.fillStyle = `rgba(255, 215, 64, ${alpha})`;
          } else if (diagFactor > 0.4) {
            ctx.fillStyle = `rgba(214, 195, 70, ${alpha})`;
          } else {
            ctx.fillStyle = `rgba(74, 222, 128, ${alpha * 0.85})`;
          }
          ctx.fill();
        }
      }
    }

    // Auto-Rotation Animation Loop
    function animate() {
      if (!prefersReducedMotion && isVisible) {
        rotation[0] += 0.04; // Slow smooth rotation (about 0.04 deg/frame)
        if (projection) {
          projection.rotate(rotation);
          drawGlobe();
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    }

    // Pause when tab is not visible
    document.addEventListener('visibilitychange', () => {
      isVisible = !document.hidden;
    });

    // 1. Immediately render fallback continents matrix (0ms delay)
    landPoints = generateFallbackLandPoints();
    resizeCanvas();
    if (!animationFrameId) animate();

    // 2. Background enhancement with TopoJSON
    if (typeof topojson !== 'undefined') {
      fetch('https://cdn.jsdelivr.net/npm/world-atlas@2/land-110m.json')
        .then(res => res.json())
        .then(worldData => {
          const land = topojson.feature(worldData, worldData.objects.land);
          landPoints = generateLandPoints(land);
          drawGlobe();
        })
        .catch(err => {
          // Keep fallback
        });
    }

    window.addEventListener('resize', debouncedResize, { passive: true });
  }


  // =========================================================================
  // 2. STATS COUNT-UP ANIMATION (07+, 15+, 25+)
  // =========================================================================
  const statsSection = document.getElementById('stats');
  if (statsSection) {
    let animated = false;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !animated) {
          animated = true;
          const counterEls = statsSection.querySelectorAll('.js-stat-counter');

          counterEls.forEach(el => {
            const target = parseInt(el.getAttribute('data-target'), 10) || 0;
            const prefix = el.getAttribute('data-prefix') || '';
            const suffix = el.getAttribute('data-suffix') || '+';
            let count = 0;
            const duration = 400; // 400ms instant responsive count-up
            const stepTime = Math.max(16, Math.floor(duration / (target + 1)));

            const timer = setInterval(() => {
              count++;
              const displayVal = (count < 10 && prefix) ? `${prefix}${count}` : `${count}`;
              el.textContent = `${displayVal}${suffix}`;

              if (count >= target) {
                clearInterval(timer);
              }
            }, stepTime);
          });
        }
      });
    }, { threshold: 0.05 });

    observer.observe(statsSection);
  }

});
