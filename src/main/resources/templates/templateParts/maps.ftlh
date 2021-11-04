<#macro maps>
    <!-- Блок карта-->
    <div class="container shadow bg-white rounded contH1 opacity-80">
        <div class="row">
            <div class="col-12 col-md-6">
                <h2>Адрес автомастерская:</h2>
                <p align="justify" style="text-indent: 20px;"> <strong>ГСК-Южный 2</strong> не далеко от ТК Spar
                </p>

            </div>
            <div class="col-12 col-md-6">
                <h3>Координаты автосервиса:</h3>

                <p align="justify" style="text-indent: 20px;"> <span ><strong id="geoPoint">55°07'46.5"N 60°08'34.9"E</strong> </span><button
                            onclick="geoPointFunctionCopy()"> <i class="far fa-copy"></i></button>
                </p>
            </div>
            <div class="col-12 col-md-12" style="padding-bottom: 10px;">
                <!-- <div class="col-12 map" id="YMapsID" data-map="55.129569, 60.143019">-->
                <div class="col-12 map" id="map" data-map="55.129569, 60.143019">
                    <img id="imgmap1" class="image imgmap1" srcset="/img/yamap/yamap1200.webp 1200w"/>
                    <img id="imgmap2" class="image imgmap2" srcset="/img/yamap/yamap600.webp 600w"/>
                    <!-- <script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A9d06bb7f7b9112cccbb3aec0aecf861e54dac396016abbc67a95ff96482335c6&amp;width=100%25&amp;height=450&amp;lang=ru_RU&amp;scroll=true"></script>
                      -->
                </div>
            </div>

        </div>
    </div>
    <!--Конец Блока карта-->
</#macro>

<#macro uslugi>
    <!--Начало Услуги автосервиса-->
    <div class="container shadow bg-white rounded  opacity-80 " style="margin-top: 10px;">
        <div class="row" style="padding-top: 10px;">
            <h2>Ремонт автомобилей <small class="text-muted" style="font-size: 15px;">услуги</small></h2>
            <br />
        </div>
        <div class="row" style="padding-top: 20px; padding-bottom: 20px;">
            <div class="col-12 col-md-6">
                <div class="alert alert-secondary alertservices" role="alert" onclick="window.location='/diagnostika_dvigatelja';">
                    <!--<a href="/diagnostika_dvigatelja" title="Диагностика двигателя">-->
                    <H3>Диагностика двигателя</H3>
                        <div class="col-12 desc">
                            Проверить машину провести диагностику автомобиля <small>Перейти...</small>
                        </div>
                    <!--</a>-->
                </div>
                <div class="alert alert-secondary alertservices" role="alert" onclick="window.location='/diagnostika_hodovoj';">
<#--                    <a href="/diagnostika_hodovoj" title="Диагностика ходовой">-->
                        <H3>Диагностика ходовой части автомобиля</H3>
                        <div class="col-12 desc">
                            Стук в подвеске, задняя или передняя <small>Перейти...</small>
                        </div>
<#--                    </a>-->
                </div>

                <div class="alert alert-secondary alertservices" role="alert" onclick="window.location='/kapitalnyj_remont_dvigatelja';">
<#--                    <a href="/kapitalnyj_remont_dvigatelja" title="Капитальный ремонт двигателя">-->
                        <H3>Капитальный ремонт двигателя</H3>
                        <div class="col-12 desc">
                            Ремонт машин 8 - 16 клапанов, ВАЗ, Калина, Солярис, Форд <small>Перейти...</small>
                        </div>
<#--                    </a>-->
                </div>
                <div class="alert alert-secondary alertservices" role="alert" onclick="window.location='/svarochnye_raboty';">
<#--                    <a href="/svarochnye_raboty" title="Сварочные равботы" >-->
                        <H3>Сварочные работы</H3>
                        <div class="col-12 desc">
                            Кузовной ремонт полуавтомат сваркой <small>Перейти...</small>
                        </div>
<#--                    </a>-->
                </div>
            </div>

            <div class="col-12 col-md-6">

                <div class="alert alert-secondary alertservices" role="alert" onclick="window.location='/shinomontag';">
<#--                    <a href="/shinomontag" title="Шиномонтаж" >-->
                        <H3 style="color: #ff0000;">Шиномонтаж Миасс</H3>
                        <div class="col-12 desc">
                            Шиномонтажка на Машгородке <small>Перейти...</small>
                        </div>
<#--                    </a>-->
                </div>
                <div class="alert alert-secondary alertservices" role="alert" onclick="window.location='/tehnicheskoe_obsluzhivanie';">
<#--                    <a href="/tehnicheskoe_obsluzhivanie" title="Техническое обслуживание" >-->
                        <H3>Техническое обслуживание</H3>
                        <div class="col-12 desc">
                            Услуги сервиса ремонта и обслуживания автомобиля <small>Перейти...</small>
                        </div>
<#--                    </a>-->
                </div>
                <div class="alert alert-secondary alertservices" role="alert" onclick="window.location='/diagnostika_dvigatelja';">
<#--                    <a href="/remont_hodovoj_chasti" title="Ремонт ходовой части автомобиля" >-->
                        <H3>Ремонт ходовой части</H3>
                        <div class="col-12 desc">
                            Замена подшипника, колодок, стоек, шаровой, наконечников <small>Перейти...</small>
                        </div>
<#--                    </a>-->
                </div>
                <div class="alert alert-secondary alertservices" role="alert" onclick="window.location='/zamena_zhidkosti';">
<#--                    <a href="/zamena_zhidkosti" title="Замена жидкости" >-->
                        <H3>Замена тех жидкостей</H3>
                        <div class="col-12 desc">
                            Замена масла, антифриза, тормозной жидкости <small>Перейти...</small>
                        </div>
<#--                    </a>-->
                </div>

            </div>
            <div class="col-12 col-md-12">
                <p align="justify" style="text-indent: 20px;">Специалисты
                    автосервиса&nbsp;&ndash;&nbsp;&laquo;SaveAuto74&raquo;
                    способны выполнить все эти услуги с высоким качеством. Наш автосервис укомплектован современным оборудованием
                    дилерского уровня, и позволяет
                    производить работы практически любой сложности.</p>
            </div>

        </div>
    </div>
    <!--Конец Услуги автосервиса-->
</#macro>