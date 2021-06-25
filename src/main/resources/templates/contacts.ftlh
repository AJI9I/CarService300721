<#import  "parts/layotPage.ftlh" as i>
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
                <a itemprop="item" href="/contacts">
                    <span itemprop="name">Контакты</span>
                </a>
                <meta itemprop="position" content="2">
            </li>
        </ul>
    </div>

    <@contact.contactblock/>
</@i.page>
