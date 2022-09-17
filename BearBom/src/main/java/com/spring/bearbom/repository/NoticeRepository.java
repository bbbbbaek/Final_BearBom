package com.spring.bearbom.repository;

import com.spring.bearbom.entity.Notice;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;


public interface NoticeRepository extends JpaRepository<Notice, Integer> {

	@Query(value="select ifnull(max(a.notice_idx), 0) + 1 from t_notice a", nativeQuery = true)
	int selectNextnoticeIdx();
	
}
