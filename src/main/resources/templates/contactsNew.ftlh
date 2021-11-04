<#import "templateParts/layotPage.ftlh" as lp>
<#import "templateParts/maps.ftlh" as mp>
<#import "templateParts/messagers.ftlh" as ms>


<@lp.layotPage>

    <!--Что то из сео-->
    <div class="container shadow bg-white rounded contH1 opacity-80">
        <div class="row">
            <h1>Контакты</h1>
            <br />
        </div>
    </div>
    <!--Что то из сео-->

    <!--Оглавление статьи-->
    <div class="container shadow bg-white rounded  opacity-80">
        <div class="row">
            <h2>Телефон автосервиса <small class="text-muted" style="font-size: 15px;">Машгородок</small></h2>
            <br />
        </div>

        <div class="row" >

            <div class="col-12 col-md-12">
                <h3> Телефон: <small style="font-size: 15px; color: black;"><a title="Телефон автосервиса" href="tel:+79822719416">

                            <span class="phone" style="color: black;"> +7 982 271-94-16</span>

                        </a></small></h3>
            </div>
        </div>
    </div>
    <!--Конец Оглавление статьи-->




        <@mp.maps/>
        <@ms.messagers/>
    <noindex>
        <@mp.uslugi/>
    </noindex>
</@lp.layotPage>