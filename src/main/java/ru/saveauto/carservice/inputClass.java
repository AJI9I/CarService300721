package ru.saveauto.carservice;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import ru.saveauto.carservice.model.MetaTitle;

@Controller
public class inputClass {


    @GetMapping("/")
    private String main(Model model){

        MetaTitle metaTitle = new MetaTitle(
                "Автосервис | SaveAuto74",
                "Автосервис в Миассе SaveAuto74 предлагает ремонт или техническое обслуживание Вашего автомобиля, доверьтесь профессионалам. Звоните ☎ +7 982 271-94-16",
                "Автосервис"
        );
        model.addAttribute("title",metaTitle);
        return "index";
    }

    @GetMapping("/diagnostika_dvigatelja")
    private String diagnostika_dvigatelja(Model model){

        MetaTitle metaTitle = new MetaTitle(
                "Диагностика двигателя",
                "Диагностика двигателя. Звоните ☎ +7 982 271-94-16",
                "Диагностика двигателя"
        );
        model.addAttribute("title",metaTitle);
        return "Diagnostika_dvigatelja";
    }

    @GetMapping("/diagnostika_hodovoj")
    private String diagnostika_hodovoj(Model model){

        MetaTitle metaTitle = new MetaTitle(
                "Диагностика ходовой",
                "Диагностика ходовой части автомобиля. Звоните ☎ +7 982 271-94-16",
                "Диагностика ходовой"
        );
        model.addAttribute("title",metaTitle);
        return "Diagnostika_hodovoj";
    }

    @GetMapping("/kapitalnyj_remont_dvigatelja")
    private String kapitalnyj_remont_dvigatelja(Model model){

        MetaTitle metaTitle = new MetaTitle(
                "Капитальный ремонт двигателя",
                "Капитальный ремонт двигателя автомобиля. Звоните ☎ +7 982 271-94-16",
                "Капитальный ремонт двигателя"
        );
        model.addAttribute("title",metaTitle);
        return "Kapitalnyj_remont_dvigatelja";
    }

    @GetMapping("/remont_hodovoj_chasti")
    private String remont_hodovoj_chasti(Model model){

        MetaTitle metaTitle = new MetaTitle(
                "Ремонт ходовой части",
                "Ремонт ходовой части автомобиля, подвески. Звоните ☎ +7 982 271-94-16",
                "Капитальный ремонт двигателя"
        );
        model.addAttribute("title",metaTitle);
        return "Remont_hodovoj_chasti";
    }

    @GetMapping("/svarochnye_raboty")
    private String svarochnye_raboty(Model model){

        MetaTitle metaTitle = new MetaTitle(
                "Сварочные работы",
                "Сварочные работы. Заварить глушитель. Вырезать катализатор. Звоните ☎ +7 982 271-94-16",
                "Сварочные работы. Заварить глушитель. Вырезать катализатор."
        );
        model.addAttribute("title",metaTitle);
        return "Svarochnye_raboty";
    }

    @GetMapping("/tehnicheskoe_obsluzhivanie")
    private String tehnicheskoe_obsluzhivanie(Model model){

        MetaTitle metaTitle = new MetaTitle(
                "Техническое обслуживание",
                "Техническое обслуживание автомобилей. Звоните ☎ +7 982 271-94-16",
                "Техническое обслуживание"
        );
        model.addAttribute("title",metaTitle);
        return "Tehnicheskoe_obsluzhivanie";
    }

    @GetMapping("/zamena_zhidkosti")
    private String zamena_zhidkosti(Model model){

        MetaTitle metaTitle = new MetaTitle(
                "Замена жидкости",
                "Замена тормозной, охлаждающей, ГУР жидкостей. Звоните ☎ +7 982 271-94-16",
                "Замена жидкости, замена тормозной жидкости, замена охладжающей жидкости"
        );
        model.addAttribute("title",metaTitle);
        return "Zamena_zhidkosti";
    }

    @GetMapping("/shinomontag")
    private String shinomontag(Model model){

        MetaTitle metaTitle = new MetaTitle(
                "Шиномонтаж  Миасс | SaveAuto74 | Шиномонтажка",
                "Шиномонтаж Шиномонтажка в городе Миасс все работы выполняются на профессиональном оборудовании. Звоните ☎ +7 982 271-94-16",
                "Шиномонтаж"
        );
        model.addAttribute("title",metaTitle);
        return "shinomontag";
    }


}
