<#import  "parts/layotPage.ftlh" as i>
<#import  "parts/advantages.ftlh" as a>
<@i.page>



<div class="grid-container">
    <section class="calculator-outer">
<#--        <div class="grid-x grid-margin-x align-bottom calculator-top">-->
<#--            <div class="cell large-9">-->
<#--                <h1>Шиномонтаж  легковых автомобилей R13</h1>-->
<#--                <form class="calc-form tires" action="/tire-service">-->
<#--                    <div class="grid-x grid-margin-x align-middle">-->
<#--                        <div class="cell medium-6 large-4">-->
<#--                            <label class="select">-->
<#--                                <span>Тип автомобиля</span>-->
<#--                                <select name="type" data-update-select='{"diameter":{"url":"\/tire-service\/ajax","clear":["diameter"]}}'>-->
<#--                                    <option value=""></option>-->
<#--                                    <option value="vnedorozhnik">-->
<#--                                        Внедорожник-->
<#--                                    </option>-->
<#--                                    <option value="legkovoy" selected>-->
<#--                                        Легковой-->
<#--                                    </option>-->
<#--                                </select>-->
<#--                            </label>-->
<#--                        </div>-->
<#--                        <div class="cell medium-6 large-4">-->
<#--                            <label class="select">-->
<#--                                <span>Диаметр колеса</span>-->
<#--                                <select name="diameter">-->
<#--                                    <option value=""></option>-->
<#--                                    :-->
<#--                                    <option value="legkovoy">Все</option>-->
<#--                                    <option value="legkovoy/r13" selected>-->
<#--                                        R13-->
<#--                                    </option>-->
<#--                                    <option value="legkovoy/r14">-->
<#--                                        R14-->
<#--                                    </option>-->
<#--                                    <option value="legkovoy/r15">-->
<#--                                        R15-->
<#--                                    </option>-->
<#--                                    <option value="legkovoy/r16">-->
<#--                                        R16-->
<#--                                    </option>-->
<#--                                    <option value="legkovoy/r17">-->
<#--                                        R17-->
<#--                                    </option>-->
<#--                                    <option value="legkovoy/r18">-->
<#--                                        R18-->
<#--                                    </option>-->
<#--                                    <option value="legkovoy/r19">-->
<#--                                        R19-->
<#--                                    </option>-->
<#--                                    <option value="legkovoy/r20">-->
<#--                                        R20-->
<#--                                    </option>-->
<#--                                </select>-->
<#--                            </label>-->
<#--                        </div>-->
<#--                        <div class="cell medium-6 large-4">-->
<#--                            <input type="checkbox" id="flat" name="flat" value="true"/>-->
<#--                            <label for="flat">Шины Run Flat</label>-->
<#--                        </div>-->
<#--                        <div class="cell large-4 large-offset-8 text-center">-->
<#--                            <button type="submit" class="button expanded">Рассчитать</button>-->
<#--                        </div>-->
<#--                    </div>-->
<#--                </form>                -->
<#--            </div>-->
<#--            -->
<#--            <div class="cell large-3 show-for-large">-->
<#--                <div class="promo-slider owl-carousel">-->
<#--                    <div><div class="promo-block">-->
<#--                            <div>-->
<#--                                <div class="inner"><span class="red">Скидка 15%</span><br/>новым клиентам</div>-->
<#--                                <img srcset="/assets/img/promo/x1.jpg.pagespeed.ic.DYv1dmsJ63.webp 287w, /assets/img/promo/x1,402x.jpg.pagespeed.ic.tIWb_moqX4.webp 574w" alt="" aria-hidden="true"/></div>-->
<#--                        </div></div>-->
<#--                    <div><div class="promo-block">-->
<#--                            <div>-->
<#--                                <div class="inner"><span class="red">Гарантия</span> на авто<br/>сохраняется</div>-->
<#--                                <img srcset="/assets/img/promo/x2.jpg.pagespeed.ic.k0lGSpzVKj.webp 287w, /assets/img/promo/x2,402x.jpg.pagespeed.ic.CPEZZ472og.webp 574w" alt="" aria-hidden="true"/></div>-->
<#--                        </div></div>-->
<#--                    <div><div class="promo-block">-->
<#--                            <div>-->
<#--                                <div class="inner"><span class="red">Сертифицированный </span><br/>автосервис</div>-->
<#--                                <img srcset="/assets/img/promo/x3.jpg.pagespeed.ic.F7Z287fjs9.webp 287w, /assets/img/promo/x3,402x.jpg.pagespeed.ic.V5bkzhCSGw.webp 574w" alt="" aria-hidden="true"/></div>-->
<#--                        </div></div>-->
<#--                    <div><div class="promo-block">-->
<#--                            <div>-->
<#--                                <div class="inner"><span class="red">Отметка</span> в сервисную<br/>книжку</div>-->
<#--                                <img srcset="/assets/img/promo/x4.jpg.pagespeed.ic.U2kmOTUfWf.webp 287w, /assets/img/promo/x4,402x.jpg.pagespeed.ic.GeIGlAC2dm.webp 574w" alt="" aria-hidden="true"/></div>-->
<#--                        </div></div>-->
<#--                    <div><div class="promo-block">-->
<#--                            <div>-->
<#--                                <div class="inner"><span class="red">Гарантия</span> на все<br/>работы и запчасти</div>-->
<#--                                <img srcset="/assets/img/promo/x2.jpg.pagespeed.ic.k0lGSpzVKj.webp 287w, /assets/img/promo/x2,402x.jpg.pagespeed.ic.CPEZZ472og.webp 574w" alt="" aria-hidden="true"/></div>-->
<#--                        </div></div>-->
<#--                    <div><div class="promo-block">-->
<#--                            <div>-->
<#--                                <div class="inner"><span class="red">Доступ</span> в ремонтную<br/>зону автосервиса</div>-->
<#--                                <img srcset="/assets/img/promo/x5.jpg.pagespeed.ic.RyVGFuP45J.webp 287w, /assets/img/promo/x5,402x.jpg.pagespeed.ic.wDtkkKFn9D.webp 574w" alt="" aria-hidden="true"/></div>-->
<#--                        </div></div>-->
<#--                    <div><div class="promo-block">-->
<#--                            <div>-->
<#--                                <div class="inner"><span class="red">Запчасти</span> в наличии</div>-->
<#--                                <img srcset="/assets/img/promo/x6.jpg.pagespeed.ic.5sHv_shE_y.webp 287w, /assets/img/promo/x6,402x.jpg.pagespeed.ic.KMX90Z2m0y.webp 574w" alt="" aria-hidden="true"/></div>-->
<#--                        </div></div>-->
<#--                    <div><div class="promo-block">-->
<#--                            <div>-->
<#--                                <div class="inner"><span class="red">Свой склад</span><br/>запчастей</div>-->
<#--                                <img srcset="/assets/img/promo/x7.jpg.pagespeed.ic.SzkSvSRZBB.webp 287w, /assets/img/promo/x7,402x.jpg.pagespeed.ic.-D5OSCSdnv.webp 574w" alt="" aria-hidden="true"/></div>-->
<#--                        </div></div>-->
<#--                </div>                </div>-->
<#--        </div>-->

        <form class="grid-x grid-margin-x calculator-table-outer" action="/order/">
            <input type="hidden" name="from" value="">
            <input type="hidden" name="tires" value="">
            <div class="cell large-9">
                <div class="calculator-table specification-calculator" id="calculator-table-outer">
<#--                    <div class="block toggled">-->
<#--                        <div class="block-heading">-->
<#--                            <div class="name">-->
<#--                                <i class="icon-chevron-down"> </i>-->
<#--                                Сезонное хранение колес R13-->
<#--                            </div>-->
<#--                            <div class="sum-new">-->
<#--                            </div>-->
<#--                            <div class="check">-->
<#--                                <input id="c1" data-toggle-all type="checkbox">-->
<#--                                <label title="Отметить\снять все" for="c1">&nbsp;</label>-->
<#--                            </div>-->
<#--                        </div>-->
<#--                        <div class="inner">-->
<#--                            <div class="sub-heading">Работы</div>-->
<#--                            <input type="hidden" name="19d78c80-61d7-11ea-8118-0050569b5454[separator-1]" value="Работы">-->
<#--                            <div class="block-section">-->
<#--                                <div class="row work">-->
<#--                                    <div class="row-inner">-->
<#--                                        <div class="name">-->
<#--                                            <label for="c2" class="hoverable">-->
<#--                                                Сезонное хранение колес R13-->
<#--                                            </label>-->
<#--                                        </div>-->
<#--                                        <div class="pusher"> </div>-->
<#--                                        <div class="sum-new">-->
<#--                                            <span>2 821 ₽</span>-->
<#--                                        </div>-->
<#--                                        <div class="check">-->
<#--                                            <input name="19d78c80-61d7-11ea-8118-0050569b5454[34ffe427-61cc-11ea-8118-0050569b5454]" data-norm="2.170" data-sum="2821" value="1" id="c2" type="checkbox">-->
<#--                                            <label for="c2">&nbsp;</label>-->
<#--                                        </div>-->
<#--                                    </div>-->
<#--                                </div>                                                                                                    </div>-->
<#--                        </div>-->
<#--                    </div>-->

<#--                    Начало-->
                    <#list Price as p>

                    <div class="block toggled">
                        <div class="block-heading">
                            <div class="name">
                                <i class="icon-chevron-down"> </i>
                                Шиномонтаж комплекс ${p.name} ${p.rad}
                            </div>
                            <div >
                            </div>
                            <div class="check">
<#--                                <input id="c3" data-toggle-all type="checkbox">-->
<#--                                <label title="Отметить\снять все" for="c3">&nbsp;</label>-->
                            </div>
                        </div>
                        <div class="inner">
                            <div class="sub-heading">Работы</div>
                            <input type="hidden" name="064ac3a5-61d7-11ea-8118-0050569b5454[separator-3]" value="Работы">
                            <div class="block-section">
                                <div class="row work">
                                    <div class="row-inner">
                                        <div class="name">
                                            <label for="c4" class="hoverable">
                                                Шиномонтаж. Комплекс.
                                            </label>
                                        </div>
                                        <div class="pusher"> </div>
                                        <div class="sum-new">
                                            <span>${p.kolesa} ₽</span>
                                        </div>
                                        <div class="check">
<#--                                            <input name="064ac3a5-61d7-11ea-8118-0050569b5454[4598d13c-61cc-11ea-8118-0050569b5454]" data-norm="1.220" data-sum="${p.kolesa}" value="1" id="c4" type="checkbox">-->
<#--                                            <label for="c4">&nbsp;</label>-->
                                        </div>
                                    </div>
                                </div>                                                                                                    </div>
                            <div class="sub-heading">Материалы</div>
                            <input type="hidden" name="064ac3a5-61d7-11ea-8118-0050569b5454[separator-4]" value="Материалы">
                            <div class="block-section">
                                <div class="row good">
                                    <div class="row-inner">
                                        <div class="name">
                                            <label for="c5">
                                                Пакеты для колес
                                            </label>
                                        </div>
                                        <div class="pusher"> </div>
                                        <div class="count">
                                            4 шт
                                        </div>
                                        <div class="sum-new">
                                            <span class="out-of-stock">нет в наличии</span>
                                        </div>
<#--                                        <div class="check">-->
<#--                                            <input name="064ac3a5-61d7-11ea-8118-0050569b5454[4776d6a9-603d-11ea-8118-0050569b5454]" data-sum="" value="4" id="c5" disabled="disabled" type="checkbox">-->
<#--                                            <label for="c5">&nbsp;</label>-->
<#--                                        </div>-->
                                    </div>
                                </div>                                                                                                    </div>
                        </div>
                    </div>
<#--                        <#else >-->
<#--                        Оказия!Оказия!Оказия!Оказия!Оказия!-->
                        </#list>
<#--                    Конец-->
                </div>

                <div class="calculator-actions">
<#--                    <a href="#" data-pick-originals>Выбрать оригиналы</a>-->
<#--                    <a href="#" data-pick-cheap>Выбрать как дешевле</a>-->
<#--                    <a href="#" data-print>Распечатать</a>-->
                </div>

            </div>
            <div class="cell large-3">
<#--                <div class="calculator-total extra-margin">-->
<#--                    <div class="new-client-outer">-->
<#--&lt;#&ndash;                        <label data-tooltip title="Авторизуйтесь или зарегистрируйтесь, если вы уже являетесь нашим клиентом.">&ndash;&gt;-->
<#--&lt;#&ndash;                            <i class="icon-check"> </i>&ndash;&gt;-->
<#--&lt;#&ndash;                            Я новый клиент&ndash;&gt;-->
<#--&lt;#&ndash;                        </label>&ndash;&gt;-->
<#--                        <input id="new-client" name="new-client" value="true" checked readonly data-is-new-client type="checkbox">-->
<#--                    </div>-->
<#--                    <div class="subtotal-outer">-->
<#--                        <div class="sub-total">-->
<#--                            <div class="type">-->
<#--                                Работы-->
<#--                            </div>-->
<#--                            <div class="sum" data-works-sum>-->

<#--                            </div>-->
<#--                        </div>-->
<#--                        <div class="sub-total">-->
<#--                            <div class="type">-->
<#--                                Материалы-->
<#--                            </div>-->
<#--                            <div class="sum" data-goods-sum>-->

<#--                            </div>-->
<#--                        </div>-->
<#--                        <div class="first-time-discount sub-total hide">-->
<#--                            <div class="type">-->
<#--                                Новый клиент <i class="icon-help" data-tooltip title="Скидка 15% на работы в первом заказе"> </i>-->
<#--                            </div>-->
<#--                            <div class="sum" data-first-time-discount="15.00">-->
<#--                            </div>-->
<#--                        </div>-->
<#--                    </div>-->
<#--                    <div class="total">-->
<#--                        <div class="type">-->
<#--                            Итого-->
<#--                        </div>-->
<#--                        <div class="sum" data-total-sum>-->

<#--                        </div>-->
<#--                    </div>-->
<#--                    <div class="sub-total norms-outer">-->
<#--                        <div class="type">-->
<#--                            Время выполнения-->
<#--                        </div>-->
<#--                        <div class="sum" data-norm-sum>-->

<#--                        </div>-->
<#--                    </div>-->
<#--&lt;#&ndash;                    <div class="submit-outer">&ndash;&gt;-->
<#--&lt;#&ndash;                        <button type="submit" disabled class="button expanded">Записаться</button>&ndash;&gt;-->
<#--&lt;#&ndash;                    </div>&ndash;&gt;-->
<#--&lt;#&ndash;                    <div class="already"><a href="#" data-open="login">Авторизуйтесь</a>, чтобы увидеть цены для постоянных клиентов.</div>&ndash;&gt;-->
<#--                </div>-->
            </div>
        </form>
    </section>

    Дополнительные услуги:
    <ul>
        <li> Герметизация бортов легковые автомобили 40 р колесо.</li>
        <li> Герметизация бортов внедорожники 60 р колесо.</li>
        <li> Установка венитля 30 р колесо.</li>
        <li> Ремонт латкой камера 200 р.</li>
        <li> Ремонт латкой покрышки 250 р.</li>
        <li> Снятие секретного болта без переходника от 800 р за штуку (в зависимости от сложности).</li>
        <li> Работа с камерой 50 р штука.</li>
    </ul>
    <@a.advantages/>
</div>

</@i.page>