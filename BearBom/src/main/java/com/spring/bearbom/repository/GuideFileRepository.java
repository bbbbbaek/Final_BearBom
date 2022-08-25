package com.spring.bearbom.repository;

import com.spring.bearbom.entity.GuideFile;
import com.spring.bearbom.entity.GuideFileId;
import org.springframework.data.jpa.repository.JpaRepository;



public interface GuideFileRepository extends JpaRepository<GuideFile, GuideFileId> {
	
}
