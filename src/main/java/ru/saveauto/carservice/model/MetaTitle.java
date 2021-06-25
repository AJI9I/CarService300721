package ru.saveauto.carservice.model;

public class MetaTitle {
    private String title;
    private String description;
    private String keyword;

    public MetaTitle() {
    }

    public MetaTitle(String title, String description, String keyword) {
        this.title = title;
        this.description = description;
        this.keyword = keyword;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getKeyword() {
        return keyword;
    }

    public void setKeyword(String keyword) {
        this.keyword = keyword;
    }
}
