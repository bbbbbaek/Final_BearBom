package com.spring.bearbom.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.spring.bearbom.entity.Inquiry;

public interface InquiryRepository extends JpaRepository<Inquiry, Integer>{
	@Query(value="select ifnull(max(a.inquiry_idx), 0) + 1 from t_inquiry a", nativeQuery = true)
	int selectNextinquiryIdx();

}
