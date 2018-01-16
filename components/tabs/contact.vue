<template>
<div>
    <xheader/>
    <xsearch/>
    <div style="padding-bottom:30px;background-color: #EFEFF4;">
        <div class="weui_cells_contact-head weui_cells weui_cells_access" style="margin-top:-1px">
            <a class="weui_cell" href="#/con/new_friend" >
                <div class="weui_cell_hd" >
                    <img class="img-obj-cover" src="../../img/contact_top-friend-notify.png" > </div>
                <div class="weui_cell_bd weui_cell_primary" >
                    <p >新的朋友</p>
                </div>
            </a>
            <a class="weui_cell" href="#/con/group_chat" >
                <div class="weui_cell_hd" >
                    <img class="img-obj-cover" src="../../img/contact_top-addgroup.png" > </div>
                <div class="weui_cell_bd weui_cell_primary" >
                    <p >群聊</p>
                </div>
            </a>
            <a class="weui_cell" href="" >
                <div class="weui_cell_hd" >
                    <img class="img-obj-cover" src="../../img/contact_top-tag.png" > </div>
                <div class="weui_cell_bd weui_cell_primary" >
                    <p >标签</p>
                </div>
            </a>
            <a class="weui_cell" href="" >
                <div class="weui_cell_hd" >
                    <img class="img-obj-cover" src="../../img/contact_top-offical.png" >
                </div>
                <div class="weui_cell_bd weui_cell_primary" >
                    <p >公众号</p>
                </div>
            </a>
        </div>
        <div class="contact-friends" >
            <p class="contact-alpha" >A</p>
            <a href="#/con/person_info" style="color:black">
                <div class="weui_cells weui_cells_access" >
                    <div class="weui_cell"  style="touch-action: manipulation; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);">
                        <div class="weui_cell_hd" >
                            <img  src="../../img/2-small.jpg">
                        </div>
                        <div class="weui_cell_bd weui_cell_primary" >
                            <p >你咬我啊i</p>
                        </div>
                    </div>
                </div>
            </a>
            <p class="contact-alpha" >B</p>
            <div class="weui_cells weui_cells_access" >
                <div class="weui_cell"  style="touch-action: manipulation; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);">
                    <div class="weui_cell_hd" >
                        <img  src="//ad-gold-cdn.xitu.io/1499914019068553d2c25d0b33b83481795c552e0b47f.jpg">
                    </div>
                    <div class="weui_cell_bd weui_cell_primary" >
                        <p >白加黑</p>
                    </div>
                </div>
            </div>
            <p class="contact-alpha" >X</p>
            <div class="weui_cells weui_cells_access">
                <div class="weui_cell" _ style="touch-action: manipulation; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);">
                    <div class="weui_cell_hd" >
                        <img  src="//ad-gold-cdn.xitu.io/1499913563353063825fa09e5e83359a90c91417e029e.jpg">
                    </div>
                    <div class="weui_cell_bd weui_cell_primary" >
                        <p >小明</p>
                    </div>
                </div>
                <div class="weui_cell"  style="touch-action: manipulation; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);">
                    <div class="weui_cell_hd" >
                        <img  src="//ad-gold-cdn.xitu.io/14999140634069b6825290779221783b3b59fbba0addd.jpg">
                    </div>
                    <div class="weui_cell_bd weui_cell_primary" >
                        <p >小亮</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
    import xheader from "../xheader.vue";
    import xsearch from "../xsearch.vue";
    export default {
        components:{
            xheader,
            xsearch
    }
}
</script>
<style scoped> 
    .weui_cells_contact-head {
    margin-top: 0;
}

.weui_cells_contact-head .weui_cell {
    padding: 9px 15px
}

.weui_cells_contact-head .weui_cell_hd {
    height: 36px;
    width: 36px;
    overflow: hidden;
    margin-right: 10px;
}

.img-obj-cover {
    display: block;
    border: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.component-contact {
    background: #f1f0f6;
    overflow: auto;
}

.contact-friends .weui_cells::before,
.contact-friends .weui_cells::after {
    visibility: hidden;
}

.contact-friends .weui_cells {
    margin-top: 0;
}

.contact-alpha {
    padding-left: 15px;
    height: 20px;
    line-height: 20px;
    font-size: 14px;
    color: #888888;
}

.contact-friends .weui_cell_primary {
    font-size: 16px;
}

.contact-friends .weui_cell_hd img {
    width: 35px;
    margin-right: 5px;
    display: block;
}
</style>

