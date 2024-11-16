
// mencegah link ditahan
document.ondragstart = function () {
	return false;
};


let pageId = document.body.id;

if (pageId == "JFTKosakata"){
	function loadJSON(url, callback) {
		const xhr = new XMLHttpRequest();
		xhr.overrideMimeType("application/json");
		xhr.open("GET", url, true);
		xhr.onreadystatechange = function () {
			if (xhr.readyState === 4 && xhr.status === 200) {
				callback(JSON.parse(xhr.responseText));
			}
		};
		xhr.send(null);
	}
	
	const jsonPairs = [
		{ questions: 'json/01.json', answers: 'json/01_id.json' },
		{ questions: 'json/02.json', answers: 'json/02_id.json' },
		{ questions: 'json/03.json', answers: 'json/03_id.json' }
		// Add more pairs as needed
	];
	
	function createButtons() {
		const buttonContainer = document.querySelector("#JFTKosakata #buttonContainer");
		jsonPairs.forEach((pair, index) => {
			const button = document.createElement('button');
			button.textContent = `Kotoba ${index + 1}`;
			button.onclick = () => loadGroup(index);
			buttonContainer.appendChild(button);
		});
	}
	
	function loadGroup(groupIndex) {
		const output = document.querySelector("#JFTKosakata #output");
		const outputContent = document.querySelector("#JFTKosakata #outputContent");
		outputContent.innerHTML = ''; // Clear previous output
		const { questions, answers } = jsonPairs[groupIndex];
		
		loadJSON(questions, function(questionsData) {
			loadJSON(answers, function(answersData) {
				displayData(questionsData, answersData);
				output.classList.add("show");
				// output.style.display = 'block'; // Show output
			});
		});
	}
	
	function displayData(questions, answers) {
		const outputContent = document.querySelector("#JFTKosakata #outputContent");
		
		questions.forEach(item => {
		if (item.question_text) {
			const card = document.createElement('div');
			card.className = 'card';
			
			const answer = answers.find(ans => ans.id === item.id) || { sid_answer: 'N/A' };
			
			card.innerHTML = `
					<p>${item.question_text || 'N/A'}</p>
					<p>${answer.sid_answer}</p>
				`;
			
			outputContent.appendChild(card);
		}
		});
	}
	
	document.querySelector("#JFTKosakata .close-btn").addEventListener("click", function() {
		const output = document.querySelector("#JFTKosakata #output");
		output.classList.remove("show");
	});
	
	// Create buttons on page load
	createButtons();
	
}






else if (pageId == "JFTKanji") {
	
	const grupContainer = document.querySelector('.grup-container');
	const cardContainer = document.querySelector('.card-container');
	const cardsDiv = document.querySelector('.cards');
	const closeButton = document.querySelector('.close-button');
	const shuffleButton = document.querySelector('.shuffle-button');
	const resetButton = document.querySelector('.reset-button');
	const cardGroup = document.querySelector('.card-group');
	const itemsPerGroup = 30;
	let currentGroup = [];
	let originalGroup = [];
	
	// Membuat tombol untuk setiap grup
	for (let i = 0; i < Math.ceil(cards.length / itemsPerGroup); i++) {
		const button = document.createElement('button');
		button.innerText = `Kanji ${i + 1}`;
		button.className = 'group-button';
		button.addEventListener('click', () => showGroup(i));
		cardGroup.appendChild(button);
	}
	
	function showGroup(groupIndex) {
		cardsDiv.innerHTML = ''; // Bersihkan isi cardsDiv
		const start = groupIndex * itemsPerGroup;
		const end = start + itemsPerGroup;
		currentGroup = cards.slice(start, end);
		originalGroup = [...currentGroup]; // Simpan salinan urutan asli
		
		window.scrollTo(0,0)
		
		displayCards(currentGroup);
		grupContainer.classList.add('hidden');
		cardContainer.classList.remove('hidden');
		setTimeout(() => cardContainer.classList.add('visible'), 10); // Animasi
	}
	
	function displayCards(group) {
		group.forEach(card => {
			const cardElement = document.createElement('div');
			cardElement.className = 'card';
			
			// Struktur kartu dengan kemampuan flip
			cardElement.innerHTML = `
					<div class="card-inner">
						<div class="card-front">
							<p>${card.x}</p>
						</div>
						<div class="card-back">
							<p>${card.y}</p>
							<p>${card.z}</p>
						</div>
					</div>
					`;
			
			// Event listener untuk membalik kartu
			cardElement.addEventListener('click', () => {
				const cardInner = cardElement.querySelector('.card-inner');
				cardInner.classList.toggle('flipped'); // Toggle untuk flip
				cardElement.classList.toggle('active'); // Toggle untuk border hijau
			});
			
			cardsDiv.appendChild(cardElement);
		});
	}
	
	shuffleButton.addEventListener('click', () => {
		currentGroup.sort(() => Math.random() - 0.5);
		cardsDiv.innerHTML = ''; // Bersihkan isi cardsDiv
		displayCards(currentGroup); // Tampilkan kartu yang sudah diacak
	});
	
	resetButton.addEventListener('click', () => {
		currentGroup = [...originalGroup]; // Kembalikan ke urutan asli
		cardsDiv.innerHTML = ''; // Bersihkan isi cardsDiv
		displayCards(currentGroup); // Tampilkan kembali kartu
	});
	
	
	closeButton.addEventListener("click", function() {
		cardContainer.classList.remove('visible'); // Animasi tutup
		setTimeout(() => {
			cardContainer.classList.add('hidden');
			grupContainer.classList.remove('hidden');
		}, 300); // Tunggu animasi selesai
	});
}




else if (pageId == "JFTKanjiKuis") {
	const totalQuestions = cards.length;
	const questionsPerLevel = 4;
	const totalLevels = Math.ceil(totalQuestions / questionsPerLevel);
	let currentQuestion = 0, score = 0, currentStage = 1, currentLevel = 0;
	
	// Fungsi untuk memuat status yang disimpan
	function loadState() {
		const savedState = JSON.parse(localStorage.getItem('quizState'));
		if (savedState) {
			currentLevel = savedState.currentLevel;
			currentQuestion = savedState.currentQuestion;
			score = savedState.score;
			currentStage = savedState.currentStage;
			// load
			createLevelButtons()
			// Mengaktifkan tombol level hingga level saat ini
			for (let i = 0; i <= currentLevel; i++) {
				document.getElementsByClassName('level-button')[i].disabled = false;
			}
			
			// Menampilkan pertanyaan dan opsi jika kuis sedang berlangsung
			if (currentStage <= 3) {
				document.getElementById('level-buttons').style.display = 'none';
				document.getElementById('question').style.display = 'block';
				document.getElementById('options').style.display = 'grid';
				document.querySelector(".quest-container").style.display = "block";
				loadQuestion();
			} else {
				// Jika tidak ada pertanyaan yang tersisa, tampilkan level buttons
				goBack();
			}
		//alert("Status kuis berhasil dimuat!"); // Menampilkan alert saat memuat status
		} else {
			createLevelButtons(); // Membuat tombol level jika tidak ada status yang disimpan
		}
	}
	
	// Fungsi untuk menyimpan status
	function saveState() {
		const state = {
			currentLevel,
			currentQuestion,
			score,
			currentStage
		};
		localStorage.setItem('quizState', JSON.stringify(state));
		//alert("Status kuis berhasil disimpan!"); // Menampilkan alert saat menyimpan status
	}
	
	// Fungsi untuk membuat tombol level
	function createLevelButtons() {
		const levelButtons = document.getElementById('level-buttons');
		levelButtons.innerHTML = ''; // Menghapus tombol yang ada
		for (let i = 0; i < totalLevels; i++) {
			const button = document.createElement('button');
			button.innerText = `${i + 1}`;
			button.className = 'level-button';
			button.onclick = () => startQuiz(i);
			button.disabled = (i > 0); // Menonaktifkan level lebih dari 0
			levelButtons.appendChild(button);
		}
	}
	
	// Fungsi untuk memulai kuis
	function startQuiz(level) {
		currentLevel = level;
		currentQuestion = 0;
		score = 0;
		currentStage = 1;
		document.getElementById('level-buttons').style.display = 'none';
		document.getElementById('question').style.display = 'block';
		document.getElementById('options').style.display = 'grid';
		document.querySelector(".quest-container").style.display = "block";
		loadQuestion();
	}
	
	// Fungsi untuk memuat pertanyaan
	function loadQuestion() {
		setTimeout(function() {
			const questionElement = document.getElementById('question');
			const optionsElement = document.getElementById('options');
			const startIndex = currentLevel * questionsPerLevel;
			const currentWord = cards[startIndex + currentQuestion];
			
			let questionText, correctAnswer;
			switch (currentStage) {
				case 1:
				questionText = `${currentWord.x}`;
				correctAnswer = currentWord.y;
				break;
				case 2:
				questionText = `${currentWord.y}`;
				correctAnswer = currentWord.x;
				break;
				case 3:
				questionText = `${currentWord.z}`;
				correctAnswer = currentWord.x;
				break;
			}
			
			questionElement.innerText = questionText;
			optionsElement.innerHTML = '';
			
			const options = new Set();
			options.add(correctAnswer);
			while (options.size < 4) {
				const randomWord = cards[Math.floor(Math.random() * cards.length)];
				options.add(currentStage === 1 ? randomWord.y : currentStage === 2 ? randomWord.x : randomWord.x);
			}
			
			Array.from(options).sort(() => Math.random() - 0.5).forEach(option => {
				const button = document.createElement('button');
				button.innerText = option;
				button.className = 'option-button';
				button.onclick = () => {
					checkAnswer(option, correctAnswer);
				};
				optionsElement.appendChild(button);
			});
		}, 300);
	}
	
	// Fungsi untuk memeriksa jawaban
	function checkAnswer(selected, correctAnswer) {
		if (selected === correctAnswer) score++;
			currentQuestion++;
		
		if (currentQuestion < questionsPerLevel) {
			loadQuestion();
		} else {
			currentStage++;
			if (currentStage <= 3) {
				currentQuestion = 0;
				loadQuestion();
			} else {
				const questionElement = document.getElementById('question');
				questionElement.innerHTML = `<h2>Skor Anda: ${score} dari ${questionsPerLevel * 3}</h2>`;
				document.getElementById('options').style.display = 'none';
				// Simpan status setelah menampilkan skor
				saveState();
				
				// Mengaktifkan level berikutnya jika semua jawaban benar
				if (score === questionsPerLevel * 3 && currentLevel + 1 < totalLevels) {
					document.getElementsByClassName('level-button')[currentLevel + 1].disabled = false;
				}
				setTimeout(goBack, 1000);
			}
		}
	}
	
	// Fungsi untuk kembali ke halaman utama
	function goBack() {
		document.getElementById('level-buttons').style.display = 'grid';
		document.getElementById('question').style.display = 'none';
		document.getElementById('options').style.display = 'none';
		document.querySelector(".quest-container").style.display = "none";
	}
	
	// Fungsi untuk menghapus memori
	function clearMemory() {
		localStorage.removeItem('quizState');
		currentLevel = 0; // Mengatur ulang level
		currentQuestion = 0; // Mengatur ulang pertanyaan
		score = 0; // Mengatur ulang skor
		currentStage = 1; // Mengatur ulang tahap
		createLevelButtons(); // Membuat kembali tombol level
		goBack(); // Kembali ke tampilan utama
		alert("Memori berhasil dihapus!"); // Menampilkan alert saat menghapus memori
	}
		
	// Menambahkan event untuk tombol hapus memori
	document.getElementById('clear-button').onclick = clearMemory; 
	loadState(); // Memuat status saat halaman dimuat
	
}



else if (pageId == "JFTTatabahasa") {
	// Fungsi untuk menampilkan halaman pertama (name)
	function showName() {
		const container = document.getElementById('tatabahasaContainer');
		container.innerHTML = ''; // Kosongkan kontainer
		
		// Sembunyikan tombol "Close"
		document.getElementById('closeBtn').style.display = 'none';
		
		tatabahasa.forEach(function(section, index) {
			// Membuat elemen untuk bagian tatabahasa
			let sectionDiv = document.createElement('div');
			sectionDiv.classList.add('section');
			
			let title = document.createElement('h2');
			title.textContent = section.name;
			title.classList.add('toggleBtn');
			title.onclick = function() {
				showX(index); // Panggil showX untuk menampilkan x
			};
			sectionDiv.appendChild(title);
			
			container.appendChild(sectionDiv);
		});
	}
	showName();
	
	// Fungsi untuk menampilkan bagian X (ketika diklik pada name)
	function showX(sectionIndex) {
		const container = document.getElementById('tatabahasaContainer');
		container.innerHTML = ''; // Kosongkan kontainer
		
		// Menampilkan tombol "Close"
		document.getElementById('closeBtn').style.display = 'inline-block'; // Tampilkan tombol Close
		
		let section = tatabahasa[sectionIndex];
		
		section.content.forEach(function(item) {
			// Menampilkan x
			let itemDiv = document.createElement('div');
			
			let term = document.createElement('h3');
			term.classList.add('toggleBtn');
			term.innerHTML = `<span>${item.x}</span><span>${item.y}</span>`;
			term.onclick = function() {
				toggleZ(item, itemDiv); // Panggil toggleZ untuk menampilkan/menyembunyikan z di bawah x
			};
			itemDiv.appendChild(term);
			
			container.appendChild(itemDiv);
		});
	}
	
	// Fungsi untuk menampilkan atau menyembunyikan bagian Z (contoh kalimat) di bawah X
	function toggleZ(item, itemDiv) {
		// Cek apakah contoh kalimat sudah ada di bawah item
		let existingExamples = itemDiv.querySelectorAll('.example');
		
		if (existingExamples.length === 0) {
			// Menampilkan contoh kalimat jika belum ada
			item.z.forEach(function(example) {
				let examplePara = document.createElement('p');
				examplePara.classList.add('example');
				examplePara.innerHTML = example;
				itemDiv.appendChild(examplePara);
			});
		} else {
			// Menyembunyikan contoh kalimat jika sudah ada
			existingExamples.forEach(function(example) {
				example.classList.add('example-hidden');
				// setTimeout(function() {
					example.remove();
				//  }, 300); // Menunggu animasi selesai sebelum menghapus
			});
		}
	}
	
	// Mulai dengan menampilkan nama tatabahasa
	//document.addEventListener('DOMContentLoaded', showName);
}






else if (pageId == "JFTPremium") {
	const links = [
		{
			name: "Chichi",
			url: "https://docs.google.com/forms/d/e/1FAIpQLScAedewhOrwVWbi1W-9GJ2jGugGX7yLZcCmIDj_Z4G2r8DR5Q/viewscore?viewscore=AE0zAgBGPogjV4gdL1DXmrcPy-Uo6esBJonDRXQ_O0NW-mHTPjs4-hn5vjVbjdVTKYpWCFg"
		},
		{
			name: "Toire",
			url: "https://docs.google.com/forms/d/e/1FAIpQLSf7-zXL9_pQXrzzu7j-EZePb9in86aiH_GxaAr2qBVWHH1aPA/viewscore?viewscore=AE0zAgClGp70Ss8RaVIzhjd7CWCgTSXdJc2EvFjvEaZ88KUA_P_6nz28GSOBlHryxj5OkD0"
		},
		{
			name: "Kagi",
			url: "https://docs.google.com/forms/d/e/1FAIpQLSeMd2ECn1EhSwGQMS32_jm1GkDMJyF7-BflbiqyeVVgJoQjSQ/viewscore?viewscore=AE0zAgCPfYTOPLF-GN2BxyIHjTHJxaEfAaUhUrbiReIV0x9UqK4A7cnmk0FWi7i_euYxSfM"
		},
		{
			name: "Kouen",
			url: "https://docs.google.com/forms/d/e/1FAIpQLSeFj6Nd4N99qyD8pxaTaHzMNutdM17HAxLcPBvux3tY-CRokw/viewscore?viewscore=AE0zAgBmTPFWw8C-MlrtDdnM7T2aPdCp8V45OQXpOk92JuDye06OtDr6_El7SlywDiIGAvA"
		},
		{
			name: "Kudamono",
			url: "https://docs.google.com/forms/d/e/1FAIpQLSdpIjvNyl1d2ak7EbWBHut7sQEZRPP-7RYkwsLf-RPS_oy1_A/viewscore?viewscore=AE0zAgADlGaEcM7f5bLOIYPQ5x5dJxBNB6B8bW_V2uZDiXRMwrIroTQ9ihRsFU-BCb54sII"
		},
		{
			name: "Jitensha",
			url: "https://docs.google.com/forms/d/e/1FAIpQLSf5L2NCcoV_siTvqVc7yTc0ycf5c1UtHReB5SbW3nqHFEyfMw/viewscore?viewscore=AE0zAgDEyl8tqNaU3N4uYQrEEUXA05Os1fsfsnHslI7FYPdOqk2VYHeDUUN8bW4Ps1PAi0M"
		},
		{
			name: "Kuroi",
			url: "https://docs.google.com/forms/d/e/1FAIpQLSf7NtnSKQ9H_VZOiKyJqx0d4lUnZIVkdXEsfyx5tvXSVboc0w/viewscore?viewscore=AE0zAgDLUVehVhF-5c-4phfR3tNgucCULdYPjjTCw-LClm59NGtG4LVajyl8sRemdiPczO8"
		},
		{
			name: "Sarada",
			url: "https://docs.google.com/forms/d/e/1FAIpQLSdnj8sTMYPi36poipZwK86bYGlBBv04hSjVxROcQr5OJ0O6eQ/viewscore?viewscore=AE0zAgA3MxR4qFLfQZFE9a2WMTQP1vbwOgOuFke80JM_dV6gImdxjNLzHRbv2hc9Xi2uWWQ"
		}
	];
	
	let correctPassword = 'KING RQ!!!';
	
	function checkPassword() {
		const inputPassword = document.getElementById('password').value;
		const storedPassword = localStorage.getItem('password');
		
		if (inputPassword === correctPassword) {
			localStorage.setItem('password', correctPassword); // Simpan password di localStorage
			showLinks();
		} else {
			alert('Password salah!');
			localStorage.removeItem('password'); // Hapus password jika salah
		}
	}
	
	function checkStoredPassword() {
		const storedPassword = localStorage.getItem('password');
		if (storedPassword != correctPassword) {
			localStorage.removeItem('password'); // Hapus password jika tidak sesuai
			document.getElementById('passwordContainer').style.display = 'flex'; // Tampilkan input password
		} else {
			showLinks(); // Tampilkan link jika password cocok
		}
	}
	
	window.onload = checkStoredPassword();
	
	function showLinks() {
		document.getElementById('passwordContainer').style.display = 'none';
		const container = document.getElementById('linkContainer');
		links.forEach(link => {
			const linkDiv = document.createElement('div');
			linkDiv.classList.add('link');
			linkDiv.innerHTML = `<a href="${link.url}" target="_blank">${link.name}</a>`;
			container.appendChild(linkDiv);
		});
		container.style.display = 'block'; // Tampilkan kontainer link
	}
}



else if ( pageId == "MNNKosakata" || pageId == "N5Kosakata") {

	const grupContainer = document.querySelector('.grup-container');
	const cardContainer = document.querySelector('.card-container');
	const cardsDiv = document.querySelector('.cards');
	const closeButton = document.querySelector('.close-button');
	const shuffleButton = document.querySelector('.shuffle-button');
	const resetButton = document.querySelector('.reset-button');
	const cardGroup = document.querySelector('.card-group');
	
	// Membuat tombol untuk setiap grup
	for (let i = 0; i < obj.length; i++) {
		const button = document.createElement('button');
		button.innerText = `${obj[i].id}`;
		button.className = 'group-button';
		button.addEventListener('click', () => showGroup(i));
		cardGroup.appendChild(button);
	}
	
	let currentGroup = [];
	let originalGroup = [];
	
	function showGroup(groupIndex) {
		cardsDiv.innerHTML = ''; // Bersihkan isi cardsDiv
		
		currentGroup = obj[groupIndex].content;
		originalGroup = [...currentGroup]; // Simpan salinan urutan asli
		
		window.scrollTo(0, 0); // Scroll ke atas
		
		displayCards(currentGroup);
		grupContainer.classList.add('hidden');
		cardContainer.classList.remove('hidden');
		setTimeout(() => cardContainer.classList.add('visible'), 10); // Animasi tampil
	}
	
	function displayCards(group) {
		group.forEach(card => {
			const cardElement = document.createElement('div');
			cardElement.className = 'card';
			
			cardElement.innerHTML = `
					<div class="card-inner">
						<div class="card-front">
							<p>${card.x}</p>
						</div>
						<div class="card-back">
							<p>${card.y}</p>
							<p>${card.z}</p>
						</div>
					</div>
					`;
			
			// Event listener untuk membalik kartu
			cardElement.addEventListener('click', () => {
				const cardInner = cardElement.querySelector('.card-inner');
				cardInner.classList.toggle('flipped');
				cardElement.classList.toggle('active'); // Toggle untuk border hijau
			});
			
			cardsDiv.appendChild(cardElement);
		});
	}
	
	// Tombol shuffle (acak)
	shuffleButton.addEventListener('click', () => {
		currentGroup.sort(() => Math.random() - 0.5);
		cardsDiv.innerHTML = ''; // Bersihkan isi cardsDiv
		displayCards(currentGroup); // Tampilkan kartu yang sudah diacak
	});
	
	// Tombol reset
	resetButton.addEventListener('click', () => {
		currentGroup = [...originalGroup]; // Kembalikan ke urutan asli
		cardsDiv.innerHTML = ''; // Bersihkan isi cardsDiv
		displayCards(currentGroup); // Tampilkan kembali kartu
	});
	
	// Tombol close
	closeButton.addEventListener('click', () => {
		cardContainer.classList.remove('visible'); // Animasi tutup
		setTimeout(() => {
			cardContainer.classList.add('hidden');
			grupContainer.classList.remove('hidden');
		}, 300); // Tunggu animasi selesai
	});

}

else if (pageId == "MNNKosakataKuis") {
	let submitBtn = document.querySelector("#submitBtn");
	let backBtn = document.querySelector("#backBtn");
	let header = document.querySelector(".header");
	let failed = document.querySelector(".failed");
	let currentBabIndex, timerInterval, timeLeft;
	submitBtn.disabled= true;
	// Fungsi utama untuk load menu
	function loadMainMenu() {
		const btnContent = document.getElementById('btn-content');
		btnContent.innerHTML = obj.map((bab, index) =>
		`<button onclick="startQuiz(${index})">${bab.id}</button>`).join('');
	}
	
	// Fungsi untuk mulai kuis
	function startQuiz(babIndex) {
		currentBabIndex = babIndex;
		const bab = obj[babIndex];
		header.innerHTML = obj[babIndex].id;
		timeLeft = bab.content.length * 1; // Waktu dihitung berdasarkan jumlah soal * 5 detik
		document.getElementById('button-container').style.display = 'none';
		document.getElementById('quiz-container').style.display = 'block';
		document.getElementById('result').textContent = '';
		loadQuestions(bab);
		labelClick();
		resetTimer();
		submitBtn.disabled = true;
		submitBtn.classList.remove("none");
		backBtn.classList.add("none");
	}
	
	// Fungsi untuk load soal dan pilihan jawaban
	function loadQuestions(bab) {
		const quizDiv = document.getElementById('quiz');
		quizDiv.innerHTML = '';
		
		// Acak urutan soal sebelum ditampilkan
		const shuffledQuestions = shuffleArray(bab.content);
		
		shuffledQuestions.forEach((question, index) => {
			// Mengacak pilihan jawaban untuk setiap soal
			const options = getShuffledOptions(bab.content, question.z);
			
			quizDiv.innerHTML += 
			'<div class="question">' +
				'<div class="quest">' + question.y + '</div>' +
				options.map(function(option) {
					return '<label>' +
								'<input type="radio" name="answer' + index + '" value="' + option + '" onchange="enableSubmitButton()">' +
								option +
							'</label>';
				}).join('') + // Gabungkan semua pilihan menjadi satu string
				'<div id="feedback' + index + '" class="feedback"></div>' +
			'</div>';
		});
	}
	
	function labelClick() {
		let labels = document.querySelectorAll("label");
		
		// Loop untuk menambahkan event listener pada setiap label
		labels.forEach((label) => {
		let input = label.querySelector('input[type="radio"]');
		
		// Cek jika input radio ada dan beri event listener
		if (input) {
			// Dapatkan nama dari input radio untuk memfilter
			let radioName = input.getAttribute('name');
			
			// Tambahkan event listener
			label.addEventListener("click", () => {
				// Hapus kelas hover hanya dari label dengan nama radio yang sama
				document.querySelectorAll(`label input[name="${radioName}"]`).forEach(function(eLabel) {
					eLabel.parentElement.classList.remove("hover");
				});
				
				// Tambahkan kelas hover pada label yang diklik
				label.classList.add("hover");
			});
		}
		});
	}
	// Fungsi untuk mengacak pilihan jawaban
	function getShuffledOptions(questions, correctAnswer) {
		// Ambil jawaban yang salah dari soal lainnya
		const wrongAnswers = questions.filter(q => q.z !== correctAnswer).map(q => q.z);
		// Pilih 3 jawaban salah secara acak (pastikan hanya memilih 3 pilihan yang salah)
		const randomWrongAnswers = shuffleArray(wrongAnswers).slice(0, 3);
		// Gabungkan jawaban yang benar dan 3 jawaban yang salah
		const options = [correctAnswer, ...randomWrongAnswers];
		// Acak seluruh pilihan jawaban
		return shuffleArray(options); // Mengacak pilihan
	}
	
	// Fungsi untuk mengacak array
	function shuffleArray(arr) {
		return arr.sort(() => Math.random() - 0.5);
	}
	
	// Fungsi untuk enable tombol Cek Jawaban
	function enableSubmitButton() {
		const allAnswered = [...document.querySelectorAll('.question')]
		.every((q, i) => document.querySelector(`input[name="answer${i}"]:checked`));
		document.getElementById('submitBtn').disabled = !allAnswered;
	}
	
	// Fungsi untuk memulai timer
	function resetTimer() {
		const timerDiv = document.getElementById('timer');
		timerDiv.textContent = `Waktu: ${timeLeft} detik`;
		clearInterval(timerInterval); // Clear previous interval if any
		timerInterval = setInterval(() => {
			if (timeLeft < 0) {
				clearInterval(timerInterval);
				submitBtn.disabled = false;
				submitBtn.click(); // Auto-click "Cek Jawaban"
			} else {
				timerDiv.textContent = `Waktu: ${timeLeft--} detik`;
			}
		}, 1000);
	}
	
	// Fungsi untuk mengecek jawaban
	function checkAnswer() {
		submitBtn.disabled = true;
		submitBtn.classList.add("none");
		backBtn.classList.remove("none");
		clearInterval(timerInterval);
		const bab = obj[currentBabIndex];
		const questions = document.querySelectorAll('.question');
		let correctCount = 0;
		let x = "";
		questions.forEach((q, i) => {
			const selected = document.querySelector(`input[name="answer${i}"]:checked`);
			const correctAnswer = bab.content[i].z;
			const feedbackDiv = document.getElementById(`feedback${i}`);
			if (selected) {
				if (selected.value === correctAnswer) {
					correctCount++;
					feedbackDiv.textContent = 'Benar!';
					feedbackDiv.style.color = 'green';
				} else {
					feedbackDiv.textContent = `Salah! Jawaban yang benar adalah: ${correctAnswer}`;
					feedbackDiv.style.color = 'red';
					x += `<div class="item"><b>${bab.content[i].y}</b><b></b></div>`;
				}
			} else {
				feedbackDiv.textContent = 'Belum dijawab!';
				feedbackDiv.style.color = 'orange';
				x += `<div class="item"><b>${bab.content[i].y}</b><b></b></div>`;
			}
		});
		if (x !== undefined) {
			failed.innerHTML = x;
		}
		document.getElementById('result').textContent = `Anda menjawab ${correctCount} dari ${questions.length} pertanyaan dengan benar.`;
	}
	
	// Fungsi untuk kembali ke menu utama
	function backToMain() {
		failed.innerHTML = "";
		clearInterval(timerInterval);
		document.getElementById('button-container').style.display = 'block';
		document.getElementById('quiz-container').style.display = 'none';
		document.getElementById('result').textContent = '';
	}
	
	// Load menu utama ketika halaman dimuat
	window.onload = loadMainMenu;
}






else if (pageId == "SSWPMKosakata") {
	const grupContainer = document.querySelector('.grup-container');
	const cardContainer = document.querySelector('.card-container');
	const cardsDiv = document.querySelector('.cards');
	const closeButton = document.querySelector('.close-button');
	const shuffleButton = document.querySelector('.shuffle-button');
	const resetButton = document.querySelector('.reset-button');
	const cardGroup = document.querySelector('.card-group');
	const itemsPerGroup = 30;
	let currentGroup = [];
	let originalGroup = [];
	
	// Membuat tombol untuk setiap grup
	for (let i = 0; i < Math.ceil(obj.length / itemsPerGroup); i++) {
		const button = document.createElement('button');
		button.innerText = `Kartu ${i + 1}`;
		button.className = 'group-button';
		button.addEventListener('click', () => showGroup(i));
		cardGroup.appendChild(button);
	}
	
	function showGroup(groupIndex) {
		cardsDiv.innerHTML = ''; // Bersihkan isi cardsDiv
		const start = groupIndex * itemsPerGroup;
		const end = start + itemsPerGroup;
		currentGroup = obj.slice(start, end);
		originalGroup = [...currentGroup]; // Simpan salinan urutan asli
		
		window.scrollTo(0,0)
		
		displayCards(currentGroup);
		grupContainer.classList.add('hidden');
		cardContainer.classList.remove('hidden');
		setTimeout(() => cardContainer.classList.add('visible'), 10); // Animasi
	}
	
	function displayCards(group) {
		group.forEach(card => {
		const cardElement = document.createElement('div');
		cardElement.className = 'card';
		
		// Struktur kartu dengan kemampuan flip
		cardElement.innerHTML = `
				<div class="card-inner">
					<div class="card-front">
						<p>${card.x}</p>
					</div>
					<div class="card-back">
						<p>${card.y}</p>
						<p>${card.z}</p>
					</div>
				</div>`;
		
		// Event listener untuk membalik kartu
		cardElement.addEventListener('click', () => {
			const cardInner = cardElement.querySelector('.card-inner');
			cardInner.classList.toggle('flipped'); // Toggle untuk flip
			cardElement.classList.toggle('active'); // Toggle untuk border hijau
		});
			
			cardsDiv.appendChild(cardElement);
		});
	}
	
	shuffleButton.addEventListener('click', () => {
		currentGroup.sort(() => Math.random() - 0.5);
		cardsDiv.innerHTML = ''; // Bersihkan isi cardsDiv
		displayCards(currentGroup); // Tampilkan kartu yang sudah diacak
	});
	
	resetButton.addEventListener('click', () => {
		currentGroup = [...originalGroup]; // Kembalikan ke urutan asli
		cardsDiv.innerHTML = ''; // Bersihkan isi cardsDiv
		displayCards(currentGroup); // Tampilkan kembali kartu
	});
	
	closeButton.addEventListener('click', () => {
		cardContainer.classList.remove('visible'); // Animasi tutup
		setTimeout(() => {
			cardContainer.classList.add('hidden');
			grupContainer.classList.remove('hidden');
		}, 300); // Tunggu animasi selesai
	});
}









else if (pageId == "Credits") {
	const credits = [
		{ text: "Vicky", audio: "https://raw.githubusercontent.com/Vickyrapp/Data/main/Hana/Media/voice1.mp3", translateX: "40%", translateY: "50%" },
		{ text: "Faros", audio: "https://raw.githubusercontent.com/Vickyrapp/Data/main/Hana/Media/voice2.mp3", translateX: "-20%", translateY: "40%" },
		{ text: "Bawon", audio: "https://raw.githubusercontent.com/Vickyrapp/Data/main/Hana/Media/voice3.mp3", translateX: "-40%", translateY: "40%" },
		{ text: "Dehan", audio: "https://raw.githubusercontent.com/Vickyrapp/Data/main/Hana/Media/voice4.mp3", translateX: "40%", translateY: "10%" },
		{ text: "Imam", audio: "https://raw.githubusercontent.com/Vickyrapp/Data/main/Hana/Media/voice5.mp3", translateX: "40%", translateY: "-60%" },
		{ text: "Yoga", audio: "https://raw.githubusercontent.com/Vickyrapp/Data/main/Hana/Media/voice6.mp3", translateX: "-20%", translateY: "-40%" },
		{ text: "Fauzi", audio: "https://raw.githubusercontent.com/Vickyrapp/Data/main/Hana/Media/voice7.mp3", translateX: "-50%", translateY: "-30%" }
	];
	
	// Objek untuk informasi tentang aplikasi
	const appInfo = [
		{
			version: "人のクラス",
			description: ["デハン", "ヨガ", "ヴィッキー", "イマム", "ファウザィ", "ファロッス", "バヲン"]
		},
		{
			version: "Versi: 1.0",
			description: ["Pembuatan Aplikasi.", "Menambahkan kartu kanji JFT"]
		},
		{
			version: "Versi: 1.1",
			description: ["Menambahkan fitur kanji kuis JFT", "Mengoptimalkan Aplikasi"]
		},
		{
			version: "Versi: 1.2",
			description: ["Menambahkan credit", "Responsif layar", "Mengoptimalkan Aplikasi"]
		},
		{
			version: "Versi: 1.3",
			description: ["Menambahkan main menu", "Menambahkan fitur kosakata JFT", "Mengoptimalkan tampilan"]
		},
		{
			version: "Versi: 1.4",
			description: ["Menambahkan JFT Premium", "Menambahkan Kotoba PM", "Mengoptimalkan tampilan"]
		},
		{
			version: "Versi: 1.5",
			description: ["Menambahkan Tatabahasa JFT", "Memperbaiki UI", "Mengoptimalkan Aplikasi"]
		},
		{
			version: "Versi: 1.6",
			description: ["Menambahkan Kosakata JLPT", "Memperbaiki UI", "Mengoptimalkan Aplikasi", "Menambahkan Detail Credit"]
		},
		{
			version: "Versi: ???",
			description: ["Matte kuremasenka, onii chaaaannn...", ""]
		}
	];
	
	function populateAbout() {
		const aboutContent = document.getElementById('about-content');
		aboutContent.innerHTML = '';
		
		appInfo.forEach(info => {
			const versionElem = document.createElement('h3');
			versionElem.textContent = `${info.version}`;
			aboutContent.appendChild(versionElem);
			
			info.description.forEach(desc => {
				const descElem = document.createElement('p');
				descElem.textContent = desc;
				aboutContent.appendChild(descElem);
			});
		});
	}
	
	function populateCredits() {
		const textContent = document.getElementById('text-content');
		textContent.innerHTML = '';
		
		credits.forEach(credit => {
			const p = document.createElement('p');
			p.textContent = credit.text;
			p.onclick = () => playVoice(credit);
			textContent.appendChild(p);
		});
	}
	
	function showCredits() {
		document.getElementById('main').style.display = 'none';
		document.getElementById('credit').style.display = 'block';
		document.getElementById('audio').play();
		populateCredits();
	}
	
	function showAbout() {
		document.getElementById('main').style.display = 'none';
		document.getElementById('about').style.display = 'block';
		document.getElementById('audio').play(); // Putar audio saat halaman tentang ditampilkan
		populateAbout(); // Mengisi informasi tentang aplikasi
	}
	
	function showMain() {
		document.getElementById('credit').style.display = 'none';
		document.getElementById('about').style.display = 'none';
		document.getElementById('main').style.display = 'block';
		document.getElementById('audio').pause();
		document.getElementById('audio').volume = 1;
		resetTransform();
	}
	
	function playVoice(credit) {
		const audio = document.getElementById('audio');
		const voice = new Audio(credit.audio);
		const video = document.getElementById('video');
		
		audio.volume = 0.5;
		voice.play();
		
		voice.onended = function() {
			audio.volume = 1;
		};
		
		video.style.transform = `translate(${credit.translateX}, ${credit.translateY}) scale(2)`;
		setTimeout(resetTransform, 5000);
	}
	
	function resetTransform() {
		const video = document.getElementById('video');
		video.style.transform = 'translate(0, 0) scale(1)';
	}
	
}
