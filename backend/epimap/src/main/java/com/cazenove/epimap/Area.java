package com.cazenove.epimap;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.sql.Date;

@Entity
public class Area {
    @Id
    @GeneratedValue
    private String area;
    private Integer confirm;
    private Integer suspect;
    private Integer dead;
    private Integer heal;
    private Date time;

    public Integer getHeal() {
        return heal;
    }

    public Integer getDead() {
        return dead;
    }

    public Date getTime() {
        return time;
    }

    public Integer getSuspect() {
        return suspect;
    }

    public String getArea() {
        return area;
    }

    public Integer getConfirm() {
        return confirm;
    }

    public void setTime(Date time) {
        this.time = time;
    }

    public void setSuspect(Integer suspect) {
        this.suspect = suspect;
    }

    public void setHeal(Integer heal) {
        this.heal = heal;
    }

    public void setDead(Integer dead) {
        this.dead = dead;
    }

    public void setConfirm(Integer confirm) {
        this.confirm = confirm;
    }

    public void setArea(String area) {
        this.area = area;
    }
}
