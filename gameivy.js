'use strict';

document.querySelectorAll('[data-copy-qq]').forEach((button) => {
  const number = document.getElementById(button.dataset.copyQq);
  const status = button.parentElement.querySelector('[role="status"]');
  if (!number || !status) return;

  button.hidden = false;
  button.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(number.textContent.trim());
      status.textContent = '群号已复制';
    } catch {
      const selection = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents(number);
      selection?.removeAllRanges();
      selection?.addRange(range);
      status.textContent = '请手动复制群号';
    }
  });
});
