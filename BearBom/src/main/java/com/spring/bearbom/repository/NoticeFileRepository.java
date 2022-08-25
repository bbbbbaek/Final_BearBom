package com.spring.bearbom.repository;


import com.spring.bearbom.entity.NoticeFile;
import com.spring.bearbom.entity.NoticeFileId;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NoticeFileRepository extends JpaRepository<NoticeFile, NoticeFileId> {

}
