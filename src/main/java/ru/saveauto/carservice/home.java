package ru.saveauto.carservice;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import ru.saveauto.carservice.model.MetaTitle;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller

public class home {

    @RequestMapping(value = "/robots.txt")
    public void robots(HttpServletRequest request, HttpServletResponse response) {
        try {
            response.getWriter().write("User-agent: *\nAllow: /\nDisallow: /assets/css\nDisallow: /assets/fonts\nDisallow: /assets/js\nSitemap: https://saveauto74.ru/sitemap.xml\n");
        } catch (IOException e) {
            //CustomLogger.info(TAG, "robots", "robots(): "+e.getMessage());
        }
    }

    //Домашняя страница
    @GetMapping("/")
    private String main(Model model){

        MetaTitle metaTitle = new MetaTitle(
                "Автосервис Миасс | SaveAuto74",
                "Автосервис в Миассе SaveAuto74 предлагает ремонт или техническое обслуживание Вашего автомобиля, доверьтесь профессионалам. Звоните ☎ +7 982 271-94-16",
                "Автосервис"
        );
        model.addAttribute("title",metaTitle);
        return "indexPage";
    }



    //Слесарный ремонт
    @GetMapping("/slesar-service")
    private String slesarService(Model model){

        MetaTitle metaTitle = new MetaTitle(
                "Слесарный ремонт автомобилей в Миассе | SaveAuto74",
                "Требуется слесарный ремонт автомобилей в миассе, доверьтесь профессионалам. Звоните ☎ +7 982 271-94-16",
                "Слесарный ремонт Миасс"
        );
        model.addAttribute("title",metaTitle);

        return "slesar";}

    //Слесарный ремонт
    @GetMapping("/contacts")
    private String contacts(Model model){

        MetaTitle metaTitle = new MetaTitle(
                "Аддрес и телефон автосервиса в Миассе | SaveAuto74",
                "Аддрес автосервиса: Миасс ГСК Южный 2а. Телефон: ☎ +7 982 271-94-16. Вы можете перйти на сайт и построит маршрут по карте до автосервиса.",
                "Контакты телефон аддрес автосервис Миасс"
        );
        model.addAttribute("title",metaTitle);

        return "contacts";}

    //Конкурс
    @GetMapping("/competition_1")
    private String competition_1(Model model){

        MetaTitle metaTitle = new MetaTitle(
                "Конкурс автосервис | SaveAuto74",
                "Автосервис в городе Миасс проводит конкурс и разыгрывает 15000",
                "Конкурс автосервис Миасс"
        );
        model.addAttribute("title",metaTitle);

        return "parts/comp_0521";}


    //Шиномонтаж
    @GetMapping("/tire-service")
    private String tireService(Model model){
        MetaTitle metaTitle = new MetaTitle(
                "Шиномонтаж Миасс | SaveAuto74",
                "Шиномонтаж в городе Миасс все работы выполняются на профессиональном оборудовании. Звоните ☎ +7 982 271-94-16",
                "Шиномонтаж"
        );
        model.addAttribute("title",metaTitle);
        return "shin";}


    @GetMapping("/tire-service/")
    private String type(
            @RequestParam Map<String, String[]> searchRequest, Model model) {
        List<ParametrShin> psh = new ArrayList<>();
        Object tpe = searchRequest.get("diameter");
        Object flat = "";
        if(searchRequest.containsKey("flat")){
            flat = "/"+searchRequest.get("flat");
        }
        String RedirectStr = tpe.toString().replace("\\","");

        //redirect:/administration/mmanageradd
        return "redirect:" + "/tire-service/" +RedirectStr+flat.toString() ;
    }

    //Гет запрос на получение типов авто и радиусов
    @GetMapping("/tire-service/{searchId}")
    private @ResponseBody List<ParametrShin> search( @PathVariable String searchId, @RequestParam Map<String, String[]> searchRequest, Model model) {

        List<ParametrShin> psh = new ArrayList<>();
        switch (searchId){
            case "ajax":
                for (String key: searchRequest.keySet()
                ) {
                    String k = key;

                    if(k.equals("slug")){
                        Object strings = searchRequest.get(k);
                        if(strings.equals("legkovoy")){

                            psh.add(new ParametrShin("legkovoy\\/vse","\u0412\u0441\u0435"));
                            psh.add(new ParametrShin("legkovoy\\/r12","R12"));
                            psh.add(new ParametrShin("legkovoy\\/r13","R13"));
                            psh.add(new ParametrShin("legkovoy\\/r14","R14")); //-250
                            psh.add(new ParametrShin("legkovoy\\/r15","R15"));
                            psh.add(new ParametrShin("legkovoy\\/r16","R16"));
                            psh.add(new ParametrShin("legkovoy\\/r17","R17"));
                            psh.add(new ParametrShin("legkovoy\\/r18","R18"));
                            psh.add(new ParametrShin("legkovoy\\/r19","R19"));
                            psh.add(new ParametrShin("legkovoy\\/r20","R20"));
                            return psh;
                        }else if(strings.equals("vnedorozhnik")){
                            psh.add(new ParametrShin("vnedorozhnik\\/vse","\u0412\u0441\u0435"));
                            return psh;
                        }else if(strings.equals("crossover")){
                            psh.add(new ParametrShin("crossover\\/vse","\u0412\u0441\u0435"));
                            psh.add(new ParametrShin("crossover\\/r16","R16")); //-100
                            psh.add(new ParametrShin("crossover\\/r17","R17"));
                            psh.add(new ParametrShin("crossover\\/r18","R18"));
                            return psh;
                        }
                    }
                }
                break;
            default:
                psh.add(new ParametrShin("legkovoy","\u0412\u0441\u0435"));
                break;
        }

        return psh;
    }

    //Расчетные значения на шиномонтаж
    @GetMapping("/tire-service/{type}/{rad}")
    private String Stoimost( @PathVariable String type, @PathVariable String rad, Model model){

        List<ModelShin> ms = GetPriceShin(type,rad);
        model.addAttribute("Price", ms);
        String typeString =  type == "legkovoy"?"Легковой":"Кроссовер";
        MetaTitle metaTitle = new MetaTitle(
                "Шиномонтаж "+typeString+ms.get(0).Rad+" | SaveAuto74",
                "Шиномонтаж "+ms.get(0).Name+" колес "+ms.get(0).Rad+". Звоните ☎ +7 982 271-94-16",
                "Шиномонтаж "+ms.get(0).Rad
        );
        model.addAttribute("title",metaTitle);

        return "calculatorTableOuter";
    }

    //Расчетные значения на шиномонтаж колес flat
    @GetMapping("/tire-service/{type}/{rad}/{flat}")
    private String Stoimost( @PathVariable String type, @PathVariable String rad, @PathVariable String flat, Model model){
        int i =0;
        List<ModelShin> ms = GetPriceShin(type,rad,flat);
        model.addAttribute("Price", ms);

        MetaTitle metaTitle = new MetaTitle(
                "Шиномонтаж RunFlat"+ms.get(0).Rad+" | SaveAuto74",
                "Шиномонтаж RunFlat"+ms.get(0).Name+" колес "+ms.get(0).Rad+". Звоните ☎ +7 982 271-94-16",
                "Шиномонтаж RunFlat"+ms.get(0).Rad
        );
        model.addAttribute("title",metaTitle);

        return "calculatorTableOuter";
    }

    //Получения прайса на шиномонтаж обычный
    private List<ModelShin> GetPriceShin(String type, String rad){
        ShinPrice shinPrice = new ShinPrice(type, rad);
        List<ModelShin> ms = shinPrice.Price;
        return ms;
    }
    //Получения прайса на шиномонтаж обычный резины flat
    private List<ModelShin> GetPriceShin(String type, String rad, String flat){
        ShinPrice shinPrice = new ShinPrice(type, rad, flat);
        List<ModelShin> ms = shinPrice.Price;
    return ms;
    }

    public class ParametrShin{
        public String value;
        public String text;

        public ParametrShin() {
        }

        public ParametrShin(String value, String text) {
            this.value = value;
            this.text = text;
        }

        public String getValue() {
            return value;
        }

        public void setValue(String value) {
            this.value = value;
        }

        public String getText() {
            return text;
        }

        public void setText(String text) {
            this.text = text;
        }
    }


    public class ShinPrice{

        private List<ModelShin> Price;

        public ShinPrice() {
        }

        public ShinPrice(String type, String rad) {
            Price prc = new Price(type);
            this.Price = new ArrayList<>();
            if(prc.price.containsKey(rad)){
                if(type.equals("vnedorozhnik")){
                    this.Price.add(new ModelShin(2000,0,0,0,"Внедорожник","Все"));
                }else{
                Integer cena = prc.price.get(rad) * 4;
                this.Price.add(new ModelShin(cena,0,0,0,getMpName(type),getMpRad(rad)));
                }
            }else if(rad.equals("vse")){
                if(type.equals("vnedorozhnik")){
                    this.Price.add(new ModelShin(2000,0,0,0,"Внедорожник","Все"));
                }else{
                    for (String key: prc.price.keySet()
                    ) {
                        Integer cena = prc.price.get(key) * 4;
                        this.Price.add(new ModelShin(cena,0,0,0,getMpName(type),getMpRad(key)));
                    }
                }

            }
        }

        public ShinPrice(String type, String rad, String flat) {
            Price prc = new Price(type);
            this.Price = new ArrayList<>();
            Iterable<ModelShin> modShin = new ArrayList<>();
            if(prc.price.containsKey(rad)){
                if(type.equals("vnedorozhnik")){
                    this.Price.add(new ModelShin(2320,0,0,0,"Внедорожник","Все"));
                }else{
                Integer flc = 80 * 4; // runflat
                Integer cena = prc.price.get(rad) * 4 +flc;
                this.Price.add(new ModelShin(cena,0,0,0,getMpName(type),getMpRad(rad)));
                }
            }else if(rad.equals("vse")){
                if(type.equals("vnedorozhnik")){
                    this.Price.add(new ModelShin(2320,0,0,0,"Внедорожник","Все"));
                }else{
                for (String key: prc.price.keySet()
                ) {
                    Integer flc = 80 * 4;
                    Integer cena = prc.price.get(rad) * 4 +flc;
                    this.Price.add(new ModelShin(cena,0,0,0,getMpName(type),getMpRad(key)));
                }
                }
            }
        }

        private  Map<String, String> mpName;

        public String getMpName(String Key) {
            mpName = new HashMap<>();
            mpName.put("legkovoy", "Легковой");
            mpName.put("vnedorozhnik", "Внедорожник");
            mpName.put("crossover", "Кроссовер");
            return mpName.get(Key);
        }

        private Map<String, String> mpRad;

        public String getMpRad(String Key) {
            mpRad = new HashMap<>();
            mpRad.put("r12", "R12");
            mpRad.put("r13", "R13");
            mpRad.put("r14", "R14");
            mpRad.put("r15", "R15");
            mpRad.put("r16", "R16");
            mpRad.put("r17", "R17");
            mpRad.put("r18", "R18");
            mpRad.put("r19", "R19");
            mpRad.put("r20", "R20");

            return mpRad.get(Key);
        }

        public ShinPrice(List<ModelShin> price) {
            Price = price;
        }

        public List<ModelShin> getPrice() {
            return Price;
        }

        public void setPrice(List<ModelShin> price) {
            Price = price;
        }
    }

    public class ModelShin{
        private String Name;
        private String Rad;
        private Integer Kolesa;
        private Integer Germetik;
        private Integer Ventil;
        private Integer Kamera;

        public ModelShin() {
        }

        public ModelShin(Integer kolesa, Integer germetik, Integer ventil, Integer kamera, String name, String rad) {
            Kolesa = kolesa;
            Germetik = germetik;
            Ventil = ventil;
            Kamera = kamera;
            Name = name;
            Rad = rad;
        }

        public String getName() {
            return Name;
        }

        public void setName(String name) {
            Name = name;
        }

        public String getRad() {
            return Rad;
        }

        public void setRad(String rad) {
            Rad = rad;
        }

        public Integer getKolesa() {
            return Kolesa;
        }

        public void setKolesa(Integer kolesa) {
            Kolesa = kolesa;
        }

        public Integer getGermetik() {
            return Germetik;
        }

        public void setGermetik(Integer germetik) {
            Germetik = germetik;
        }

        public Integer getVentil() {
            return Ventil;
        }

        public void setVentil(Integer ventil) {
            Ventil = ventil;
        }

        public Integer getKamera() {
            return Kamera;
        }

        public void setKamera(Integer kamera) {
            Kamera = kamera;
        }
    }

    public class Price{

        private Map<String, Integer> price;

        public Price(String type) {
            if(type.equals("legkovoy")){

                price = new HashMap<>();
                price.put("r12",200);
                price.put("r13",225);
                price.put("r14",250);
                price.put("r15",275);
                price.put("r16",300);
                price.put("r17",325);
                price.put("r18",425);
                price.put("r19",450);
                price.put("r20",500);

            }else if(type.equals("vnedorozhnik")){
                price = new HashMap<>();
                price.put("vse",500);

            }else if(type.equals("crossover")){
                price = new HashMap<>();
                price.put("r16",350);
                price.put("r17",375);
                price.put("r18",425);
            }
        }
    }
}
