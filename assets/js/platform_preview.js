document.addEventListener('DOMContentLoaded', function() {
  const platformButtons = document.querySelectorAll('.platform-preview-button');
  const previewIframe = document.getElementById('platform-preview-iframe');
  
  if (!platformButtons.length || !previewIframe) return;
  
  platformButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Remove active class from all buttons
      platformButtons.forEach(btn => btn.classList.remove('active'));
      
      // Add active class to clicked button
      this.classList.add('active');
      
      // Get platform from button's data attribute
      const platform = this.dataset.platform;
      
      // Set iframe source to platform preview
      const baseUrl = window.location.pathname;
      const platformUrl = baseUrl.replace(/\/$/, '') + '/platforms/' + platform + '/';
      
      previewIframe.src = platformUrl;
    });
  });
  
  // Set the first button as active by default
  if (platformButtons.length > 0) {
    platformButtons[0].click();
  }
});