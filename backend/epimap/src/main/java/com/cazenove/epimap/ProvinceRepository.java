package com.cazenove.epimap;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import java.util.List;

public interface ProvinceRepository extends JpaRepository<Province, String> {

    @Query(value = "select * from province where area = :area", nativeQuery = true)
    List<Province> getAllByArea(String area);

}
