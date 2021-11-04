<#import "templateParts/layotPage.ftlh" as lp>
<#import "templateParts/maps.ftlh" as mp>
<#import "templateParts/messagers.ftlh" as ms>


<@lp.layotPage>
    <!--Что то из сео-->
    <div class="container shadow bg-white rounded contH1 opacity-80">
        <div class="row">
            <h1>Замена жидкости</h1>
            <br />
        </div>
    </div>
    <!--Что то из сео-->

    <!--Оглавление статьи-->
    <div class="container shadow bg-white rounded  opacity-80">
        <div class="row" style="padding-top: 20px; padding-bottom: 20px;">
            <div class="col-12 col-md-6">

                <p align="justify" style="text-indent: 20px;"> Замена технических жидкостей в процессе эксплуатации автомобиля устанавливаются временными,
                    сезонными или значениями пробега автомобиля.</p>
            </div>

            <div class="col-12 col-md-6">
                <img class="image" srcset="/img/gidkosti/0001.webp"
                     alt="Замена жикостей в автомобиле">
            </div>
        </div>
    </div>
    <!--Конец Оглавление статьи-->

    <div class="container shadow bg-white rounded  opacity-80" style="margin-top: 10px;">
        <div class="row" style="padding-top: 20px; padding-bottom: 20px;">
            <div class="col-12">
                Чтобы записаться на замену рабочих жидкостей автомобиля в Миассе и узнать, сколько стоит замена тормозной, ГУР жидкостей, позвоните
                в SAVEAUTO74.
            </div>
        </div>
    </div>

    <!--Начало текста статьи-->
    <div class="container shadow bg-white rounded  opacity-80 " style="margin-top: 10px;">
        <div class="row" style="padding-top: 20px; padding-bottom: 20px;">
            <div class="col-12 col-md-12">
                <p align="justify" style="text-indent: 20px;"> Основные жидкости которые требуется переодически заменять, для уверенной работы автомобиля:</p>
                <ul>
                    <li>Замена моторного масла</li>
                    <li>Замена трансмиссионного масла(масло для КПП)</li>
                    <li>Замена антифриза</li>
                    <li>Замена жидкости гидроусилителя</li>
                    <li>Замена тормозной жидкости</li>

                </ul>

            </div>
            <div class="col-12 col-md-6 textBlock position-relative">
                <img class="rounded mx-auto d-block img-fluid lazyload" data-srcset="img/gidkosti/001.webp"
                     alt="Замена масла" style="width: 100%;">

                <span class="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger">Замена масла</span>

            </div>
            <div class="col-12 col-md-6 textBlock position-relative">
                <img class="rounded mx-auto d-block img-fluid lazyload" data-srcset="img/gidkosti/002.webp"
                     alt="Замена антифриза" style="width: 100%;">

                <span class="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger">Замена антифриза</span>

            </div>
            <div class="col-12">
                <img class="image lazyload"
                     data-srcset="dpt/reglament.png"
                     alt="Регламент замены тех жидкостей">
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