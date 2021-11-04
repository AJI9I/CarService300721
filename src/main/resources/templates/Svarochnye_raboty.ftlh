<#import "templateParts/layotPage.ftlh" as lp>
<#import "templateParts/maps.ftlh" as mp>
<#import "templateParts/messagers.ftlh" as ms>


<@lp.layotPage>
    <!--Что то из сео-->
    <div class="container shadow bg-white rounded contH1 opacity-80">
        <div class="row">
            <h1>Сварочные работы</h1>
            <br />
        </div>
    </div>
    <!--Что то из сео-->

    <!--Оглавление статьи-->
    <div class="container shadow bg-white rounded  opacity-80">
        <div class="row" style="padding-top: 20px; padding-bottom: 20px;">
            <div class="col-12 col-md-6">

                <p align="justify" style="text-indent: 20px;"> Сварочные работы в автосервисе не всегда связанны с восстановлением аварийных автомобилей. Сварочные работы
                    за частую применяются при ремонте глушителей,  обслуживании подвески и при других видах работ.</p>
            </div>

            <div class="col-12 col-md-6">
                <img class="image" srcset="/img/svarka/0001.webp"
                     alt="Сварочные работы в Миассе">
            </div>
        </div>
    </div>
    <!--Конец Оглавление статьи-->
    <div class="container shadow bg-white rounded  opacity-80" style="margin-top: 10px;">
        <div class="row" style="padding-top: 20px; padding-bottom: 20px;">
            <div class="col-12">
                Чтобы записаться на проведение сварочных работ с автомобилем в Миассе и узнать, сколько стоит работа мастера, позвоните
                в SAVEAUTO74.
            </div>
        </div>
    </div>

    <!--Начало текста статьи-->
    <div class="container shadow bg-white rounded  opacity-80 " style="margin-top: 10px;">
        <div class="row" style="padding-top: 20px; padding-bottom: 20px;">
            <div class="col-12 col-md-6">
                <p align="justify" style="text-indent: 20px;"> Основные причины проведения сварочных работ:</p>
                <ul>
                    <li>Сварка-ремонт глушителя</li>
                    <li>Замена резонатора</li>
                    <li>Замена/удаление катализатора</li>
                    <li>Замена кронштейнов крепления</li>
                    <li>Локальное удаление коррозиных повреждений</li>
                    <li>Восстановление поддомкратных опор</li>
                    <li>Установка фаркопа</li>
                    <li>Установка дуг безопасности</li>
                    <li>Установка лебедки</li>
                    <li>Усиление несущих конструкций кузова</li>
                </ul>

            </div>
            <div class="col-12 col-md-6 textBlock position-relative">
                <img class="rounded mx-auto d-block img-fluid lazyload" data-srcset="img/svarka/002.webp"
                     alt="Удаление коррозийных повреждений" style="width: 100%;">

                <span class="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger">Частичная замена <br> порогов автомобиля</span>

            </div>

            <div class="col-12 col-md-6">

                <p align="justify" style="text-indent: 20px;"> Восстановление любой детали автомобиля, предпологающей возможность сварки, избавляет автовладельца от
                    покупки нового элемента в замен старого.</p>

                <p align="justify" style="text-indent: 20px;"> Этапы работ:</p>
                <ul>
                    <li>Осмотр автомобиля, выбор обоснованного метода ремонта</li>
                    <li>Называется цена сварки кузова в конкретном случае</li>
                    <li>Зачистка поверхностей, при необходимости удаление прогнивших элементов</li>
                    <li>Отсоединение автоэлектрики</li>
                    <li>Проведение сварочных работ</li>
                    <li>Зачистка шва</li>
                    <li>При необходимости подготовка к покраске</li>

                </ul>

            </div>

            <div class="col-12 col-md-6 textBlock position-relative">
                <img class="rounded mx-auto d-block img-fluid lazyload" data-srcset="img/svarka/003.webp"
                     alt="Ремонт глушителя" style="width: 100%;">

                <span class="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger">Ремонт глушителя</span>

            </div>


        </div>
    </div>
    <!--Конец статей-->



    <noindex>
    <@mp.uslugi/>

    <@ms.messagers/>

    <@mp.maps/>
    </noindex>

</@lp.layotPage>