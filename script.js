document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generateBtn');
    const lottoNumbers = document.getElementById('lottoNumbers');

    function generateLottoNumbers() {
        // 1부터 45까지의 숫자 배열 생성
        const numbers = Array.from({ length: 45 }, (_, i) => i + 1);
        
        // Fisher-Yates 알고리즘으로 배열 섞기
        for (let i = numbers.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
        }

        // 앞에서 6개 숫자 선택하고 정렬
        const selectedNumbers = numbers.slice(0, 6).sort((a, b) => a - b);

        // 화면에 표시
        lottoNumbers.innerHTML = '';
        selectedNumbers.forEach(number => {
            const numberElement = document.createElement('div');
            numberElement.className = 'number';
            numberElement.textContent = number;
            lottoNumbers.appendChild(numberElement);
        });

        // SweetAlert2로 팝업 표시
        Swal.fire({
            title: '🎉 추첨된 로또 번호!',
            html: `<div class="flex justify-center gap-2 mt-4">
                ${selectedNumbers.map(num => `<span class="number">${num}</span>`).join('')}
            </div>`,
            showConfirmButton: false,
            timer: 2500,
            background: 'linear-gradient(135deg, #f7971e 0%, #ffd200 100%)',
            customClass: {
                popup: 'shadow-2xl rounded-2xl'
            }
        });
    }

    // 버튼 클릭 이벤트 리스너
    generateBtn.addEventListener('click', generateLottoNumbers);

    // 페이지 로드시 첫 번호 생성
    generateLottoNumbers();
});
