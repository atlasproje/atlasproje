/* =========================================================
   Atlas Proje — Internationalisation (TR / EN)
   Default language: Turkish (tr)
   ========================================================= */

'use strict';

const I18N = (function () {

  /* ---- Translation strings ----------------------------- */
  const translations = {

    /* ====================================================
       TURKISH
       ==================================================== */
    tr: {

      /* --- Shared: Nav ---------------------------------- */
      'nav.home':          'Ana Sayfa',
      'nav.services':      'Hizmetler',
      'nav.about':         'Hakkımızda',
      'nav.about_us':      'Hakkımızda',
      'nav.contact':       'İletişime Geçin',
      'nav.aria_main':     'Ana gezinme',
      'nav.aria_mobile':   'Mobil gezinme',
      'nav.aria_menu':     'Menüyü aç',
      'logo.sub':          'Mühendislik &amp; Teknoloji',

      /* --- Shared: Footer ------------------------------- */
      'footer.brand_desc':  'Adana, Türkiye merkezli bir mühendislik &amp; teknoloji danışmanlık firması. 18+ yıllık makine mühendisliğini modern yazılım geliştirme ve veri bilimiyle buluşturuyoruz.',
      'footer.reg':         'Sicil No: 49321 &mdash; Adana Ticaret Sicil Memurluğu',
      'footer.pages':       'Sayfalar',
      'footer.svc_heading': 'Hizmetler',
      'footer.cnt_heading': 'İletişim',
      'footer.home':        'Ana Sayfa',
      'footer.about_us':    'Hakkımızda',
      'footer.contact':     'İletişim',
      'footer.mech_eng':    'Makine Mühendisliği',
      'footer.sw_dev':      'Yazılım Geliştirme',
      'footer.data_sci':    'Veri Bilimi &amp; YZ',
      'footer.integrated':  'Entegre Çözümler',
      'footer.copyright':   '&copy; 2006&ndash;2026 Atlas Proje Müşavirlik Mühendislik İnşaat Taahhüt Ticaret Ltd. Şti. Tüm hakları saklıdır.',
      'footer.tagline':     'Hassasiyetle tasarlandı.',

      /* --- Shared: Breadcrumbs -------------------------- */
      'bc.home':     'Ana Sayfa',
      'bc.about':    'Hakkımızda',
      'bc.services': 'Hizmetler',
      'bc.contact':  'İletişim',

      /* ---- INDEX page ---------------------------------- */
      'page.title.index': 'Atlas Proje — Mühendislik ve İnovasyon',

      'hero.eyebrow':      'Adana, Türkiye &mdash; Kur. 2006',
      'hero.title':        'Mühendislik<br />Yenilikle <span class="highlight">Buluşuyor</span>',
      'hero.desc':         'Hassas makine mühendisliğini modern yazılım geliştirme ve veri bilimiyle buluşturuyoruz — geleneksel firmaların sunamayacağı entegre çözümler sunuyoruz.',
      'hero.btn_services': '<i class="fa-solid fa-layer-group"></i> Hizmetleri Keşfet',
      'hero.btn_contact':  '<i class="fa-solid fa-envelope"></i> Bize Ulaşın',
      'hero.stat1_lbl':    'Yıllık Deneyim',
      'hero.stat2_lbl':    'Uzman Kurucu',
      'hero.stat3_lbl':    'Temel Disiplin',

      'hero.card1_title': 'Makine Mühendisliği',
      'hero.card1_text':  'Teknik çizimler, yapısal tasarım &amp; proje danışmanlığı',
      'hero.card2_title': 'Yazılım Geliştirme',
      'hero.card2_text':  'Özel uygulamalar &amp; sistemler',
      'hero.card3_title': 'Veri Bilimi',
      'hero.card3_text':  'Analitik &amp; makine öğrenmesi çözümleri',
      'hero.card4_title': 'Entegre Çözümler',
      'hero.card4_text':  'Mühendislik hassasiyetinin akıllı yazılımla buluştuğu yer',

      'stats.years_biz':   'Yıllık Faaliyet',
      'stats.expert_prt':  'Uzman Ortak',
      'stats.active_grow': 'Aktif &amp; Büyüyen',
      'stats.core_disc':   'Temel Disiplin',

      'idx.svc_label': 'Neler Yapıyoruz',
      'idx.svc_title': 'Hizmetlerimiz',
      'idx.svc_sub':   'Plandan koda — mühendislik ve teknoloji hizmetlerinin tüm yelpazesini ve aralarındaki her şeyi sunuyoruz.',

      'svc_card.eng_badge': 'Temel Güce',
      'svc_card.eng_title': 'Makine Mühendisliği',
      'svc_card.eng_text':  '18+ yıllık deneyime dayanan hassas teknik çizim, yapısal ve mekanik tasarım ve tam proje danışmanlığı.',
      'svc_card.eng_li1':   '<i class="fa-solid fa-chevron-right"></i>Teknik çizim &amp; CAD',
      'svc_card.eng_li2':   '<i class="fa-solid fa-chevron-right"></i>Yapısal &amp; mekanik tasarım',
      'svc_card.eng_li3':   '<i class="fa-solid fa-chevron-right"></i>İnşaat &amp; altyapı',
      'svc_card.eng_li4':   '<i class="fa-solid fa-chevron-right"></i>Proje yönetimi &amp; danışmanlık',
      'svc_card.eng_link':  'Daha fazla <i class="fa-solid fa-arrow-right"></i>',

      'svc_card.sw_badge':  '<i class="fa-solid fa-star" style="font-size:0.6rem;"></i> Öne Çıkan Hizmet',
      'svc_card.sw_title':  'Yazılım &amp; Veri Bilimi',
      'svc_card.sw_text':   'Doğrudan uluslararası proje deneyimiyle özel yazılım geliştirme, veri hatları, makine öğrenmesi modelleri ve analitik.',
      'svc_card.sw_li1':    '<i class="fa-solid fa-chevron-right"></i>Özel yazılım geliştirme',
      'svc_card.sw_li2':    '<i class="fa-solid fa-chevron-right"></i>Veri bilimi &amp; analitik',
      'svc_card.sw_li3':    '<i class="fa-solid fa-chevron-right"></i>Makine öğrenmesi &amp; YZ',
      'svc_card.sw_li4':    '<i class="fa-solid fa-chevron-right"></i>API tasarımı &amp; entegrasyon',
      'svc_card.sw_link':   'Daha fazla <i class="fa-solid fa-arrow-right"></i>',

      'svc_card.int_badge': 'Farkımız',
      'svc_card.int_title': 'Entegre Çözümler',
      'svc_card.int_text':  'Mühendislik ile yazılımın eşsiz buluşması — dijital ikizler, mühendislik iş akışlarının otomasyonu ve akıllı altyapı.',
      'svc_card.int_li1':   '<i class="fa-solid fa-chevron-right"></i>Mühendislik süreçleri otomasyonu',
      'svc_card.int_li2':   '<i class="fa-solid fa-chevron-right"></i>Dijital mühendislik araçları',
      'svc_card.int_li3':   '<i class="fa-solid fa-chevron-right"></i>Akıllı bina &amp; IoT kavramları',
      'svc_card.int_li4':   '<i class="fa-solid fa-chevron-right"></i>Simülasyon &amp; modelleme yazılımı',
      'svc_card.int_link':  'Daha fazla <i class="fa-solid fa-arrow-right"></i>',

      'about_prev.label':   'Atlas Proje Hakkında',
      'about_prev.title':   'Modern Vizyonlu Bir Baba-Oğul Mühendislik Firması',
      'about_prev.sub':     '2006 yılında Adana\'da kurulan Atlas Proje, bir makine mühendisliği danışmanlığı olarak başladı. Bugün, o derin mühendislik mirasını son teknoloji yazılım geliştirme ve veri bilimiyle birleştiriyoruz — çok az firmanın sunabileceği bir kombinasyon.',
      'about_prev.p1_h':    '18+ Yıllık Mühendislik Mükemmelliği',
      'about_prev.p1_t':    'Makine, yapısal ve inşaat mühendisliğinde onlarca yıllık gerçek dünya proje deneyimi.',
      'about_prev.p2_h':    'Uluslararası Yazılım Deneyimi',
      'about_prev.p2_t':    'Dünya standartlarında yazılım ve veri bilimi uygulamaları getiren Avrupa teknoloji şirketleriyle aktif işbirliği.',
      'about_prev.p3_h':    'Küçük Ekip, Tam Bağlılık',
      'about_prev.p3_t':    'İki ortak olmak, her projenin doğrudan en kıdemli kişilerin ilgisini alması anlamına gelir — her zaman.',
      'about_prev.btn':     '<i class="fa-solid fa-users"></i> Ekibimizle Tanışın',
      'about_prev.swlbl':   'Yazılım Geliştirme',
      'about_prev.swval':   'Modern Altyapı',
      'about_prev.englbl':  'Mühendislik',
      'about_prev.engval':  'Kur. 2006',

      'vision.label':   'Vizyonumuz',
      'vision.title':   'Mühendislik Hassasiyetinin Dijital Zeka ile Buluştuğu Yer',
      'vision.sub':     'Uzun vadeli hedefimiz, fiziksel ve dijital mühendislik dünyaları arasında köprü olmaktır — yapısal anlayışı yazılım zekasıyla birleştirerek daha akıllı çözümler inşa etmek.',
      'vision.btn':     '<i class="fa-solid fa-layer-group"></i> Tüm Hizmetleri Gör',
      'vision.p1_h':    'Mühendislik Temeli',
      'vision.p1_t':    'Gerçek yapılar ve sistemlerle onlarca yıllık uygulamalı deneyim.',
      'vision.p2_h':    'Akıllı Yazılım',
      'vision.p2_t':    'Mühendislik bağlamında oluşturulmuş özel uygulamalar, veri hatları ve makine öğrenmesi.',
      'vision.p3_h':    'Süreç Otomasyonu',
      'vision.p3_t':    'Zamandan tasarruf etmek ve hataları azaltmak için tekrarlayan mühendislik iş akışlarını otomatikleştirme.',
      'vision.p4_h':    'Uluslararası Erişim',
      'vision.p4_t':    'Adana\'da yerel, Avrupa\'da küresel ortaklarla hizmet veriyoruz.',

      'cta.label': 'Başlamaya Hazır mısınız?',
      'cta.title': 'Birlikte Bir Şeyler İnşa Edelim',
      'cta.sub':   'Bir teknik çizime, yazılım çözümüne veya her ikisini birleştiren bir projeye ihtiyaç duyuyor olun — sizden haber almaktan memnuniyet duyarız.',
      'cta.btn1':  '<i class="fa-solid fa-envelope"></i> İletişime Geçin',
      'cta.btn2':  '<i class="fa-solid fa-layer-group"></i> Hizmetleri İncele',

      /* ---- ABOUT page ---------------------------------- */
      'page.title.about': 'Hakkımızda — Atlas Proje',

      'about.hero_label': 'Hikayemiz',
      'about.hero_title': 'İki Ortak, İki Disiplin,<br />Bir Vizyon',
      'about.hero_sub':   'Onlarca yıllık hassasiyet mühendisliği üzerine kurulu bir baba-oğul mühendislik limited şirketi, artık yazılım ve veri biliminin sınırlarına genişliyor.',

      'about.journey_title': 'Yolculuğumuz',

      'tl.apr2006':    'Nisan 2006',
      'tl.founded_h':  'Şirket Kuruldu',
      'tl.founded_t':  'Atlas Proje, bir mühendislik tutkusundan ve kaliteli proje danışmanlığına bağlılıktan doğan Adana Ticaret Sicil Memurluğu\'na (Sicil No: 49321) resmi olarak tescil edildi.',
      'tl.era1':       '2006 – 2015',
      'tl.excel_h':    'Mühendislik Mükemmelliği',
      'tl.excel_t':    'Hassas teknik çizim, yapısal tasarım ve inşaat proje yönetiminde Adana ve çevresinde güçlü bir itibar inşa etmek.',
      'tl.era2':       '2015 – Günümüz',
      'tl.tech_h':     'Teknolojiye Açılma',
      'tl.tech_t':     'Bir sonraki nesil yazılım geliştirme ve veri bilimine derin yatırım yaparak Avrupalı teknoloji şirketleriyle işbirliği yoluyla uluslararası deneyim kazanıyor.',
      'tl.today':      'Bugün &amp; Ötesi',
      'tl.intgr_h':    'Entegrasyon Başlıyor',
      'tl.intgr_t':    'Her iki disiplini aktif olarak birleştirerek yeni bir hizmet kategorisi sunuyoruz — mühendislik farkındalıklı yazılım ve yazılım güçlü mühendislik. Bu bizim farkımız ve nereye gittiğimiz.',

      'reg.label':      'Şirket Detayları',
      'reg.title':      'Kayıtlı &amp; Hazır',
      'reg.sub':        'Atlas Proje, yerel ve uluslararası mühendislik danışmanlığı, inşaat ve teknoloji hizmetleri sunmak için yetkili, tam kayıtlı bir Türk limited şirketidir (Limited Şirketi).',
      'reg.card_h':     'Şirket Tescili',
      'reg.legal_name': 'Yasal Unvan',
      'reg.short_name': 'Kısa Ad',
      'reg.registry':   'Sicil',
      'reg.sicil':      'Sicil No',
      'reg.founded':    'Kuruluş',
      'reg.type':       'Tür',
      'reg.location':   'Konum',
      'reg.address':    'Adres',

      'team.label': 'Ortaklar',
      'team.title': 'Ekibimizle Tanışın',
      'team.sub':   'İki kişi. İki tamamlayıcı beceri seti. Her projede kaliteli iş sunma taahhüdü.',

      'team.ilmaz_ttl':  'Kurucu &amp; Genel Müdür',
      'team.ilmaz_bio':  '30 yılı aşkın makine ve yapısal mühendislik deneyimiyle İlmız, Atlas Proje\'nin mühendislik güvenilirliğinin temel direğidir. Tüm teknik mühendislik çıktılarını denetler ve Adana ve çevresindeki müşteri ilişkilerini yönetir. Şirketin kurucu müdürü olarak uzmanlığı teknik çizim, inşaat proje yönetimi ve altyapı danışmanlığını kapsamaktadır.',
      'team.aysuhan_ttl':'Teknoloji Lideri',
      'team.aysuhan_bio':'İtalyan bir teknoloji şirketiyle işbirliği dahil aktif uluslararası proje deneyimine sahip bir yazılım geliştirici ve veri bilimcisi. Metin, Atlas Proje\'nin teknoloji hizmetleri birimini yönetiyor — özel yazılım geliştirmeden makine öğrenmesi hatlarına ve veri analitiğine kadar. Benzersiz konumu, ailesinin mühendislik mirasını yazılım uzmanlığıyla köprüleyerek tek başına hiçbir disiplinin başaramayacağı çözümler üretmektir.',

      'tag.mech_eng':    'Makine Mühendisliği',
      'tag.tech_draw':   'Teknik Çizim',
      'tag.structural':  'Yapısal Tasarım',
      'tag.constr_mgmt': 'İnşaat Yönetimi',
      'tag.proj_cons':   'Proje Danışmanlığı',
      'tag.sw_dev':      'Yazılım Geliştirme',
      'tag.data_sci':    'Veri Bilimi',
      'tag.ml':          'Makine Öğrenmesi',
      'tag.api':         'API Mühendisliği',
      'tag.db':          'Veritabanı Tasarımı',
      'tag.intl':        'Uluslararası Projeler',

      'val.label':  'Temel Değerlerimiz',
      'val.title':  'Değerlerimiz',
      'val.sub':    'Bu ilkeler Atlas Proje\'yi başından beri yönlendiriyor ve verdiğimiz her kararı, teslim ettiğimiz her projeyi şekillendiriyor.',
      'val.prec_h': 'Hassasiyet',
      'val.prec_t': 'Mühendislikte bir milimetre önemlidir. Yazılımda bir mantık hatası zincirleme reaksiyona yol açabilir. Yapısal çizime uyguladığımız titizliği koda da uygularız.',
      'val.comm_h': 'Bağlılık',
      'val.comm_t': 'Küçük bir ekip olmak bir kısıtlama değil, bir özelliktir. Her müşteri, işin sahibi olan kişilerin tam dikkatini ve sorumluluğunu alır.',
      'val.inno_h': 'İnovasyon',
      'val.inno_t': 'Sürekli daha iyisini yapmaya bakıyoruz — ister yeni bir mühendislik standardı benimsemek, ister tekrarlayan bir iş akışını otomatikleştirmek için özel bir araç geliştirmek olsun.',
      'val.intg_h': 'Dürüstlük',
      'val.intg_t': 'Müşterilerimize neyin mümkün olup olmadığını dürüstçe söyleriz. Her proje öncesinde dürüst değerlendirme — başarısız olacak bir projeye karşı tavsiye vermeyi tercih ederiz.',
      'val.grow_h': 'Sürekli Gelişim',
      'val.grow_t': 'Her iki ortak da aktif birer uygulayıcı olmaya devam ediyor — mühendislik kodlarını, yazılım çerçevelerini ve veri bilimi tekniklerini takip ederek çalışmamızın asla eskimemesini sağlıyoruz.',
      'val.glob_h': 'Küresel Bakış Açısı',
      'val.glob_t': 'Adana\'ya kök salmış, uluslararası düşünen. Yazılım pratiğimiz Avrupalı ekiplerle çalışarak ve endüstri genelindeki en iyi uygulamaları benimseyerek şekillenmiştir.',

      'about_vis.label':  'İleriye Bakış',
      'about_vis.title':  'Vizyonumuz: Mühendislik-Yazılım Köprüsü',
      'about_vis.sub':    'Önümüzdeki on yılın en etkili mühendislik çözümlerinin hem fiziksel hem de dijital uzmanlık gerektireceğine inanıyoruz. Atlas Proje, tam olarak bu tür bir firma olmak için kendini konumlandırıyor — küçük, uzmanlaşmış ve gerçek anlamda disiplinlerarası.',
      'about_vis.btn1':   '<i class="fa-solid fa-layer-group"></i> Hizmetlerimizi Keşfedin',
      'about_vis.btn2':   '<i class="fa-solid fa-envelope"></i> Bir Sohbet Başlatın',

      /* ---- SERVICES page ------------------------------- */
      'page.title.services': 'Hizmetler — Atlas Proje',

      'svc.hero_label': 'Neler Sunuyoruz',
      'svc.hero_title': 'Tam Kapsamlı Mühendislik<br />&amp; Teknoloji Hizmetleri',
      'svc.hero_sub':   'Yapısal planlardan makine öğrenmesi hatlarına — her iki dünyada ve eşsiz biçimde ikisinin kesişim noktasında hizmet sunuyoruz.',

      'svc.b1_label': 'Temel Güce',
      'svc.b1_title': 'Makine Mühendisliği &amp; İnşaat',
      'svc.b1_desc':  'Kuruluş disiplinimiz. Adana ve çevresindeki projelerde 18 yılı aşkın sürede teknik açıdan hassas mühendislik hizmetleri sunarız.',
      'svc.i1_title': 'Teknik Çizim &amp; CAD',
      'svc.i1_text':  'Mekanik, yapısal ve mimari projeler için hassas 2D ve 3D teknik çizimler, planlar ve CAD belgeleri.',
      'svc.i2_title': 'Yapısal &amp; Mekanik Tasarım',
      'svc.i2_text':  'Detaylı yapısal hesaplar, betonarme ve çelik çerçeve tasarımı, mekanik tesisat planları ve yük analizi.',
      'svc.i3_title': 'İnşaat Proje Yönetimi',
      'svc.i3_text':  'Kamu ve özel müşteriler için planlama, ihale, şantiye denetimi ve teslimatı kapsayan uçtan uca inşaat proje yönetimi.',
      'svc.i4_title': 'Kentsel Planlama &amp; Altyapı',
      'svc.i4_text':  'Konut ve ticari gelişimler için etüt, haritalama, parselasyon, altyapı tasarımı ve belediye mühendislik hizmetleri.',
      'svc.i5_title': 'Elektrik &amp; Mekanik Tesisatlar',
      'svc.i5_text':  'Binalarda elektrik sistemleri, HVAC, tesisat ve mekanik tesisatlar için tam tasarım ve danışmanlık.',
      'svc.i6_title': 'Mühendislik Danışmanlığı &amp; İhale',
      'svc.i6_text':  'Kamu ve özel mühendislik sözleşmeleri için teknik danışmanlık, fizibilite çalışmaları, ihale hazırlığı ve teklif yönetimi.',

      'svc.b2_label': 'Öne Çıkan Hizmet',
      'svc.b2_title': 'Yazılım Geliştirme &amp; Veri Bilimi',
      'svc.b2_desc':  'Doğrudan uluslararası proje deneyimiyle modern yazılım mühendisliği ve veri bilimi — gerçek iş problemlerini çözmek için tasarlandı.',
      'svc.i7_title': 'Özel Yazılım Geliştirme',
      'svc.i7_text':  'İş süreçlerinize özel, temiz mimari ve uzun vadeli sürdürülebilirlikle tasarlanmış web ve masaüstü uygulamaları.',
      'svc.i8_title': 'Veri Bilimi &amp; Analitik',
      'svc.i8_text':  'Ham verileri eyleme dönüştürülebilir içgörüye dönüştüren keşifsel veri analizi, istatistiksel modelleme, KPI panoları ve iş zekası.',
      'svc.i9_title': 'Makine Öğrenmesi &amp; YZ',
      'svc.i9_text':  'Üretim dağıtımı göz önünde bulundurarak tasarlanmış tahminsel modelleme, sınıflandırma, anomali tespiti ve ML hatları.',
      'svc.i10_title':'API Tasarımı &amp; Sistem Entegrasyonu',
      'svc.i10_text': 'RESTful ve olay tabanlı API geliştirme, eski ve modern sistemler arasında entegrasyon ve mikro hizmet mimarisi.',
      'svc.i11_title':'Veritabanı Tasarımı &amp; Mühendisliği',
      'svc.i11_text': 'İlişkisel ve ilişkisel olmayan veritabanı mimarisi, sorgu optimizasyonu, ETL hatları ve veri depolama çözümleri.',
      'svc.i12_title':'İş Akışı &amp; Süreç Otomasyonu',
      'svc.i12_text': 'Betik yazımı, RPA tarzı iş akışları ve akıllı planlama araçlarıyla tekrarlayan iş süreçlerini otomatikleştirme.',

      'svc.b3_label':  'Eşsiz Farkımız',
      'svc.b3_title':  'Entegre Mühendislik + Teknoloji',
      'svc.b3_desc':   'Bizi farklı kılan şey bu. Hem fiziksel mühendisliği hem de dijital sistemleri anladığınızda anlam kazanan çözümler.',
      'svc.intg_h':    'Gerçek Değer Yaratan Nadir Kombinasyon',
      'svc.intg_p':    'Çoğu firma birinde ya da diğerinde iyidir. Biz köprüyü inşa ediyoruz. Vizyonumuz, mühendislik alan bilgisinin yazılımı daha akıllı kılacağı ve yazılımın mühendisliği daha hızlı ve hassas hale getireceği çözümler sunmak.',
      'svc.intg_btn':  '<i class="fa-solid fa-envelope"></i> Bir Proje Görüşün',
      'svc.feat1':     'Mühendislik Projeleri için Dijital İkiz Kavramları',
      'svc.feat2':     'Otomatik Teknik Dokümantasyon Üretimi',
      'svc.feat3':     'Yapısal Veri Analizi &amp; Tahminsel Modeller',
      'svc.feat4':     'Mühendislik İş Akışı Otomasyon Araçları',
      'svc.feat5':     'IoT\'ye Hazır Akıllı İzleme Mimarileri',

      'svc.cta_label': 'Sonraki Adım',
      'svc.cta_title': 'Aklınızda Bir Proje mi Var?',
      'svc.cta_sub':   'Bir teknik çizime, veri hattına veya her iki dünyayı kapsayan bir şeye ihtiyacınız olsun — bize bildirin, hemen yanıt vereceğiz.',
      'svc.cta_btn':   '<i class="fa-solid fa-paper-plane"></i> Mesaj Gönderin',

      /* ---- CONTACT page -------------------------------- */
      'page.title.contact': 'İletişim — Atlas Proje',

      'cnt.hero_label': 'İletişime Geçin',
      'cnt.sr_heading':  'İletişim Bilgileri ve Form',
      'cnt.hero_title': 'Projenizi<br />Konuşalım',
      'cnt.hero_sub':   'Bir mühendislik sorununuz, bir yazılım fikriniz veya her ikisinin kesişim noktasında bir şeyler durumunuz olsun — sizden haber almaktan memnuniyet duyarız. Her mesajı yanıtlıyoruz.',

      'cnt.info_label':    'İletişim Bilgileri',
      'cnt.addr_label':    'Ofis Adresi',
      'cnt.reg_label':     'Yasal Kayıt',
      'cnt.work_label':    'Çalışma Günleri',
      'cnt.work_value':    'Pazartesi – Cuma',
      'cnt.next_title':    'Sırada Ne Var?',
      'cnt.step1_title':   'Mesajınızı Okuyoruz',
      'cnt.step1_text':    'Her sorgu, ortaklarımızdan biri tarafından kişisel olarak okunur.',
      'cnt.step2_title':   'Uygunluğu Değerlendiriyoruz',
      'cnt.step2_text':    'Projeniz için doğru kişiler olup olmadığımız konusunda dürüst olacağız.',
      'cnt.step3_title':   'Yanıt Veriyoruz',
      'cnt.step3_text':    'Proje türünüze uygun ortaktan yanıt alacaksınız.',

      'cnt.form_title':    'Bize Mesaj Gönderin',
      'cnt.form_sub':      'Projenizi bize anlatın, en kısa sürede geri dönelim.',
      'cnt.fname_lbl':     'Ad',
      'cnt.fname_ph':      'Adınız',
      'cnt.lname_lbl':     'Soyad',
      'cnt.lname_ph':      'Soyadınız',
      'cnt.email_lbl':     'E-posta Adresi',
      'cnt.phone_lbl':     'Telefon Numarası',
      'cnt.company_lbl':   'Şirket / Kuruluş',
      'cnt.company_ph':    'İsteğe bağlı',
      'cnt.service_lbl':   'İlgilenilen Hizmet',
      'cnt.service_def':   'Bir hizmet seçin…',
      'cnt.og_eng':        'Mühendislik',
      'cnt.opt_draw':      'Teknik Çizim &amp; CAD',
      'cnt.opt_struct':    'Yapısal &amp; Mekanik Tasarım',
      'cnt.opt_constr':    'İnşaat Proje Yönetimi',
      'cnt.opt_consult':   'Mühendislik Danışmanlığı',
      'cnt.og_sw':         'Yazılım &amp; Veri Bilimi',
      'cnt.opt_sw':        'Özel Yazılım Geliştirme',
      'cnt.opt_data':      'Veri Bilimi &amp; Analitik',
      'cnt.opt_ml':        'Makine Öğrenmesi &amp; YZ',
      'cnt.opt_api':       'API Tasarımı &amp; Entegrasyon',
      'cnt.og_int':        'Entegre',
      'cnt.opt_int':       'Mühendislik + Teknoloji (Entegre)',
      'cnt.opt_other':     'Diğer / Henüz Emin Değilim',
      'cnt.msg_lbl':       'Mesajınız',
      'cnt.msg_ph':        'Projenizi, sorununuzu veya sorunuzu mümkün olduğunca açık bir şekilde açıklayın. Ne kadar fazla ayrıntı verirseniz, o kadar iyi yardımcı olabiliriz.',
      'cnt.btn_submit':    '<i class="fa-solid fa-paper-plane"></i> Mesajı Gönder',
      'cnt.btn_sending':   'Gönderiliyor…',
      'cnt.req_note':      'ile işaretli alanlar zorunludur. Bilgileriniz yalnızca sorunuzu yanıtlamak için kullanılır.',
      'cnt.success':       '<i class="fa-solid fa-circle-check"></i> Mesaj gönderildi! Teşekkürler — kısa sürede iletişime geçeceğiz.',
      'cnt.error':         '<i class="fa-solid fa-triangle-exclamation"></i> Göndermeden önce lütfen tüm zorunlu alanları doldurun.',

      'cnt.loc_label': 'Konum',
      'cnt.loc_title': 'Adana\'da Bizi Bulun',
      'cnt.loc_sub':   'Ofisimiz, merkezi Seyhan, Adana\'nın Reşatbey mahallesinde yer almaktadır.',
      'cnt.map_btn':   '<i class="fa-solid fa-arrow-up-right-from-square"></i> Google Haritalar\'da Aç',
    },

    /* ====================================================
       ENGLISH
       ==================================================== */
    en: {

      /* --- Shared: Nav ---------------------------------- */
      'nav.home':          'Home',
      'nav.services':      'Services',
      'nav.about':         'About',
      'nav.about_us':      'About Us',
      'nav.contact':       'Get in Touch',
      'nav.aria_main':     'Main navigation',
      'nav.aria_mobile':   'Mobile navigation',
      'nav.aria_menu':     'Open menu',
      'logo.sub':          'Engineering &amp; Technology',

      /* --- Shared: Footer ------------------------------- */
      'footer.brand_desc':  'A limited engineering &amp; technology consultancy based in Adana, Turkey. Combining 18+ years of mechanical engineering with modern software development and data science.',
      'footer.reg':         'Sicil No: 49321 &mdash; Adana Ticaret Sicil Memurluğu',
      'footer.pages':       'Pages',
      'footer.svc_heading': 'Services',
      'footer.cnt_heading': 'Contact',
      'footer.home':        'Home',
      'footer.about_us':    'About Us',
      'footer.contact':     'Contact',
      'footer.mech_eng':    'Mechanical Engineering',
      'footer.sw_dev':      'Software Development',
      'footer.data_sci':    'Data Science &amp; AI',
      'footer.integrated':  'Integrated Solutions',
      'footer.copyright':   '&copy; 2006&ndash;2026 Atlas Proje Müşavirlik Mühendislik İnşaat Taahhüt Ticaret Ltd. Şti. All rights reserved.',
      'footer.tagline':     'Designed with precision.',

      /* --- Shared: Breadcrumbs -------------------------- */
      'bc.home':     'Home',
      'bc.about':    'About',
      'bc.services': 'Services',
      'bc.contact':  'Contact',

      /* ---- INDEX page ---------------------------------- */
      'page.title.index': 'Atlas Proje — Engineering Meets Innovation',

      'hero.eyebrow':      'Adana, Turkey &mdash; Est. 2006',
      'hero.title':        'Engineering<br />Meets <span class="highlight">Innovation</span>',
      'hero.desc':         'We bridge precision mechanical engineering with modern software development and data science — delivering integrated solutions that traditional firms cannot.',
      'hero.btn_services': '<i class="fa-solid fa-layer-group"></i> Explore Services',
      'hero.btn_contact':  '<i class="fa-solid fa-envelope"></i> Contact Us',
      'hero.stat1_lbl':    'Years of experience',
      'hero.stat2_lbl':    'Expert founders',
      'hero.stat3_lbl':    'Core disciplines',

      'hero.card1_title': 'Mechanical Engineering',
      'hero.card1_text':  'Technical drawings, structural design &amp; project consulting',
      'hero.card2_title': 'Software Dev',
      'hero.card2_text':  'Custom applications &amp; systems',
      'hero.card3_title': 'Data Science',
      'hero.card3_text':  'Analytics &amp; ML solutions',
      'hero.card4_title': 'Integrated Solutions',
      'hero.card4_text':  'Where engineering precision meets intelligent software',

      'stats.years_biz':   'Years in Business',
      'stats.expert_prt':  'Expert Partners',
      'stats.active_grow': 'Active &amp; Growing',
      'stats.core_disc':   'Core Disciplines',

      'idx.svc_label': 'What We Do',
      'idx.svc_title': 'Our Services',
      'idx.svc_sub':   'From blueprint to binary — we cover the full spectrum of engineering and technology services, and everything in between.',

      'svc_card.eng_badge': 'Traditional Strength',
      'svc_card.eng_title': 'Mechanical Engineering',
      'svc_card.eng_text':  'Precision technical drawing, structural and mechanical design, and full project consulting built on 18+ years of hands-on experience.',
      'svc_card.eng_li1':   '<i class="fa-solid fa-chevron-right"></i>Technical drawing &amp; CAD',
      'svc_card.eng_li2':   '<i class="fa-solid fa-chevron-right"></i>Structural &amp; mechanical design',
      'svc_card.eng_li3':   '<i class="fa-solid fa-chevron-right"></i>Construction &amp; infrastructure',
      'svc_card.eng_li4':   '<i class="fa-solid fa-chevron-right"></i>Project management &amp; consultancy',
      'svc_card.eng_link':  'Learn more <i class="fa-solid fa-arrow-right"></i>',

      'svc_card.sw_badge':  '<i class="fa-solid fa-star" style="font-size:0.6rem;"></i> Leading Service',
      'svc_card.sw_title':  'Software &amp; Data Science',
      'svc_card.sw_text':   'Custom software development, data pipelines, machine learning models, and analytics — with direct international project experience.',
      'svc_card.sw_li1':    '<i class="fa-solid fa-chevron-right"></i>Custom software development',
      'svc_card.sw_li2':    '<i class="fa-solid fa-chevron-right"></i>Data science &amp; analytics',
      'svc_card.sw_li3':    '<i class="fa-solid fa-chevron-right"></i>Machine learning &amp; AI',
      'svc_card.sw_li4':    '<i class="fa-solid fa-chevron-right"></i>API design &amp; integration',
      'svc_card.sw_link':   'Learn more <i class="fa-solid fa-arrow-right"></i>',

      'svc_card.int_badge': 'Our Edge',
      'svc_card.int_title': 'Integrated Solutions',
      'svc_card.int_text':  'The unique convergence of engineering and software — digital twins, automation of engineering workflows, and smart infrastructure.',
      'svc_card.int_li1':   '<i class="fa-solid fa-chevron-right"></i>Engineering process automation',
      'svc_card.int_li2':   '<i class="fa-solid fa-chevron-right"></i>Digital engineering tools',
      'svc_card.int_li3':   '<i class="fa-solid fa-chevron-right"></i>Smart building &amp; IoT concepts',
      'svc_card.int_li4':   '<i class="fa-solid fa-chevron-right"></i>Simulation &amp; modelling software',
      'svc_card.int_link':  'Learn more <i class="fa-solid fa-arrow-right"></i>',

      'about_prev.label':   'About Atlas Proje',
      'about_prev.title':   'A Father &amp; Son Engineering Firm with a Modern Edge',
      'about_prev.sub':     'Founded in 2006 in Adana, Turkey, Atlas Proje started as a mechanical engineering consultancy. Today, we combine that deep engineering heritage with cutting-edge software development and data science — a combination few firms can offer.',
      'about_prev.p1_h':    '18+ Years of Engineering Excellence',
      'about_prev.p1_t':    'Decades of real-world project experience in mechanical, structural, and construction engineering.',
      'about_prev.p2_h':    'International Software Experience',
      'about_prev.p2_t':    'Active collaboration with European technology companies, bringing world-class software and data science practice.',
      'about_prev.p3_h':    'Small Team, Full Commitment',
      'about_prev.p3_t':    'Being two partners means every project gets direct attention from our most senior people — always.',
      'about_prev.btn':     '<i class="fa-solid fa-users"></i> Meet the Team',
      'about_prev.swlbl':   'Software Dev',
      'about_prev.swval':   'Modern Stack',
      'about_prev.englbl':  'Engineering',
      'about_prev.engval':  'Est. 2006',

      'vision.label':   'Our Vision',
      'vision.title':   'Where Engineering Precision Meets Digital Intelligence',
      'vision.sub':     'Our long-term ambition is to become the bridge between the physical and digital engineering worlds — combining structural understanding with software intelligence to build smarter solutions.',
      'vision.btn':     '<i class="fa-solid fa-layer-group"></i> See All Services',
      'vision.p1_h':    'Engineering Foundation',
      'vision.p1_t':    'Decades of hands-on experience with real structures and systems.',
      'vision.p2_h':    'Intelligent Software',
      'vision.p2_t':    'Custom applications, data pipelines and machine learning built for engineering contexts.',
      'vision.p3_h':    'Process Automation',
      'vision.p3_t':    'Automating repetitive engineering workflows to save time and reduce errors.',
      'vision.p4_h':    'International Reach',
      'vision.p4_t':    'Serving clients locally in Adana and collaborating with partners across Europe.',

      'cta.label': 'Ready to Start?',
      'cta.title': "Let's Build Something Together",
      'cta.sub':   "Whether you need a technical drawing, a software solution, or a project that combines both — we'd love to hear from you.",
      'cta.btn1':  '<i class="fa-solid fa-envelope"></i> Get in Touch',
      'cta.btn2':  '<i class="fa-solid fa-layer-group"></i> View Services',

      /* ---- ABOUT page ---------------------------------- */
      'page.title.about': 'About Us — Atlas Proje',

      'about.hero_label': 'Our Story',
      'about.hero_title': 'Two Partners, Two Disciplines,<br />One Vision',
      'about.hero_sub':   'A father-and-son engineering limited company built on decades of precision engineering, now expanding into the frontier of software and data science.',

      'about.journey_title': 'Our Journey',

      'tl.apr2006':    'April 2006',
      'tl.founded_h':  'Company Founded',
      'tl.founded_t':  'Atlas Proje was officially registered with the Adana Trade Registry (Sicil No: 49321) as a limited company — born from a passion for engineering and a commitment to quality project consultancy.',
      'tl.era1':       '2006 – 2015',
      'tl.excel_h':    'Engineering Excellence',
      'tl.excel_t':    'Building a strong reputation across Adana and the surrounding region for precision technical drawing, structural design, and construction project management.',
      'tl.era2':       '2015 – Present',
      'tl.tech_h':     'Embracing Technology',
      'tl.tech_t':     'The next generation invests deeply in software development and data science, gaining international experience through collaboration with European technology companies.',
      'tl.today':      'Today &amp; Beyond',
      'tl.intgr_h':    'The Integration Begins',
      'tl.intgr_t':    'We are actively combining both disciplines to deliver a new category of service — engineering-aware software and software-enhanced engineering. This is our edge, and where we are headed.',

      'reg.label':      'Company Details',
      'reg.title':      'Registered &amp; Ready',
      'reg.sub':        'Atlas Proje is a fully registered Turkish limited liability company (Limited Şirketi), authorised to provide engineering consulting, construction, and technology services locally and internationally.',
      'reg.card_h':     'Company Registration',
      'reg.legal_name': 'Legal Name',
      'reg.short_name': 'Short Name',
      'reg.registry':   'Registry',
      'reg.sicil':      'Sicil No',
      'reg.founded':    'Founded',
      'reg.type':       'Type',
      'reg.location':   'Location',
      'reg.address':    'Address',

      'team.label': 'The Partners',
      'team.title': 'Meet the Team',
      'team.sub':   'Two people. Two complementary skill sets. A shared commitment to delivering quality work on every project.',

      'team.ilmaz_ttl':  'Founder &amp; Managing Director',
      'team.ilmaz_bio':  'With over 30 years of hands-on experience in mechanical and structural engineering, İlmız is the backbone of Atlas Proje\'s engineering credibility. He oversees all technical engineering deliverables and leads client relationships across Adana and the surrounding region. As the company\'s founding director, his expertise spans technical drawing, construction project management, and infrastructure consultancy.',
      'team.aysuhan_ttl':'Technology Lead',
      'team.aysuhan_bio':'A software developer and data scientist with active international project experience, including collaboration with an Italian technology company. Metin leads Atlas Proje\'s technology services division — from custom software development to machine learning pipelines and data analytics. His unique position is bridging the gap between the firm\'s engineering heritage and his software expertise to create solutions neither discipline could achieve alone.',

      'tag.mech_eng':    'Mechanical Engineering',
      'tag.tech_draw':   'Technical Drawing',
      'tag.structural':  'Structural Design',
      'tag.constr_mgmt': 'Construction Management',
      'tag.proj_cons':   'Project Consultancy',
      'tag.sw_dev':      'Software Development',
      'tag.data_sci':    'Data Science',
      'tag.ml':          'Machine Learning',
      'tag.api':         'API Engineering',
      'tag.db':          'Database Design',
      'tag.intl':        'International Projects',

      'val.label':  'What We Stand For',
      'val.title':  'Our Values',
      'val.sub':    'These principles have guided Atlas Proje since day one, and they shape every decision we make and every project we deliver.',
      'val.prec_h': 'Precision',
      'val.prec_t': 'In engineering, a millimetre matters. In software, a logic error can cascade. We apply the same rigour to code that we apply to a structural drawing.',
      'val.comm_h': 'Commitment',
      'val.comm_t': 'Being a small team is a feature, not a limitation. Every client gets the full attention and accountability of the people who own the business.',
      'val.inno_h': 'Innovation',
      'val.inno_t': 'We constantly look for ways to do things better — whether that means adopting a new engineering standard or building a custom tool to automate a repetitive workflow.',
      'val.intg_h': 'Integrity',
      'val.intg_t': "We tell clients the truth about what is and isn't feasible. Honest assessment before every engagement — we'd rather advise against a project that won't succeed.",
      'val.grow_h': 'Continuous Growth',
      'val.grow_t': 'Both partners remain active practitioners — staying current with engineering codes, software frameworks, and data science techniques so our work never becomes outdated.',
      'val.glob_h': 'Global Perspective',
      'val.glob_t': 'Rooted in Adana, thinking internationally. Our software practice is shaped by working alongside European teams and adopting best practices from across the industry.',

      'about_vis.label':  'Looking Ahead',
      'about_vis.title':  'Our Vision: The Engineering-Software Bridge',
      'about_vis.sub':    'We believe the most impactful engineering solutions of the next decade will require both physical and digital expertise. Atlas Proje is positioning itself to be exactly that kind of firm — small, specialist, and truly cross-disciplinary.',
      'about_vis.btn1':   '<i class="fa-solid fa-layer-group"></i> Explore Our Services',
      'about_vis.btn2':   '<i class="fa-solid fa-envelope"></i> Start a Conversation',

      /* ---- SERVICES page ------------------------------- */
      'page.title.services': 'Services — Atlas Proje',

      'svc.hero_label': 'What We Offer',
      'svc.hero_title': 'Full-Spectrum Engineering<br />&amp; Technology Services',
      'svc.hero_sub':   'From structural blueprints to machine learning pipelines — we deliver across both worlds, and uniquely at the intersection of the two.',

      'svc.b1_label': 'Traditional Strength',
      'svc.b1_title': 'Mechanical Engineering &amp; Construction',
      'svc.b1_desc':  'Our founding discipline. Over 18 years of delivering technically precise engineering services across projects in Adana and beyond.',
      'svc.i1_title': 'Technical Drawing &amp; CAD',
      'svc.i1_text':  'Precise 2D and 3D technical drawings, blueprints, and CAD documentation for mechanical, structural, and architectural projects.',
      'svc.i2_title': 'Structural &amp; Mechanical Design',
      'svc.i2_text':  'Detailed structural calculations, reinforced concrete and steel frame design, mechanical installation layouts, and load analysis.',
      'svc.i3_title': 'Construction Project Management',
      'svc.i3_text':  'End-to-end management of construction projects including planning, tendering, site supervision, and delivery for public and private clients.',
      'svc.i4_title': 'Urban Planning &amp; Infrastructure',
      'svc.i4_text':  'Surveying, mapping, parcelation, infrastructure design, and municipal engineering services for residential and commercial developments.',
      'svc.i5_title': 'Electrical &amp; Mechanical Installations',
      'svc.i5_text':  'Complete design and consulting for electrical systems, HVAC, plumbing, and mechanical installations in buildings.',
      'svc.i6_title': 'Engineering Consultancy &amp; Tendering',
      'svc.i6_text':  'Technical advisory, feasibility studies, tender preparation, and bid management for public and private engineering contracts.',

      'svc.b2_label': 'Leading Service',
      'svc.b2_title': 'Software Development &amp; Data Science',
      'svc.b2_desc':  'Modern software engineering and data science with direct international project experience — built to solve real business problems.',
      'svc.i7_title': 'Custom Software Development',
      'svc.i7_text':  'Bespoke web and desktop applications tailored to your business processes, with clean architecture and long-term maintainability.',
      'svc.i8_title': 'Data Science &amp; Analytics',
      'svc.i8_text':  'Exploratory data analysis, statistical modelling, KPI dashboards, and business intelligence — turning raw data into actionable insight.',
      'svc.i9_title': 'Machine Learning &amp; AI',
      'svc.i9_text':  'Predictive modelling, classification, anomaly detection, and ML pipelines designed with production deployment in mind.',
      'svc.i10_title':'API Design &amp; System Integration',
      'svc.i10_text': 'RESTful and event-driven API development, integration between legacy and modern systems, and microservices architecture.',
      'svc.i11_title':'Database Design &amp; Engineering',
      'svc.i11_text': 'Relational and non-relational database architecture, query optimisation, ETL pipelines, and data warehousing solutions.',
      'svc.i12_title':'Workflow &amp; Process Automation',
      'svc.i12_text': 'Automating repetitive business processes with scripting, RPA-style workflows, and intelligent scheduling tools.',

      'svc.b3_label':  'Our Unique Edge',
      'svc.b3_title':  'Integrated Engineering + Technology',
      'svc.b3_desc':   'This is what sets us apart. Solutions that only make sense when you understand both the physical engineering and the digital systems.',
      'svc.intg_h':    'The Rare Combination That Drives Real Value',
      'svc.intg_p':    'Most firms are good at one or the other. We are building the bridge. Our vision is to deliver solutions where engineering domain knowledge makes the software smarter, and where software makes engineering faster and more precise.',
      'svc.intg_btn':  '<i class="fa-solid fa-envelope"></i> Discuss a Project',
      'svc.feat1':     'Digital Twin Concepts for Engineering Projects',
      'svc.feat2':     'Automated Technical Documentation Generation',
      'svc.feat3':     'Structural Data Analysis &amp; Predictive Models',
      'svc.feat4':     'Engineering Workflow Automation Tools',
      'svc.feat5':     'IoT-Ready Smart Monitoring Architectures',

      'svc.cta_label': 'Next Step',
      'svc.cta_title': 'Have a Project in Mind?',
      'svc.cta_sub':   "Tell us what you need — whether it's a technical drawing, a data pipeline, or something that spans both worlds. We'll respond promptly.",
      'svc.cta_btn':   '<i class="fa-solid fa-paper-plane"></i> Send Us a Message',

      /* ---- CONTACT page -------------------------------- */
      'page.title.contact': 'Contact — Atlas Proje',

      'cnt.hero_label': 'Get in Touch',
      'cnt.sr_heading':  'Contact Information and Form',
      'cnt.hero_title': "Let's Talk About<br />Your Project",
      'cnt.hero_sub':   "Whether you have an engineering challenge, a software idea, or something that sits at the intersection of both — we'd love to hear from you. We respond to every message.",

      'cnt.info_label':    'Our Details',
      'cnt.addr_label':    'Office Address',
      'cnt.reg_label':     'Legal Registration',
      'cnt.work_label':    'Working Days',
      'cnt.work_value':    'Monday – Friday',
      'cnt.next_title':    'What Happens Next?',
      'cnt.step1_title':   'We Read Your Message',
      'cnt.step1_text':    'Every inquiry is read personally by one of our partners.',
      'cnt.step2_title':   'We Assess the Fit',
      'cnt.step2_text':    "We'll be honest about whether we're the right people for your project.",
      'cnt.step3_title':   'We Respond',
      'cnt.step3_text':    "You'll hear back from the right partner for your type of project.",

      'cnt.form_title':    'Send Us a Message',
      'cnt.form_sub':      "Tell us about your project and we'll get back to you as soon as possible.",
      'cnt.fname_lbl':     'First Name',
      'cnt.fname_ph':      'Your first name',
      'cnt.lname_lbl':     'Last Name',
      'cnt.lname_ph':      'Your last name',
      'cnt.email_lbl':     'Email Address',
      'cnt.phone_lbl':     'Phone Number',
      'cnt.company_lbl':   'Company / Organisation',
      'cnt.company_ph':    'Optional',
      'cnt.service_lbl':   'Service of Interest',
      'cnt.service_def':   'Select a service…',
      'cnt.og_eng':        'Engineering',
      'cnt.opt_draw':      'Technical Drawing &amp; CAD',
      'cnt.opt_struct':    'Structural &amp; Mechanical Design',
      'cnt.opt_constr':    'Construction Project Management',
      'cnt.opt_consult':   'Engineering Consultancy',
      'cnt.og_sw':         'Software &amp; Data Science',
      'cnt.opt_sw':        'Custom Software Development',
      'cnt.opt_data':      'Data Science &amp; Analytics',
      'cnt.opt_ml':        'Machine Learning &amp; AI',
      'cnt.opt_api':       'API Design &amp; Integration',
      'cnt.og_int':        'Integrated',
      'cnt.opt_int':       'Engineering + Technology (Integrated)',
      'cnt.opt_other':     'Other / Not Sure Yet',
      'cnt.msg_lbl':       'Your Message',
      'cnt.msg_ph':        'Describe your project, challenge, or question as clearly as you can. The more detail you provide, the better we can help.',
      'cnt.btn_submit':    '<i class="fa-solid fa-paper-plane"></i> Send Message',
      'cnt.btn_sending':   'Sending…',
      'cnt.req_note':      'Fields marked with <span style="color:var(--accent);font-weight:700;">*</span> are required. Your information is used only to respond to your inquiry.',
      'cnt.success':       '<i class="fa-solid fa-circle-check"></i> Message sent! Thank you — we\'ll be in touch shortly.',
      'cnt.error':         '<i class="fa-solid fa-triangle-exclamation"></i> Please fill in all required fields before submitting.',

      'cnt.loc_label': 'Location',
      'cnt.loc_title': 'Find Us in Adana',
      'cnt.loc_sub':   'Our office is located in the Reşatbey neighbourhood of central Seyhan, Adana.',
      'cnt.map_btn':   '<i class="fa-solid fa-arrow-up-right-from-square"></i> Open in Google Maps',
    }
  };

  /* ---- Helper ------------------------------------------ */
  function t(lang, key) {
    const dict = translations[lang] || translations['tr'];
    return Object.prototype.hasOwnProperty.call(dict, key) ? dict[key] : null;
  }

  /* ---- Core apply function ----------------------------- */
  function applyLanguage(lang) {
    document.documentElement.lang = lang;
    localStorage.setItem('lang', lang);

    /* text content */
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      const val = t(lang, el.dataset.i18n);
      if (val !== null) el.textContent = val;
    });

    /* inner HTML (elements containing icons / markup) */
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      const val = t(lang, el.dataset.i18nHtml);
      if (val !== null) el.innerHTML = val;
    });

    /* input placeholder attribute */
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      const val = t(lang, el.dataset.i18nPlaceholder);
      if (val !== null) el.placeholder = val;
    });

    /* <optgroup label="…"> attribute */
    document.querySelectorAll('[data-i18n-label]').forEach(function (el) {
      const val = t(lang, el.dataset.i18nLabel);
      if (val !== null) el.label = val;
    });

    /* page <title> */
    const titleKey = document.documentElement.dataset.pageKey;
    if (titleKey) {
      const titleVal = t(lang, titleKey);
      if (titleVal) document.title = titleVal;
    }

    /* update lang toggle buttons */
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.classList.toggle('active', btn.dataset.lang === lang);
      btn.setAttribute('aria-pressed', btn.dataset.lang === lang ? 'true' : 'false');
    });
  }

  /* ---- Init -------------------------------------------- */
  function init() {
    const savedLang = localStorage.getItem('lang') || 'tr';
    applyLanguage(savedLang);

    /* Wire up toggle buttons */
    document.addEventListener('click', function (e) {
      const btn = e.target.closest('.lang-btn');
      if (btn && btn.dataset.lang) {
        applyLanguage(btn.dataset.lang);
      }
    });
  }

  /* Expose for use in main.js */
  return {
    init: init,
    get: function (key) {
      return t(localStorage.getItem('lang') || 'tr', key);
    }
  };

})();

document.addEventListener('DOMContentLoaded', I18N.init);
