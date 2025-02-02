Acun Medya Akademi - Samet Kayaalp Proje Ödevi 

# mkdir todo-list ile klasör oluşturuldu ve cd ile bu klasöre giriş yapıldı.
# git init ile github deposu başlatıldı.
# git remote add origin https://github.com/Samet047/todo-list.git ile bu depoya bağlanıldı. 
# touch index.html, touch styles.css ve touch script.js ile gerekli dosyalar oluşturuldu, ardından "git commit -m "Proje dosyaları eklendi
" şeklinde "commit edildi.
# Her dosyanın codu visual studio code ile eklendi ve her biri eklenirken git commit -m "commit mesajı" ile commit edildi. 
# git add . ile bütün dosyaları areaya alındı ve git push -u origin master ile değişikler ve dosyalar uzak depoya yüklendi.
# git checkout -b html-css şeklinde branch oluşturulup, git checout html-css şeklinde branche geçildi.
# git add . ile dosyalar eklendi, git push -u origin html-css ile bütün dosyalar eklendi. Buraya yanlışlıkla js dosyası da eklendi ve git rm --cached script.js ile sadece script.js silindi.
# git checkout master ile master branchine geçilip, git merge html-css ile html-css branchi merge edildi ve git push origin master ile merge hali yayınlandı.
  ## bundan dolayı masterdeki js dosyasıda gitti, geri getirmek için; git log js dosyasının olduğu commit idsi alındı ve git checkout [id] -- script.js ile commite dönüldü dosya alındı ve git add script.js ile areayı alınıp git commit -m "yanlışlıkla silinen js dosyası geri getirildi" şeklinde commit edilip git push -u origin master ile güncellemeler upload edildi.
# git clone https://github.com/Samet047/freeCodeCamp.git ile freecodecamp klonlandı ve dosyalar uzak depoya da gönderildi.
# daha sonra git checkout -b klon-branch şeklimde yeni bir branch açıldı ve git rebase origin/master şeklinde master branchi klon-branche/taşındı kopyalandı.
