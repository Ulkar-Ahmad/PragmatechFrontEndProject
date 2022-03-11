Hello World

1.Javascript kodları necə formada yazıla bilər?
cavab:Veb səhifəyə JavaScript kodu əlavə etməyin müxtəlif üsulları var.
JavaScript kodları <script> və </script> teqləri arasında yazıla bilər.
JavaScript Kodlari xarici folderden import oluna biler.

2.Javascript kodlarının script tagları daxilində yazmaqla ayrı fayl formatında yazıb import etmek arasında nə fərq var?
cavab: Sehifedeki xarici Javascript ile import olunmus kodlar script icinde elave edilmis kodlardan daha tez veb sehifeni acar. ve sturuktur baximindan daha seliqeli kod yazilmis olar.
3.Madem mənim brauzerimdə V8-Engine yüklüdür niyə html kodu daxilində yazılan javascript kodları işləmir.
cavab: Köhnə Nümunələrdə <script type = text/javascript> inline öz type atributu kimi HTML5-də silinmişdir.Buna görə
də javscript kodları inline script olaraq V8-Engine Yüklü olmasina ragmen işləmir.

Code Structor
1.";" hansı hallarda istifadə edilir?
cavab: Melumati bildirmek uchun istifade edilir.
2.Javascript-də comment yazmaq üçün neçə üsul var?
cavab:Tək sətirli şərhlər // ilə başlayır.
// və sətrin sonu arasındakı hər hansı mətn JavaScript tərəfindən nəzərə alınmayacaq(yeni comment olaraq qalacaq).

Çox sətirli şərhlər /_ ilə başlayır və _/ ilə bitir.
/_ və _/ arasındakı istənilən mətn JavaScript tərəfindən nəzərə alınmayacaq (yeni comment olaraq qalacaq).

Variables

1.let,var,const ifadələri arasında fərqlər nədir?
cavab:Biz let ilə müəyyən edilmiş dəyişəni yenidən təyin edə bilmərik, lakin onun dəyərini yeniləyə bilərik.
Var ilə təyin olunan dəyişən funksiya daxilində yaradılırsa, o, yalnız həmin funksiya daxilindəki digər funksiyalar və nested dediyimiz funksiya daxilində çağırıla və istifadə edilə bilər.
Const ilə yaradılmış dəyişəni sonradan deyishdirmek olmaz.

2.dəyişən təyin edərkən adlandırma qaydaları nələrdir?
cavab: Dəyişən adlarında hərflər, rəqəmlər, alt xətt və dollar işarələri ola bilər.
Dəyişən adları hərflər, alt xətt və ya dollar işarələri ilə başlaya bilər.
Dəyişən adları böyük balaca hərflərə həssasdır. (a və A fərqli dəyişənlərdir)
Dəyişən adları arasında boşluq qala bilməz.
JavaScript açar sözlərindən dəyişən adlar kimi istifadə edilə bilməz. (var, const, if, while... və s.)

3.let x=5;x=7 yazıldığı zaman nəticə 7 olur.Belə olan halda 5 dəyərinin aqibəti nə olur? Yaddaşda yer tutur mu 5 dəyəri yoxsa başqa proses mi gedir?
cavab: 5 dəyərini let dəyişəni vasitesi ilə 7 dəyəri ilə yenilənir. 5 dəyəri yaddaşda yer tutmur.
