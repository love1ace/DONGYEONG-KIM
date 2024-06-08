// 다크 모드 토글 버튼에 이벤트 리스너를 추가합니다.
const toggleButton = document.querySelector('ion-icon[name="sunny-outline"]');

// 브라우저가 다크 모드인지 라이트 모드인지 확인합니다.
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  // 브라우저가 다크 모드일 때
  document.body.classList.add('dark-mode');
  toggleButton.setAttribute('name', 'moon-outline');
} else {
  // 브라우저가 라이트 모드일 때
  document.body.classList.remove('dark-mode');
  toggleButton.setAttribute('name', 'sunny-outline');
}

// 페이지가 로드될 때 다크 모드 설정을 확인하고 적용합니다.
if (localStorage.getItem('dark-mode') === 'true') {
  document.body.classList.add('dark-mode');
  toggleButton.setAttribute('name', 'moon-outline'); // 다크 모드일 때 아이콘을 달 모양으로 변경합니다.
}

toggleButton.addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');

  // 다크 모드 설정을 로컬 스토리지에 저장합니다.
  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('dark-mode', 'true');
    // If it does, change the icon to 'moon-outline'
    toggleButton.setAttribute('name', 'moon-outline');
  } else {
    localStorage.setItem('dark-mode', 'false');
    // If it doesn't, change the icon back to 'sunny-outline'
    toggleButton.setAttribute('name', 'sunny-outline');
  }
});