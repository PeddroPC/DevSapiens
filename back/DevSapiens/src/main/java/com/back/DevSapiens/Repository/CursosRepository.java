package com.back.DevSapiens.Repository;

import com.back.DevSapiens.Model.CursoModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CursosRepository extends JpaRepository<CursoModel, Long> {
}
