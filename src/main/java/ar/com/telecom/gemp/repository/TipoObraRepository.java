package ar.com.telecom.gemp.repository;

import ar.com.telecom.gemp.domain.TipoObra;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data  repository for the TipoObra entity.
 */
@SuppressWarnings("unused")
@Repository
public interface TipoObraRepository extends JpaRepository<TipoObra, Long> {
}
