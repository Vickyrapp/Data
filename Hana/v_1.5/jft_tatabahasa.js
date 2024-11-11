const tatabahasa = [
	{
		name: "て形",
		content: [
			{x: "て+みます", y: "Mencoba", z: ["食べてみます <br> Saya akan coba makan.", "この映画を見てみます <br> Saya akan coba menonton film ini.", "新しいことをしてみます <br> Saya akan mencoba hal baru."]},
			{x: "て+しまいました", y: "Tidak sengaja", z: ["電話をかけてしまいました <br> Saya sudah menelepon (tanpa sengaja).", "財布を忘れてしまいました <br> Saya lupa membawa dompet.", "お金を使いすぎてしまいました <br> Saya sudah menghabiskan uang terlalu banyak."]},
			{x: "て+たまらない", y: "Tak tertahankan", z: ["お腹がすいてたまらない <br> Saya sangat lapar.", "暑くてたまらない <br> Panas sekali, tak tertahankan.", "待ちきれなくてたまらない <br> Saya tidak bisa menunggu lagi."]},
			{x: "て+います", y: "Sedang", z: ["勉強しています <br> Saya sedang belajar.", "仕事をしています <br> Saya sedang bekerja.", "今、映画を見ています <br> Saya sedang menonton film."]},
			{x: "て+ください", y: "Tolong", z: ["これを見てください <br> Tolong lihat ini.", "ドアを閉めてください <br> Tolong tutup pintunya.", "この問題を解いてください <br> Tolong selesaikan soal ini."]},
			{x: "て+もいいです", y: "Bolehkah", z: ["ここで写真を撮ってもいいですか <br> Bolehkah saya mengambil foto di sini?", "この本を借りてもいいですか <br> Bolehkah saya meminjam buku ini?", "タバコを吸ってもいいですか <br> Bolehkah saya merokok?"]},
			{x: "て+はいけません", y: "Jangan", z: ["ここでタバコを吸ってはいけません <br> Jangan merokok di sini.", "遅刻してはいけません <br> Jangan terlambat.", "嘘をついてはいけません <br> Jangan berbohong."]},
			{x: "て+から", y: "Setelah", z: ["学校から帰ってから <br> Setelah pulang dari sekolah.", "映画を見てから <br> Setelah menonton film.", "買い物してから <br> Setelah berbelanja."]},
			{x: "て+きた", y: "Telah datang", z: ["先生が来てきた <br> Guru sudah datang.", "雨が降ってきた <br> Hujan baru turun.", "新しいスタッフが来てきた <br> Staf baru sudah datang."]},
			{x: "て+ばかり", y: "Terus-menerus", z: ["食べたばかりです <br> Saya baru saja makan.", "勉強したばかりです <br> Saya baru saja belajar.", "仕事を終えたばかりです <br> Saya baru saja selesai bekerja."]},
			{x: "て+も", y: "Walaupun", z: ["雨が降っても行きます <br> Walaupun hujan, saya akan pergi.", "お金がなくても買います <br> Walaupun tidak ada uang, saya akan membeli.", "疲れてもやります <br> Walaupun capek, saya akan melakukannya."]},
			{x: "て+はじめて", y: "Semenjak", z: ["日本に来てはじめて <br> Sejak datang ke Jepang.", "彼と会ってはじめて <br> Sejak bertemu dengannya.", "東京に引っ越してはじめて <br> Sejak pindah ke Tokyo."]},
			{x: "ている+ところ", y: "Sedang berlangsung", z: ["今、食事しているところです <br> Saat ini saya sedang makan.", "勉強しているところです <br> Saya sedang belajar.", "今、電話しているところです <br> Saat ini saya sedang menelepon."]},
			{x: "て+いただけませんか", y: "Dapatkah (me-kan)", z: ["手伝っていただけませんか <br> Dapatkah Anda membantu?", "この書類を渡していただけませんか <br> Dapatkah Anda menyerahkan dokumen ini?", "それを教えていただけませんか <br> Dapatkah Anda memberitahukan itu?"]},
			{x: "て+くれます", y: "Menerima (saya)", z: ["手伝ってくれますか <br> Bisakah kamu membantu saya?", "教えてくれますか <br> Bisakah kamu memberitahuku?", "これをください <br> Tolong beri saya ini."]},
			{x: "て+あげます", y: "Memberikan", z: ["プレゼントをあげます <br> Saya akan memberikan hadiah.", "手伝ってあげます <br> Saya akan membantu (kamu).", "何かを教えてあげます <br> Saya akan mengajarkan sesuatu."]},
			{x: "て+もらいます", y: "Menerima", z: ["助けてもらいます <br> Saya menerima bantuan.", "お金をもらいます <br> Saya menerima uang.", "意見をもらいます <br> Saya menerima pendapat."]},
			{x: "て+あります", y: "Sudah dilakukan", z: ["ドアが開けてあります <br> Pintu sudah dibuka.", "準備ができてあります <br> Persiapan sudah dilakukan.", "本が机の上に置いてあります <br> Buku sudah diletakkan di atas meja."]},
			{x: "て+いきます", y: "Baru akan", z: ["これから勉強していきます <br> Saya akan mulai belajar sekarang.", "映画を見に行きます <br> Saya akan pergi menonton film.", "出発していきます <br> Saya akan berangkat sekarang."]},
			{x: "て+きます", y: "Akan datang", z: ["すぐに戻ってきます <br> Saya akan kembali segera.", "日本に行ってきます <br> Saya akan pergi ke Jepang.", "明日またきます <br> Saya akan datang lagi besok."]},
			{x: "て+おきます", y: "Terlebih dahulu", z: ["出かける前に掃除しておきます <br> Saya akan bersihkan sebelum keluar.", "宿題をしておきます <br> Saya akan mengerjakan PR terlebih dahulu.", "メールを送っておきます <br> Saya akan mengirim email terlebih dahulu."]},
			{x: "て+ばかりはいられない", y: "Tidak bisa terus begitu", z: ["遊んでばかりはいられない <br> Tidak bisa terus bermain.", "寝てばかりはいられない <br> Tidak bisa terus tidur.", "無駄遣いしてばかりはいられない <br> Tidak bisa terus menghabiskan uang."]},
			{x: "て+はならない", y: "Jangan pernah", z: ["嘘をついてはならない <br> Jangan pernah berbohong.", "ここで走ってはならない <br> Jangan pernah berlari di sini.", "諦めてはならない <br> Jangan pernah menyerah."]},
			{x: "て+まで", y: "Sampai", z: ["7時まで勉強します <br> Saya belajar sampai jam 7.", "仕事が終わるまで待ちます <br> Saya akan menunggu sampai pekerjaan selesai.", "ここにいるまで待ってください <br> Tolong tunggu sampai saya di sini."]},
			{x: "て+いらい", y: "Sejak", z: ["日本に来て以来 <br> Sejak datang ke Jepang.", "彼に会って以来 <br> Sejak bertemu dengannya.", "新しい仕事を始めて以来 <br> Sejak memulai pekerjaan baru."]},
			{x: "いくら+て+も", y: "Seberat apapun", z: ["いくら疲れていても行きます <br> Walaupun saya sangat lelah, saya akan pergi.", "いくら忙しくても会います <br> Walaupun sangat sibuk, saya akan bertemu.", "いくらお金がなくても、やりたいことをします <br> Seberat apapun tidak punya uang, saya akan melakukan yang saya inginkan."]}
		]
	},
	{
		name: "た形",
		content: [
			{x: "た+ことがあります", y: "Pernah", z: ["日本に行ったことがあります <br> Saya pernah pergi ke Jepang.", "映画を見たことがあります <br> Saya pernah menonton film.", "フランス語を勉強したことがあります <br> Saya pernah belajar bahasa Perancis."]},
			{x: "た+ほうがいいです", y: "Sebaiknya", z: ["早く寝たほうがいいです <br> Sebaiknya tidur lebih awal.", "もっと勉強したほうがいいです <br> Sebaiknya belajar lebih banyak.", "風邪をひいたら、休んだほうがいいです <br> Sebaiknya istirahat jika kamu sakit."]},
			{x: "た+ばかり", y: "Baru saja", z: ["食べたばかりです <br> Saya baru saja makan.", "帰ったばかりです <br> Saya baru saja pulang.", "映画を見たばかりです <br> Saya baru saja menonton film."]},
			{x: "た+あとで", y: "Setelah", z: ["勉強したあとで映画を見ます <br> Setelah belajar, saya akan menonton film.", "昼ごはんを食べたあとで散歩します <br> Setelah makan siang, saya akan berjalan-jalan.", "宿題をしたあとで寝ます <br> Setelah mengerjakan PR, saya akan tidur."]},
			{x: "た+ら", y: "Kalau", z: ["仕事が終わったら帰ります <br> Kalau pekerjaan selesai, saya akan pulang.", "雨が降ったら、出かけません <br> Kalau hujan, saya tidak akan keluar.", "もし時間があったら、手伝ってください <br> Kalau ada waktu, tolong bantu saya."]},
			{x: "た+がります", y: "Ingin (orang lain)", z: ["彼は帰りたがります <br> Dia ingin pulang.", "子供は遊びたがります <br> Anak-anak ingin bermain.", "彼女は映画を見たがります <br> Dia ingin menonton film."]},
			{x: "た+ところ", y: "Baru saja", z: ["今帰ったところです <br> Saya baru saja pulang.", "電話したところです <br> Saya baru saja menelepon.", "ちょうど着いたところです <br> Saya baru saja sampai."]},
			{x: "た+らいいですか", y: "Sebaiknya apa", z: ["これからどうしたらいいですか <br> Sebaiknya saya apa sekarang?", "明日、何をしたらいいですか <br> Sebaiknya apa yang saya lakukan besok?", "もし問題があれば、どうしたらいいですか <br> Sebaiknya apa yang saya lakukan jika ada masalah?"]},
			{x: "た+ばあいは", y: "Apabila telah", z: ["問題が解決したばあいは <br> Apabila masalah telah diselesaikan.", "遅刻したばあいは <br> Apabila terlambat.", "手伝ってくれるばあいは <br> Apabila dia membantu."]},
			{x: "た+とおりに", y: "Sesuai dengan yang telah", z: ["先生の言ったとおりにします <br> Saya akan melakukan sesuai dengan yang dikatakan guru.", "説明したとおりにやります <br> Saya akan melakukannya sesuai dengan penjelasan.", "あなたの指示通りに作ります <br> Saya akan membuatnya sesuai dengan petunjukmu."]},
			{x: "た+たり、たり+します", y: "Dan", z: ["勉強したり、遊んだりします <br> Saya belajar dan bermain.", "本を読んだり、音楽を聞いたりします <br> Saya membaca buku dan mendengarkan musik.", "映画を見たり、買い物したりします <br> Saya menonton film dan berbelanja."]},
			{x: "た+らいいですか", y: "Sebaiknya apa", z: ["これをどうしたらいいですか <br> Sebaiknya saya apa dengan ini?", "質問があったら、どうしたらいいですか <br> Sebaiknya apa yang saya lakukan jika ada pertanyaan?", "どこに行ったらいいですか <br> Sebaiknya saya pergi ke mana?"]},
			{x: "た+のに", y: "Padahal sudah", z: ["準備したのに、忘れました <br> Padahal sudah siap, saya lupa.", "買ったのに、使いませんでした <br> Padahal sudah membeli, saya tidak menggunakannya.", "勉強したのに、テストは失敗しました <br> Padahal sudah belajar, saya gagal di ujian."]},
			{x: "た+かいもなく", y: "Tanpa ada hasil", z: ["努力したかいもなく、失敗しました <br> Tanpa ada hasil dari usaha saya, saya gagal.", "お金を使ったかいもなく、何も買えませんでした <br> Tanpa ada hasil dari uang yang saya habiskan, saya tidak bisa membeli apa-apa.", "時間をかけたかいもなく、成功しませんでした <br> Tanpa ada hasil dari waktu yang saya habiskan, saya tidak berhasil."]},
			{x: "た+としたら", y: "Kalau seandainya", z: ["もし彼が来たとしたら <br> Kalau seandainya dia datang.", "試験に合格したとしたら <br> Kalau seandainya saya lulus ujian.", "お金があったとしたら <br> Kalau seandainya saya punya uang."]},
			{x: "た+のみならず", y: "Bahkan ~ saja", z: ["彼は日本語のみならず、英語も話せます <br> Dia bisa berbicara bahasa Jepang, bahkan bahasa Inggris.", "映画だけでなく、本も好きです <br> Saya suka film, bahkan buku.", "彼女は歌うのみならず、踊ることもできます <br> Dia tidak hanya bisa bernyanyi, tetapi juga bisa menari."]}
		]
	},
	{
		name: "る形",
		content: [
			{x: "る+ばあいは", y: "Apabila", z: ["天気が悪い場合は、外に行きません <br> Apabila cuaca buruk, saya tidak akan keluar.", "仕事が終わらない場合は、残業します <br> Apabila pekerjaan belum selesai, saya akan lembur.", "約束を守らない場合は、信用しません <br> Apabila tidak menepati janji, saya tidak akan percaya."]},
			{x: "る+ことができます", y: "Bisa", z: ["日本語を話すことができます <br> Saya bisa berbicara bahasa Jepang.", "ピアノを弾くことができます <br> Saya bisa bermain piano.", "泳ぐことができます <br> Saya bisa berenang."]},
			{x: "る+ことにします", y: "Memutuskan", z: ["明日、旅行に行くことにします <br> Saya memutuskan untuk pergi berlibur besok.", "彼に会うことにします <br> Saya memutuskan untuk bertemu dengan dia.", "この仕事を引き受けることにします <br> Saya memutuskan untuk menerima pekerjaan ini."]},
			{x: "る+ことになる", y: "Diputuskan", z: ["この計画は実行されることになります <br> Rencana ini diputuskan untuk dilaksanakan.", "次の会議はオンラインで行うことになります <br> Pertemuan berikutnya akan dilakukan secara online.", "休暇は来週取ることになります <br> Liburan diputuskan untuk diambil minggu depan."]},
			{x: "る+はずです", y: "Semestinya", z: ["彼はもう着いたはずです <br> Dia semestinya sudah sampai.", "この問題は解決したはずです <br> Masalah ini semestinya sudah diselesaikan.", "彼女は今日中に来るはずです <br> Dia semestinya datang hari ini."]},
			{x: "る+べきです", y: "Seharusnya", z: ["もっと勉強するべきです <br> Seharusnya belajar lebih banyak.", "早く寝るべきです <br> Seharusnya tidur lebih awal.", "環境を守るべきです <br> Seharusnya melindungi lingkungan."]},
			{x: "る+おかげで", y: "Berkat/atas jasa", z: ["おかげでテストに合格しました <br> Berkat dia, saya lulus ujian.", "あなたのおかげで助かりました <br> Berkat bantuanmu, saya selamat.", "彼のおかげで仕事が見つかりました <br> Berkat dia, saya menemukan pekerjaan."]},
			{x: "る+せいで", y: "Gara-gara", z: ["雨のせいで遅刻しました <br> Gara-gara hujan, saya terlambat.", "病気のせいで仕事を休みました <br> Gara-gara sakit, saya libur dari kerja.", "騒音のせいで集中できません <br> Gara-gara kebisingan, saya tidak bisa fokus."]},
			{x: "る+せいか", y: "Apakah gara-gara", z: ["風邪のせいか、今日は調子が悪い <br> Apakah gara-gara flu, hari ini saya merasa tidak enak?", "寝不足のせいか、頭が痛い <br> Apakah gara-gara kurang tidur, kepala saya sakit?", "ストレスのせいか、食欲がない <br> Apakah gara-gara stres, saya tidak nafsu makan?"]},
			{x: "る+つもり", y: "Bermaksud", z: ["明日、買い物に行くつもりです <br> Saya bermaksud pergi berbelanja besok.", "夜、映画を見るつもりです <br> Saya bermaksud menonton film malam ini.", "休暇を取るつもりです <br> Saya bermaksud mengambil liburan."]},
			{x: "る+かもしれません", y: "Kemungkinan", z: ["明日は雨かもしれません <br> Besok mungkin hujan.", "彼は来ないかもしれません <br> Dia mungkin tidak datang.", "それは本当かもしれません <br> Itu mungkin benar."]},
			{x: "る+そうです", y: "Katanya", z: ["彼は引っ越すそうです <br> Katanya dia akan pindah.", "その店は閉店するそうです <br> Katanya toko itu akan tutup.", "今日は忙しいそうです <br> Katanya hari ini sibuk."]},
			{x: "る+ようです", y: "Rupanya", z: ["彼は帰るようです <br> Rupanya dia akan pulang.", "天気は悪くなるようです <br> Rupanya cuacanya akan memburuk.", "この問題は解決したようです <br> Rupanya masalah ini sudah diselesaikan."]},
			{x: "る+ように", y: "Supaya", z: ["もっと勉強するようにしてください <br> Tolong belajar lebih banyak.", "遅れないように気をつけてください <br> Harap berhati-hati supaya tidak terlambat.", "早く寝るようにしましょう <br> Mari kita usahakan untuk tidur lebih awal."]},
			{x: "る+ところ", y: "Baru akan", z: ["今から出かけるところです <br> Saya baru akan pergi sekarang.", "映画を見に行くところです <br> Saya baru akan pergi menonton film.", "昼食を取るところです <br> Saya baru akan makan siang."]},
			{x: "る+んです", y: "Penegasan", z: ["これは必要なんです <br> Ini memang diperlukan.", "あなたがやるんです <br> Itu memang tugasmu.", "私が行くんです <br> Saya yang akan pergi."]},
			{x: "る+おそれいがある", y: "Ditakutkan", z: ["遅刻したおそれいがある <br> Ditakutkan saya terlambat.", "雨が降るおそれいがある <br> Ditakutkan hujan akan turun.", "交通事故のおそれいがある <br> Ditakutkan ada kecelakaan lalu lintas."]},
			{x: "る+なら", y: "Kalau", z: ["行くなら、今すぐ行きましょう <br> Kalau mau pergi, mari kita pergi sekarang.", "それなら、私がやります <br> Kalau begitu, saya yang akan melakukannya.", "あなたが行くなら、私も行きます <br> Kalau kamu pergi, saya juga akan pergi."]},
			{x: "る+とき", y: "Ketika", z: ["勉強するとき、静かな場所を選びます <br> Ketika belajar, saya memilih tempat yang tenang.", "旅行するとき、カメラを持って行きます <br> Ketika bepergian, saya membawa kamera.", "家に帰るとき、スーパーに寄ります <br> Ketika pulang ke rumah, saya mampir ke supermarket."]},
			{x: "る+ようにします", y: "Mengupayakan", z: ["毎日運動するようにします <br> Saya akan berusaha untuk berolahraga setiap hari.", "早く寝るようにします <br> Saya akan berusaha tidur lebih cepat.", "健康に気をつけるようにします <br> Saya akan berusaha menjaga kesehatan."]},
			{x: "る+ようになります", y: "Supaya menjadi", z: ["日本語が話せるようになります <br> Supaya bisa berbicara bahasa Jepang.", "もっと速く走れるようになります <br> Supaya bisa berlari lebih cepat.", "もっと上手に料理できるようになります <br> Supaya bisa memasak lebih baik."]},
			{x: "る+かどうか", y: "Iya atau tidak", z: ["彼が来るかどうかは分かりません <br> Saya tidak tahu apakah dia datang atau tidak.", "明日、仕事があるかどうか確認してください <br> Tolong cek apakah besok ada pekerjaan atau tidak.", "それが本当かどうか確かめてください <br> Tolong pastikan apakah itu benar atau tidak."]},
			{x: "る+ので", y: "Karena", z: ["雨が降るので、外に出ません <br> Karena hujan, saya tidak akan keluar.", "遅刻したので、謝ります <br> Karena terlambat, saya akan meminta maaf.", "忙しいので、後でかけなおします <br> Karena sibuk, saya akan menelepon kembali nanti."]},
			{x: "る+といっていました", y: "Telah Berkata", z: ["彼は来るといっていました <br> Dia telah berkata bahwa dia akan datang.", "先生は宿題を出さないといっていました <br> Guru telah berkata bahwa tidak ada pekerjaan rumah.", "彼女は休むといっていました <br> Dia telah berkata bahwa dia akan istirahat."]},
			{x: "る+とおりに", y: "Sesuai Dengan", z: ["指示に従って行動するようにしてください <br> Tolong bertindak sesuai dengan instruksi.", "先生の言うとおりに、すぐに始めます <br> Saya akan mulai segera sesuai dengan yang dikatakan guru.", "約束したとおりに、時間通りに到着しました <br> Saya tiba tepat waktu seperti yang dijanjikan."]},
			{x: "る+のに", y: "Padahal", z: ["準備したのに、忘れ物をしました <br> Padahal sudah siap, saya lupa membawa sesuatu.", "高いお金を払ったのに、サービスが悪かった <br> Padahal sudah membayar mahal, pelayanannya buruk.", "一生懸命練習したのに、試合に負けました <br> Padahal sudah berlatih keras, saya kalah dalam pertandingan."]},
			{x: "る+ために", y: "Untuk", z: ["成功するために、もっと努力しなければなりません <br> Untuk sukses, saya harus berusaha lebih keras.", "日本語を勉強するために、毎日練習しています <br> Saya belajar bahasa Jepang setiap hari untuk bisa menguasainya.", "健康のために、毎朝ジョギングをしています <br> Saya jogging setiap pagi untuk kesehatan."]},
			{x: "る+とつたえていただけませんか", y: "Dapatkah menyampaikan", z: ["私にその情報を伝えていただけませんか <br> Dapatkah Anda menyampaikan informasi itu kepada saya?", "次の会議の日程を教えていただけませんか <br> Dapatkah Anda memberitahukan jadwal pertemuan berikutnya?", "先生によろしく伝えていただけませんか <br> Dapatkah Anda menyampaikan salam saya kepada guru?"]},
			{x: "る+よていです", y: "Rencana", z: ["来週、東京に行く予定です <br> Saya berencana untuk pergi ke Tokyo minggu depan.", "今日は友達と会う予定です <br> Saya berencana untuk bertemu teman hari ini.", "午後、会議がある予定です <br> Ada rapat di sore hari sesuai rencana."]},
			{x: "る+というみです", y: "Berarti", z: ["これは試験に合格するという意味です <br> Ini berarti lulus ujian.", "その計画は変更するという意味です <br> Itu berarti rencana tersebut diubah.", "彼の言葉は謝罪という意味です <br> Kata-katanya berarti permintaan maaf."]},
			{x: "る+のをしっていますか", y: "Tahukah bahwa", z: ["このレストランが有名だというのを知っていますか <br> Tahukah Anda bahwa restoran ini terkenal?", "彼女が日本に住んでいるのを知っていますか <br> Tahukah Anda bahwa dia tinggal di Jepang?", "それが禁止されているのを知っていますか <br> Tahukah Anda bahwa itu dilarang?"]},
			{x: "る+のをわすれます", y: "Lupa", z: ["鍵を家に忘れました <br> Saya lupa kunci di rumah.", "宿題を忘れました <br> Saya lupa pekerjaan rumah.", "財布を家に忘れてきました <br> Saya lupa dompet di rumah."]},
			{x: "る+のは", y: "Menyatakan Pendapat", z: ["それは難しいのは明らかです <br> Jelas bahwa itu sulit.", "この映画は面白いのは間違いないです <br> Tidak diragukan lagi bahwa film ini menarik.", "彼の説明は正しいのは確かです <br> Pasti penjelasannya benar."]},
			{x: "る+のが", y: "Menyatakan Kelebihan/Kekurangan", z: ["彼は走るのが速いです <br> Dia cepat berlari.", "そのレストランの料理はおいしいのが特徴です <br> Masakan restoran itu enak.", "彼女はピアノを弾くのが得意です <br> Dia pandai bermain piano."]},
			{x: "る+べきです", y: "Seharusnya", z: ["早く寝るべきです <br> Seharusnya tidur lebih awal.", "勉強するべきです <br> Seharusnya belajar.", "彼に謝るべきです <br> Seharusnya meminta maaf padanya."]},
			{x: "る+といいます", y: "Katanya", z: ["彼は来ないと言いました <br> Dia berkata bahwa dia tidak datang.", "先生はこの課題を提出するようにと言いました <br> Guru mengatakan agar tugas ini diserahkan.", "彼女は海外に行くと言っています <br> Dia berkata bahwa dia akan pergi ke luar negeri."]},
			{x: "る+まえに", y: "Sebelum", z: ["寝る前に本を読むことにしています <br> Saya membaca buku sebelum tidur.", "出かける前にメールを確認してください <br> Pastikan memeriksa email sebelum berangkat.", "勉強を始める前に休憩を取ります <br> Saya beristirahat sebentar sebelum mulai belajar."]},
			{x: "る+ことです", y: "Tentang", z: ["日本語を勉強することです <br> Tentang belajar bahasa Jepang.", "旅行に行くことです <br> Tentang pergi berlibur.", "健康管理することです <br> Tentang menjaga kesehatan."]},
			{x: "る+のに", y: "Fungsi (Barang)", z: ["この道具は便利なのに使わない <br> Alat ini berguna, tetapi tidak digunakan.", "その機械は仕事のためにあります <br> Mesin itu ada untuk pekerjaan.", "この車は移動のために使います <br> Mobil ini digunakan untuk bepergian."]},
			{x: "る+し", y: "Dan", z: ["映画を見たし、音楽も聴いたし <br> Saya menonton film dan juga mendengarkan musik.", "彼はとても優しいし、頼りになる <br> Dia sangat baik dan bisa diandalkan.", "今日は忙しいし、疲れた <br> Hari ini sibuk dan saya lelah."]},
			{x: "る+でしょ", y: "Mungkin", z: ["彼は来るでしょ <br> Dia mungkin akan datang.", "天気が良いから、散歩に行くでしょ <br> Karena cuacanya bagus, mungkin saya akan berjalan-jalan.", "明日は忙しいでしょ <br> Besok mungkin saya sibuk."]},
			{x: "る+か", y: "Kah", z: ["それは本当か <br> Apakah itu benar?", "彼女が行くか <br> Apakah dia pergi?", "その映画は面白いか <br> Apakah film itu menarik?"]},
			{x: "る+たびに", y: "Setiap Kali", z: ["この店に来るたびに、新しい商品がある <br> Setiap kali saya datang ke toko ini, ada barang baru.", "彼は会うたびに元気になっている <br> Setiap kali saya bertemu dengannya, dia semakin sehat.", "旅行に行くたびに、思い出が増える <br> Setiap kali saya bepergian, kenangannya bertambah."]},
			{x: "る+うちに", y: "Selagi", z: ["早く起きるうちに勉強を始める <br> Selagi saya bangun pagi, saya mulai belajar.", "家にいるうちに掃除をしよう <br> Selagi di rumah, mari kita bersihkan.", "寒いうちに暖かいコーヒーを飲んで <br> Selagi dingin, saya minum kopi hangat."]},
			{x: "る+かぎり", y: "Sebatas", z: ["できるかぎり手伝います <br> Saya akan membantu sebatas kemampuan saya.", "私が知っているかぎり、この問題は解決できます <br> Sebatas yang saya tahu, masalah ini bisa diselesaikan.", "君が頼むかぎり、何でも手伝うよ <br> Sebatas kamu meminta, saya akan membantu apa saja."]},
			{x: "る+みたい", y: "Seperti", z: ["彼は私みたいに見える <br> Dia terlihat seperti saya.", "この犬は猫みたいに静かです <br> Anjing ini diam seperti kucing.", "あの人は映画の俳優みたいにかっこいい <br> Orang itu tampan seperti aktor film."]},
			{x: "る+みたいに", y: "Bagaikan", z: ["彼女は天使みたいに優しい <br> Dia baik bagaikan malaikat.", "この町はおとぎ話みたいに美しい <br> Kota ini indah bagaikan dongeng.", "彼の歌声は鳥みたいに素晴らしい <br> Suaranya luar biasa, bagaikan suara burung."]},
			{x: "る+ように", y: "Bagikan", z: ["この問題は解決するように努力します <br> Saya akan berusaha untuk menyelesaikan masalah ini.", "自分の健康に気をつけるようにしています <br> Saya berusaha untuk menjaga kesehatan saya.", "良い結果が出るように頑張ります <br> Saya akan berusaha semaksimal mungkin agar hasilnya baik."]},
			{x: "る+そういない", y: "Tidak Salah Lagi", z: ["彼がここに来るそういない <br> Dia pasti datang ke sini.", "これは間違いないそういない <br> Ini pasti benar.", "彼女がそれを知っているそういない <br> Dia pasti tahu tentang itu."]},
			{x: "る+らしく", y: "Seperti", z: ["彼はスポーツマンらしく、元気だ <br> Dia tampak sehat seperti seorang atlet.", "彼女は母親らしく、優しい <br> Dia sangat baik hati, seperti seorang ibu.", "その犬は犬らしく、元気に走っている <br> Anjing itu lari dengan ceria, seperti anjing pada umumnya."]},
			{x: "る+わけがない", y: "Mustahil", z: ["そんなことができるわけがない <br> Itu mustahil dilakukan.", "彼がそんなことを言うわけがない <br> Dia mustahil mengatakan hal seperti itu.", "私がそんなに速く走るわけがない <br> Mustahil saya bisa berlari secepat itu."]},
			{x: "る+かわりに", y: "Sebagai Gantinya", z: ["私は行けないので、妹が行くかわりに行きます <br> Karena saya tidak bisa pergi, adik saya yang pergi menggantikan saya.", "お金のかわりに、この商品をプレゼントします <br> Sebagai gantinya uang, saya akan memberikan barang ini.", "その問題を解決するかわりに、他の方法を試してみます <br> Sebagai gantinya, saya akan mencoba cara lain."]},
			{x: "る+いっぽだ", y: "Berkelanjutan", z: ["彼の努力は一歩だ <br> Usahanya terus berlanjut.", "プロジェクトは順調に進んでいて、一歩だ <br> Proyek ini terus berlanjut dengan baik.", "彼女の計画は一歩だ <br> Rencananya terus berlanjut."]},
			{x: "る+といういみです", y: "Berarti", z: ["この言葉は「努力する」という意味です <br> Kata ini berarti 'berusaha'.", "この記号は「終了」を意味します <br> Simbol ini berarti 'selesai'.", "その行動は「拒否する」という意味です <br> Tindakan itu berarti 'menolak'."]},
			{x: "る+にちがいない", y: "Tidak Salah Lagi", z: ["彼が犯人にちがいない <br> Dia pasti pelakunya.", "これは素晴らしい結果にちがいない <br> Ini pasti hasil yang luar biasa.", "彼女は正しいにちがいない <br> Dia pasti benar."]},
			{x: "る+いわけにはいかない", y: "Tidak Ada Alasan untuk", z: ["彼に嘘をつくわけにはいかない <br> Tidak ada alasan untuk berbohong padanya.", "約束を破るわけにはいかない <br> Tidak ada alasan untuk melanggar janji.", "遅刻するわけにはいかない <br> Tidak ada alasan untuk terlambat."]},
			{x: "る+わりに", y: "Termasuk...Tapi", z: ["この問題は簡単なわりに時間がかかる <br> Masalah ini seharusnya mudah, tapi memakan waktu.", "彼は若いわりに、とても経験豊富です <br> Meskipun dia muda, dia sangat berpengalaman.", "このレストランは高いわりに、サービスが悪い <br> Restoran ini mahal, tapi pelayanannya buruk."]},
			{x: "る+かどうかをめぐって", y: "Karena Masalahnya", z: ["彼はその計画が成功するかどうかをめぐって議論しました <br> Dia berdiskusi tentang apakah rencana itu akan berhasil atau tidak.", "その問題が解決するかどうかをめぐって、みんなで話し合いました <br> Kami berdiskusi tentang apakah masalah ini dapat diselesaikan.", "その案について賛成かどうかをめぐって、意見が分かれました <br> Pendapat kami terbagi tentang apakah kami setuju dengan rencana tersebut."]},
			{x: "る+というものだ", y: "Rasanya", z: ["これが人生というものだ <br> Itulah yang disebut dengan hidup.", "あれが愛というものだ <br> Itulah yang disebut dengan cinta.", "これが仕事というものだ <br> Inilah yang disebut pekerjaan."]},
			{x: "る+といっても", y: "Meskipun Dikatakan", z: ["簡単だといっても、やってみると難しい <br> Meskipun dikatakan mudah, saat dicoba ternyata sulit.", "彼は行かないといっても、実際は行くかもしれません <br> Meskipun dia mengatakan tidak akan pergi, sebenarnya dia mungkin akan pergi.", "私はその映画が面白いといっても、実際は退屈でした <br> Meskipun saya mengatakan film itu menarik, ternyata membosankan."]},
			{x: "る+ということだ", y: "Katanya Demikian", z: ["彼がそれをやるということだ <br> Katanya dia yang akan melakukannya.", "来週から新しいプロジェクトが始まるということだ <br> Katanya proyek baru akan dimulai minggu depan.", "それは難しいということだ <br> Katanya itu sulit."]},
			{x: "る+とばかりに", y: "Seolah-Olah Seperti", z: ["彼は「私は知らない」と言うとばかりに、無視した <br> Dia mengabaikan saya seolah-olah dia berkata, 'Saya tidak tahu.'", "彼女は私を見たとばかりに、急いで立ち上がった <br> Dia berdiri dengan cepat seolah-olah dia melihat saya.", "その人は全てを知っているとばかりに話している <br> Orang itu berbicara seolah-olah dia tahu segalanya."]},
			{x: "る+にしたがって", y: "Dengan Semakin", z: ["年を取るにしたがって、知識が増える <br> Dengan bertambahnya usia, pengetahuan saya semakin banyak.", "経済が発展するにしたがって、生活も良くなった <br> Dengan semakin berkembangnya ekonomi, kehidupan juga semakin baik.", "体力が弱くなるにしたがって、歩くのが大変になった <br> Dengan semakin lemah tubuh saya, berjalan menjadi lebih sulit."]},
			{x: "る+のにくらべて", y: "Dibandingkan Dengan", z: ["この映画は前回の映画ののにくらべて面白い <br> Film ini lebih menarik dibandingkan dengan film sebelumnya.", "あのレストランは私たちのレストランののにくらべて高い <br> Restoran itu lebih mahal dibandingkan dengan restoran kami.", "この問題は前の問題ののにくらべて簡単だ <br> Masalah ini lebih mudah dibandingkan dengan masalah sebelumnya."]},
			{x: "る+いっぷだ", y: "Terus Semakin~Saja", z: ["プロジェクトは成功に向かっていっぽだ <br> Proyek ini terus berkembang ke arah yang sukses.", "彼の演技はますます良くなっていっぽだ <br> Aktingnya terus semakin baik.", "経済が回復するにつれて、会社の売上がいっぽだ <br> Seiring dengan pemulihan ekonomi, penjualan perusahaan terus meningkat."]},
			{x: "る+どころか", y: "Jangankan", z: ["彼は手伝うどころか、何もしなかった <br> Jangankan membantu, dia tidak melakukan apa-apa.", "その問題は解決するどころか、ますます悪化した <br> Masalah itu bukan hanya tidak terselesaikan, malah semakin buruk.", "彼女は来るどころか、連絡もしてこなかった <br> Jangankan datang, dia bahkan tidak menghubungi saya."]},
			{x: "る+だけの", y: "Cukup Untuk", z: ["これだけの時間があれば、十分に終わらせることができる <br> Dengan waktu yang cukup ini, saya bisa menyelesaikannya.", "その努力だけの結果が出た <br> Hanya dengan usaha itu, hasilnya keluar.", "この材料だけのケーキで十分だ <br> Cukup dengan bahan-bahan ini untuk membuat kue."]},
			{x: "る+ことだ", y: "Sebaiknya~Lah", z: ["何も言わずに行動することだ <br> Sebaiknya bertindak tanpa mengatakan apa-apa.", "健康を守ることだ <br> Sebaiknya menjaga kesehatan.", "早く寝ることだ <br> Sebaiknya tidur lebih cepat."]},
			{x: "る+とうぜんだ", y: "Jelas Saja", z: ["この結果が出るのはとうぜんだ <br> Hasil ini keluar, jelas saja.", "彼が成功するのはとうぜんだ <br> Keberhasilannya sudah pasti.", "彼女がそれを知っているのはとうぜんだ <br> Dia pasti tahu, sudah jelas."]},
			{x: "かのうけい+ものなら", y: "Kalau Mungkin Bisa", z: ["もしその計画が成功するものなら、私はそれに賛成だ <br> Kalau mungkin rencana itu berhasil, saya setuju.", "時間があれば、そのプロジェクトに参加するものなら <br> Kalau ada waktu, saya akan ikut proyek itu.", "もしそれをできるものなら、すぐにやるべきだ <br> Kalau bisa melakukannya, sebaiknya lakukan segera."]},
			{x: "うけみけい+ままに", y: "Sesuai Dengan", z: ["指示したままにやってください <br> Tolong lakukan sesuai dengan petunjuk.", "計画を決めたままに進める <br> Lanjutkan sesuai dengan rencana yang telah ditentukan.", "彼の言ったままに行動した <br> Saya bertindak sesuai dengan apa yang dia katakan."]}
		]
	},
	{
		name: "ない形",
		content: [
			{x: "ない+ほうがいいです", y: "Sebaiknya Tidak", z: ["遅くまで起きないほうがいいです <br> Sebaiknya tidak begadang sampai larut malam.", "その問題を放置しないほうがいいです <br> Sebaiknya jangan biarkan masalah itu begitu saja.", "あまり食べないほうがいいですよ <br> Sebaiknya tidak makan terlalu banyak."]},
			{x: "ない+でください", y: "Harap Jangan", z: ["ここで写真を撮らないでください <br> Harap jangan foto di sini.", "中に入らないでください <br> Harap jangan masuk ke dalam.", "騒がないでください <br> Harap jangan berisik."]},
			{x: "ない+くてもいいです", y: "Tidak Usah", z: ["そんなに急がなくてもいいです <br> Tidak usah terburu-buru seperti itu.", "ここに来なくてもいいです <br> Tidak usah datang ke sini.", "手伝わなくてもいいですよ <br> Tidak usah membantu."]},
			{x: "ない+といけない", y: "Harus", z: ["宿題をやらないといけない <br> Saya harus mengerjakan PR.", "早く寝ないといけない <br> Saya harus tidur lebih cepat.", "明日までに提出しないといけない <br> Harus menyerahkan ini sebelum besok."]},
			{x: "ない+ことにはない", y: "Kalau Tidak,Tidak", z: ["行かないことには始まらない <br> Kalau tidak pergi, tidak akan mulai.", "問題を解決しないことには進めない <br> Tidak akan bisa melanjutkan kalau masalah tidak diselesaikan.", "試験を受けないことには結果がわからない <br> Tidak akan tahu hasilnya kalau tidak mengikuti ujian."]},
			{x: "ない+そうです", y: "Katanya Tidak", z: ["彼は来ないそうです <br> Katanya dia tidak datang.", "雨が降らないそうです <br> Katanya tidak akan hujan.", "彼女は忙しくて来れないそうです <br> Katanya dia sibuk dan tidak bisa datang."]},
			{x: "ない+ようです", y: "Sepertinya Tidak", z: ["彼は行かないようです <br> Sepertinya dia tidak akan pergi.", "その会議はキャンセルされたようです <br> Sepertinya rapat itu dibatalkan.", "雨が降らないようです <br> Sepertinya tidak akan hujan."]},
			{x: "ない+つもり", y: "Bermaksud Tidak", z: ["今日は出かけないつもりです <br> Saya bermaksud untuk tidak pergi hari ini.", "彼とは会わないつもりです <br> Saya bermaksud untuk tidak bertemu dengannya.", "遅れないつもりです <br> Saya bermaksud tidak akan terlambat."]},
			{x: "ない+かもしれません", y: "Kemungkinan Tidak", z: ["彼は来ないかもしれません <br> Kemungkinan dia tidak datang.", "明日は雨が降らないかもしれません <br> Kemungkinan besok tidak akan hujan.", "その問題は解決しないかもしれません <br> Masalah itu mungkin tidak akan diselesaikan."]},
			{x: "ない+ほど", y: "Semakin Tidak", z: ["運動しないほど、健康に悪い <br> Semakin tidak berolahraga, semakin buruk untuk kesehatan.", "話さないほど、誤解が生まれる <br> Semakin tidak berbicara, semakin banyak kesalahpahaman.", "待たないほど、時間が無駄になる <br> Semakin tidak menunggu, semakin banyak waktu yang terbuang."]},
			{x: "ない+ように", y: "Supaya Tidak", z: ["忘れないようにメモしてください <br> Tolong catat supaya tidak lupa.", "事故が起きないように注意してください <br> Harap hati-hati supaya tidak terjadi kecelakaan.", "遅れないように早めに出発してください <br> Tolong berangkat lebih awal supaya tidak terlambat."]},
			{x: "ない+ばあいは", y: "Apabila Tidak", z: ["遅れたばあいは、最初からやり直さなければならない <br> Jika terlambat, Anda harus mulai dari awal.", "何も答えられないばあいは、もう一度考えてみてください <br> Jika tidak ada jawaban, coba pikirkan lagi.", "その問題を解決できないばあいは、専門家に頼むべきです <br> Jika tidak bisa menyelesaikan masalah itu, sebaiknya minta bantuan ahli."]},
			{x: "ない+とおもいます", y: "Saya Pikir Tidak", z: ["彼は来ないと思います <br> Saya pikir dia tidak akan datang.", "これは問題ないと思います <br> Saya pikir ini tidak ada masalah.", "その計画はうまくいかないと思います <br> Saya pikir rencana itu tidak akan berhasil."]},
			{x: "ない+のに", y: "Padahal Tidak", z: ["彼は勉強しないのに試験に合格した <br> Padahal dia tidak belajar, dia lulus ujian.", "お金がないのに旅行に行った <br> Padahal saya tidak punya uang, saya pergi berlibur.", "時間がないのに映画を見た <br> Padahal tidak ada waktu, saya menonton film."]},
			{x: "ない+はずです", y: "Semestinya Tidak", z: ["彼はこの場所にいないはずです <br> Dia semestinya tidak ada di tempat ini.", "この問題はもう解決されているはずです <br> Masalah ini semestinya sudah diselesaikan.", "彼女はもう帰っているはずです <br> Dia semestinya sudah pulang."]},
			{x: "ない+べきです", y: "Seharusnya Tidak", z: ["あんなことを言ってはいけない <br> Anda seharusnya tidak mengatakan hal seperti itu.", "遅刻してはいけない <br> Anda seharusnya tidak terlambat.", "無駄にお金を使ってはいけない <br> Anda seharusnya tidak membuang-buang uang."]},
			{x: "ない+ので", y: "Karena Tidak", z: ["今日は忙しくて行けないので、また今度 <br> Karena saya sibuk hari ini, saya tidak bisa pergi, nanti saja.", "お金がないので、買い物に行けない <br> Karena tidak punya uang, saya tidak bisa pergi berbelanja.", "体調が悪いので、外出できない <br> Karena kondisi tubuh saya buruk, saya tidak bisa keluar."]},
			{x: "ない+とき", y: "Ketika Tidak", z: ["お金がないとき、どうすればいいか <br> Apa yang harus dilakukan ketika tidak punya uang?", "会議の時、電話をかけないでください <br> Jangan menelepon ketika rapat.", "忙しいとき、手伝ってもらうことがあります <br> Kadang-kadang saya minta bantuan ketika saya sibuk."]},
			{x: "ない+で", y: "Tanpa", z: ["手を洗わないで食べないでください <br> Harap jangan makan tanpa mencuci tangan.", "その問題を解決しないで進めない <br> Tidak bisa melanjutkan tanpa menyelesaikan masalah tersebut.", "電車に乗らないで歩いて帰った <br> Saya pulang jalan kaki tanpa naik kereta."]},
			{x: "ない+まま", y: "Tanpa", z: ["遅刻したままで会議に参加しました <br> Saya ikut rapat dalam keadaan terlambat.", "そのままで帰った <br> Saya pulang tanpa mengubah apa-apa.", "そのままで放置した <br> Dibiarkan begitu saja."]},
			{x: "ない(hilang) + ずに", y: "Tanpa", z: ["何も言わずに去ってしまった <br> Dia pergi tanpa mengatakan apa-apa.", "食べずに寝てしまった <br> Saya tidur tanpa makan.", "考えずに決断を下した <br> Saya membuat keputusan tanpa berpikir."]},
			{x: "ない+ねばならない", y: "Harus", z: ["早く寝ねばならない <br> Harus tidur lebih cepat.", "その問題を解決しねばならない <br> Harus menyelesaikan masalah itu.", "宿題を終わらせねばならない <br> Harus menyelesaikan PR."]},
			{x: "ずにはいられない", y: "Tidak Bisa Sabar Untuk", z: ["この映画は見ずにはいられない <br> Saya tidak bisa sabar untuk menonton film ini.", "その本を読まずにはいられない <br> Saya tidak bisa sabar untuk membaca buku itu.", "彼に会わずにはいられない <br> Saya tidak bisa sabar untuk bertemu dengannya."]},
			{x: "ざるをえない", y: "Mau Tidak Mau Harus", z: ["その決定を受け入れざるをえない <br> Saya harus menerima keputusan itu, mau tidak mau.", "この問題を解決ざるをえない <br> Saya harus menyelesaikan masalah ini, mau tidak mau.", "遅刻したので謝らざるをえない <br> Karena terlambat, saya harus minta maaf."]}
		]
	},
	{
		name: "辞書形",
		content: [
			{x: "ます+すぎます", y: "Berlebihan", z: ["食べすぎます <br> Makan berlebihan.", "飲みすぎます <br> Minum berlebihan.", "働きすぎます <br> Bekerja berlebihan."]},
			{x: "ます+にくい", y: "Sulit", z: ["この本は読みにくい <br> Buku ini sulit dibaca.", "この道は歩きにくい <br> Jalan ini sulit dilalui.", "この問題は解きにくい <br> Masalah ini sulit untuk dipecahkan."]},
			{x: "ます+やすい", y: "Mudah", z: ["この仕事はやすい <br> Pekerjaan ini mudah.", "このゲームはやすい <br> Permainan ini mudah.", "その問題は解きやすい <br> Masalah itu mudah dipecahkan."]},
			{x: "ます+ちゅう", y: "Sedang", z: ["勉強ちゅうです <br> Sedang belajar.", "運転ちゅうです <br> Sedang mengemudi.", "会議ちゅうです <br> Sedang rapat."]},
			{x: "ます+ながら", y: "Sambil", z: ["音楽を聞きながら勉強します <br> Saya belajar sambil mendengarkan musik.", "テレビを見ながら食べます <br> Saya makan sambil menonton TV.", "歩きながら話します <br> Saya berbicara sambil berjalan."]},
			{x: "ます+おわります", y: "Selesai", z: ["勉強をおわります <br> Saya selesai belajar.", "仕事をおわります <br> Saya selesai bekerja.", "掃除をおわります <br> Saya selesai membersihkan."]},
			{x: "ます+ように", y: "Semoga", z: ["試験に合格しますように <br> Semoga lulus ujian.", "健康でいられるように <br> Semoga bisa tetap sehat.", "成功しますように <br> Semoga berhasil."]},
			{x: "ます+そうです", y: "Kelihatannya", z: ["彼は元気そうです <br> Dia kelihatannya sehat.", "天気は良さそうです <br> Cuacanya kelihatannya bagus.", "この料理はおいしそうです <br> Masakan ini kelihatannya enak."]},
			{x: "ます+ましょうか", y: "Bagaimana Kalau", z: ["一緒に行きましょうか <br> Bagaimana kalau kita pergi bersama?", "手伝いましょうか <br> Bagaimana kalau saya bantu?", "休みましょうか <br> Bagaimana kalau kita istirahat?"]},
			{x: "ます+っぱなし", y: "Tetap", z: ["ドアが開けっぱなしです <br> Pintu tetap terbuka.", "テレビをつけっぱなしです <br> TV tetap menyala.", "電気がつけっぱなしです <br> Lampu tetap menyala."]},
			{x: "ます+なさい", y: "Lah", z: ["勉強しなさい <br> Belajarlah.", "静かにしなさい <br> Diamlah.", "ここに座りなさい <br> Duduklah di sini."]},
			{x: "ます+かた", y: "Cara", z: ["その問題を解くかた <br> Cara menyelesaikan masalah itu.", "日本語の勉強のかた <br> Cara belajar bahasa Jepang.", "料理のかた <br> Cara memasak."]},
			{x: "ます+ぎみ", y: "Agak/Sedikit", z: ["疲れぎみです <br> Saya agak lelah.", "風邪ぎみです <br> Saya agak masuk angin.", "遅れぎみです <br> Saya sedikit terlambat."]},
			{x: "ます+づらい", y: "Menyakitkan", z: ["この靴は歩きづらい <br> Sepatu ini menyakitkan untuk dipakai berjalan.", "この問題は解きづらい <br> Masalah ini sulit untuk dipecahkan.", "その椅子は座りづらい <br> Kursi itu menyakitkan untuk diduduki."]},
			{x: "ます+がたい", y: "Hampir", z: ["この道は歩きがたい <br> Jalan ini hampir tidak bisa dilalui.", "その答えは信じがたい <br> Jawaban itu hampir tidak bisa dipercaya.", "この仕事は終わりがたい <br> Pekerjaan ini hampir tidak bisa selesai."]},
			{x: "ます+はじめます", y: "Mulai", z: ["勉強をはじめます <br> Saya mulai belajar.", "仕事をはじめます <br> Saya mulai bekerja.", "運動をはじめます <br> Saya mulai berolahraga."]},
			{x: "ます+だします", y: "Mulai (Mendadak)", z: ["急に泣きだしました <br> Dia mulai menangis mendadak.", "走りだしました <br> Dia mulai berlari mendadak.", "歌いだしました <br> Dia mulai bernyanyi mendadak."]},
			{x: "ます+たい", y: "Ingin", z: ["日本へ行きたい <br> Saya ingin pergi ke Jepang.", "新しいゲームがしたい <br> Saya ingin bermain game baru.", "美味しい料理を食べたい <br> Saya ingin makan masakan yang enak."]},
			{x: "ます+がち", y: "Keras (Mudahan)", z: ["彼は遅刻しがちです <br> Dia sering terlambat.", "最近、食べすぎがちです <br> Akhir-akhir ini saya sering makan berlebihan.", "彼女は考えすぎがちです <br> Dia sering berpikir terlalu banyak."]},
			{x: "ます+つづけます", y: "Berlanjut", z: ["仕事をつづけます <br> Saya akan melanjutkan pekerjaan.", "勉強をつづけます <br> Saya akan melanjutkan belajar.", "日本語の勉強をつづけます <br> Saya akan melanjutkan belajar bahasa Jepang."]},
			{x: "ます+ようがない", y: "Tidak Ada Cara Untuk", z: ["この問題は解決しようがない <br> Masalah ini tidak ada cara untuk diselesaikan.", "その仕事は終わらせようがない <br> Pekerjaan itu tidak ada cara untuk diselesaikan.", "説明しようがない <br> Tidak ada cara untuk menjelaskan."]},
			{x: "ます+にかかわらず", y: "Tidak Ada Hubungan nya Dengan", z: ["天気にかかわらず行きます <br> Saya akan pergi tanpa mempedulikan cuaca.", "年齢にかかわらず <br> Tidak peduli usia.", "場所にかかわらず参加します <br> Saya akan berpartisipasi tanpa mempedulikan tempat."]},
			{x: "ます+かける", y: "Di Tengah-Tengah", z: ["話しかける <br> Saya mulai berbicara.", "走りかける <br> Saya mulai berlari.", "食べかける <br> Saya mulai makan."]},
			{x: "ます+ぬく", y: "Berusaha~Sampai Habis", z: ["この仕事をやりぬく <br> Saya akan menyelesaikan pekerjaan ini.", "最後まで戦いぬく <br> Saya akan berjuang sampai akhir.", "彼は目標を達成しぬく <br> Dia akan berusaha mencapai tujuannya."]},
			{x: "ます+かいがある", y: "Ada Hasil Dari", z: ["この仕事をしてかいがある <br> Ada hasil dari pekerjaan ini.", "勉強してかいがある <br> Ada hasil dari belajar.", "努力してかいがある <br> Ada hasil dari usaha."]}
		]
	}
];
		


/*
[
  {x: "いーくて", y: "Dan", z: ["この本は面白くて、役に立ちます。<br> Buku ini menarik dan bermanfaat.", "彼は優しくて、親切です。<br> Dia baik hati dan ramah.", "今日は暑くて、歩きたくありません。<br> Hari ini panas dan saya tidak ingin berjalan."]},
  {x: "ーければ", y: "Kalau", z: ["もし雨が降れば、行きません。<br> Kalau hujan, saya tidak akan pergi.", "この道を歩けば、駅に着きます。<br> Kalau kamu berjalan di jalan ini, kamu akan sampai di stasiun.", "その情報が必要なら、教えてください。<br> Kalau kamu butuh informasi itu, beri tahu saya."]},
  {x: "ーくなければ", y: "Kalau Tidak", z: ["勉強しなければ、テストに合格できません。<br> Kalau tidak belajar, kamu tidak akan lulus ujian.", "約束を守らなければ、信用されません。<br> Kalau tidak menepati janji, kamu tidak akan dipercaya.", "早く起きなければ、遅刻します。<br> Kalau tidak bangun cepat, kamu akan terlambat."]},
  {x: "ーくない", y: "Tidak", z: ["これは面白くないです。<br> Ini tidak menarik.", "その映画は怖くないです。<br> Film itu tidak menakutkan.", "この料理は美味しくないです。<br> Makanan ini tidak enak."]},
  {x: "ーさ", y: "Nya", z: ["この本の面白さは素晴らしいです。<br> Keistimewaan buku ini luar biasa.", "彼の優しさに感動しました。<br> Saya terkesan dengan kebaikannya.", "その映画の怖さは本当にリアルです。<br> Ketakutan dalam film itu sangat nyata."]},
  {x: "なーで", y: "Dan", z: ["彼は静かで、優しいです。<br> Dia tenang dan baik hati.", "その店は安くて、きれいです。<br> Toko itu murah dan bersih.", "今日は暑くて、眠いです。<br> Hari ini panas dan saya ngantuk."]},
  {x: "ーなら", y: "Kalau", z: ["行くなら、早く出発した方がいいです。<br> Kalau mau pergi, lebih baik berangkat lebih awal.", "もし彼が来るなら、待ちます。<br> Kalau dia datang, saya akan menunggu.", "明日試験があるなら、勉強しないといけません。<br> Kalau ada ujian besok, saya harus belajar."]},
  {x: "ーじゃなければ", y: "Kalau Tidak", z: ["それをやらなければ、後悔するでしょう。<br> Kalau tidak melakukannya, kamu akan menyesal.", "約束を守らなければ、信用されません。<br> Kalau tidak menepati janji, kamu tidak akan dipercaya.", "早く起きなければ、遅刻します。<br> Kalau tidak bangun cepat, kamu akan terlambat."]},
  {x: "ーじゃない", y: "Tidak", z: ["これはおいしくないです。<br> Ini tidak enak.", "その映画は面白くないです。<br> Film itu tidak menarik.", "私の意見は正しくないです。<br> Pendapat saya tidak benar."]},
  {x: "いーく + します", y: "Menjadi", z: ["勉強を簡単にします。<br> Saya akan membuat belajar lebih mudah.", "それをもっと速くします。<br> Saya akan membuatnya lebih cepat.", "旅行をもっと楽しくします。<br> Saya akan membuat perjalanan lebih menyenangkan."]},
  {x: "なーに + します", y: "Menjadi", z: ["この部屋をきれいにします。<br> Saya akan membuat kamar ini bersih.", "その問題を簡単にします。<br> Saya akan membuat masalah itu lebih mudah.", "この計画を実行に移します。<br> Saya akan mengimplementasikan rencana ini."]},
  {x: "いーくない (Negatif)", y: "Tidak", z: ["これはおいしくないです。<br> Ini tidak enak.", "その映画は怖くないです。<br> Film itu tidak menakutkan.", "あの店は高くないです。<br> Toko itu tidak mahal."]},
  {x: "ーくなかった (Negatif Lampau)", y: "Tidak (Lampau)", z: ["その映画は面白くなかったです。<br> Film itu tidak menarik.", "昨日の天気はよくなかったです。<br> Cuaca kemarin tidak bagus.", "その本は難しくなかったです。<br> Buku itu tidak sulit."]},
  {x: "ーかった (Positif Lampau)", y: "Positif (Lampau)", z: ["その映画は面白かったです。<br> Film itu menarik.", "昨日はとても楽しかったです。<br> Kemarin sangat menyenangkan.", "この本はとても役に立ちました。<br> Buku ini sangat bermanfaat."]},
  {x: "ー+です (Positif)", y: "Positif", z: ["これは面白いです。<br> Ini menarik.", "今日は忙しいです。<br> Hari ini saya sibuk.", "彼は親切です。<br> Dia baik hati."]},
  {x: "なーじゃない (Negatif)", y: "Tidak", z: ["彼は日本人じゃないです。<br> Dia bukan orang Jepang.", "これは新しいじゃないです。<br> Ini bukan yang baru.", "彼女は学生じゃないです。<br> Dia bukan pelajar."]},
  {x: "ーじゃないでした (Negatif Lampau)", y: "Tidak (Lampau)", z: ["それは良くじゃなかったです。<br> Itu tidak baik.", "彼は学生じゃなかったです。<br> Dia bukan pelajar.", "その映画は面白くじゃなかったです。<br> Film itu tidak menarik."]},
  {x: "ーでした (Positif Lampau)", y: "Positif (Lampau)", z: ["今日は楽しかったです。<br> Hari ini menyenangkan.", "その映画は面白かったです。<br> Film itu menarik.", "彼は親切でした。<br> Dia baik hati."]},
  {x: "ーな(Hilang) + です (Positif)", y: "Positif", z: ["彼は静かです。<br> Dia tenang.", "その本は面白いです。<br> Buku itu menarik.", "今日は暑いです。<br> Hari ini panas."]},
  {x: "いーく + なります", y: "Menjadi", z: ["明日、天気が良くなります。<br> Besok cuacanya akan menjadi baik.", "体調が良くなります。<br> Kesehatan saya akan menjadi lebih baik.", "これからもっと寒くなります。<br> Cuacanya akan menjadi lebih dingin mulai sekarang."]},
  {x: "なーに + なります", y: "Menjadi", z: ["この町は静かになります。<br> Kota ini akan menjadi lebih tenang.", "その計画は大きな成功になります。<br> Rencana itu akan menjadi sukses besar.", "今の状況は悪くなります。<br> Situasi ini akan menjadi lebih buruk."]}
]




const tatabahasa = [
	{
		name: "て形",
		content: [
			{x: "て+みます", y: "Mencoba", z: ["食べてみます <br> Saya akan coba makan.", "この映画を見てみます <br> Saya akan coba menonton film ini.", "新しいことをしてみます <br> Saya akan mencoba hal baru."]},
			{x: "て+しまいました", y: "Tidak sengaja", z: ["電話をかけてしまいました <br> Saya sudah menelepon (tanpa sengaja).", "財布を忘れてしまいました <br> Saya lupa membawa dompet.", "お金を使いすぎてしまいました <br> Saya sudah menghabiskan uang terlalu banyak."]},
			{x: "て+たまらない", y: "Tak tertahankan", z: ["お腹がすいてたまらない <br> Saya sangat lapar.", "暑くてたまらない <br> Panas sekali, tak tertahankan.", "待ちきれなくてたまらない <br> Saya tidak bisa menunggu lagi."]},
		]
	},
	{
		name: "た形",
		content: [
			{x: "た+としたら", y: "Kalau seandainya", z: ["もし彼が来たとしたら <br> Kalau seandainya dia datang.", "試験に合格したとしたら <br> Kalau seandainya saya lulus ujian.", "お金があったとしたら <br> Kalau seandainya saya punya uang."]},
			{x: "た+のみならず", y: "Bahkan ~ saja", z: ["彼は日本語のみならず、英語も話せます <br> Dia bisa berbicara bahasa Jepang, bahkan bahasa Inggris.", "映画だけでなく、本も好きです <br> Saya suka film, bahkan buku.", "彼女は歌うのみならず、踊ることもできます <br> Dia tidak hanya bisa bernyanyi, tetapi juga bisa menari."]}
		]
	},
	{
		name: "る形",
		content: [
			{x: "る+ばあいは", y: "Apabila", z: ["天気が悪い場合は、外に行きません <br> Apabila cuaca buruk, saya tidak akan keluar.", "仕事が終わらない場合は、残業します <br> Apabila pekerjaan belum selesai, saya akan lembur.", "約束を守らない場合は、信用しません <br> Apabila tidak menepati janji, saya tidak akan percaya."]},
			{x: "る+ことができます", y: "Bisa", z: ["日本語を話すことができます <br> Saya bisa berbicara bahasa Jepang.", "ピアノを弾くことができます <br> Saya bisa bermain piano.", "泳ぐことができます <br> Saya bisa berenang."]},
			{x: "る+ことにします", y: "Memutuskan", z: ["明日、旅行に行くことにします <br> Saya memutuskan untuk pergi berlibur besok.", "彼に会うことにします <br> Saya memutuskan untuk bertemu dengan dia.", "この仕事を引き受けることにします <br> Saya memutuskan untuk menerima pekerjaan ini."]},
			{x: "る+ところ", y: "Baru akan", z: ["今から出かけるところです <br> Saya baru akan pergi sekarang.", "映画を見に行くところです <br> Saya baru akan pergi menonton film.", "昼食を取るところです <br> Saya baru akan makan siang."]},
		]
	},
	{
		name: "ない形",
		content: [
			{x: "ない+ことにはない", y: "Kalau Tidak,Tidak", z: ["行かないことには始まらない <br> Kalau tidak pergi, tidak akan mulai.", "問題を解決しないことには進めない <br> Tidak akan bisa melanjutkan kalau masalah tidak diselesaikan.", "試験を受けないことには結果がわからない <br> Tidak akan tahu hasilnya kalau tidak mengikuti ujian."]},
			{x: "ざるをえない", y: "Mau Tidak Mau Harus", z: ["その決定を受け入れざるをえない <br> Saya harus menerima keputusan itu, mau tidak mau.", "この問題を解決ざるをえない <br> Saya harus menyelesaikan masalah ini, mau tidak mau.", "遅刻したので謝らざるをえない <br> Karena terlambat, saya harus minta maaf."]}
		]
	},
	{
		name: "辞書形",
		content: [
			{x: "ます+すぎます", y: "Berlebihan", z: ["食べすぎます <br> Makan berlebihan.", "飲みすぎます <br> Minum berlebihan.", "働きすぎます <br> Bekerja berlebihan."]},
			{x: "ます+にくい", y: "Sulit", z: ["この本は読みにくい <br> Buku ini sulit dibaca.", "この道は歩きにくい <br> Jalan ini sulit dilalui.", "この問題は解きにくい <br> Masalah ini sulit untuk dipecahkan."]},
			{x: "ます+やすい", y: "Mudah", z: ["この仕事はやすい <br> Pekerjaan ini mudah.", "このゲームはやすい <br> Permainan ini mudah.", "その問題は解きやすい <br> Masalah itu mudah dipecahkan."]}
		]
	}
];
*/