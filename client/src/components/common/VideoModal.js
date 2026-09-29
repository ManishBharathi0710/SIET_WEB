import './VideoModal.css';

export function VideoModal() {
  return `<div class="video-modal" role="dialog" aria-modal="true">
    <div class="video-shell portrait">
      <button class="video-close" aria-label="Close video">×</button>
      <div class="video-frame">
        <video controls autoplay playsinline poster="/brand/techpark-hd.jpg">
          <source src="/brand/siet-campus-video.mp4" type="video/mp4">
        </video>
      </div>
    </div>
  </div>`;
}
