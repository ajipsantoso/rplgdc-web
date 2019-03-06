<template>
<div class="game">
  <transition name="fade">
    <div v-if="status || (!keyenter && $store.state.loaded)" class="datascore">
      <div class="content_input" v-if="!keyenter">
                <h1>Type your NIM below...</h1>
                <input class="formnim" type="number" id="searchinput"
                @keyup.enter="$event.target.blur();in_nim()" 
                v-model="nim" @blur="placehold='Input NIM then press [ENTER]'" 
                @focus="placehold='';dynamicResult.hidden_div=true;"
                :placeholder="placehold"/>
            </div>
      <div v-if="hscore">
        <div class='score-title'>
          [{{nim}}{{get_hs}}] <br/>
          GLOBAL HIGHSCORE
        </div>  
        <div v-if="!err">
          <div class='score-desc' v-for="(score, i) in value_desc" :key="i">
            {{score.nim}} {{score.nilai}}
          </div>
        </div>
        <div v-else v-html='err'>
        </div>
        <div v-if="$store.state.count >= 30">
          <a class="btn" @click="checkUNim(nim)">See Result</a>
        </div>
        <div v-else>
          You must reach 30 scores or more
          <br/> to unlock pandora's box!
        </div>
      </div>
      <div v-if="checkNim">
        <div class="box_content">
          <div class="box_header">
            <font-awesome-icon :icon="['fas', 'times']"
            @click="close_box"/>
          </div>
          <div class="content_result">
             <div :class="dynamicResult" v-html="value_desc"></div>
             <img src="@/assets/linegroup.jpg" alt="lineqr" v-if="img_group">
          </div>
        </div>
      </div>
    </div>
  </transition>
  <div id="game-container">
  </div>
  </div>
</template>


<script>
import Phaser from 'phaser';
import axios from 'axios';
import Game from './game/game'

export default {
  name: 'Gaame',
  components:{
  },
  data: () => ({
      game:null,
      nim: null,
      value_desc:null,
      boxScore:false,
      checkNim:false,
      hscore:false,
      keyenter:false,
      recuit_value:null,
      img_group:false,
      get_hs:null,
      placehold:'Input NIM then press [ENTER]',
      dynamicResult:{
            hidden_div: true,
        },
      err: 'Loading...',
  }),
  methods:{
    check(){
      this.score+=1
    },
    showHScore(){
      this.checkNim=false;
      this.boxScore=true;
      this.hscore=true;
      console.log('gameOver');
    },
    checkUNim(nim){
      this.hscore=false;
      this.checkNim=true;
      this.nimStatus(nim);
    },
    in_nim(){
      if (this.nim.length != 10) {
        alert('Your input must be 10 character');
      }else {
        this.$store.state.play=true;
        this.keyenter=true;
      }
    },
    close_box(){
      this.hscore=false;
      this.checkNim=false;
      this.img_group=false;
    },
    async get_highscore(){
      await axios.get(`https://rplgdc.com/daftar/score`)
          .then(data =>{
                if(data){
                    this.err=null;
                    this.value_desc=data.data.hightscore;
                }
          }).catch(error =>{ 
            this.err= `Oopps somethings happen... <br/> Check your internet connection. <br/> ${error}`
          });
    },
    async post_highscore(nim,score){
      await this.get_highscore();
      if (score > this.value_desc[4].nilai){
        await axios.post(`https://rplgdc.com/daftar/score`,
          [{
           nim: nim, nilai: score
          }
          ],
        )
          .then(response =>{
            console.log(response);
            if (response.data.status === 'success_hs'){
              this.get_hs=` Get Global Highscore !`
            }
          }).catch(error => this.get_hs=` Get Global Highscore !<br/>Oops, err upload highscore ${error}`);
        }
        await this.get_highscore(); 
    },
    async nimStatus(nim){
      this.value_desc=null;
        await axios.get(`https://rplgdc.com/daftar/ceknim_lulus2/${nim}`)
        .then(data =>{
              if(data.data.nama){
                  console.log(data);
                  this.value_desc=`CONGRATULATIONS!<br/><h4>${data.data.nama}<h4/><h5>(${data.data.divisi})</h5>
                  Welcome as part of RPLGDC Lab Family<br/>Please come to our first meet<br/>
                  RPL-GDC LAB F201<br/>
                  <span>March, 15<sup>th</sup> 2018</span> at <span>18.30 WIB</span><br/>
                  `;
                  this.img_group=true;
              }else{
                  this.value_desc=`Sorry you haven't succeeded on 2<sup>nd</sup> recruitment phase :(<br/>Don't be discouraged, never give up!
                  `;
              }
        }).catch(error => this.value_desc=`Oopps somethings happen... <br/> Check your internet connection. ${error}`)
        this.dynamicResult.hidden_div=false;
    }
  },
  created(){
    
  },
  mounted() {
    // import(/* webpackChunkName: "game" */ '@/components/game/game').then(game => {
    //   this.$nextTick(() => this.game = new Phaser.Game(game.config))
    // });
    setTimeout(()=>{
          this.game = new Game();
    }, 500);
   
  },
  computed:{
    count(){
      return this.$store.state.count;
    },
    status(){
      return this.$store.state.gameOver;
    }
  },
  watch:{
    status(val) {
      if (val) {
        this.get_hs='';
        this.post_highscore(this.nim, this.count)
        setTimeout(()=>{
          this.showHScore();
        }, 500);
      }else{
        this.close_box();
      }
    }
  },
  destroyed(){
    this.game.destroy();
  }
}
</script>

<style scoped>
input[type=number]::-webkit-inner-spin-button, 
input[type=number]::-webkit-outer-spin-button { 
  -webkit-appearance: none; 
  margin: 0; 
}
.game{
  height: 100vh;
  overflow: hidden;
  background-image: url("../assets/bg_check.png");
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}
.placeholder {
  font-size: 2rem;
  color: #fff;
  font-family: 'Courier New', Courier, monospace;
}
.btn {
  border-radius: 10px;
  background-color: #e67e22;
}
a.btn{
  margin-top: 10px;
  color:#fff;
  font-size: 18px;
  font-weight: bold;
}
a.btn:hover{
  color:#1a1a1a;
}
.datascore{
  position: fixed; /* or absolute */
  top: 50%;
  left: 50%;
  color: #fff;
  transform: translate(-50%, -50%);
  z-index: 100;
  text-align: center;
  font-size:18px;
  font-family: monospace;
  transition: ease-out 2s;
}
h1 {
   font-size: 32px;
   font-weight: bold;
   margin-bottom: 32px;
   text-align: center;
}
.box_content{
  border: 2px solid #fff;
  border-radius: 10px;
  background-color:#000000;
  z-index: 999;
}
.box_header{
  text-align: right;
  margin-right: 10px;
}
.content_input{
    text-align: center;
    align-items: center;
    z-index: 999;
}
.formnim {
   margin: 0 auto;
   width: 100%;
   background-color:#fff;
   color: #1a1a1a;
   font-size: 20px;
    border: 0px;
   padding: .5em;
   text-align: center;
   z-index: 9999;
}
.content_result {
  z-index: 9999;
  width: 85%;
  margin: 10px auto;
  text-align: center;
  font-size: 18px;
  color: #fff;
  opacity: 100;
  transition: 0.5s ease;
  line-height:40px;
}

.content_result.hidden_div{
    opacity: 0;
    transition: 0.5s ease;
}

.score-title{
  font-weight: bold;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
/* Responsive Design */
@media (min-width: 371px) and (max-width: 500px){

}
@media (min-width: 501px) and (max-width: 900px) {

}
@media screen and (max-width: 370px) {
}
</style>
