<#macro header>
    <div class="container">
        <div class="bg"></div>
        <div class="bg bg2"></div>
        <div class="bg bg3"></div>
    </div>

    <div class="container opacity-75" style="margin-bottom: 70px;" id="HeaderOpacity">
        <header id="header" class="fixed-top">
            <a href="/" class="navbar-navbar-brand">
                <img src="img/LogoNew.webp" style="height: 60px; " alt="SaveAuto74" srcset="" id="Logotip" />
            </a>
        </header>
    </div>
</#macro>

<#macro footer>
    <div class="container" id="footercont">
        <footer id="footer" class="fixed-bottom">
            <nav class="navbar navbar-expand-lg navbar-dark" style="background-color:black">

                <div class="row col-12" align="center">
                    <div class="col-12 col-md-6" style="box-sizing: border-box;">
                        <a title="Телефон автосервиса" href="tel:+79822719416">
                            <i class="fas fa-phone  fa-2x arrow"> </i>
                            <span class="phone" id="phonefooter"> Записаться на ремонт: <br>+7&nbsp;982&nbsp;271-94-16</span>
                            <!-- <i class="fa fa-chevron-right fa-2x arrow"> </i>-->
                        </a>
                    </div>


                    <div class="col-12  col-md-6 d-flex justify-content-end">
                        <!--
                          <button class="navbar-toggler d-flex end-0" type="button" data-bs-toggle="collapse" data-bs-target="#navContent"
                            aria-controls="navContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                          </button>
                        -->
                        <!-- <div class="collapse navbar-collapse" id="navContent"> -->
                        <div class="col-12" align="center" style="padding-top: 9px; ">
                            <ul class="nav nav-pills nav-fill meauto" >
                                <li class="nav-item   dropup">
                                    <a href="#" class="nav-link btn btn-outline-secondary dropdown-toggle" style="color: white;" id="navDrop" role="button"
                                       data-bs-toggle="dropdown" aria-expanded="false">Услуги
                                    </a>
                                    <ul class="dropdown-menu" aria-labelledby="navDrop">
                                        <li>
                                            <a href="/diagnostika_dvigatelja" title="Диагностика двигателя" class="dropdown-item">Диагностика двигателя</a>
                                            <a href="/diagnostika_hodovoj" title="Диагностика ходовой" class="dropdown-item">Диагностика ходовой</a>
                                            <a href="/kapitalnyj_remont_dvigatelja" title="Капитальный ремонт двигателя" class="dropdown-item">Капитальный ремонт двигателя</a>
                                            <a href="/remont_hodovoj_chasti" title="Ремонт ходовой части автомобиля" class="dropdown-item">Ремонт ходовой части</a>
                                            <a href="/svarochnye_raboty" title="Сварочные равботы" class="dropdown-item">Сварочные работы</a>
                                            <a href="/tehnicheskoe_obsluzhivanie" title="Техническое обслуживание" class="dropdown-item">Техническое обслуживание</a>
                                            <a href="/zamena_zhidkosti" title="Замена жидкости" class="dropdown-item">Замена жидкости</a>
                                            <a href="/shinomontag" title="Шиномонтаж" class="dropdown-item" style="color: red;">Шиномонтаж</a>
                                            <hr class="dropdown-divider">
                                            <a href="/contacts" class="dropdown-item">Контакты</a>
                                        </li>
                                    </ul>
                                </li>

                                <li class="nav-item">
                                    <a href="/" title="Автосервис" class="nav-link btn btn-outline-secondary" style="color: white;">Главная страница<i
                                                class="fa fa-caret-right faed" aria-hidden="true"></i>
                                    </a>
                                </li>

                            </ul>
                        </div>
                        <!-- </div> -->
                    </div>
                </div>
            </nav>
        </footer>
    </div>
</#macro>

