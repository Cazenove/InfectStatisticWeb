package com.cazenove.province;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ProvinceController {

    @Autowired
    private ProvinceRepository provinceRepository;

    /*
       从数据库返回所有省份的名称及数据
     */
    @PostMapping(value = "/provinces")
    public List<Province> provinceList() {
        return provinceRepository.findAll();
    }
}
