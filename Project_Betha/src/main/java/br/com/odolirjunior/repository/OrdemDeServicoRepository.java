package br.com.odolirjunior.repository;

import br.com.odolirjunior.domain.OrdemDeServico;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.*;


/**
 * Spring Data JPA repository for the OrdemDeServico entity.
 */
@SuppressWarnings("unused")
@Repository
public interface OrdemDeServicoRepository extends JpaRepository<OrdemDeServico, Long> {

}
