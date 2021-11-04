<#import "contactsblock.ftlh" as contact>
<#import "verticalmenu.ftlh" as vmenu>
<#import "calculator.ftlh" as calc>


<#macro page>
    <!DOCTYPE html>
    <html lang="ru">
    <head>

        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
<#--        <title>Автосервис Шиномонтаж Миасс. Ремонт автомобилей в Миассе</title>-->
<#--        <meta name="description" content="Требуется техническое обслуживание автомобиля? Доверьте автомобиль автосервису рядом с вами. В Save Auto 74 работают автомеханики с опытом 15 лет.">-->

        <title><#if title??>${title.title}<#else > Автосервис Миасс!</#if></title>
        <meta name="description" content="<#if title??>${title.description}<#else > Автосервис Миасс!</#if>">
        <meta name="keywords" content="<#if title??>${title.keyword}<#else > Автосервис Миасс!</#if>" />

        <link href="/assets/css/app.css?v=2" rel="stylesheet">
        <link rel="stylesheet" href="/assets/fonts/icomoon/style.css">

        <#--    //OpenGraph-->
        <meta property="og:title" content="<#if title??>${title.title}<#else > Автосервис Миасс!</#if>">
        <meta property="og:image" content="https://saveauto74.ru/logoOg.png">
        <meta property="og:type" content="article">
        <meta property="og:url" content="saveauto74.ru">
        <meta property="og:description" content="<#if title??>${title.description}<#else > Автосервис Миасс!</#if>">
        <meta property="og:site_name" content="Автосервис | SaveAuto74">

        <meta name="twitter:title" content="<#if title??>${title.title}<#else > Автосервис Миасс!</#if>"/>
        <meta name="twitter:description" content="<#if title??>${title.description}<#else > Автосервис Миасс!</#if>"/>
<#--        @import url(/assets/fonts/icomoon/style.css);-->

        <link rel="preload" href="/assets/fonts/icomoon/fonts/icomoon.ttf?e9or66" as="font" type="font/ttf" crossorigin="anonymous">
        <link rel="preload" href="/assets/fonts/Formular-Medium.otf" as="font" type="font/otf" crossorigin="anonymous">
        <link rel="preload" href="/assets/fonts/SF-Pro-Display-Regular.otf" as="font" type="font/ttf" crossorigin="anonymous">

        <script src="http://code.jquery.com/jquery-latest.js"></script>

        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
        <script src="https://kit.fontawesome.com/61adac965a.js" crossorigin="anonymous"></script>

        <link rel="shortcut icon" href="/favicon.png"/>
        <meta name="yandex-verification" content="507ff9a5933c384e" />
        <meta name="google-site-verification" content="TTYQvWafYML-DCF7VWK88E-LtuSyBPlNAqnS6aVtlfk" />

        <script src="/assets/js/lazysizes.min.js" async></script>

        <!-- Global site tag (gtag.js) - Google Analytics -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-ZKPHMZVRN3"></script>
        <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-ZKPHMZVRN3');
        </script>

    </head>
<body class="home-page hide-footer-apps">

<@vmenu.verticalmenu/>

<div class="off-canvas-content" data-off-canvas-content>
    <div id="wrapper-outer">
    <div id="wrapper">
    <header id="header" style="padding-top: 10px;">
        <div class="grid-container">
            <div class="inner">
                <div class="logo">
                    <a href="/">
                        <script data-pagespeed-no-defer>//<![CDATA[
                            (function(){for(var g="function"==typeof Object.defineProperties?Object.defineProperty:function(b,c,a){if(a.get||a.set)throw new TypeError("ES3 does not support getters and setters.");b!=Array.prototype&&b!=Object.prototype&&(b[c]=a.value)},h="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this,k=["String","prototype","repeat"],l=0;l<k.length-1;l++){var m=k[l];m in h||(h[m]={});h=h[m]}var n=k[k.length-1],p=h[n],q=p?p:function(b){var c;if(null==this)throw new TypeError("The 'this' value for String.prototype.repeat must not be null or undefined");c=this+"";if(0>b||1342177279<b)throw new RangeError("Invalid count value");b|=0;for(var a="";b;)if(b&1&&(a+=c),b>>>=1)c+=c;return a};q!=p&&null!=q&&g(h,n,{configurable:!0,writable:!0,value:q});var t=this;function u(b,c){var a=b.split("."),d=t;a[0]in d||!d.execScript||d.execScript("var "+a[0]);for(var e;a.length&&(e=a.shift());)a.length||void 0===c?d[e]?d=d[e]:d=d[e]={}:d[e]=c};function v(b){var c=b.length;if(0<c){for(var a=Array(c),d=0;d<c;d++)a[d]=b[d];return a}return[]};function w(b){var c=window;if(c.addEventListener)c.addEventListener("load",b,!1);else if(c.attachEvent)c.attachEvent("onload",b);else{var a=c.onload;c.onload=function(){b.call(this);a&&a.call(this)}}};var x;function y(b,c,a,d,e){this.h=b;this.j=c;this.l=a;this.f=e;this.g={height:window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight,width:window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth};this.i=d;this.b={};this.a=[];this.c={}}function z(b,c){var a,d,e=c.getAttribute("data-pagespeed-url-hash");if(a=e&&!(e in b.c))if(0>=c.offsetWidth&&0>=c.offsetHeight)a=!1;else{d=c.getBoundingClientRect();var f=document.body;a=d.top+("pageYOffset"in window?window.pageYOffset:(document.documentElement||f.parentNode||f).scrollTop);d=d.left+("pageXOffset"in window?window.pageXOffset:(document.documentElement||f.parentNode||f).scrollLeft);f=a.toString()+","+d;b.b.hasOwnProperty(f)?a=!1:(b.b[f]=!0,a=a<=b.g.height&&d<=b.g.width)}a&&(b.a.push(e),b.c[e]=!0)}y.prototype.checkImageForCriticality=function(b){b.getBoundingClientRect&&z(this,b)};u("pagespeed.CriticalImages.checkImageForCriticality",function(b){x.checkImageForCriticality(b)});u("pagespeed.CriticalImages.checkCriticalImages",function(){A(x)});function A(b){b.b={};for(var c=["IMG","INPUT"],a=[],d=0;d<c.length;++d)a=a.concat(v(document.getElementsByTagName(c[d])));if(a.length&&a[0].getBoundingClientRect){for(d=0;c=a[d];++d)z(b,c);a="oh="+b.l;b.f&&(a+="&n="+b.f);if(c=!!b.a.length)for(a+="&ci="+encodeURIComponent(b.a[0]),d=1;d<b.a.length;++d){var e=","+encodeURIComponent(b.a[d]);131072>=a.length+e.length&&(a+=e)}b.i&&(e="&rd="+encodeURIComponent(JSON.stringify(B())),131072>=a.length+e.length&&(a+=e),c=!0);C=a;if(c){d=b.h;b=b.j;var f;if(window.XMLHttpRequest)f=new XMLHttpRequest;else if(window.ActiveXObject)try{f=new ActiveXObject("Msxml2.XMLHTTP")}catch(r){try{f=new ActiveXObject("Microsoft.XMLHTTP")}catch(D){}}f&&(f.open("POST",d+(-1==d.indexOf("?")?"?":"&")+"url="+encodeURIComponent(b)),f.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),f.send(a))}}}function B(){var b={},c;c=document.getElementsByTagName("IMG");if(!c.length)return{};var a=c[0];if(!("naturalWidth"in a&&"naturalHeight"in a))return{};for(var d=0;a=c[d];++d){var e=a.getAttribute("data-pagespeed-url-hash");e&&(!(e in b)&&0<a.width&&0<a.height&&0<a.naturalWidth&&0<a.naturalHeight||e in b&&a.width>=b[e].o&&a.height>=b[e].m)&&(b[e]={rw:a.width,rh:a.height,ow:a.naturalWidth,oh:a.naturalHeight})}return b}var C="";u("pagespeed.CriticalImages.getBeaconData",function(){return C});u("pagespeed.CriticalImages.Run",function(b,c,a,d,e,f){var r=new y(b,c,a,e,f);x=r;d&&w(function(){window.setTimeout(function(){A(r)},0)})});})();pagespeed.CriticalImages.Run('/mod_pagespeed_beacon','https://saveauto74.ru/','nbsWV5OR92',true,false,'cA2Ikj8wvao');
                            //]]></script>
                        <img class="lazyload"  data-src="/logo.png" alt="Автосервис и Шиномонтаж в  Миассе | SaveAuto74" data-pagespeed-url-hash="3055093539" onload="pagespeed.CriticalImages.checkImageForCriticality(this);"/>
                    </a>
                    <br>
                    <a href="/" class="slogan" style="/*padding-left: 40px;*/" >
                        Автосервис в Миассе
                    </a>
                </div>
                <div class="phone">
                    <a title="Телефон для записи в автосервис" href="tel:+79822719416">
                        <i class="fas fa-phone"> </i>
                        <span>+7 982 271-94-16</span>
                        <i class="fa fa-chevron-down"> </i>
                    </a>


                </div>
                <div class="messengers-outer">
                    <div class="messengers">
                        <a rel="nofollow" title="Записаться через Telegram" href="http://t.me/save_auto_74" target="_blank"><i class="fab fa-telegram"> </i></a>
                        <a rel="nofollow" title="Записаться через Viber" href="viber://chat?number=79822719416" target="_blank"><i class="fab fa-viber"> </i></a>
                        <a rel="nofollow" title="Записаться через Whatsapp" href="https://wa.me/79822719416" target="_blank"><i class="fab fa-whatsapp"> </i></a>
                    </div>
                </div>

                <div class="burger-outer">
                    <button class="burger" data-open="offCanvas">
                        <div class="burger-inner"> </div>
                    </button>
                </div>
            </div>
        </div>
    </header>
        <nav id="main-menu">
            <div class="grid-container">
                <div class="grid-x align-center">
                    <div class="cell auto left">
                        <ul class="menu">
                            <li class="m7">
                                <a href="/">
                                    Автосервис
                                </a>
                            </li>
                            <li class="m7">
                                <a href="/tire-service">
                                    Шиномонтаж
                                </a>
                            </li>
<#--                            <li class="m7">-->
<#--                                <a href="/slesar-service">-->
<#--                                    Слесарный ремонт-->
<#--                                </a>-->
<#--                            </li>-->
                        </ul>
                    </div>
                    <div class="cell shrink right">
                        <ul class="menu">
                            <#--                        <li class="m9">-->

                            <#--                        <li class="m12">-->
                            <#--                            <a href="https://tehnocars.ru/feedback">-->
                            <#--                                Отзывы-->
                            <#--                            </a>-->
                            <#--                        </li>-->
                            <li class="m13">
                                <a href="/contacts">
                                    Контакты
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    <#nested >






<#--        <form class="reveal" id="request-question" data-ajax-form data-action="/request/send" data-reveal>-->
<#--            <button class="close-button" data-close aria-label="Закрыть" type="button"> </button>-->
<#--            <div class="form">-->
<#--                <div class="heading">-->
<#--                    Обращение-->
<#--                </div>-->
<#--                <input type="hidden" name="_token" value="3taFIJCllNuCMbtKFGh256mRl53qiWQvj5JzyxGH">        <input type="hidden" value="0f8f146576ebda3ae8c8433728a2b696" name="validation"/>-->
<#--                <input type="hidden" name="type" value="Обращение"/>-->
<#--                <input type="hidden" name="subject" value="Главная"/>-->
<#--                <input type="hidden" name="url" value="https://tehnocars.ru"/>-->

<#--                <div class="grid-x grid-margin-x">-->
<#--                    <div class="cell medium-6">-->
<#--                        <label>-->
<#--                            <input type="text" placeholder="Ваше имя *" name="name" value="" required />-->
<#--                        </label>-->
<#--                    </div>-->
<#--                    <div class="cell medium-6">-->
<#--                        <label>-->
<#--                            <input type="text" placeholder="Телефон *" pattern=".{18}" value="" name="phone" data-phone-mask required />-->
<#--                        </label>-->
<#--                    </div>-->
<#--                    <div class="cell medium-6">-->
<#--                        <label>-->
<#--                            <input type="email" placeholder="E-mail" name="email" value=""/>-->
<#--                        </label>-->
<#--                    </div>-->
<#--                    <div class="cell">-->
<#--                        <label>-->
<#--                            <textarea name="note" placeholder="Обращение"></textarea>-->
<#--                        </label>-->
<#--                    </div>-->
<#--                    <div class="cell">-->
<#--                        <div class="form-submit">-->
<#--                            <div class="grid-x align-middle grid-margin-x">-->
<#--                                <div class="cell medium-6 personal-data-note">-->
<#--                                    <!-- Отправляя форму, вы соглашаетесь с <a href="https://tehnocars.ru/privacy" target="_blank">политикой</a><br/> обработки персональных данных&ndash;&gt;-->
<#--                                </div>-->
<#--                                <div class="cell medium-6">-->
<#--                                    <button type="submit" class="button submit expanded">Отправить</button>-->
<#--                                </div>-->
<#--                            </div>-->
<#--                        </div>-->
<#--                    </div>-->
<#--                </div>-->
<#--            </div>-->
<#--            <div class="success">-->
<#--                <div>-->
<#--                    <div class="grid-x grid-margin-x align-middle">-->
<#--                        <div class="cell">-->
<#--                            <img src="https://tehnocars.ru/assets/img/misc/success.svg" alt="Ok" data-pagespeed-url-hash="1027461340" onload="pagespeed.CriticalImages.checkImageForCriticality(this);"/>-->
<#--                            <div class="success-heading">Спасибо за обращение</div>-->
<#--                            <div class="success-note">-->
<#--                                Наш менеджер рассмотрит его<br/>в ближайшее время-->
<#--                            </div>-->
<#--                        </div>-->
<#--                    </div>-->
<#--                </div>-->
<#--            </div>-->
<#--        </form>-->
<#--        <form class="callback-footer-form" data-ajax-form data-action="/request/send">-->
<#--            <div class="form">-->
<#--                <input type="hidden" name="_token" value="3taFIJCllNuCMbtKFGh256mRl53qiWQvj5JzyxGH">        <input type="hidden" value="0f8f146576ebda3ae8c8433728a2b696" name="validation"/>-->
<#--                <input type="hidden" name="type" value="Поможем с любым вопросом"/>-->
<#--                <input type="hidden" name="subject" value="Главная"/>-->
<#--                <input type="hidden" name="url" value="https://tehnocars.ru"/>-->

<#--                <div class="grid-x grid-margin-x align-center">-->
<#--                    <div class="cell xlarge-6">-->
<#--                        <div class="h1">Поможем с любым вопросом:</div>-->
<#--                    </div>-->
<#--                    <div class="cell xlarge-6 fields-wrap">-->
<#--                        <div class="grid-x">-->
<#--                            <div class="cell premedium-6">-->
<#--                                <input type="text" placeholder="Телефон" pattern=".{18}" name="phone" value="" data-phone-mask required />-->
<#--                            </div>-->
<#--                            <div class="cell premedium-6">-->
<#--                                <button type="submit" class="button submit expanded">Перезвоните мне</button>-->
<#--                            </div>-->
<#--                        </div>-->
<#--                        <div class="personal-data-note">-->
<#--                            <!-- Отправляя форму, вы соглашаетесь с <a href="https://tehnocars.ru/privacy" target="_blank">политикой</a><br/> обработки персональных данных&ndash;&gt;-->
<#--                        </div>-->
<#--                    </div>-->
<#--                </div>-->
<#--            </div>-->
<#--            <div class="success">-->
<#--                <div>-->
<#--                    <div class="grid-x grid-margin-x align-middle">-->
<#--                        <div class="cell xlarge-6">-->
<#--                            <img src="https://tehnocars.ru/assets/img/misc/success.svg" class="hide-for-xlarge" alt="Ok" data-pagespeed-url-hash="1027461340" onload="pagespeed.CriticalImages.checkImageForCriticality(this);"/>-->
<#--                            <div class="success-heading">Спасибо за заявку</div>-->
<#--                        </div>-->
<#--                        <div class="cell xlarge-6">-->
<#--                            <div class="grid-x align-middle">-->
<#--                                <div class="cell shrink show-for-xlarge">-->
<#--                                    <img src="https://tehnocars.ru/assets/img/misc/success.svg" alt="Ok" data-pagespeed-url-hash="1027461340" onload="pagespeed.CriticalImages.checkImageForCriticality(this);"/>-->
<#--                                </div>-->
<#--                                <div class="cell xlarge-auto success-note">-->
<#--                                    Наш менеджер свяжется<br/> с вами в ближайшее время-->
<#--                                </div>-->
<#--                            </div>-->
<#--                        </div>-->
<#--                    </div>-->
<#--                </div>-->
<#--            </div>-->
<#--        </form>-->
    </div>

    </div>

    <footer id="footer">
        <div class="grid-container">
            <div class="grid-x grid-padding-x">
                <div class="cell large-6">
                    <div class="logo">
                        <a href="/">
                            <img class="lazyload"  data-src="/logo.png" alt="Автосервис Миасс SaveAuto74" data-pagespeed-url-hash="3055093539" onload="pagespeed.CriticalImages.checkImageForCriticality(this);"/>
                        </a>
                    </div>
                    <div class="emails">
                        <a rel="nofollow" href="mailto:dimon_varna_857@mail.ru" target="_blank">dimon_varna_857@mail.ru</a> Автосервис Шиномонтаж<br/>
                        <a rel="nofollow" href="mailto:yaaal@mail.ru" target="_blank">yaaal@mail.ru</a> По работе сайта Сотрудничество<br/>
                        <!--<a href="mailto:parts@tehnocars.ru">parts@tehnocars.ru</a> запчасти-->
                    </div>

                    <div class="socials">
                        <!--noindex-->
<#--                        <a href="https://www.facebook.com/tehnocars-111461123558253/" rel="nofollow">-->
<#--                            <i class="icon-facebook"> </i>-->
<#--                        </a>-->

                        <a href="https://vk.com/saveauto74" target="_blank" rel="nofollow">
                            <i class="fab fa-vk"> </i>
                        </a>

                        <a href="https://www.instagram.com/save_auto_74/" target="_blank"  rel="nofollow">
                            <i class="fab fa-instagram"> </i>
                        </a>

<#--                        <a href="https://www.youtube.com/channel/UCbuXIkWI9t2RQ7XAS5CBemA" rel="nofollow">-->
<#--                            <i class="icon-youtube"> </i>-->
<#--                        </a>-->
                        <!--/noindex-->
                    </div>
<#--                    <div class="apps">-->
<#--                        <a href="#">-->
<#--                            <img src="https://tehnocars.ru/assets/img/misc/app-store.svg" alt="Загрузите в App Store" data-pagespeed-url-hash="204370758" onload="pagespeed.CriticalImages.checkImageForCriticality(this);"/>-->
<#--                        </a>-->
<#--                        <a href="#">-->
<#--                            <img src="https://tehnocars.ru/assets/img/misc/google-play.svg" alt="Доступно в Google Play" data-pagespeed-url-hash="4163857981" onload="pagespeed.CriticalImages.checkImageForCriticality(this);"/>-->
<#--                        </a>-->
<#--                    </div>-->
                </div>
                <div class="cell large-6">


                    <@vmenu.footermenu/>

                </div>
                <div class="cell large-6">
                </div>
                <div class="cell large-6">
                </div>
                <div class="cell large-6 copyrights-outer">
                    <span class="copyrights">©  Save Auto 74, 2021</span>
                    <!--<a href="https://tehnocars.ru/privacy">Условия обработки персональных данных</a>-->
                    <div class="disclaimer">
                        Информация, размещенная на сайте, не является публичной офертой
                    </div>
                </div>
                <div class="cell large-6">
                    <div class="kit">
                    </div>
                </div>
            </div>
        </div>
    </footer>
</div>


<!--noindex-->

<#--    <form class="reveal" id="request-zapis" data-ajax-form data-action="/request/send" data-reveal>-->
<#--        <button class="close-button" data-close aria-label="Закрыть" type="button"> </button>-->
<#--        <div class="form">-->
<#--            <div class="heading">-->
<#--                Записаться на сервис-->
<#--            </div>-->
<#--            <input type="hidden" name="_token" value="3taFIJCllNuCMbtKFGh256mRl53qiWQvj5JzyxGH">        <input type="hidden" value="0f8f146576ebda3ae8c8433728a2b696" name="validation"/>-->
<#--            <input type="hidden" name="type" value="Запись на сервис"/>-->
<#--            <input type="hidden" name="subject" value="Главная"/>-->
<#--            <input type="hidden" name="url" value="https://tehnocars.ru"/>-->

<#--            <div class="grid-x grid-margin-x">-->
<#--                <div class="cell medium-6">-->
<#--                    <label>-->
<#--                        <input type="text" placeholder="Ваше имя *" name="name" value="" required />-->
<#--                    </label>-->
<#--                </div>-->
<#--                <div class="cell medium-6">-->
<#--                    <label>-->
<#--                        <input type="text" placeholder="Автомобиль" name="auto"/>-->
<#--                    </label>-->
<#--                </div>-->
<#--                <div class="cell medium-6">-->
<#--                    <label>-->
<#--                        <input type="text" placeholder="Телефон *" pattern=".{18}" value="" name="phone" data-phone-mask required />-->
<#--                    </label>-->
<#--                </div>-->
<#--                <div class="cell medium-6">-->
<#--                    <label>-->
<#--                        <input type="email" placeholder="E-mail" name="email" value=""/>-->
<#--                    </label>-->
<#--                </div>-->
<#--                <div class="cell">-->
<#--                    <label>-->
<#--                        <textarea name="note" placeholder="Удобное время и примечание"></textarea>-->
<#--                    </label>-->
<#--                </div>-->
<#--                <div class="cell">-->
<#--                    <div class="form-submit">-->
<#--                        <div class="grid-x align-middle grid-margin-x">-->
<#--                            <div class="cell medium-6 personal-data-note">-->
<#--                                Отправляя форму, вы соглашаетесь с <a href="https://tehnocars.ru/privacy" target="_blank">политикой</a><br/> обработки персональных данных-->
<#--                            </div>-->
<#--                            <div class="cell medium-6">-->
<#--                                <button type="submit" class="button submit expanded">Отправить</button>-->
<#--                            </div>-->
<#--                        </div>-->
<#--                    </div>-->
<#--                </div>-->
<#--            </div>-->
<#--        </div>-->

<#--        <div class="success">-->
<#--            <div>-->
<#--                <div class="grid-x grid-margin-x align-middle">-->
<#--                    <div class="cell">-->
<#--                        <img src="https://tehnocars.ru/assets/img/misc/success.svg" alt="Ok" data-pagespeed-url-hash="1027461340" onload="pagespeed.CriticalImages.checkImageForCriticality(this);"/>-->
<#--                        <div class="success-heading">Спасибо за заявку</div>-->
<#--                        <div class="success-note">-->
<#--                            Наш менеджер свяжется с вами<br/>в ближайшее время-->
<#--                        </div>-->
<#--                    </div>-->
<#--                </div>-->
<#--            </div>-->
<#--        </div>-->

<#--    </form>-->
<#--    <div class="reveal" id="login" data-reveal>-->
<#--        <button class="close-button" data-close aria-label="Закрыть" type="button"> </button>-->
<#--        <form method="POST" action="https://tehnocars.ru/login" data-ajax-form>-->
<#--            <div class="heading">-->
<#--                Войти в кабинет-->
<#--            </div>-->
<#--            <div class="login-form grid-x grid-margin-x">-->
<#--                <div class="cell medium-6">-->
<#--                    <div>-->
<#--                        <input type="hidden" name="_token" value="3taFIJCllNuCMbtKFGh256mRl53qiWQvj5JzyxGH">                <input type="hidden" value="0f8f146576ebda3ae8c8433728a2b696" name="validation"/>                <label>-->
<#--                            <input type="text" placeholder="Телефон" autocomplete="dont" pattern=".{18}" name="phone" data-phone-mask required />-->
<#--                        </label>-->
<#--                        <label>-->
<#--                            <input type="password" placeholder="Пароль" name="password" required />-->
<#--                        </label>-->
<#--                        <div class="grid-x align-middle remember-outer">-->
<#--                            <div class="cell auto">-->
<#--                                <input type="checkbox" name="remember" id="remember">-->
<#--                                <label for="remember">Запомнить меня</label>-->
<#--                            </div>-->
<#--                            <div class="cell shrink text-right forgot-password">-->
<#--                                <a href="https://tehnocars.ru/password/reset">Забыли пароль?</a>-->
<#--                            </div>-->
<#--                        </div>-->
<#--                        <button type="submit" class="submit button expanded">-->
<#--                            Войти-->
<#--                        </button>-->
<#--                    </div>-->
<#--                </div>-->
<#--                <div class="cell medium-6 oauth">-->
<#--                    <div class="login-header">-->
<#--                        Войти через соцсети:-->
<#--                    </div>-->
<#--                    <div>-->
<#--&lt;#&ndash;                        <a href="https://tehnocars.ru/oauth/facebook">&ndash;&gt;-->
<#--&lt;#&ndash;                            <img src="https://tehnocars.ru/assets/img/icons/facebook.svg" alt="Facebook" data-pagespeed-url-hash="2912842843" onload="pagespeed.CriticalImages.checkImageForCriticality(this);"/>&ndash;&gt;-->
<#--&lt;#&ndash;                        </a>&ndash;&gt;-->
<#--                        <a href="https://tehnocars.ru/oauth/vkontakte">-->
<#--                            <i class="fab fa-vk"></i>-->
<#--                        </a>-->
<#--&lt;#&ndash;                        <a href="https://tehnocars.ru/oauth/google">&ndash;&gt;-->
<#--&lt;#&ndash;                            <img src="https://tehnocars.ru/assets/img/icons/google.svg" alt="Google" data-pagespeed-url-hash="82184694" onload="pagespeed.CriticalImages.checkImageForCriticality(this);"/>&ndash;&gt;-->
<#--&lt;#&ndash;                        </a>&ndash;&gt;-->
<#--                    </div>-->
<#--                    <div class="register">-->
<#--                        <!--<a href="https://tehnocars.ru/register" class="button outline expanded black">Зарегистрироваться</a>&ndash;&gt;-->
<#--                    </div>-->
<#--                    <div class="bonuses">-->
<#--                        <strong>+200</strong>-->
<#--                        <i class="icon-t"> </i>-->
<#--                        <span>на ваш счет</span>-->
<#--                    </div>-->
<#--                </div>-->
<#--            </div>-->

<#--        </form>-->

<!-- Global site tag (gtag.js) - Google Analytics -->
<#--    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-145474077-1"></script>-->
<#--    <script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','UA-145474077-1');</script>-->
<#--    <meta name="yandex-verification" content="07fbc157b0f77f59"/>-->

<#--    <meta name="google-site-verification" content="1K1ie2FrU8rnQvyCguMMnjjzV8bzNnqZ-RyxVJgvLTs"/>-->
    <!--/noindex-->

<#--    <script src="/assets/js/app.js"></script>-->
<#--    <script src="https://api-maps.yandex.ru/2.1/?lang=ru_RU&onload=createFooterMap" defer type="text/javascript"></script>-->
    <div id="scroller" style="display: none;">
        <div class="tm-totop-scroller  tm-block-secondary"></div>
    </div>
    <script>$(function(){$(window).on("scroll",function(){if($(this).scrollTop()>0){$("#scroller").fadeIn()}else{$("#scroller").fadeOut()}});$("#scroller").click(function(){$("body,html").animate({scrollTop:0},800);return false});});</script>
<#--    <script>$('.ymaps-2-1-77-image.ymaps-2-1-77-patched-for-print').css({'list-style-image':'url("https://tehnocars.ru/assets/img/misc/placemark.svg)','background-image':'url("https://tehnocars.ru/assets/img/misc/placemark.svg")'})</script>-->
    <script>$(".ymaps-2-1-77-image.ymaps-2-1-77-patched-for-print").css("left","-60px")</script>

<!-- Yandex.Metrika counter -->
<script type="text/javascript" >
    (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
    (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

    ym(69853432, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true
    });
</script>
<noscript><div><img src="https://mc.yandex.ru/watch/69853432" style="position:absolute; left:-9999px;" alt="Яндекс метрика Автосервиса в Миассе" /></div></noscript>
<!-- /Yandex.Metrika counter -->

<#--отложенная загрузка некоторых скриптов-->
<script type="text/javascript">
    function downloadJSAtOnload() {
        var element = document.createElement("script");
        element.src = "/assets/js/app.js";
        document.body.appendChild(element);
    }
    if (window.addEventListener)
        window.addEventListener("load", downloadJSAtOnload, false);
    else if (window.attachEvent)
        window.attachEvent("onload", downloadJSAtOnload);
    else window.onload = downloadJSAtOnload;
</script>
<#--отложенная загрузка некоторых скриптов-->
<#--отложенная загрузка некоторых скриптов-->
<script type="text/javascript">
    function downloadJSAtOnload() {
        var element = document.createElement("script");
        element.src = "https://api-maps.yandex.ru/2.1/?lang=ru_RU&onload=createFooterMap";
        document.body.appendChild(element);
    }
    if (window.addEventListener)
        window.addEventListener("load", downloadJSAtOnload, false);
    else if (window.attachEvent)
        window.attachEvent("onload", downloadJSAtOnload);
    else window.onload = downloadJSAtOnload;
</script>
<#--отложенная загрузка некоторых скриптов-->

</body>
</html>
</#macro>