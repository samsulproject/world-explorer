/* ==========================================
   DATA NEGARA ASIA
========================================== */

const countries = [

  {
    name: "Indonesia",
    flag: "🇮🇩",
    capital: "Jakarta",
    region: "Southeast Asia",
    leader: "Presiden Republik Indonesia",
    language: "Bahasa Indonesia dan berbagai bahasa daerah",
    currency: "Rupiah (IDR)",
    area: "±1,9 juta km²",
    ethnic: "Jawa, Sunda, Batak, Madura, Bugis, Minangkabau, Bali dan lainnya",
    food: "Rendang, nasi goreng, sate, gudeg",
    history:
      "Indonesia memiliki sejarah panjang yang mencakup kerajaan Hindu-Buddha, kesultanan Islam, kolonialisme Eropa, hingga Proklamasi Kemerdekaan pada 17 Agustus 1945.",
    culture:
      "Indonesia memiliki keragaman budaya yang sangat besar, termasuk batik, wayang, gamelan, tari tradisional dan berbagai upacara adat.",
    places:
      "Bali, Borobudur, Raja Ampat, Danau Toba, Taman Nasional Komodo",
    fact:
      "Indonesia merupakan negara kepulauan dengan ribuan pulau dan memiliki keragaman budaya yang sangat tinggi."
  },


  {
    name: "Malaysia",
    flag: "🇲🇾",
    capital: "Kuala Lumpur",
    region: "Southeast Asia",
    leader: "Yang di-Pertuan Agong dan Perdana Menteri",
    language: "Bahasa Melayu",
    currency: "Ringgit Malaysia (MYR)",
    area: "±330 ribu km²",
    ethnic: "Melayu, Tionghoa, India, Iban, Kadazan-Dusun dan lainnya",
    food: "Nasi lemak, laksa, roti canai",
    history:
      "Malaysia berkembang dari berbagai kerajaan Melayu dan pusat perdagangan, kemudian mengalami pengaruh kolonial Inggris sebelum membentuk federasi modern.",
    culture:
      "Budayanya merupakan perpaduan masyarakat Melayu, Tionghoa, India dan berbagai masyarakat pribumi.",
    places:
      "Petronas Twin Towers, Gunung Kinabalu, Langkawi, George Town",
    fact:
      "Malaysia memiliki wilayah di Semenanjung Malaya serta bagian utara Pulau Kalimantan."
  },


  {
    name: "Singapura",
    flag: "🇸🇬",
    capital: "Singapura",
    region: "Southeast Asia",
    leader: "Presiden dan Perdana Menteri",
    language: "Melayu, Inggris, Mandarin dan Tamil",
    currency: "Dolar Singapura (SGD)",
    area: "±735 km²",
    ethnic: "Tionghoa, Melayu, India dan komunitas lainnya",
    food: "Hainanese chicken rice, laksa, chili crab",
    history:
      "Singapura berkembang menjadi pusat perdagangan penting dan menjadi negara merdeka pada tahun 1965.",
    culture:
      "Singapura memiliki masyarakat multietnis dengan pengaruh budaya Melayu, Tionghoa, India dan Barat.",
    places:
      "Marina Bay Sands, Gardens by the Bay, Sentosa",
    fact:
      "Singapura merupakan negara-kota yang menjadi salah satu pusat ekonomi dan teknologi Asia."
  },


  {
    name: "Thailand",
    flag: "🇹🇭",
    capital: "Bangkok",
    region: "Southeast Asia",
    leader: "Raja dan Perdana Menteri",
    language: "Bahasa Thai",
    currency: "Baht (THB)",
    area: "±513 ribu km²",
    ethnic: "Thai, Lao, Tionghoa dan kelompok lainnya",
    food: "Pad Thai, Tom Yum, Green Curry",
    history:
      "Thailand memiliki sejarah panjang berbagai kerajaan seperti Sukhothai dan Ayutthaya sebelum berkembang menjadi negara modern.",
    culture:
      "Buddhisme Theravada memiliki pengaruh kuat bersama festival Songkran, seni tari dan tradisi kerajaan.",
    places:
      "Bangkok, Phuket, Chiang Mai, Grand Palace",
    fact:
      "Thailand sebelumnya dikenal luas dengan nama Siam."
  },


  {
    name: "Vietnam",
    flag: "🇻🇳",
    capital: "Hanoi",
    region: "Southeast Asia",
    leader: "Presiden dan Perdana Menteri",
    language: "Bahasa Vietnam",
    currency: "Dong (VND)",
    area: "±331 ribu km²",
    ethnic: "Kinh dan berbagai kelompok etnis lainnya",
    food: "Pho, Banh Mi, Goi Cuon",
    history:
      "Vietnam memiliki sejarah kerajaan kuno, kolonialisme Prancis, perang kemerdekaan dan reunifikasi pada tahun 1975.",
    culture:
      "Budaya Vietnam dipengaruhi tradisi lokal, Konfusianisme, Buddhisme dan sejarah Asia Timur.",
    places:
      "Ha Long Bay, Hanoi, Ho Chi Minh City, Hoi An",
    fact:
      "Vietnam memiliki garis pantai panjang di sepanjang Laut Cina Selatan."
  },


  {
    name: "Filipina",
    flag: "🇵🇭",
    capital: "Manila",
    region: "Southeast Asia",
    leader: "Presiden Filipina",
    language: "Filipino dan Inggris",
    currency: "Peso Filipina (PHP)",
    area: "±300 ribu km²",
    ethnic: "Tagalog, Cebuano, Ilocano, Bisaya dan lainnya",
    food: "Adobo, Sinigang, Lechon",
    history:
      "Filipina memiliki sejarah masyarakat pribumi, kolonialisme Spanyol dan Amerika, pendudukan Jepang serta kemerdekaan.",
    culture:
      "Budayanya memadukan tradisi Asia dengan pengaruh Spanyol dan Amerika.",
    places:
      "Palawan, Boracay, Manila, Chocolate Hills",
    fact:
      "Filipina merupakan negara kepulauan yang terdiri dari ribuan pulau."
  },


  {
    name: "Jepang",
    flag: "🇯🇵",
    capital: "Tokyo",
    region: "East Asia",
    leader: "Kaisar dan Perdana Menteri",
    language: "Bahasa Jepang",
    currency: "Yen (JPY)",
    area: "±378 ribu km²",
    ethnic: "Jepang, Ainu dan komunitas lainnya",
    food: "Sushi, ramen, tempura",
    history:
      "Jepang memiliki sejarah panjang yang mencakup era samurai, berbagai keshogunan, Restorasi Meiji, industrialisasi dan perkembangan negara modern.",
    culture:
      "Anime, manga, kimono, upacara minum teh, samurai serta tradisi Shinto dan Buddha.",
    places:
      "Tokyo, Kyoto, Gunung Fuji, Osaka",
    fact:
      "Jepang berada di kawasan Cincin Api Pasifik dan terdiri dari ribuan pulau."
  },


  {
    name: "Korea Selatan",
    flag: "🇰🇷",
    capital: "Seoul",
    region: "East Asia",
    leader: "Presiden Republik Korea",
    language: "Bahasa Korea",
    currency: "Won Korea Selatan (KRW)",
    area: "±100 ribu km²",
    ethnic: "Mayoritas masyarakat Korea",
    food: "Kimchi, Bibimbap, Bulgogi",
    history:
      "Korea memiliki sejarah kerajaan panjang, pendudukan Jepang, pembagian Korea dan pembentukan Republik Korea modern.",
    culture:
      "K-pop, K-drama, hanbok, makanan fermentasi dan tradisi Konfusianisme menjadi bagian penting budaya Korea.",
    places:
      "Seoul, Busan, Pulau Jeju, Gyeongbokgung",
    fact:
      "Korea Selatan merupakan salah satu pusat teknologi dan industri hiburan terbesar di Asia."
  },


  {
    name: "Tiongkok",
    flag: "🇨🇳",
    capital: "Beijing",
    region: "East Asia",
    leader: "Presiden Republik Rakyat Tiongkok",
    language: "Mandarin dan berbagai bahasa/dialek lainnya",
    currency: "Yuan / Renminbi (CNY)",
    area: "±9,6 juta km²",
    ethnic: "Han dan 55 kelompok etnis minoritas",
    food: "Peking duck, dim sum, hot pot",
    history:
      "Tiongkok memiliki salah satu peradaban tertua di dunia dengan berbagai dinasti seperti Han, Tang, Song, Yuan, Ming dan Qing.",
    culture:
      "Kaligrafi, kung fu, opera Tiongkok, festival Tahun Baru dan tradisi Konfusianisme.",
    places:
      "Tembok Besar China, Kota Terlarang, Shanghai, Xi'an",
    fact:
      "Tiongkok merupakan salah satu negara terbesar di dunia berdasarkan luas wilayah dan populasi."
  },


  {
    name: "India",
    flag: "🇮🇳",
    capital: "New Delhi",
    region: "South Asia",
    leader: "Presiden dan Perdana Menteri",
    language: "Hindi, Inggris dan berbagai bahasa daerah",
    currency: "Rupee India (INR)",
    area: "±3,3 juta km²",
    ethnic: "Beragam kelompok etnis dan komunitas regional",
    food: "Biryani, dosa, butter chicken",
    history:
      "India memiliki sejarah panjang yang mencakup Peradaban Lembah Indus, berbagai kerajaan, Kekaisaran Mughal, kolonialisme Inggris dan kemerdekaan pada 1947.",
    culture:
      "Yoga, Bollywood, Diwali, Holi, musik klasik serta berbagai tradisi agama.",
    places:
      "Taj Mahal, New Delhi, Mumbai, Varanasi",
    fact:
      "India memiliki keragaman bahasa, agama dan budaya yang sangat besar."
  },


  {
    name: "Nepal",
    flag: "🇳🇵",
    capital: "Kathmandu",
    region: "South Asia",
    leader: "Presiden dan Perdana Menteri",
    language: "Nepali",
    currency: "Rupee Nepal (NPR)",
    area: "±147 ribu km²",
    ethnic: "Chhetri