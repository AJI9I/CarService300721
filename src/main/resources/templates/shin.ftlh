<#import  "parts/layotPage.ftlh" as i>

<#import "parts/calculator.ftlh" as calc>
<#import "parts/contactsblock.ftlh" as contact>


<@i.page>
    <div class="grid-container">
        <ul class="breadcrumbs" itemscope="" itemtype="http://schema.org/BreadcrumbList">
            <li itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem">
                <a itemprop="item" href="https://saveauto74.ru">
                    <span itemprop="name">Автосервис</span></a>
                <meta itemprop="position" content="1">
            </li>
            <li itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem">
                <a itemprop="item" href="/tire-service">
                    <span itemprop="name">Шиномонтаж</span>
                </a>
                <meta itemprop="position" content="2">
            </li>
        </ul>
    </div>

    <@calc.shincalculator/>

    <div class="grid-container">
        <main class="calculator-text">
            <div class="grid-x grid-margin-x">
<#--                <div class="cell large-9">-->
                    <h1>Шиномонтаж в Миассе</h1>
                <div class="grid-x grid-margin-x">
                    <div class="cell large-6">
                    <p align="justify" style="text-indent: 20px;"><span style="font-weight: 400;">Одна из наиболее востребованных услуг <a href="https://saveauto74.ru/">автосервиса <strong>SaveAuto74</strong></a> &ndash; шиномонтаж. Сейчас им занимаются многие сервисы, в том числе небольшие мастерские вдоль дорог, но на профессиональном уровне выполнить его готовы далеко не все. Основная причина &ndash; низкая квалификация персонала и отсутствие специализированного инструмента. <strong>SaveAuto74</strong> придерживается совершенно иного принципа. У нас: мастера &ndash; квалифицированные и опытные специалисты, работа ведется на профессиональных станках.</span></p>
                    <h2>Шиномонтаж: что он включает в себя?</h2>
                    <p align="justify" style="text-indent: 20px;"><span style="font-weight: 400;">Некоторые водители полагают, что шиномонтаж требуется только во время сезонной смены резины. На деле, ситуация иная. Это понятие включает целый комплекс услуг, выполняющихся специалистами, в том числе:</span></p>

                        <ul>
                        <li style="font-weight: 400;"><span style="font-weight: 400;">Накачка шин в полном соответствии с нормативными требованиями по давлению.</span></li>
<#--                        <li style="font-weight: 400;"><span style="font-weight: 400;">Восстановление, устранение проколов и боковых порезов путем вулканизации, использования специальных заплат и герметизирующих составов.</span></li>-->
                        <li style="font-weight: 400;"><span style="font-weight: 400;">Снятие и установка покрышек на диск.</span></li>
                        <li style="font-weight: 400;"><span style="font-weight: 400;">Балансировка вновь установленных колес на компьютерном стенде.</span></li>
                    </ul>

                    </div>
                    <div class="cell large-6">
                        <#--                    <a href="https://tehnocars.ru/offers/zamena-masla-v-dvigatele-besplatno" class="offer-in-list">-->
                        <img class="image lazyload" data-srcset="/images/xlarge_shin.webp 1200w, /images/xmedium_shin.webp 600w" alt="Шиномонтаж в Миассе">
                        <#--                        <div class="inner">-->
                        <#--                            <div class="name">-->
                        <#--                                Замена масла в двигателе бесплатно-->
                        <#--                            </div>-->
                        <#--                            <div class="date">-->
                        <#--                                <i class="icon-clock"></i>-->
                        <#--                                до 31 декабря-->
                        <#--                            </div>-->
                        <#--                        </div>-->
                        <#--                    </a>-->
                    </div>
                </div>


                    <h2>Когда необходимо обратиться в шиномонтаж?</h2>
                    <p align="justify" style="text-indent: 20px;"><span style="font-weight: 400;">Основные причины &ndash; это сезонная смена резины и визуальная фиксация повреждений, порезов или проколов. Водителю необходимо постоянно контролировать состояние покрышек. Неравномерный износ, к примеру, свидетельствует о том, что вес машины распределен неравномерно, требуется срочная балансировка. Эксплуатация транспортного средства нежелательна, высок риск появления других проблем.</span></p>
                    <p align="justify" style="text-indent: 20px;"><span style="font-weight: 400;">На необходимость балансировки также указывают вибрации, посторонние шумы, сложности с управлением автомобиля, повышение топливного расхода.</span></p>
                    <h2>Приемущества нашего шиномонтажа</h2>
                    <p align="justify" style="text-indent: 20px;"><span style="font-weight: 400;"><a href="https://saveauto74.ru/">Автосервис <strong>SaveAuto74</strong></a> использует лучшее оборудование для шиномонтажа. Повреждение дисков и покрышек при установке полностью исключено. Специалисты работают не просто качественно, но максимально быстро, так что долго обходиться без своего авто не придется!</span></p>
<#--                </div>-->
            </div>
        </main>

    </div>

    <div class="grid-container">
    </div>

<#--    <div class="your-question">-->
<#--        <div class="grid-container">-->
<#--            <div class="grid-x grid-margin-x">-->
<#--                <div class="cell large-9">-->
<#--                    <form data-ajax-form data-action="/question/send">-->
<#--                        <div class="form ask-question">-->
<#--                            <div class="h1">Задайте свой вопрос</div>-->
<#--                            <input type="hidden" value="9678e4b6d4f257c4f2537246e2555310" name="validation"/>                        <input type="hidden" name="_token" value="8tL3bsUVbWtn9kBMTi1pVGXTT8gyer9HE4pwA3CQ">                        <input type="hidden" name="url" value="/tire-service">-->
<#--                            <input type="hidden" name="subject" value="Калькулятор шиномонтажа ">-->
<#--                            <div class="grid-x grid-margin-x align-right">-->
<#--                                <div class="cell medium-4">-->
<#--                                    <label>-->
<#--                                        <input type="text" placeholder="Ваше имя *" name="name" value="" required />-->
<#--                                    </label>-->
<#--                                </div>-->
<#--                                <div class="cell medium-4">-->
<#--                                    <label>-->
<#--                                        <input type="email" placeholder="E-mail" name="email" value=""/>-->
<#--                                    </label>-->
<#--                                </div>-->
<#--                                <div class="cell medium-4">-->
<#--                                    <label>-->
<#--                                        <input type="text" placeholder="Телефон *" pattern=".{18}" value="" name="phone" data-phone-mask required />-->
<#--                                    </label>-->
<#--                                </div>-->
<#--                                <div class="cell">-->
<#--                                    <label>-->
<#--                                        <textarea name="content" placeholder="Ваш вопрос *" required></textarea>-->
<#--                                    </label>-->
<#--                                </div>-->
<#--                                <div class="cell medium-shrink">-->
<#--                                    <div class="form-submit">-->
<#--                                        <div class="grid-x align-middle ">-->
<#--                                            <div class="cell medium-6 personal-data-note">-->
<#--                                                Отправляя форму, вы соглашаетесь с <a href="/privacy" target="_blank">политикой</a><br/> обработки персональных данных-->
<#--                                            </div>-->
<#--                                            <div class="cell medium-6">-->
<#--                                                <button type="submit" class="button submit expanded">Отправить</button>-->
<#--                                            </div>-->
<#--                                        </div>-->
<#--                                    </div>-->
<#--                                </div>-->
<#--                            </div>-->
<#--                        </div>-->
<#--                        <div class="success">-->
<#--                            <div>-->
<#--                                <div class="grid-x grid-margin-x align-middle">-->
<#--                                    <div class="cell">-->
<#--                                        <img src="/assets/img/misc/success.svg" alt="Ok" data-pagespeed-url-hash="1027461340" onload="pagespeed.CriticalImages.checkImageForCriticality(this);"/>-->
<#--                                        <div class="success-heading">Спасибо за вопрос</div>-->
<#--                                        <div class="success-note">-->
<#--                                            Мы ответим вам<br/> в ближайшее время-->
<#--                                        </div>-->
<#--                                    </div>-->
<#--                                </div>-->
<#--                            </div>-->
<#--                        </div>-->
<#--                    </form>-->


<#--                </div>-->
<#--            </div>-->
<#--        </div>-->
<#--    </div>-->
    <!--noindex-->
    <@contact.contactblock/>
    <!--/noindex-->
</@i.page>