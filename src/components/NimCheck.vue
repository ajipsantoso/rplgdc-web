<template>
    <div class="NimCheck">
        <div class="box_bg">
            <div class="box_content">
                    <div class="content_input">
                        <h1>Type your NIM below...</h1>
                        <input class="formnim" type="text" id="searchinput"  @keyup.enter="$event.target.blur();nimcheck(nim)" 
                        v-model="nim" @blur="placehold='Input NIM then press enter'" 
                        @focus="placehold='';dynamicResult.hidden_div=true" :placeholder="placehold"/>
                    </div>
                    <div class="content_result" :class="dynamicResult" v-html="value_desc"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data: () => ({
      nim:'',
      value_desc:'',
      placehold:'Input NIM then press enter',
      dynamicResult:{
            hidden_div: true,
        }
  }),
  components:{
  },
  methods:{
      nimcheck(nim){
          fetch(`http://rplgdc.com/daftar/ceknim_lulus/${nim}`)
          .then(response => response.json())
          .then(data =>{
                if(data){
                    this.value_desc=`<h3>Congratulations!</h3>
                    You have passed the first test to become a part of RPLGDC Lab Family
                    <br/> Please fill the interview schedule <a class="linkstyle" href="http://bit.ly/WawancaraRPLGDC19">here</a> 
                    <br/> Last submit until <span>February, 22<sup>th</sup> 2018</span> at <span>23.59 WIB</span>
                    <br/> Those who don't fill the schedule, are considered to be resigned.
                    <br/> *<span>note :</span> bring your hardcopy/printout CV, and prepare your portfolio if you want to show it to us.
                    `
                }else{
                    this.value_desc=`Sorry you haven't succeeded yet :(<br/>Don't be discouraged, never give up!
                    `
                }
                
          }).catch(error => this.value_desc=`Oopps somethings happen... <br/> Check your internet connection. ${error}`)
          this.dynamicResult.hidden_div=false
    },
  }
}
</script>

<style scoped>
.NimCheck{
    width: auto;
    height: 100vh;
    background-image: url("../assets/bg_check.png");
    background-size: cover;
    background-repeat: no-repeat 
}
h1 {
   font-size: 32px;
   font-weight: bold;
   margin-bottom: 32px;
   text-align: center;
}
.box_bg {
    color: #fff;
    position: relative;
    width:52%;
    height:60%;
    position:absolute; 
    left:0; right:0;
    top:0; bottom:0;
    margin:auto;
    border-radius: 10px;
}
.content_input{
    text-align: center;
    align-items: center;
}
.formnim {
   margin: 0 auto;
   width: 60%;
   background-color:#fff;
   color: #1a1a1a;
   font-size: 24px;
    border: 0px;
   padding: .5em;
   text-align: center;
}
.content_result {
    width: 70%;
    margin: 0 auto;
    margin-top: 24px;
    text-align: center;
    font-size: 18px;
    color: #fff;
    opacity: 100;
    transition: 0.5s ease;
    line-height:48px;
}

.content_result.hidden_div{
    opacity: 0;
    transition: 0.5s ease;
}

.content_result >>> a {
   text-decoration: none;
   font-style: italic;
   color: #e67e22;
}

.content_result >>> a:hover {
   text-decoration: underline;
}

.content_result >>> span {
   color: #e67e22;
}


/* Responsive Design */
@media (min-width: 371px) and (max-width: 500px){
    .NimCheck{
        background-image: linear-gradient( rgba(26, 26, 26, 0.6), rgba(26, 26, 26, 0.6) ), url("../assets/bg_check.png");
    }
    h1 {
        margin-top:20px;
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 32px;
        text-align: center;
    }
    .box_bg {
        width:75%;
        height:85%;
        margin:auto;
        border-radius: 10px;
    }
    .formnim {
        width: 95%;
        font-size: 18px;
    }
    .content_result {
        width: 95%;
        font-size: 18px;
        color: #fff;
        line-height:32px;
    }
}
@media (min-width: 501px) and (max-width: 900px) {
    .NimCheck{
        background-image: linear-gradient( rgba(26, 26, 26, 0.6), rgba(26, 26, 26, 0.6) ), url("../assets/bg_check.png");
    }
    h1 {
        margin-top:unset;
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 16px;
        text-align: center;
    }
    .box_bg {
        width:90%;
        height:90%;
        margin:auto;
        border-radius: 10px;
    }
    .formnim {
        width: 80%;
        font-size: 18px;
    }
    .content_result {
        margin-top: 5px;
        width: 95%;
        font-size: 16px;
        color: #fff;
        line-height:unset;
    }
    .content_result >>> h3 {
        font-size: 24px;
    }
}
@media screen and (max-width: 370px) {
    .NimCheck{
        background-image: linear-gradient( rgba(26, 26, 26, 0.6), rgba(26, 26, 26, 0.6) ), url("../assets/bg_check.png");
    }
    h1 {
        margin-top:20px;
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 32px;
        text-align: center;
    }
    .box_bg {
        width:85%;
        height:90%;
        margin:auto;
        border-radius: 10px;
    }
    .formnim {
        width: 95%;
        font-size: 16px;
    }
    .content_result {
        width: 95%;
        font-size: 16px;
        color: #fff;
        line-height:unset;
    }
}
</style>
