<template>
    <div class="closed">
        <div class="box">
            <div class="box_img">
                <div class="img_placeholder">
                    <img class="img-hor" src="../assets/rocket.png" alt="rocket">
                </div>
            </div>
            <div class="box_txt">
                <div class="txt_title">
                    OPREC CLOSED
                </div>
                <div class="txt_desc">
                    <div>
                        oopss... our rocket already take off.
                    </div>
                    <div>
                        Stay tuned for more information!
                    </div>
                </div>
                <div class="box_btn">
                    <router-link to="/" class="btn">RETURN HOME</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data: () => ({
  }),
  components:{
  },
}
</script>

<style scoped>

body,html{height:100%; width: 100%;}
.closed {
  width: 100%;
}
a {
  color:#fff;
}
.btn {
    border-radius: 10px;
    background-color: #e67e22;
}
.img-hor {
    -moz-transform: scaleX(-1);
    -o-transform: scaleX(-1);
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
    filter: FlipH;
}
.box{
    width:100%;
    display: flex;
    background-color: #ffffff;
    justify-content: center;
    align-items: center;
}
.box .box_img{
    flex: 1;
}
.box .box_img img{
    width: 130%;
    left: -25%;
    position: relative;
}
.box .box_txt{
    flex: 1;
}
.box .box_txt .txt_desc{
    font-size: 24px;
    margin: 0 auto;
    text-align: center;
    margin-bottom: 24px;
}
.box .box_txt .txt_title{
    text-align: center;
    font-size: 40px;
    font-weight: bold;
    color: #e67e22;
}
.box .box_btn{
    text-align: center;
}

/* Responsive Design */
@media (min-width: 371px) and (max-width: 500px){
            .img-hor {
        -moz-transform: none;
        -o-transform: none;
        -webkit-transform: none;
        transform: none;
        filter: none;
    }
    .box{
        display: unset;
        position: fixed;
        width: 100%;
        top: 50%;
        left: 50%;
        /* bring your own prefixes */
        transform: translate(-50%, -50%);    
    }
    .box .box_img{
        flex: unset;
        text-align: center;
    }
    .box .box_img img{
        width: 70%;
        left: unset;
    }
    .box .box_txt{
        flex: unset;
    }
    .box .box_txt .txt_desc{
        font-size: 18px;
        margin-bottom: 24px;
    }
    .box .box_txt .txt_title{
        font-size: 32px;
    }
    .box .box_btn{
        text-align: center;
    }
}
@media (min-width: 501px) and (max-width: 900px) {
        .img-hor {
        -moz-transform: none;
        -o-transform: none;
        -webkit-transform: none;
        transform: none;
        filter: none;
    }
    .box{
        display: unset;
        position: fixed;
        width: 100%;
        top: 50%;
        left: 50%;
        /* bring your own prefixes */
        transform: translate(-50%, -50%);    
    }
    .box .box_img{
        flex: unset;
        text-align: center;
    }
    .box .box_img img{
        width: 40%;
        left: unset;
    }
    .box .box_txt{
        flex: unset;
    }
    .box .box_txt .txt_desc{
        font-size: 18px;
        margin-bottom: 8px;
    }
    .box .box_txt .txt_title{
        font-size: 32px;
    }
    .box .box_btn{
        text-align: center;
    }
}
@media screen and (max-width: 370px) {
        .img-hor {
        -moz-transform: none;
        -o-transform: none;
        -webkit-transform: none;
        transform: none;
        filter: none;
    }
    .box{
        display: unset;
        position: fixed;
        width: 100%;
        top: 50%;
        left: 50%;
        /* bring your own prefixes */
        transform: translate(-50%, -50%);    
    }
    .box .box_img{
        flex: unset;
        text-align: center;
    }
    .box .box_img img{
        width: 70%;
        left: unset;
    }
    .box .box_txt{
        flex: unset;
    }
    .box .box_txt .txt_desc{
        font-size: 18px;
        margin-bottom: 24px;
    }
    .box .box_txt .txt_title{
        font-size: 32px;
    }
    .box .box_btn{
        text-align: center;
    }
}
</style>
