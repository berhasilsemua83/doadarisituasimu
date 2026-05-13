export type Prayer = {
  id: string;
  kategori: string[];
  judul: string;
  arab: string;
  latin: string;
  arti: string;
  keutamaan: string;
  referensi: string;
};

export const categories = [
  "Sedih",
  "Gelisah",
  "Susah Tidur",
  "Ingin Rezeki",
  "Takut",
  "Marah",
  "Sakit",
  "Ingin Dimudahkan",
  "Bersyukur",
  "Mohon Ampunan",
  "Semangat Hidup",
  "Hati Tenang"
];

export const prayers: Prayer[] = [
  {
    id: "doa-hilang-sedih-1",
    kategori: ["Sedih", "Gelisah", "Hati Tenang"],
    judul: "Doa Penghilang Kesedihan dan Kesulitan",
    arab: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ، وَأَعُوذُ بِكَ مِنَ الْعَجْزِ وَالْكَسَلِ، وَأَعُوذُ بِكَ مِنَ الْجُبْنِ وَالْبُخْلِ، وَأَعُوذُ بِكَ مِنْ غَلَبَةِ الدَّيْنِ، وَقَهْرِ الرِّجَالِ",
    latin: "Allahumma inni a'udzu bika minal hammi wal hazani, wa a'udzu bika minal 'ajzi wal kasali, wa a'udzu bika minal jubni wal bukhli, wa a'udzu bika min ghalabatid dayni wa qahrir rijal.",
    arti: "Ya Allah, sesungguhnya aku berlindung kepada-Mu dari keluh kesah dan kesedihan, aku berlindung kepada-Mu dari kelemahan dan kemalasan, aku berlindung kepada-Mu dari sifat penakut dan kikir, aku berlindung kepada-Mu dari lilitan hutang dan tekanan orang-orang.",
    keutamaan: "Menenangkan hati yang sedang gundah, menghilangkan rasa malas, dan memberikan perlindungan dari lilitan hutang.",
    referensi: "HR. Bukhari No. 2893"
  },
  {
    id: "doa-sedih-musibah",
    kategori: ["Sedih", "Bersyukur", "Mohon Ampunan"],
    judul: "Doa Saat Tertimpa Musibah",
    arab: "إِنَّا لِلَّهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ، اللَّهُمَّ أْجُرْنِي فِي مُصِيبَتِي وَأَخْلِفْ لِي خَيْرًا مِنْهَا",
    latin: "Inna lillahi wa inna ilayhi raji'un. Allahumma'jurni fi musibati wa akhlif li khairan minha.",
    arti: "Sesungguhnya kita milik Allah dan hanya kepada-Nya kita dikembalikan. Ya Allah, berikanlah pahala kepadaku atas musibah yang menimpaku dan gantikanlah untukku dengan yang lebih baik dari padanya.",
    keutamaan: "Allah akan memberikan pahala atas kesabaran terhadap musibah dan menggantinya dengan sesuatu yang lebih baik.",
    referensi: "HR. Muslim No. 918"
  },
  {
    id: "doa-susah-tidur-1",
    kategori: ["Susah Tidur", "Gelisah", "Hati Tenang"],
    judul: "Doa Susah Tidur / Insomnia",
    arab: "اللَّهُمَّ غَارَتِ النُّجُومُ وَهَدَأَتِ الْعُيُونُ وَأَنْتَ حَيٌّ قَيُّومٌ لاَ تَأْخُذُكَ سِنَةٌ وَلاَ نَوْمٌ يَا حَيُّ يَا قَيُّومُ أَهْدِئْ لَيْلِي وَأَنِمْ عَيْنِي",
    latin: "Allahumma gharatin nujum wa hada'atil 'uyun wa anta hayyun qayyum la ta'khudzuka sinatun wa la naum. Ya hayyu ya qayyum ahdi' layli wa anim 'ayni.",
    arti: "Ya Allah, bintang-bintang telah tenggelam dan mata-mata telah terlelap, sedangkan Engkau Mahahidup lagi Mahaberdiri sendiri, tidak mengantuk dan tidak tidur. Wahai Zat Yang Mahahidup lagi Mahaberdiri sendiri, tenangkanlah malamku dan tidurkanlah mataku.",
    keutamaan: "Membantu menenangkan syaraf dan mengundang rasa kantuk yang damai berkat perlindungan Allah.",
    referensi: "HR. Ibnu Sunni thabari"
  },
  {
    id: "doa-sebelum-tidur",
    kategori: ["Susah Tidur", "Hati Tenang", "Mohon Ampunan"],
    judul: "Doa Sebelum Tidur Singkat",
    arab: "بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا",
    latin: "Bismikallahumma amutu wa ahya.",
    arti: "Dengan menyebut nama-Mu ya Allah, aku mati dan aku hidup.",
    keutamaan: "Menjaga roh kita selama tidur agar berada dalam lindungan-Nya hingga bangun kembali.",
    referensi: "HR. Bukhari No. 6324"
  },
  {
    id: "doa-ingin-rezeki-1",
    kategori: ["Ingin Rezeki", "Semangat Hidup"],
    judul: "Doa Meminta Rezeki yang Halal dan Melimpah",
    arab: "اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا، وَرِزْقًا طَيِّبًا، وَعَمَلًا مُتَقَبَّلًا",
    latin: "Allahumma inni as'aluka 'ilman nafi'an, wa rizqan thayyiban, wa 'amalan mutaqabbalan.",
    arti: "Ya Allah, sungguh aku memohon kepada-Mu ilmu yang bermanfaat, rezeki yang baik, dan amal yang diterima.",
    keutamaan: "Dianjurkan dibaca setiap pagi agar hari dipenuhi berkah dan kemudahan dalam mencari nafkah.",
    referensi: "HR. Ibnu Majah No. 925"
  },
  {
    id: "doa-rezeki-tak-terduga",
    kategori: ["Ingin Rezeki", "Ingin Dimudahkan", "Bersyukur"],
    judul: "Doa Rezeki Tak Terduga (Ayat Seribu Dinar)",
    arab: "وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مَخْرَجًا وَيَرْزُقْهُ مِنْ حَيْثُ لَا يَحْتَسِبُ",
    latin: "Wa may yattaqillaha yaj'al lahu makhrajan wa yarzuq-hu min haitsu la yahtasib.",
    arti: "Barangsiapa bertakwa kepada Allah niscaya Dia akan membukakan jalan keluar baginya, dan Dia memberinya rezeki dari arah yang tidak disangka-sangkanya.",
    keutamaan: "Dipercaya sebagai ayat yang paling kuat untuk membuka pintu rezeki jika dibarengi dengan ketakwaan sejati.",
    referensi: "QS. At-Talaq: 2-3"
  },
  {
    id: "doa-takut-1",
    kategori: ["Takut", "Gelisah", "Hati Tenang"],
    judul: "Doa Saat Merasa Takut dan Khawatir",
    arab: "حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ",
    latin: "Hasbunallah wa ni'mal wakil.",
    arti: "Cukuplah Allah menjadi Penolong kami dan Allah adalah sebaik-baik Pelindung.",
    keutamaan: "Zikir ini diucapkan Nabi Ibrahim saat dilempar ke dalam api, memberikan perlindungan mutlak dari segala bentuk bahaya.",
    referensi: "HR. Bukhari No. 4563 & QS. Ali 'Imran: 173"
  },
  {
    id: "doa-takut-menghadapi-sesuatu",
    kategori: ["Takut", "Ingin Dimudahkan"],
    judul: "Doa Berlindung dari Kejahatan Makhluk",
    arab: "أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ",
    latin: "A'udzu bikalimatillahit tammati min syarri ma khalaq.",
    arti: "Aku berlindung dengan kalimat-kalimat Allah yang sempurna dari kejahatan makhluk yang diciptakan-Nya.",
    keutamaan: "Menjaga dari gigitan binatang buas, gangguan jin, dan niat buruk manusia ketika berada di tempat baru.",
    referensi: "HR. Muslim No. 2708"
  },
  {
    id: "doa-marah-1",
    kategori: ["Marah", "Hati Tenang", "Mohon Ampunan"],
    judul: "Doa Saat Sedang Marah",
    arab: "أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ",
    latin: "A'udzu billahi minasy syaithanir rajim.",
    arti: "Aku berlindung kepada Allah dari godaan setan yang terkutuk.",
    keutamaan: "Dapat memadamkan api amarah yang dihembuskan oleh setan dan segera menenangkan detak jantung.",
    referensi: "HR. Bukhari No. 6115"
  },
  {
    id: "doa-sakit-diri-sendiri",
    kategori: ["Sakit", "Mohon Ampunan", "Bersyukur"],
    judul: "Doa Memohon Kesembuhan untuk Diri Sendiri",
    arab: "بِسْمِ اللَّهِ (٣x). أَعُوذُ بِاللَّهِ وَقُدْرَتِهِ مِنْ شَرِّ مَا أَجِدُ وَأُحَاذِرُ (٧x)",
    latin: "Bismillah (3x). A'udzu billahi wa qudratihi min syarri ma ajidu wa uhadziru (7x).",
    arti: "Dengan menyebut nama Allah (3x). Aku berlindung kepada Allah dan kekuasaan-Nya dari kejahatan yang aku dapati dan aku waspadai (7x).",
    keutamaan: "Dibaca sambil meletakkan tangan kanan di bagian tubuh yang sakit. Merupakan sunnah Rasulullah untuk meruqyah diri sendiri.",
    referensi: "HR. Muslim No. 2202"
  },
  {
    id: "doa-sakit-jenguk",
    kategori: ["Sakit", "Semangat Hidup"],
    judul: "Doa Menjenguk Orang Sakit",
    arab: "اللَّهُمَّ رَبَّ النَّاسِ أَذْهِبِ الْبَأْسَ اشْفِ أَنْتَ الشَّافِي لَا شَافِيَ إِلَّا أَنْتَ شِفَاءً لَا يُغَادِرُ سَقَمًا",
    latin: "Allahumma rabban nasi, adzhibil ba'sa isyfi anta asy-syafi la syafiya illa anta syifa'an la yughadiru saqaman.",
    arti: "Ya Allah Tuhan manusia, hilangkanlah penyakit ini, sembuhkanlah, Engkaulah Maha Penyembuh, tidak ada kesembuhan melainkan kesembuhan dari-Mu, kesembuhan yang tidak meninggalkan penyakit.",
    keutamaan: "Permohonan total kepada Sang Maha Penyembuh agar penyakit diangkat dan tidak kembali lagi.",
    referensi: "HR. Bukhari No. 5743"
  },
  {
    id: "doa-dimudahkan-urusan-1",
    kategori: ["Ingin Dimudahkan", "Gelisah", "Semangat Hidup"],
    judul: "Doa Dimudahkan Segala Urusan (Doa Nabi Musa)",
    arab: "رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي وَاحْلُلْ عُقْدَةً مِّن لِّسَانِي يَفْقَهُوا قَوْلِي",
    latin: "Rabbisyrah li shadri, wa yassir li amri, wahlul 'uqdatam mil lisani, yafqahu qauli.",
    arti: "Ya Tuhanku, lapangkanlah untukku dadaku, dan mudahkanlah untukku urusanku, dan lepaskanlah kekakuan dari lidahku, supaya mereka mengerti perkataanku.",
    keutamaan: "Membantu menenangkan diri saat akan berpidato, ujian, atau menghadapi tokoh penting agar ucapan mudah dipahami.",
    referensi: "QS. Thaha: 25-28"
  },
  {
    id: "doa-dimudahkan-ujian",
    kategori: ["Ingin Dimudahkan", "Semangat Hidup"],
    judul: "Doa Memohon Kemudahan Menghadapi Kesulitan",
    arab: "اللَّهُمَّ لاَ سَهْلَ إِلاَّ مَا جَعَلْتَهُ سَهْلاً وَأَنْتَ تَجْعَلُ الحَزْنَ إِذَا شِئْتَ سَهْلاً",
    latin: "Allahumma la sahla illa ma ja'altahu sahlan wa anta taj'alul hazna idza syi'ta sahlan.",
    arti: "Ya Allah, tidak ada kemudahan kecuali apa yang Engkau jadikan mudah. Dan apabila Engkau berkehendak, Engkau akan menjadikan kesusahan menjadi kemudahan.",
    keutamaan: "Sangat dianjurkan dibaca saat merasa buntu, akan mengerjakan soal ujian, atau memulai pekerjaan berat.",
    referensi: "HR. Ibnu Hibban No. 974"
  },
  {
    id: "doa-bersyukur-1",
    kategori: ["Bersyukur", "Hati Tenang"],
    judul: "Doa Berlindung dari Hilangnya Nikmat",
    arab: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ زَوَالِ نِعْمَتِكَ، وَتَحَوُّلِ عَافِيَتِكَ، وَفُجَاءَةِ نِقْمَتِكَ، وَجَمِيعِ سَخَطِكَ",
    latin: "Allahumma inni a'udzu bika min zawali ni'matika, wa tahawwuli 'afiyatika, wa fuja'ati niqmatika, wa jami'i sakhatika.",
    arti: "Ya Allah, sesungguhnya aku berlindung kepada-Mu dari hilangnya nikmat-Mu, dari perubahan kesehatan (yang Engkau anugerahkan) menjadi penyakit, dari siksa-Mu yang datang secara tiba-tiba, dan dari segala kemurkaan-Mu.",
    keutamaan: "Sebagai bentuk rasa syukur tersirat, memohon agar nikmat yang ada senantiasa dijaga oleh Allah.",
    referensi: "HR. Muslim No. 2739"
  },
  {
    id: "doa-mohon-ampunan-1",
    kategori: ["Mohon Ampunan", "Bersyukur", "Hati Tenang"],
    judul: "Sayyidul Istighfar (Penghulu Istighfar)",
    arab: "اللَّهُمَّ أَنْتَ رَبِّي لاَ إِلَهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ لَكَ بِذَنْبِي فَاغْفِرْ لِي، إِنَّهُ لاَ يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ",
    latin: "Allahumma anta rabbi la ilaha illa anta, khalaqtani wa ana 'abduka, wa ana 'ala 'ahdika wa wa'dika mastatha'tu, a'udzu bika min syarri ma shana'tu, abu'u laka bini'matika 'alayya, wa abu'u laka bidzanbi faghfir li, innahu la yaghfirudz dzunuba illa anta.",
    arti: "Ya Allah, Engkau adalah Tuhanku, tidak ada Tuhan yang berhak diibadahi selain Engkau. Engkau telah menciptakanku dan aku adalah hamba-Mu. Aku senantiasa setia pada perjanjian dan janji-Mu semampuku. Aku berlindung kepada-Mu dari keburukan yang telah aku perbuat. Aku mengakui segala nikmat-Mu yang diberikan kepadaku dan aku mengakui dosa-dosaku, maka ampunilah aku, karena sesungguhnya tidak ada yang dapat mengampuni dosa selain Engkau.",
    keutamaan: "Barangsiapa membacanya di siang hari dengan yakin, lalu meninggal sebelum sore, maka ia penghuni surga. Berlaku pula untuk malam hari.",
    referensi: "HR. Bukhari No. 6306"
  },
  {
    id: "doa-ampunan-ortu",
    kategori: ["Mohon Ampunan", "Bersyukur"],
    judul: "Doa Ampunan untuk Diri Sendiri dan Orang Tua",
    arab: "رَبِّ اغْفِرْ لِي وَلِوَالِدَيَّ وَارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا",
    latin: "Rabbighfir li, wa li walidayya, warham huma kama rabbayani shaghira.",
    arti: "Ya Tuhanku, ampunilah aku dan kedua orang tuaku, dan sayangilah keduanya sebagaimana mereka merawatku di waktu kecil.",
    keutamaan: "Doa anak sholeh yang senantiasa diijabah untuk mengangkat derajat orang tua di akhirat.",
    referensi: "QS. Al-Isra: 24"
  },
  {
    id: "doa-semangat-hidup-1",
    kategori: ["Semangat Hidup", "Sedih", "Gelisah"],
    judul: "Doa Mohon Keteguhan Hati",
    arab: "يَا مُقَلِّبَ الْقُلُوبِ ثَبِّتْ قَلْبِي عَلَى دِينِكَ",
    latin: "Ya muqallibal qulub tsabbit qalbi 'ala dinik.",
    arti: "Wahai Dzat yang membolak-balikkan hati, teguhkanlah hatiku di atas agama-Mu.",
    keutamaan: "Doa yang paling sering dibaca Rasulullah untuk menjaga konsistensi iman dan semangat dalam beribadah.",
    referensi: "HR. Tirmidzi No. 3522"
  },
  {
    id: "doa-ketenangan-keluarga",
    kategori: ["Hati Tenang", "Bersyukur", "Semangat Hidup"],
    judul: "Doa Ketenangan Keluarga (Sakinah)",
    arab: "رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ وَاجْعَلْنَا لِلْمُتَّقِينَ إِمَامًا",
    latin: "Rabbana hab lana min azwajina wa dzurriyyatina qurrata a'yunin waj'alna lil muttaqina imama.",
    arti: "Ya Tuhan kami, anugerahkanlah kepada kami pasangan kami dan keturunan kami sebagai penyenang hati (kami), dan jadikanlah kami pemimpin bagi orang-orang yang bertakwa.",
    keutamaan: "Mengundang rahmat Allah ke dalam rumah tangga, menjadikannya harmonis dan damai.",
    referensi: "QS. Al-Furqan: 74"
  },
  {
    id: "doa-doa-sapu-jagat",
    kategori: ["Hati Tenang", "Ingin Rezeki", "Semangat Hidup", "Mohon Ampunan", "Bersyukur"],
    judul: "Doa Sapu Jagat (Kebaikan Dunia Akhirat)",
    arab: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ",
    latin: "Rabbana atina fid-dunya hasanatan wa fil-akhirati hasanatan wa qina 'adzaban-nar.",
    arti: "Ya Tuhan kami, berilah kami kebaikan di dunia dan kebaikan di akhirat, serta lindungilah kami dari siksa neraka.",
    keutamaan: "Doa paling komprehensif yang mencakup seluruh permintaan kebaikan hidup di dunia, rezeki, kesehatan, hingga keselamatan akhirat.",
    referensi: "QS. Al-Baqarah: 201"
  },
  {
    id: "doa-sedih-yusuf",
    kategori: ["Sedih", "Hati Tenang"],
    judul: "Doa Mengadu Kesedihan Hanya kepada Allah",
    arab: "إِنَّمَا أَشْكُو بَثِّي وَحُزْنِي إِلَى اللَّهِ",
    latin: "Innama asyku batstsi wa huzni ilallah.",
    arti: "Hanya kepada Allah aku mengadukan kesusahan dan kesedihanku.",
    keutamaan: "Dibaca oleh Nabi Ya'qub saat kehilangan putranya, melatih diri untuk ikhlas dan tidak mengeluh pada manusia.",
    referensi: "QS. Yusuf: 86"
  },
  {
    id: "doa-bebas-hutang",
    kategori: ["Ingin Rezeki", "Gelisah"],
    judul: "Doa Agar Cepat Lunas Hutang",
    arab: "اللَّهُمَّ اكْفِنِي بِحَلَالِكَ عَنْ حَرَامِكَ، وَأَغْنِنِي بِفَضْلِكَ عَمَّنْ سِوَاكَ",
    latin: "Allahummak-fini bihalalika 'an haramika, wa aghnini bifadhlika 'amman siwaka.",
    arti: "Ya Allah, cukupkanlah aku dengan yang halal dari-Mu sehingga tidak membutuhkan yang haram, dan kayakanlah aku dengan karunia-Mu sehingga aku tidak membutuhkan selain-Mu.",
    keutamaan: "Bila dibaca rutin, Allah akan memudahkan jalan untuk melunasi hutang meskipun sebesar gunung.",
    referensi: "HR. Tirmidzi No. 3563"
  },
  {
    id: "doa-gelisah-berat",
    kategori: ["Gelisah", "Hati Tenang", "Sedih"],
    judul: "Doa Nabi Yunus saat Kesulitan Berkepanjangan",
    arab: "لَا إِلَهَ إِلَّا أَنْتَ سُبْحَانَكَ إِنِّي كُنْتُ مِنَ الظَّالِمِينَ",
    latin: "La ilaha illa anta, subhanaka inni kuntu minazh-zhalimin.",
    arti: "Tidak ada Tuhan selain Engkau. Maha Suci Engkau, sesungguhnya aku adalah termasuk orang-orang yang zalim.",
    keutamaan: "Doa penyelamat dari penderitaan. Mengakui kelemahan diri di hadapan Allah membuka pintu jalan keluar.",
    referensi: "QS. Al-Anbiya: 87"
  },
  {
    id: "doa-susah-tidur-2",
    kategori: ["Susah Tidur"],
    judul: "Ayat Kursi (Penjaga Malam)",
    arab: "اللَّهُ لاَ إِلَهَ إِلاَّ هُوَ الْحَيُّ الْقَيُّومُ لاَ تَأْخُذُهُ سِنَةٌ وَلاَ نَوْمٌ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الأَرْضِ مَن ذَا الَّذِي يَشْفَعُ عِندَهُ إِلاَّ بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلاَ يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلاَّ بِمَا شَاء وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالأَرْضَ وَلاَ يَؤُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ",
    latin: "Allahu la ilaha illa huwal hayyul qayyum, la ta'khudzuhu sinatun wa la naum. Lahu ma fis samawati wa ma fil ardh. Man dzalladzi yasyfa'u 'indahu illa bi idznih. Ya'lamu ma bayna aydihim wa ma khalfahum. Wa la yuhithuna bi syai'im min 'ilmihi illa bima sya'a. Wasi'a kursiyyuhus samawati wal ardh. Wa la ya'udhuhu hifzhuhuma wa huwal 'aliyyul 'azhim.",
    arti: "Allah, tiada Tuhan (yang berhak disembah) melainkan Dia Yang Hidup kekal lagi terus menerus mengurus (makhluk-Nya); tidak mengantuk dan tidak tidur. Kepunyaan-Nya apa yang di langit dan di bumi. Tiada yang dapat memberi syafa'at di sisi Allah tanpa izin-Nya? Allah mengetahui apa-apa yang di hadapan mereka dan di belakang mereka, dan mereka tidak mengetahui apa-apa dari ilmu Allah melainkan apa yang dikehendaki-Nya. Kursi Allah meliputi langit dan bumi. Dan Allah tidak merasa berat memelihara keduanya, dan Allah Maha Tinggi lagi Maha Besar.",
    keutamaan: "Barangsiapa membacanya sebelum tidur, Allah akan mengutus malaikat menjaganya dari setan hingga pagi hari.",
    referensi: "QS. Al-Baqarah: 255"
  },
  {
    id: "doa-bersyukur-pagi",
    kategori: ["Bersyukur", "Semangat Hidup"],
    judul: "Doa Syukur Pagi Hari",
    arab: "اللَّهُمَّ مَا أَصْبَحَ بِي مِنْ نِعْمَةٍ أَوْ بِأَحَدٍ مِنْ خَلْقِكَ فَمِنْكَ وَحْدَكَ لاَ شَرِيكَ لَكَ، فَلَكَ الْحَمْدُ وَلَكَ الشُّكْرُ",
    latin: "Allahumma ma ashbaha bi min ni'matin aw bi-ahadin min khalqika faminka wahdaka la syarika laka, falakal hamdu walakasy syukru.",
    arti: "Ya Allah, nikmat apapun yang ada padaku di pagi ini atau yang ada pada salah seorang makhluk-Mu, maka ia murni dari-Mu semata, tiada sekutu bagi-Mu. Maka bagi-Mu segala puji dan bagi-Mu rasa syukur.",
    keutamaan: "Membaca zikir ini di pagi hari berarti telah menunaikan syukur untuk hari itu secara utuh.",
    referensi: "HR. Abu Daud No. 5073"
  },
  {
    id: "doa-marah-istighfar",
    kategori: ["Marah", "Mohon Ampunan"],
    judul: "Istighfar Pelebur Amarah",
    arab: "أَسْتَغْفِرُ اللَّهَ الْعَظِيمَ الَّذِي لَا إِلَهَ إِلَّا هُوَ الْحَيَّ الْقَيُّومَ وَأَتُوبُ إِلَيْهِ",
    latin: "Astaghfirullahal 'azhim alladzi la ilaha illa huwal hayyul qayyumu wa atubu ilaih.",
    arti: "Aku memohon ampun kepada Allah Yang Maha Agung, yang tiada Tuhan selain Dia, Yang Maha Hidup lagi Maha Berdiri Sendiri, dan aku bertaubat kepada-Nya.",
    keutamaan: "Dosa-dosanya akan diampuni meskipun ia pernah lari dari medan pertempuran (dosa besar), dan sangat ampuh mendinginkan emosi.",
    referensi: "HR. Abu Daud No. 1517"
  },
  {
    id: "doa-bangun-tidur",
    kategori: ["Bersyukur", "Semangat Hidup"],
    judul: "Doa Bangun Tidur",
    arab: "الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ",
    latin: "Alhamdu lillahil ladzi ahyana ba'da ma amatana wa ilaihin nusyur.",
    arti: "Segala puji bagi Allah yang menghidupkan kami kembali setelah mematikan kami dan kepada-Nya kami dibangkitkan.",
    keutamaan: "Bentuk syukur atas kesempatan hidup kembali setelah tidur (kematian kecil) untuk beribadah.",
    referensi: "HR. Bukhari No. 6324"
  },
  {
    id: "doa-masuk-wc",
    kategori: ["Perlindungan"],
    judul: "Doa Masuk Kamar Mandi / WC",
    arab: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْخُبُثِ وَالْخَبَائِثِ",
    latin: "Allahumma inni a'udzu bika minal khubutsi wal khaba'its.",
    arti: "Ya Allah, sesungguhnya aku berlindung kepada-Mu dari godaan setan laki-laki dan setan perempuan.",
    keutamaan: "Melindungi aurat dan diri dari gangguan makhluk halus yang mendiami tempat kotor.",
    referensi: "HR. Bukhari No. 142"
  },
  {
    id: "doa-keluar-wc",
    kategori: ["Mohon Ampunan", "Bersyukur"],
    judul: "Doa Keluar Kamar Mandi / WC",
    arab: "غُفْرَانَكَ الْحَمْدُ لِلَّهِ الَّذِي أَذْهَبَ عَنِّي الْأَذَى وَعَافَانِي",
    latin: "Ghufranaka. Alhamdu lillahil ladzi adzhaba 'annil adza wa 'afani.",
    arti: "Aku memohon ampunan-Mu. Segala puji bagi Allah yang telah menghilangkan penyakit dari tubuhku dan menjaga kesehatanku.",
    keutamaan: "Ungkapan rasa syukur karena tubuh telah dibersihkan dari kotoran/penyakit.",
    referensi: "HR. Abu Daud No. 30"
  },
  {
    id: "doa-keluar-rumah",
    kategori: ["Perlindungan", "Ingin Dimudahkan"],
    judul: "Doa Keluar Rumah (Tawakal)",
    arab: "بِسْمِ اللَّهِ تَوَكَّلْتُ عَلَى اللَّهِ، لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ",
    latin: "Bismillahi tawakkaltu 'alallahi, la hawla wa la quwwata illa billah.",
    arti: "Dengan nama Allah, aku bertawakal kepada Allah, tiada daya dan upaya kecuali dengan kekuatan Allah.",
    keutamaan: "Mendapatkan perlindungan dari Allah, dicukupkan urusannya, dan dijauhkan dari gangguan setan selama di luar.",
    referensi: "HR. Abu Daud No. 5095"
  },
  {
    id: "doa-masuk-masjid",
    kategori: ["Hati Tenang", "Ingin Dimudahkan"],
    judul: "Doa Masuk Masjid",
    arab: "اللَّهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ",
    latin: "Allahummaftah li abwaba rahmatik.",
    arti: "Ya Allah, bukakanlah untukku pintu-pintu rahmat-Mu.",
    keutamaan: "Memohon agar ibadah di dalam masjid diterima dan mendapatkan limpahan rahmat.",
    referensi: "HR. Muslim No. 713"
  },
  {
    id: "doa-sebelum-makan",
    kategori: ["Bersyukur"],
    judul: "Doa Sebelum Makan",
    arab: "اللَّهُمَّ بَارِكْ لَنَا فِيمَا رَزَقْتَنَا وَقِنَا عَذَابَ النَّارِ",
    latin: "Allahumma barik lana fima razaqtana wa qina 'adzaban nar.",
    arti: "Ya Allah, berkahilah kami atas rezeki yang telah Engkau anugerahkan kepada kami dan peliharalah kami dari siksa api neraka.",
    keutamaan: "Mengundang keberkahan ke dalam makanan yang dikonsumsi agar menjadi energi kebaikan.",
    referensi: "HR. Ibnu Sunni"
  },
  {
    id: "doa-sesudah-makan",
    kategori: ["Bersyukur"],
    judul: "Doa Sesudah Makan",
    arab: "الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنَا وَسَقَانَا وَجَعَلَنَا مُسْلِمِينَ",
    latin: "Alhamdu lillahil ladzi ath'amana wa saqana wa ja'alana muslimin.",
    arti: "Segala puji bagi Allah yang telah memberi kami makan dan minum serta menjadikan kami termasuk golongan orang muslim.",
    keutamaan: "Bentuk syukur karena masih diberikan nikmat pangan dan nikmat iman secara bersamaan.",
    referensi: "HR. Abu Daud No. 3850"
  },
  {
    id: "doa-memohon-ilmu",
    kategori: ["Ingin Dimudahkan", "Semangat Hidup"],
    judul: "Doa Memohon Ilmu dan Kefahaman",
    arab: "رَبِّ زِدْنِي عِلْمًا وَارْزُقْنِي فَهْمًا",
    latin: "Rabbi zidni 'ilman warzuqni fahman.",
    arti: "Ya Tuhanku, tambahkanlah ilmu kepadaku dan berilah aku pemahaman yang baik.",
    keutamaan: "Meminta agar ilmu yang dipelajari bertambah dan hati diberikan kemampuan untuk memahaminya dengan benar.",
    referensi: "QS. Thaha: 114"
  },
  {
    id: "doa-berpakaian",
    kategori: ["Bersyukur", "Perlindungan"],
    judul: "Doa Mengenakan Pakaian",
    arab: "الْحَمْدُ لِلَّهِ الَّذِي كَسَانِي هَذَا الثَّوْبَ وَرَزَقَنِيِهِ مِنْ غَيْرِ حَوْلٍ مِنِّي وَلَا قُوَّةٍ",
    latin: "Alhamdu lillahil ladzi kasani hadzats tsauba wa razaqanihi min ghairi hawlin minni wa la quwwatin.",
    arti: "Segala puji bagi Allah yang telah memakaikan pakaian ini kepadaku dan memberikan rezeki pakaian ini tanpa daya dan upaya dariku.",
    keutamaan: "Dosa-dosa yang telah lalu akan diampuni oleh Allah SWT.",
    referensi: "HR. Abu Daud No. 4023"
  },
  {
    id: "doa-naik-kendaraan",
    kategori: ["Perlindungan", "Bersyukur"],
    judul: "Doa Naik Kendaraan",
    arab: "سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ وَإِنَّا إِلَى رَبِّنَا لَمُنْقَلِبُونَ",
    latin: "Subhanalladzi sakhkhara lana hadza wa ma kunna lahu muqrinin wa inna ila rabbina lamunqalibun.",
    arti: "Maha Suci Allah yang telah menundukkan semua ini bagi kami padahal kami sebelumnya tidak mampu menguasainya, dan sesungguhnya kami akan kembali kepada Tuhan kami.",
    keutamaan: "Memohon perlindungan selama perjalanan agar selamat sampai tujuan.",
    referensi: "QS. Az-Zukhruf: 13-14"
  },

  {
    id: "doa-bercermin",
    kategori: ["Bersyukur", "Hati Tenang"],
    judul: "Doa Ketika Bercermin",
    arab: "اللَّهُمَّ كَمَا حَسَّنْتَ خَلْقِي فَحَسِّنْ خُلُقِي",
    latin: "Allahumma kama hassanta khalqi fa hassin khuluqi.",
    arti: "Ya Allah, sebagaimana Engkau telah memperbagus penciptaanku, maka perbaguslah pula akhlakku.",
    keutamaan: "Mengajarkan rasa syukur atas fisik yang diberikan dan memohon agar batin/karakter juga diperindah.",
    referensi: "HR. Ahmad No. 24392"
  },
  {
    id: "doa-turun-hujan",
    kategori: ["Bersyukur", "Ingin Dimudahkan"],
    judul: "Doa Ketika Turun Hujan",
    arab: "اللَّهُمَّ صَيِّبًا نَافِعًا",
    latin: "Allahumma shayyiban nafi'an.",
    arti: "Ya Allah, turunkanlah pada kami hujan yang bermanfaat.",
    keutamaan: "Memohon agar hujan membawa keberkahan, bukan musibah atau bencana.",
    referensi: "HR. Bukhari No. 1032"
  },
  {
    id: "doa-setelah-adzan",
    kategori: ["Mohon Ampunan", "Semangat Hidup"],
    judul: "Doa Setelah Mendengar Adzan",
    arab: "اللَّهُمَّ رَبَّ هَذِهِ الدَّعْوَةِ التَّامَّةِ، وَالصَّلَاةِ الْقَائِمَةِ، آتِ مُحَمَّدًا الْوَسِيلَةَ وَالْفَضِيلَةَ، وَابْعَثْهُ مَقَامًا مَحْمُودًا الَّذِي وَعَدْتَهُ",
    latin: "Allahumma rabba hadzihid da'watit tammah, wash shalatil qa'imah, ati Muhammadanil wasilata wal fadhilah, wab'atshu maqamam mahmudal ladzi wa'adtah.",
    arti: "Ya Allah, Tuhan pemilik panggilan yang sempurna ini dan shalat yang akan didirikan. Berilah al-wasilah (derajat di surga) dan keutamaan kepada Nabi Muhammad, dan bangkitkanlah beliau di kedudukan terpuji yang telah Engkau janjikan.",
    keutamaan: "Barangsiapa membacanya setelah adzan, maka ia berhak mendapatkan syafaat Nabi Muhammad SAW di hari kiamat.",
    referensi: "HR. Bukhari No. 614"
  },
  {
    id: "doa-masuk-pasar",
    kategori: ["Ingin Rezeki", "Perlindungan"],
    judul: "Doa Masuk Pasar atau Mall",
    arab: "لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، يُحْيِي وَيُمِيتُ، وَهُوَ حَيٌّ لَا يَمُوتُ، بِيَدِهِ الْخَيْرُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
    latin: "La ilaha illallahu wahdahu la syarika lah, lahul mulku wa lahul hamdu, yuhyi wa yumitu, wa huwa hayyun la yamutu, biyadihil khair, wa huwa 'ala kulli syai'in qadir.",
    arti: "Tidak ada Tuhan yang berhak disembah selain Allah semata, tiada sekutu bagi-Nya. Bagi-Nya kerajaan dan bagi-Nya segala puji. Dia yang menghidupkan dan yang mematikan. Dia Maha Hidup dan tidak akan mati. Di tangan-Nyalah segala kebaikan dan Dia Maha Kuasa atas segala sesuatu.",
    keutamaan: "Mendapatkan sejuta kebaikan, dihapuskan sejuta keburukan, dan ditinggikan sejuta derajat di tempat yang biasanya orang lalai (pasar).",
    referensi: "HR. Tirmidzi No. 3428"
  },
  {
    id: "doa-ketika-sulit",
    kategori: ["Ingin Dimudahkan", "Gelisah"],
    judul: "Doa Saat Menghadapi Kesulitan Berat",
    arab: "يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغِيثُ",
    latin: "Ya Hayyu Ya Qayyum, birahmatika astaghits.",
    arti: "Wahai Dzat Yang Maha Hidup lagi Maha Berdiri Sendiri, dengan rahmat-Mu aku memohon pertolongan.",
    keutamaan: "Doa singkat namun sangat kuat yang dibaca Rasulullah saat dalam keadaan sangat genting atau sedih.",
    referensi: "HR. Tirmidzi No. 3524"
  },
  {
    id: "doa-perlindungan-fitnah",
    kategori: ["Mohon Ampunan", "Hati Tenang"],
    judul: "Doa Perlindungan dari 4 Fitnah (Dibaca dalam Shalat)",
    arab: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ عَذَابِ جَهَنَّمَ، وَمِنْ عَذَابِ الْقَبْرِ، وَمِنْ فِتْنَةِ الْمَحْيَا وَالْمَمَاتِ، وَمِنْ شَرِّ فِتْنَةِ الْمَسِيحِ الدَّجَّالِ",
    latin: "Allahumma inni a'udzu bika min 'adzabi jahannama, wa min 'adzabil qabri, wa min fitnatil mahya wal mamati, wa min syarri fitnatil masihid dajjal.",
    arti: "Ya Allah, aku berlindung kepada-Mu dari azab jahannam, azab kubur, fitnah kehidupan dan kematian, serta dari keburukan fitnah Al-Masih Dajjal.",
    keutamaan: "Sangat dianjurkan dibaca sebelum salam dalam shalat agar selamat dunia akhirat.",
    referensi: "HR. Muslim No. 588"
  },
  {
    id: "doa-penutup-majelis",
    kategori: ["Mohon Ampunan", "Bersyukur"],
    judul: "Doa Kaffaratul Majelis (Penutup Pertemuan)",
    arab: "سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ، أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا أَنْتَ، أَسْتَغْفِرُكَ وَأَتُوبُ إِلَيْكَ",
    latin: "Subhanakallahumma wa bihamdika, asyhadu al la ilaha illa anta, astaghfiruka wa atubu ilaik.",
    arti: "Maha Suci Engkau ya Allah, aku memuji-Mu. Aku bersaksi bahwa tidak ada Tuhan yang berhak disembah kecuali Engkau, aku memohon ampunan dan bertaubat kepada-Mu.",
    keutamaan: "Menghapus dosa-dosa kecil atau kesalahan kata-kata yang terjadi selama pertemuan atau percakapan.",
    referensi: "HR. Tirmidzi No. 3433"
  },
  {
    id: "doa-terima-kasih",
    kategori: ["Bersyukur"],
    judul: "Doa Membalas Kebaikan Orang Lain",
    arab: "جَزَاكَ اللَّهُ خَيْرًا",
    latin: "Jazakallahu khairan.",
    arti: "Semoga Allah membalasmu dengan kebaikan.",
    keutamaan: "Ucapan terima kasih terbaik karena menyerahkan balasan kebaikan kepada Allah yang balasannya jauh lebih sempurna.",
    referensi: "HR. Tirmidzi No. 2035"
  },
  {
    id: "doa-singgah-tempat",
    kategori: ["Perlindungan"],
    judul: "Doa Ketika Singgah di Suatu Tempat Baru",
    arab: "أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ",
    latin: "A'udzu bi kalimaatillahit taammaati min syarri maa khalaq.",
    arti: "Aku berlindung dengan kalimat-kalimat Allah yang sempurna dari kejahatan makhluk yang diciptakan-Nya.",
    keutamaan: "Siapa yang membaca ini saat singgah di suatu tempat (hutan, penginapan, kantor baru), tidak akan ada yang membahayakannya sampai ia pergi.",
    referensi: "HR. Muslim No. 2708"
  },
  {
    id: "doa-agar-istiqomah",
    kategori: ["Hati Tenang", "Semangat Hidup"],
    judul: "Doa Memohon Petunjuk dan Ketakwaan",
    arab: "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْهُدَى وَالتُّقَى وَالْعَفَافَ وَالْغِنَى",
    latin: "Allahumma inni as'alukal huda wat tuqa wal 'afafa wal ghina.",
    arti: "Ya Allah, aku memohon kepada-Mu petunjuk, ketakwaan, sifat iffah (menjaga kehormatan), dan kekayaan hati.",
    keutamaan: "Mencakup semua kebutuhan hidup: bimbingan agama, benteng dari dosa, kehormatan diri, dan kecukupan rezeki.",
    referensi: "HR. Muslim No. 2721"
  }


];
