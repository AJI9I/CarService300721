<#import "fixedParts.ftlh" as fp>

<#macro layotPage>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title><#if title??>${title.title}<#else > Автосервис Миасс!</#if></title>
    <meta name="description" content="<#if title??>${title.description}<#else > Автосервис Миасс!</#if>">
    <meta name="keywords" content="<#if title??>${title.keyword}<#else > Автосервис Миасс!</#if>" />

    <#--    //OpenGraph-->
    <meta property="og:title" content="<#if title??>${title.title}<#else > Автосервис Миасс!</#if>">
    <meta property="og:image" content="https://saveauto74.ru/img/ogLogo.png">
    <meta property="og:image:width" content="968">
    <meta property="og:image:height" content="504">
    <meta property="og:type" content="article">
    <meta property="og:url" content="saveauto74.ru">
    <meta property="og:description" content="<#if title??>${title.description}<#else > Автосервис Миасс!</#if>">
    <meta property="og:site_name" content="Автосервис и Шиномонтаж в Миассе | SaveAuto74">

    <meta name="twitter:title" content="<#if title??>${title.title}<#else > Автосервис Миасс!</#if>"/>
    <meta name="twitter:description" content="<#if title??>${title.description}<#else > Автосервис Миасс!</#if>"/>

    <link rel="shortcut icon" href="img/favicon.png" type="image/x-icon">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous">
    <link rel="stylesheet" href="css/style.css?e9or66">

    <link href="font/icomoon/fonts/icomoon.ttf?e9or66" as="font" type="font/ttf" crossorigin="anonymous">
    <link href="font/Formular-Medium.otf" as="font" type="font/otf" crossorigin="anonymous">
    <link href="font/SF-Pro-Display-Regular.otf" as="font" type="font/ttf" crossorigin="anonymous">

<#--    <link href="font/icomoon/fonts/icomoon.ttf?e9or66" as="font" type="font/ttf" crossorigin="anonymous">-->
<#--    <link rel="preload" href="font/Formular-Medium.otf" as="font" type="font/otf" crossorigin="anonymous">-->
<#--    <link rel="preload" href="font/SF-Pro-Display-Regular.otf" as="font" type="font/ttf" crossorigin="anonymous">-->

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
    <script src="https://kit.fontawesome.com/61adac965a.js" crossorigin="anonymous" async></script>

    <script src="https://code.jquery.com/jquery-latest.js"></script>
    <script src="js/lazysizes.min.js" async></script>



    <!--Для верификации-->
    <meta name="yandex-verification" content="507ff9a5933c384e" />
    <meta name="google-site-verification" content="TTYQvWafYML-DCF7VWK88E-LtuSyBPlNAqnS6aVtlfk" />
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-ZKPHMZVRN3"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-ZKPHMZVRN3');
    </script>
    <!--Конец Для верификации-->
</head>

<body>
<@fp.header/>

<#nested >

<@fp.footer/>


<!-- JavaScript Bundle with Popper -->
<script defer src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ"
        crossorigin="anonymous"></script>

<script>
    window.onscroll = function () { scrollFunction() };

    function scrollFunction() {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            document.getElementById("Logotip").style.height = "30px";
            document.getElementById("HeaderOpacity").classList.remove("opacity-75");

        } else {
            document.getElementById("Logotip").style.height = "60px";
            document.getElementById("HeaderOpacity").classList.add("opacity-75");
        }
    }
</script>

<!--Скрипт копирования координат в буфер обмена-->
<script>
    function geoPointFunctionCopy() {
        var copyText = document.getElementById("geoPoint");
        //copyText.innerHTML;
        //document.execCommand("copy");

        navigator.clipboard.writeText(copyText.innerHTML)
            .then(() => {
                // Получилось!
            })
            .catch(err => {
                console.log('Something went wrong', err);
            });

        alert("Координаты скопированны: " + copyText.innerHTML);
    }
</script>
<!--Конец Скрипт копирования координат в буфер обмена-->

<!--Скрипты -->
<!-- Yandex.Metrika counter -->
<!--
<script defer type="text/javascript" >
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
-->
<!-- /Yandex.Metrika counter -->

<!-- Метрика тестовая-->
<!-- HFCM by 99 Robots - Snippet # 2: Счетчик ЯМетрика -->
<!-- Yandex.Metrika counter -->
<script type="text/javascript" >
    (function (d, w, c) { (w[c] = w[c] || []).push(function() {
        try { w.yaCounter69853432 = new Ya.Metrika({ id:69853432,
            clickmap:true,
            trackLinks:true,
            accurateTrackBounce:true,
            webvisor:true }); } catch(e) { } }); var n = d.getElementsByTagName("script")[0], s = d.createElement("script"), f = function () { n.parentNode.insertBefore(s, n); }; s.type = "text/javascript"; s.async = true; s.src = "https://mc.yandex.ru/metrika/watch.js"; if (w.opera == "[object Opera]") { d.addEventListener("DOMContentLoaded", f, false); } else { f(); } })(document, window, "yandex_metrika_callbacks"); </script> <noscript><div><img src="https://mc.yandex.ru/watch/69853432" style="position:absolute; left:-9999px;" alt="" /></div></noscript> <!-- /Yandex.Metrika counter -->
<!-- /end HFCM by 99 Robots -->
<!-- Метрика тестовая-->
<!--Конец Скрипты-->

<!-- Обвеска яндекс карт
<script defer src="https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;apikey=<ваш API-ключ>" type="text/javascript"></script>-->
<script defer src="js/polyline_animation.js" type="text/javascript"></script>
<!--<script defer src="js/animated_line.js" type="text/javascript"></script>-->
<!-- Конец Обвеска яндекс карт -->

<!-- Пиксель для ВК-->
<#--<script type="text/javascript">!function(){var t=document.createElement("script");t.type="text/javascript",t.async=!0,t.src="https://vk.com/js/api/openapi.js?169",t.onload=function(){VK.Retargeting.Init("VK-RTRG-1120721-cutOb"),VK.Retargeting.Hit()},document.head.appendChild(t)}();</script><noscript><img src="https://vk.com/rtrg?p=VK-RTRG-1120721-cutOb" style="position:fixed; left:-999px;" alt=""/></noscript>-->
<!-- Конец Пиксель для ВК-->

<#--Тестим-->
<!--отложенная загрузка некоторых скриптов-->
<script type="text/javascript">
    function downloadJSAtOnload() {
        var element = document.createElement("script");
        element.src = "https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;";
        element.type = "text/javascript";
        element.id = "yamapjs";
        document.body.appendChild(element);
    }
    if (window.addEventListener)
        window.addEventListener("load", downloadJSAtOnload, false);
    else if (window.attachEvent)
        window.attachEvent("onload", downloadJSAtOnload);
    else window.onload = downloadJSAtOnload;
</script>
<!--отложенная загрузка некоторых скриптов-->

<script>
    $(function () {

        $("#map").mouseover(function(){
            if($("#imgmap1").length || $("#map").html().length==0){
                $("#imgmap1").remove();
                $("#imgmap2").remove();
                    setTimeout(function () {
                        ymaps.ready(init);
                    },2000)
            }
        });
    }
    );

</script>
</body>

</html>
</#macro>