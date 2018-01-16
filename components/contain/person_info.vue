<template>
  <div>
      <div class="_cover-top"  >
        <div class="top-back" >
            <a href="#/tab/contact" style="color:white;"><div class="_ellipsis iconfont icon-return-arrow v-link-active" >返回</div></a>
        </div>
        <a href="#/con/person_info_set">
       
        <div class="top-other" >
            <div slot="right" class="_align-right"  style="float:right;">
                <span ><img src="../../img/pot.png" alt=""></span>
            </div>
        </div>
        </a>
        <div class="top-title _effect" >
            <p >
                <span >详细资料</span>
            </p>
        </div>
    </div>
    <div class="weui_cells">
    <div class="weui_cell" >
        <div class="card_pic _left" >
        </div>
        <div class="card_line" >
            <div class="remark" >
                <span>你咬我啊i</span>
                <span class="gender gender-man" ></span>
            </div>
            <p class="wxid" >
                <span >微信号:</span>
                <span >niyaowoa</span>
            </p>
            <p class="nickname" >
                <span >昵称:</span>
                <span>你咬我啊i</span>
            </p>
        </div>
    </div>
    <div class="weui_cells weui_cells_access" >
        <div class="weui_cell" href="javascript:;" >
            <div class="weui_cell_bd weui_cell_primary" >
                <p >设置备注和标签</p>
            </div>
            <div class="weui_cell_ft" ></div>
        </div>
        <div class="weui_cell" href="javascript:;" >
            <div class="weui_cell_bd weui_cell_primary" >
                <div >
                    <span >电话号码</span>&nbsp;&nbsp;
                    <a href="tel:18812345678" >18812345678</a>
                </div>
            </div>
        </div>
    </div>
    </div>
    <div class="weui_cells weui_cells_access weui_cells_apm" _v-cada3410="">
        <a class="weui_cell" href="javascript:;" _v-cada3410="">
            <div class="weui_cell_bd weui_cell_primary" _v-cada3410="">
                <span class="apm _left" _v-cada3410="">地区</span>
                <div class="apm_content" _v-cada3410=""></div>
            </div>
        </a>
        <a class="weui_cell weui_cells_photos" href="javascript:;" _v-cada3410="">
            <div class="weui_cell_bd weui_cell_primary" _v-cada3410="">
                <span class="apm _left" _v-cada3410="">个人相册</span>
                <div class="apm_content" _v-cada3410=""></div>
            </div>
            <div class="weui_cell_ft" _v-cada3410=""></div>
        </a>
        <a class="weui_cell" href="javascript:;" _v-cada3410="">
            <div class="weui_cell_bd weui_cell_primary" _v-cada3410="">
                <span class="apm _left" _v-cada3410="">更多</span>
                <div class="apm_content" _v-cada3410=""></div>
            </div>
            <div class="weui_cell_ft" _v-cada3410="">
                <span _v-cada3410=""></span>
            </div>
        </a>
    </div>
  </div>
</template>
<style scoped>
     ._cover-top {
    position: relative;
    z-index: 2;
    overflow: hidden;
    height: 45px;
    padding: 0 15px 0 10px;
    line-height: 45px;
    background: linear-gradient(180deg,#303036,#3c3b40);
    opacity: 1;
    color: #fff;
    }
    ._cover-top .top-back {
    max-width: 85px;
    float: left;
}
    ._ellipsis img{
        width:25px;
        vertical-align: middle;
    }
    ._cover-top .top-other {
    height: 100%;
    max-width: 75px;
    min-width: 53px;
    width: auto;
    float: right;
    }
    ._cover-top .top-title {
    padding: 0 8px;
    overflow: hidden;
    font-size: 18px;
    justify-content: center;
    text-align: center;
}
._align-right img{
    vertical-align: middle;
    line-height: 45px;
    width:23px;
}
.card_pic{
    background:url("../../img/2-small.jpg") no-repeat;
    width:55px;
    height:55px;
    border-radius:5px;
    padding-left:15px;
}
.card_line{
    margin-left: 15px;
}
.remark {
    font-size: 18px;
    color: #4f4f4f;
}
.wxid,.nickname{
    font-size: 14px;
    color: #888;
}
.weui_cells_access{
    font-size:17px;
}
.gender-man{
    background-image: url(../../img/contact_male.png);
    background-repeat: no-repeat;
    background-size: contain;
    background-position: 50%;
}
.gender {
    display: inline-block;
    width: 20px;
    height: 20px;
    vertical-align: middle;
    margin-left: 4px;
    margin-top: -2px;
}
</style>

