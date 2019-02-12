<template>
<div class="product">
  <Navbar/>
  <div class="header"></div>
  <div class="product_title">OUR PRODUCT</div>
  <div class="container">
    <div class="row" v-for="(item, index) in itemss" :key="index">
      <div class="col-sm-5 poster">
        <img class="poster_img" :src="item.icon" alt="No Image">
      </div>
      <div class="col-sm-7 linetxt">
        <div class="judul"> 
          {{item.judul}}
        </div>
        <div class="desc">
          {{item.desc}}
        </div>
        <div class="achievement">
          <div class="ach_img">
            <img class="piala" src="../assets/Icon_Trophy.png" alt="icon trophy">
          </div>
          <div class="ach_dec">
            <div class="ach_dec_text">{{item.achievement}}</div>
          </div>
        </div>
        <div class="link">
          <div v-for="(link, idx) in item.links" :key="idx">
            {{link.text}} <a :href="link.link">Click here</a>
          </div>  
        </div>
      </div>
    </div>
  </div>
  <Footer/>
</div>
</template>

<script>
import img1 from '../assets/Poster_Leadthebox.png'
import img2 from '../assets/Poster_Mathgrid.png'
import img3 from '../assets/Poster_Katsir.png' 
import header from '../assets/Header_Product_Form.png'

export default {
  data: () => ({
    header,
    itemss:[
      { icon: img1, judul: 'LEAD THE BOX - to the right place', 
        desc:'Lead The Boxis simple puzzle game. You just create a path for orange box which leads to finish line. Total Level is 35',
        achievement:'11th place at Kongregate July 2017 Game Contest',
        links:[
          { text:'PLAY ON KONGREGATE: ',
            link:'https://www.kongregate.com/games/lovetaeyeon/lead-the-box'
          },
        ],
      },
      { icon: img2, judul: 'MATH IN GRID', 
        desc:'Improve your mathematics logical thinking with this brand new math game experience "Math In Grid". This game using using aritmatic operation to solve level',
        achievement:'10th place at Kongregate February 2018 Game Contest',
        links:[
          { text:'PLAY ON KONGREGATE: ',
            link:'https://www.kongregate.com/games/lovetaeyeon/math-in-grid?acomplete=math+in+gr'
          },
          { text:'PLAY ON GOOGLE PLAY: ',
            link:'https://play.google.com/store/apps/details?id=com.Madfal.MathInGrid'
          },
        ],
      },
      { icon: img3, judul: 'KATSIR', 
        desc:'Lead The Boxis simple puzzle game. You just create a path for orange box which leads to finish line. Total Level is 35',
        achievement:'2nd Runner Up of LINE Creativate 2018 - Chatbot Competition (Productivity Category)',
        links:[
          { text:'ADD LINE: @gbe6620b atau ',
            link:'http://bit.ly/KatsirChatBot'
          },
        ],
      },
    ],
  }),
  components:{
    'Navbar': () => import('./home/Navbar.vue'),
    'Footer': () => import('./home/Footer.vue'),
  },
}
</script>

<style scoped>
a {
  color:#e67e22;
}
.header{
  background-image:url("../assets/Header_Product_Form.png");
  height: 340px;
  background-size: cover;
  background-position: center;
  margin-bottom: 30px;
}
.product_title{
  text-align: center;
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 100px;
}
.navbar{
  padding: 0;
}
.row{
  margin-bottom: 80px;
}
.poster{
  display: inline-block;
  text-align: center;
  height: 300px;
}
.poster_img{
  height: 100%;
  width: auto;
}
.judul{
  font-weight: bold;
  font-size: 20px;
  margin-top: 10px;
  margin-bottom: 15px;
}

.achievement{
  width: 100%;
  height: 60px;
  font-weight: bold;
  margin-top: 10px;    
}
.ach_img{
  width: 8%;
  height: 60px;
  position: relative;
  float: left;
}
.piala{
  width: 100%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
.ach_dec{
  float: right;
  height: 60px;
  width: 92%;
  position: relative;
}
.ach_dec_text{
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
.linetxt{
  display: inline-block;
}
.linetxt .link{
  position: absolute;
  bottom: 0;
}
@media (max-width: 575.98px) { 
  .product_title{
    text-align: center;
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 80px;
  }
  .header{
    height: 150px;
    width: 100%;
    
  }
  .linetxt{
    text-align: center; 
  }
  .linetxt .link{
    margin-top: 20px;
    position: relative;
    bottom:none;
  }
  .poster_img{
    height: 80%;
    position: absolute;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
  .achievement{
    width: 100%;
    height: 110px;
    font-weight: bold;
    margin-top: 15px;    
  }
  .ach_img{
    width: auto;
    text-align: center;
    height: 40px;
    position: none;
    float: none;
  }
  .piala{
    width: 40px;
    position: relative;
    
  }
  .ach_dec{
    float: inherit;
    height: 70px;
    width: 280px;
    margin-left: auto;
    margin-right: auto;
    position: relative;
  }
  .ach_dec_text{
    position: relative;
    
  }
}
@media (min-width: 576px) and (max-width: 823.98px) {

  .header{
    height: 250px;
  }

  .poster_img{
    height:70%;
    position: absolute;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
  .achievement{
    display: inline-block;
    height: 70px;
  }
  .piala{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
  .ach_img{
    height: 100%;
    float: left;
    width: 10%;
    position: relative;
    vertical-align: middle;
  } 
  .ach_dec{
    float: right;
    width: 90%;
    height: 70px;
    position: relative;
  }
  .ach_dec_text{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
  .row{
    height: 300px;
  }
}
</style>
