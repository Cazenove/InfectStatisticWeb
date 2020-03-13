package com.cazenove.province;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.sql.Date;

@Entity
public class Province {

    private String area;
    @Id
    @GeneratedValue
    private String city;
    private Integer confirm;
    private Integer suspect;
    private Integer dead;
    private Integer heal;
    private Date time;

    public Province(){
    }

    public String getCity() {
        return city;
    }

    public Integer getConfirm() {
        return confirm;
    }

    public String getArea() {
        return area;
    }

    public Integer getSuspect() {
        return suspect;
    }

    public Date getTime() {
        return time;
    }

    public Integer getDead() {
        return dead;
    }

    public Integer getHeal() {
        return heal;
    }

    public void setArea(String area) {
        this.area = area;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public void setConfirm(Integer confirm) {
        this.confirm = confirm;
    }

    public void setDead(Integer dead) {
        this.dead = dead;
    }

    public void setHeal(Integer heal) {
        this.heal = heal;
    }

    public void setSuspect(Integer suspect) {
        this.suspect = suspect;
    }

    public void setTime(Date time) {
        this.time = time;
    }
}
