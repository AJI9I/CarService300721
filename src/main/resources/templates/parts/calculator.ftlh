<#macro shincalculator>
    <div id="calc" class="grid-container">
        <section class="calculator-outer">
<#--            <div class="grid-x grid-margin-x align-bottom calculator-top">-->
                <div class="cell large-9">

                    <form class="calc-form tires" action="/tire-service/">
                        <h4>Калькулятор на шиномонтаж</h4>

                        <div class="read-more-outer"><span class="beginning">
                                        <span class="ellipsis"></span> </span><span class="end">

                        <div class="grid-x grid-margin-x align-middle">
                            <div class="cell medium-6 large-4">
                                <label class="select placeholder">
                                    <span>Тип автомобиля</span>
                                    <select name="type"
                                            data-update-select='{"diameter":{"url":"\/tire-service\/ajax","clear":["diameter"]}}'>
                                        <option value=""></option>
                                        <option value="crossover">
                                            Кроссовер
                                        </option>
                                        <option value="vnedorozhnik">
                                            Внедорожник
                                        </option>
                                        <option value="legkovoy">
                                            Легковой
                                        </option>
                                    </select>
                                </label>
                            </div>
                            <div class="cell medium-6 large-4">
                                <label class="select placeholder">
                                    <span>Диаметр колеса</span>
                                    <select name="diameter">
                                        <option value=""></option>
                                    </select>
                                </label>
                            </div>
                            <div class="cell medium-6 large-4">
                                <input type="checkbox" id="flat" name="flat" value="true"/>
                                <label for="flat">Шины Run Flat</label>
                            </div>
                            <div class="cell large-4 large-offset-8 text-center">
                                <button type="submit" class="button expanded">Рассчитать</button>
                            </div>
                        </div>
                                </span><a href="#calc" onclick="document.getElementById('calc').scrollIntoView(true);return false;" class="show-more"><span>Расчитать стоимость</span> <i class="icon-chevron-down"> </i></a></div>
                    </form>
                </div>

        </section>
    </div>
</#macro>