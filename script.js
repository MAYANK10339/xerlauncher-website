/**
 * XerLauncher Official Website Logic
 * Interactive UI, FAQ Accordion, Download Notification, and Mockup Interactivity
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      faqItems.forEach(other => other.classList.remove('active'));
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });

  // Open first FAQ item by default
  if (faqItems.length > 0) {
    faqItems[0].classList.add('active');
  }

  // 2. Navbar Scroll Blur Effect
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.style.borderBottomColor = 'rgba(0, 229, 255, 0.2)';
      navbar.style.background = 'rgba(7, 10, 19, 0.95)';
    } else {
      navbar.style.borderBottomColor = 'rgba(255, 255, 255, 0.08)';
      navbar.style.background = 'rgba(7, 10, 19, 0.82)';
    }
  });

  // 3. Interactive Hero Mockup Launcher Launch Button
  const mockBtn = document.querySelector('.mockup-launch-btn');
  if (mockBtn) {
    mockBtn.addEventListener('click', () => {
      mockBtn.innerText = 'STARTING 1.21.1...';
      mockBtn.style.background = '#10b981';
      mockBtn.style.color = '#ffffff';

      const statusText = document.querySelector('.status-text');
      if (statusText) {
        statusText.innerText = 'Fabric 1.21.1 Initializing (Adoptium Java 21)...';
        statusText.style.color = '#38bdf8';
      }

      setTimeout(() => {
        mockBtn.innerText = 'MINECRAFT RUNNING';
        if (statusText) {
          statusText.innerText = 'Minecraft 1.21.1 Running smoothly • 120+ FPS';
          statusText.style.color = '#10b981';
        }
      }, 1500);

      setTimeout(() => {
        mockBtn.innerText = 'LAUNCH GAME ▶';
        mockBtn.style.background = '#00e5ff';
        mockBtn.style.color = '#09101d';
        if (statusText) {
          statusText.innerText = 'Ready to Play • Minecraft 1.21.1 Ready';
          statusText.style.color = '#94a3b8';
        }
      }, 5000);
    });
  }

  // 4. Toast Notification on Download
  function showToast(message) {
    let toast = document.getElementById('site-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'site-toast';
      toast.style.position = 'fixed';
      toast.style.bottom = '28px';
      toast.style.right = '28px';
      toast.style.padding = '14px 22px';
      toast.style.background = '#111827';
      toast.style.border = '1px solid #00e5ff';
      toast.style.borderRadius = '12px';
      toast.style.color = '#f8fafc';
      toast.style.fontFamily = "'Outfit', sans-serif";
      toast.style.fontWeight = '600';
      toast.style.boxShadow = '0 10px 25px rgba(0, 229, 255, 0.3)';
      toast.style.zIndex = '9999';
      toast.style.transition = 'all 0.3s ease';
      toast.style.display = 'flex';
      toast.style.alignItems = 'center';
      toast.style.gap = '10px';
      document.body.appendChild(toast);
    }

    toast.innerHTML = `<span style="color:#00e5ff; font-size:1.2rem;">✔</span> ${message}`;
    toast.style.opacity = '1';
    toast.style.transform = 'translateY(0)';

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(20px)';
    }, 4500);
  }

  const exeBtn = document.getElementById('btn-download-exe');
  if (exeBtn) {
    exeBtn.addEventListener('click', () => {
      showToast('Downloading Installer.exe (v2.0) — Double click to setup!');
    });
  }

  const zipBtn = document.getElementById('btn-download-zip');
  if (zipBtn) {
    zipBtn.addEventListener('click', () => {
      showToast('Downloading XerLauncher-v2.0-Setup.zip portable package!');
    });
  }
});
