package com.cazenove.epimap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class EpimapController {

    @Autowired
    private ProvinceRepository provinceRepository;

    @Autowired
    private AreaRepository areaRepository;

    @Autowired
    private ReturnJsonRepository returnJsonRepository;

    /*
       从数据库返回所有省份的名称及数据
     */
    @PostMapping(value = "/provinces")
    public List<Province> provincesList() { return provinceRepository.findAll(); }

    @GetMapping(value = "/province/{area}")
    public List<Province> getAllByArea(@PathVariable String area) {
        return provinceRepository.getAllByArea(area);
    }

    @GetMapping(value = "/area")
    public List<ReturnJson> jsonList(){ return returnJsonRepository.returnJson(); }

}
