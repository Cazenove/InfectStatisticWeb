package com.cazenove.epimap;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReturnJsonRepository extends JpaRepository<ReturnJson, String> {
    @Query(nativeQuery = true, value = "select area as name, confirm as value from area")
    List<ReturnJson> returnJson();
}
