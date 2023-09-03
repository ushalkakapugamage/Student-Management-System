package edu.icet.repository;

import edu.icet.dao.ImageEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ImageRepository extends JpaRepository<ImageEntity,Long> {
    Optional<ImageEntity> findById(Long Id);

}
