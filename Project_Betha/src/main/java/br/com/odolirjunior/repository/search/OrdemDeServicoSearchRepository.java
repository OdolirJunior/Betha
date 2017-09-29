package br.com.odolirjunior.repository.search;

import br.com.odolirjunior.domain.OrdemDeServico;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the OrdemDeServico entity.
 */
public interface OrdemDeServicoSearchRepository extends ElasticsearchRepository<OrdemDeServico, Long> {
}
