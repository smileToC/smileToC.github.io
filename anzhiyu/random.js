var posts=["2023/12/23/Github Pages 自定义域名/","2024/09/10/Linux基础/","2024/08/10/Linux运维--Ansible/","2024/08/07/Linux运维--Shell基础/","2024/06/05/MouseInc/","2023/06/18/Pinia学习/","2023/05/27/Twikoo私有化部署（docker）/","2024/05/16/Win10重置密码的一次经历/","2023/05/29/node版本管理工具nvm的基本使用/","2023/06/30/styl文件转css/","2023/05/07/使用PicGo+github搭建个人图床/","2024/01/02/使用Vercel部署twikoo并解决被墙的问题/","2023/05/23/创建图书馆等页面的基本步骤/","2023/12/09/博客目的性改变的一些看法/","2023/10/07/在Win10上面运行安卓应用/","2023/06/09/在Win10任务栏上显示性能信息/","2024/04/29/小狼毫输入法初体验/","2024/01/11/尝试学习双拼/","2023/05/07/新的开始/","2023/12/10/获取网站favicon的几种方法/","2024/06/07/途中有感/","2024/09/09/部署博客封面项目 MiniCover/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };var friend_link_list=[{"name":"Hexo","hundredSuffix":"","link":"https://hexo.io/zh-tw/","avatar":"https://d33wubrfki0l68.cloudfront.net/6657ba50e702d84afb32fe846bed54fba1a77add/827ae/logo.svg","descr":"快速、简单且强大的网站框架"},{"name":"anzhiyu主题","link":"https://blog.anheyu.com/","avatar":"https://img01.anheyu.com/useruploads/90/2023/04/23/6444e85234e51.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-blog@1.1.6/img/post/common/anzhiy.cn.jpg"},{"name":"安知鱼`Blog","hundredSuffix":"","link":"https://blog.anheyu.com/","avatar":"https://blog-pic-music.oss-cn-guangzhou.aliyuncs.com/picture/202306141419649.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-blog@1.1.6/img/post/common/anzhiy.cn.jpg"},{"name":"张洪HEO","hundredSuffix":"","link":"https://blog.zhheo.com/","avatar":"https://bu.dusays.com/2022/12/28/63ac2812183aa.png","descr":"分享设计与科技生活","siteshot":"https://blog-pic-music.oss-cn-guangzhou.aliyuncs.com/picture/202306141122758.jpeg"},{"name":"Leonus","hundredSuffix":"","link":"https://blog.leonus.cn/","avatar":"https://blog-pic-music.oss-cn-guangzhou.aliyuncs.com/picture/202306141137059.jpg","descr":"进一寸有进一寸的欢喜","siteshot":"https://blog-pic-music.oss-cn-guangzhou.aliyuncs.com/picture/202306141127588.jpeg"},{"name":"安知鱼","hundredSuffix":"","link":"https://blog.anheyu.com","avatar":"https://blog-pic-music.oss-cn-guangzhou.aliyuncs.com/picture/202306141419649.jpg","descr":"生活明朗，万物可爱"},{"name":"张洪HEO","hundredSuffix":"","link":"https://blog.zhheo.com/","avatar":"https://bu.dusays.com/2022/12/28/63ac2812183aa.png","descr":"分享设计与科技生活"},{"name":"Leonus","hundredSuffix":"","link":"https://blog.leonus.cn/","avatar":"https://blog-pic-music.oss-cn-guangzhou.aliyuncs.com/picture/202306141137059.jpg","descr":"进一寸有进一寸的欢喜"},{"name":"JayHrn","hundredSuffix":"","link":"https://blog.jayhrn.com","avatar":"https://npm.elemecdn.com/hrn-blog@1.0.0/avatar.svg","descr":"念念不忘，必有回响"},{"name":"青桔气球","hundredSuffix":"","link":"https://blog.qjqq.cn/","avatar":"https://blog-pic-music.oss-cn-guangzhou.aliyuncs.com/picture/202307012125714.webp","descr":"分享网络安全与科技生活"},{"name":"朽丘博","hundredSuffix":"","link":"https://koxiuqiu.cn","avatar":"https://blog-pic-music.oss-cn-guangzhou.aliyuncs.com/picture/202409091703960.png","descr":"一定会和喜欢的人在夏日夜晚牵手慢"},{"name":"Joker2Yue的个人博客","hundredSuffix":"","link":"https://blog.joker2yue.cn/","avatar":"https://blog-pic-music.oss-cn-guangzhou.aliyuncs.com/picture/202409191054718.jpg","descr":"Joker Never Plays Jokes."}];
    var refreshNum = 1;
    function friendChainRandomTransmission() {
      const randomIndex = Math.floor(Math.random() * friend_link_list.length);
      const { name, link } = friend_link_list.splice(randomIndex, 1)[0];
      Snackbar.show({
        text:
          "点击前往按钮进入随机一个友链，不保证跳转网站的安全性和可用性。本次随机到的是本站友链：「" + name + "」",
        duration: 8000,
        pos: "top-center",
        actionText: "前往",
        onActionClick: function (element) {
          element.style.opacity = 0;
          window.open(link, "_blank");
        },
      });
    }
    function addFriendLinksInFooter() {
      var footerRandomFriendsBtn = document.getElementById("footer-random-friends-btn");
      if(!footerRandomFriendsBtn) return;
      footerRandomFriendsBtn.style.opacity = "0.2";
      footerRandomFriendsBtn.style.transitionDuration = "0.3s";
      footerRandomFriendsBtn.style.transform = "rotate(" + 360 * refreshNum++ + "deg)";
      const finalLinkList = [];
  
      let count = 0;

      while (friend_link_list.length && count < 3) {
        const randomIndex = Math.floor(Math.random() * friend_link_list.length);
        const { name, link, avatar } = friend_link_list.splice(randomIndex, 1)[0];
  
        finalLinkList.push({
          name,
          link,
          avatar,
        });
        count++;
      }
  
      let html = finalLinkList
        .map(({ name, link }) => {
          const returnInfo = "<a class='footer-item' href='" + link + "' target='_blank' rel='noopener nofollow'>" + name + "</a>"
          return returnInfo;
        })
        .join("");
  
      html += "<a class='footer-item' href='/link/'>更多</a>";

      document.getElementById("friend-links-in-footer").innerHTML = html;

      setTimeout(()=>{
        footerRandomFriendsBtn.style.opacity = "1";
      }, 300)
    };