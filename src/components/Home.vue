<template>
<div class="product">
  <Navbar/>
  <div class="header">
    <div class="header_desc_group">
      <div class="header_title_group">
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" data-interval="5000">
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1" class="active"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item">
              <div class="d-block w-100">
                <h1 class="header_title"> Software Engineering & GDC Laboratory </h1>
                <p class="header_subtitle">The RPL-GDC is a laboratory supervised by informatics faculties 
                  with scientific fields in Software Engineering and Game Development.
                </p>
              </div>
            </div>
            <div class="carousel-item active">
              <div class="">
                <h1 class="header_title">Recruitation Announcement</h1>
                <p class="header_subtitle">Click the button below to see recrutation result
                </p>
                <router-link to="/rplgdcgame" class="btn">Here is the Result</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="ilustrasi_header">
        <div class="ilustrasi_content">
          <img class="ilustrasi_bulan" src="../assets/assets_baru/bulan_focus.png" alt="bulan">
        </div>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="divisi_title">OUR DIVISION</div>
    <div class="divisi_content">
      <img class="ilustrasi_roket" src="../assets/assets_lama/Roket.png" alt="roket">
      <ul class="list_divisi">
        <li> <img class="icon-divisi" src="../assets/assets_lama/icon_divisi/android.png" alt="icon-divisi"> Mobile Programmer </li>
        <li> <img class="icon-divisi" src="../assets/assets_lama/icon_divisi/frontend.png" alt="icon-divisi"> Front-End Programmer </li>
        <li> <img class="icon-divisi" src="../assets/assets_lama/icon_divisi/backend.png" alt="icon-divisi"> Back-End Programmer </li>
        <li> <img class="icon-divisi" src="../assets/assets_lama/icon_divisi/uiux.png" alt="icon-divisi"> UI/UX Design </li>
        <li> <img class="icon-divisi" src="../assets/assets_lama/icon_divisi/gameprog.png" alt="icon-divisi"> Game Programmer </li>
        <li> <img class="icon-divisi" src="../assets/assets_lama/icon_divisi/gameart.png" alt="icon-divisi"> Game Artist </li>
        <li> <img class="icon-divisi" src="../assets/assets_lama/icon_divisi/soundeng.png" alt="icon-divisi"> Sound Engineer </li>
      </ul>
    </div>

    <div class="award_title">HONOR & AWARDS</div>
    <div class="award_content">
      <ul class="list_award">
        <li> 
          <p> <strong> Raginda Firdaus - IF-39-09 : <br/>
          <span> 3rd Winner </span> <br/>
          </strong>ExplosIF 
          </p>
        </li>
        
        <li> 
          <p> 
            <strong> Adia Titania Supriyatman - KM 39 BR 1 </strong> <br/>
            <strong> <span> Finalis Gemastik 11 </span> </strong> 
            <br/> Kategori Pengembangan Aplikasi Permainan
          </p>
        </li>

        <li> 
          <p> 
            <strong> Muhammad Arief Ismirianda - D3TK-40-03 </strong> <br/>
            <strong> <span> Finalis Gemastik 11 </span> </strong> 
              <br/> Kategori Pengembangan Aplikasi Permainan
          </p>
        </li>
        
        <li> 
          <p> 
          <strong> Muhammad Hasbi Abdul Majid- IF-40-01 </strong> <br/>
          <strong> <span>Finalis Gemastik 11</span> </strong> 
          <br/> Kategori Pengembangan Aplikasi Permainan
          <p> 
            <strong><span>10th Place </span> </strong> <br/> 
            at Kongregate March 2018 Game Contest </p>
        </li>
      </ul>

      <img class="ilustrasi_matahari" src="../assets/assets_lama/Matahari.png" alt="roket">
    </div>
    <!-- award 2 -->
    <div class="award_content award_two" style="margin-top: 100px;" id="award2">
      <img class="ilustrasi_matahari2" src="../assets/assets_lama/satelit.png" alt="roket">

      <ul class="list_award">
        <li> 
          <p> 
            <strong> Ahmad Arsyel Abdul Hakim - IF-40-06 <br/> 
            <span> Best Game Design </span> </strong> <br/>
            in Global Game Jam 2018 Bandung
          </p>
        </li>
        <li> 
          <p> 
            <strong> Muhammad Afif Amanullah F - IF 40-10 </strong> <br/>
            <strong> <span> 2nd Runner Up </span> </strong> 
            <br/> Line Creative 2018 - Chatbot Competition
          </p>
        </li>
        
        <li> 
          <p> 
          <strong> Galih Yudhasena Trenggala- IF-40-06 </strong> <br/>
          <strong> <span>The Winner</span> </strong> 
          <br/> Line Creative 2018 - Chatbot Competition <br/>
          (Student Category)
          <p> 
            <strong><span>2nd Runner Up </span> </strong> <br/> 
            Line Creative 2018 - Chatbot Competition <br/>
            (Productivty Category)
            </p>
          <p> 
            <strong><span>10th & 11th Place </span> </strong> <br/> 
            at Kongregate Game Contest </p>
        </li>
      </ul>
    </div> <!-- end of award 2 -->

    <div class="divisi_title">OUR TEAM</div>
    <div class="team_content">
      
      <div class="pembina">
        <img class="member-pembina" src="../assets/assets_lama/aslab/0.png" alt="team">
        <p class="nama"> Danang Junaedi S.T., M.T. </p>
        <p class="posisi"> Head of Laboratory </p>
      </div>

      <div class="team_member">
        <div class="struktur_ketua">
          <img class="member" src="../assets/assets_lama/aslab/1.png" alt="team">
          <p class="nama"> Fakry Adi Permana </p>
          <p class="posisi"> Coordinator </p>
        </div>

        <div class="struktur_ketua">
          <img class="member" src="../assets/assets_lama/aslab/2.png" alt="team">
          <p class="nama"> Ahmad Arsyel A </p>
          <p class="posisi"> Vice Coordinator </p>
        </div>
      </div>

      <div class="team_member">
        <div class="struktur_anggota">
          <img class="member" src="../assets/assets_lama/aslab/3.png" alt="team">
          <p class="nama"> Deandra Abiantoro </p>
          <p class="posisi"> Secretary </p>
        </div>

        <div class="struktur_anggota">
          <img class="member" src="../assets/assets_lama/aslab/4.png" alt="team">
          <p class="nama"> Aji Priambodo S </p>
          <p class="posisi"> Internal </p>
        </div>

          <div class="struktur_anggota">
          <img class="member" src="../assets/assets_lama/aslab/5.png" alt="team">
          <p class="nama"> Hasbi Abdul Maajid </p>
          <p class="posisi"> External </p>
        </div>

        <div class="struktur_anggota">
          <img class="member" src="../assets/assets_lama/aslab/6.png" alt="team">
          <p class="nama"> Nurani Solechah </p>
          <p class="posisi"> Treasurer </p>
        </div>
      </div>

      <div class="team_member">
        <div class="struktur_anggota">
          <img class="member" src="../assets/assets_lama/aslab/7.png" alt="team">
          <p class="nama"> Galih Yudhasena T </p>
          <p class="posisi"> Publication & Documentation </p>
        </div>

        <div class="struktur_anggota">
          <img class="member" src="../assets/assets_lama/aslab/8.png" alt="team">
          <p class="nama"> Muhammad Afif A.F </p>
          <p class="posisi"> RPL </p>
        </div>

        <div class="struktur_anggota">
          <img class="member" src="../assets/assets_lama/aslab/9.png" alt="team">
          <p class="nama"> Gagah Ghalistan </p>
          <p class="posisi"> GDC </p>
        </div>

        <div class="struktur_anggota">
          <img class="member" src="../assets/assets_lama/aslab/10.png" alt="team">
          <p class="nama"> Said Rahardi K </p>
          <p class="posisi"> Logistic </p>
        </div>
      </div>
    </div>  <!-- end of team member -->              
  </div> <!-- end of container -->
  <Footer/>
</div>
</template>

<script>
export default {
  data: () => ({
  }),
  components:{
    'Navbar': () => import('./home/Navbar.vue'),
    'Footer': () => import('./home/Footer.vue'),
  },
}
</script>

<style scoped>
body,html{height:100%; width: 100%;}
.carousel .carousel-item {
  height: 250px;
}
.carousel-item{
    min-height: 250px;
}
.carousel-indicators{
    bottom: -50px;
}
.product {
  width: 100%;
  margin: 0 auto;
}
a{
  color:#fff;
}
.btn {
  margin-left: 40px;
    width: 250px;
    border-radius: 10px;
    background-color: #e67e22;
}
a.btn{
  font-size: 24px;
  font-weight: bold;
}
.header{
  background-image: url("../assets/assets_baru/header_img.png");
  height: 120vh;
  width: 100%;
  background-size: cover;
  background-position: center;
  margin-bottom: 30px;
}

/* // wrapper header content */
.header_desc_group {
  width: 100%;
  height: auto;
    /* // flexbox */
  display: flex;
  flex-flow: row wrap;
}

.header_title_group {
  width: 50%;
  height: 300px;
  margin-top: 250px;
}
.header_title {
  color: #fff;
  font-size: 50px;
  margin-left: 40px;
}
.header_subtitle {
  color: #fff;
  margin-left: 40px;
  font-size: 15px;
}

.ilustrasi_header {
  background: transparent;
  width: 50%;
  height: 120vh;
  background-size: cover;
  /* margin-left: 45px; */
}
.ilustrasi_content {
  background-image: url("../assets/assets_baru/home_group.png");
  width: 90%;
  height: 120vh;
  background-size: cover;
  margin-left: auto;
  /* // flexbox */
  display: flex;
  justify-content: center;
  align-items: center;
}
.ilustrasi_bulan {
  width: 400px;
  height: 340px;
}

.divisi_title, .award_title {
  text-align: center;
  font-size: 40px;
  font-weight: bold;
  margin-top: 100px;
  margin-bottom: 70px;
}
.divisi_content, .award_content {
  background: #fff;
  margin-bottom: 50px;
  height: auto;
  /* Flexbox */
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
}
.divisi_content .ilustrasi_roket {
  width: 360px;
  height: 390px;
}
.divisi_content .list_divisi {
  list-style: none;
  font-size: 20px;
  line-height: 50px;
}
.divisi_content .list_divisi li {
  margin-bottom: 15px;
}
.divisi_content .icon-divisi {
  margin-right: 12px;
}

/* Honor and awards */
.award_content .ilustrasi_matahari, 
.award_content .ilustrasi_matahari2 {
  /* width: 360px; */
  height: 370px;
}
.award_content .list_award {
  list-style: none;
  }  
.award_content .list_award li {
  margin-bottom: 15px;
}
.award_content span {
  color: rgb(240, 113, 39);
}

/* Team */
.team_content {
  background: #fff;
  margin-bottom: 50px;
  height: auto;
  /* Flexbox */
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
}
.team_member {
  display: flex;
  flex-flow: row nowrap;
  margin: 0px;
}
.member-pembina {
  border-radius: 50%;
  margin-left: 20px;
}
.member, .member-pembina {
  width: 170px;
  height: 170px;;
}
.team_member .struktur_ketua {
  margin: 30px 20px;
}
.struktur_anggota {
  margin: 10px 20px;
}
.team_content .nama {
  text-align: center;
  font-weight: bold;
  font-size: 18px;
  margin-top: 10px;
}
.team_content .posisi {
  text-align: center;
  font-size: 14px;
}

/* Responsive Design */
@media (min-width: 371px) and (max-width: 500px){
  .product {
    width: 101%;
    margin: 0 auto;
  }
  .btn {
    width: 200px;
    margin-left: 50px;
  }
  a.btn{
    font-size: 24px;
  }
  /* Header */
  .header {
    height: 100vh;
    width: 100% !important;
  }
  .ilustrasi_content {
    background: transparent;
    width: 10%;
    height: 120vh;
    background-size: cover;
    margin-left: 0px;
    /* // flexbox */
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .ilustrasi_bulan {
    width: 400px;
    height: 340px;
    display: none;
  }
  .header_title_group {
    width: 90%;
    height: 300px;
    margin-top: 200px;
  }
  .header_title {
    color: #fff;
    font-size: 30px;
    margin-left: 50px;
  }
  .header_subtitle {
    color: #fff;
    margin-left: 50px;
    font-size: 14px;
  }

  .divisi_title, .award_title {
    font-size: 30px;
    margin-top: 100px;
    margin-bottom: 40px;
  }
  .divisi_content, .award_content {
    background: #fff;
    margin-bottom: 50px;
    height: auto;
  }
  .divisi_content .ilustrasi_roket {
    display: none;
  }
  .divisi_content .list_divisi {
    font-size: 16px;
  }
  .divisi_content .list_divisi li {
    margin-bottom: 15px;
  }
  .divisi_content .icon-divisi {
    margin-right: 12px;
  }

  /* Honor and awards */
  .award_content .ilustrasi_matahari {
    /* width: 360px; */
    height: 270px;
    /* display: none; */
    margin-top: 20px;
    margin-bottom: -40px;
  }
  .award_content .ilustrasi_matahari2 {
    display: none;
  }
  .award_content .list_award {
    list-style: none;
  }  
  .award_content .list_award li {
    margin-bottom: 15px;
  }
  .award_content span {
    color: rgb(240, 113, 39);
  }
  .list_award p {
    font-size: 12px;
  }

  /* Team Member */
  .team_member {
    display: flex;
    flex-flow: row wrap;
    margin: 30px 70px;
  }
  .member-pembina {
    border-radius: 50%;
    margin-left: 0px;
  }
  .member, .member-pembina {
    width: 170px;
    height: 170px;;
  }
  .team_member .struktur_ketua {
    margin: 20px 70px;
  }
  .struktur_anggota {
    margin: 20px 70px;
  }
  .team_content .nama {
    text-align: center;
    font-weight: bold;
    font-size: 16px;
    margin-top: 10px;
  }
  .team_content .posisi {
    text-align: center;
    font-size: 14px;
    font-weight: bold;
  }
}

@media (min-width: 501px) and (max-width: 900px) {
  .btn{
    margin-left: 90px;
  }
  a.btn{
    font-size: 24px;
  }
  .header{
    height: 500px;
    background-size: cover;
    background-position: center;
    margin-bottom: 30px;
    overflow: hidden;
  }
  .ilustrasi_bulan, .ilustrasi_content {
    display: none;
  }
  .header_title_group {
    width: 90%;
    height: 300px;
    background: transparent;
    margin-top: 180px;
  }
  .header_title {
    color: #fff;
    font-size: 40px;
    margin-left: 90px;
  }
  .header_subtitle {
    color: #fff;
    margin-left: 90px;
    font-size: 14px;
  }
  .award_content .ilustrasi_matahari2 {
    display: none;
  }

  /* Team Member */
  .team_member {
    display: flex;
    flex-flow: row wrap;
    margin: 30px 70px;
  }
  .member-pembina {
    border-radius: 50%;
    margin-left: 0px;
  }
  .member, .member-pembina {
    width: 170px;
    height: 170px;;
  }
  .team_member .struktur_ketua {
    margin: 20px 70px;
  }
  .struktur_anggota {
    margin: 20px 70px;
  }
  .team_content .nama {
    text-align: center;
    font-weight: bold;
    font-size: 16px;
    margin-top: 10px;
  }
  .team_content .posisi {
    text-align: center;
    font-size: 14px;
    font-weight: bold;
  }

}
@media screen and (max-width: 370px) {
  a.btn{
    font-size: 24px;
  }
  .product {
    width: 101%;
    margin: 0 auto;
  }
  .header{
    height: 500px;
    background-size: cover;
    background-position: center;
    margin-bottom: 30px;
    overflow: hidden;
  }
  .ilustrasi_bulan,.ilustrasi_content {
    display: none;
  }
  .header_title_group {
    width: 90%;
    height: 300px;
    margin-top: 180px;
  }
  .header_title {
    color: #fff;
    font-size: 25px;
    margin-left: 40px;
  }
  .header_subtitle {
    color: #fff;
    margin-left: 40px;
    font-size: 13px;
  }

  .divisi_title, .award_title {
    font-size: 30px;
    margin-top: 100px;
    margin-bottom: 40px;
  }
  .divisi_content, .award_content {
    background: #fff;
    margin-bottom: 50px;
    height: auto;
  }
  .divisi_content .ilustrasi_roket {
    display: none;
  }
  .divisi_content .list_divisi {
    font-size: 16px;
  }
  .divisi_content .list_divisi li {
    margin-bottom: 15px;
  }
  .divisi_content .icon-divisi {
    margin-right: 12px;
  }

  /* Honor and awards */
  .award_content .ilustrasi_matahari {
    /* width: 360px; */
    height: 270px;
    /* display: none; */
    margin-top: 20px;
    margin-bottom: -40px;
  }
  .award_content .ilustrasi_matahari2 {
    display: none;
  }
  .award_content .list_award {
    list-style: none;
  }  
  .award_content .list_award li {
    margin-bottom: 15px;
  }
  .award_content span {
    color: rgb(240, 113, 39);
  }
  .list_award p {
    font-size: 12px;
  }

  .team_member {
    display: flex;
    flex-flow: row wrap;
    margin: 30px 70px;
  }
  .member-pembina {
    border-radius: 50%;
    margin-left: 0px;
  }
  .member, .member-pembina {
    width: 170px;
    height: 170px;;
  }
  .team_member .struktur_ketua {
    margin: 20px 70px;
  }
  .struktur_anggota {
    margin: 20px 70px;
  }
  .team_content .nama {
    text-align: center;
    font-weight: bold;
    font-size: 16px;
    margin-top: 10px;
  }
  .team_content .posisi {
    text-align: center;
    font-size: 14px;
    font-weight: bold;
  }
}
</style>
