package br.com.odolirjunior.web.rest;

import com.codahale.metrics.annotation.Timed;
import br.com.odolirjunior.domain.OrdemDeServico;

import br.com.odolirjunior.repository.OrdemDeServicoRepository;
import br.com.odolirjunior.repository.search.OrdemDeServicoSearchRepository;
import br.com.odolirjunior.web.rest.util.HeaderUtil;
import br.com.odolirjunior.web.rest.util.PaginationUtil;
import io.swagger.annotations.ApiParam;
import io.github.jhipster.web.util.ResponseUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.net.URI;
import java.net.URISyntaxException;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

import static org.elasticsearch.index.query.QueryBuilders.*;

/**
 * REST controller for managing OrdemDeServico.
 */
@RestController
@RequestMapping("/api")
public class OrdemDeServicoResource {

    private final Logger log = LoggerFactory.getLogger(OrdemDeServicoResource.class);

    private static final String ENTITY_NAME = "ordemDeServico";

    private final OrdemDeServicoRepository ordemDeServicoRepository;

    private final OrdemDeServicoSearchRepository ordemDeServicoSearchRepository;

    public OrdemDeServicoResource(OrdemDeServicoRepository ordemDeServicoRepository, OrdemDeServicoSearchRepository ordemDeServicoSearchRepository) {
        this.ordemDeServicoRepository = ordemDeServicoRepository;
        this.ordemDeServicoSearchRepository = ordemDeServicoSearchRepository;
    }

    /**
     * POST  /ordem-de-servicos : Create a new ordemDeServico.
     *
     * @param ordemDeServico the ordemDeServico to create
     * @return the ResponseEntity with status 201 (Created) and with body the new ordemDeServico, or with status 400 (Bad Request) if the ordemDeServico has already an ID
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PostMapping("/ordem-de-servicos")
    @Timed
    public ResponseEntity<OrdemDeServico> createOrdemDeServico(@Valid @RequestBody OrdemDeServico ordemDeServico) throws URISyntaxException {
        log.debug("REST request to save OrdemDeServico : {}", ordemDeServico);
        if (ordemDeServico.getId() != null) {
            return ResponseEntity.badRequest().headers(HeaderUtil.createFailureAlert(ENTITY_NAME, "idexists", "A new ordemDeServico cannot already have an ID")).body(null);
        }
        OrdemDeServico result = ordemDeServicoRepository.save(ordemDeServico);
        ordemDeServicoSearchRepository.save(result);
        return ResponseEntity.created(new URI("/api/ordem-de-servicos/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * PUT  /ordem-de-servicos : Updates an existing ordemDeServico.
     *
     * @param ordemDeServico the ordemDeServico to update
     * @return the ResponseEntity with status 200 (OK) and with body the updated ordemDeServico,
     * or with status 400 (Bad Request) if the ordemDeServico is not valid,
     * or with status 500 (Internal Server Error) if the ordemDeServico couldn't be updated
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PutMapping("/ordem-de-servicos")
    @Timed
    public ResponseEntity<OrdemDeServico> updateOrdemDeServico(@Valid @RequestBody OrdemDeServico ordemDeServico) throws URISyntaxException {
        log.debug("REST request to update OrdemDeServico : {}", ordemDeServico);
        if (ordemDeServico.getId() == null) {
            return createOrdemDeServico(ordemDeServico);
        }
        OrdemDeServico result = ordemDeServicoRepository.save(ordemDeServico);
        ordemDeServicoSearchRepository.save(result);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(ENTITY_NAME, ordemDeServico.getId().toString()))
            .body(result);
    }

    /**
     * GET  /ordem-de-servicos : get all the ordemDeServicos.
     *
     * @param pageable the pagination information
     * @return the ResponseEntity with status 200 (OK) and the list of ordemDeServicos in body
     */
    @GetMapping("/ordem-de-servicos")
    @Timed
    public ResponseEntity<List<OrdemDeServico>> getAllOrdemDeServicos(@ApiParam Pageable pageable) {
        log.debug("REST request to get a page of OrdemDeServicos");
        Page<OrdemDeServico> page = ordemDeServicoRepository.findAll(pageable);
        HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(page, "/api/ordem-de-servicos");
        return new ResponseEntity<>(page.getContent(), headers, HttpStatus.OK);
    }

    /**
     * GET  /ordem-de-servicos/:id : get the "id" ordemDeServico.
     *
     * @param id the id of the ordemDeServico to retrieve
     * @return the ResponseEntity with status 200 (OK) and with body the ordemDeServico, or with status 404 (Not Found)
     */
    @GetMapping("/ordem-de-servicos/{id}")
    @Timed
    public ResponseEntity<OrdemDeServico> getOrdemDeServico(@PathVariable Long id) {
        log.debug("REST request to get OrdemDeServico : {}", id);
        OrdemDeServico ordemDeServico = ordemDeServicoRepository.findOne(id);
        return ResponseUtil.wrapOrNotFound(Optional.ofNullable(ordemDeServico));
    }

    /**
     * DELETE  /ordem-de-servicos/:id : delete the "id" ordemDeServico.
     *
     * @param id the id of the ordemDeServico to delete
     * @return the ResponseEntity with status 200 (OK)
     */
    @DeleteMapping("/ordem-de-servicos/{id}")
    @Timed
    public ResponseEntity<Void> deleteOrdemDeServico(@PathVariable Long id) {
        log.debug("REST request to delete OrdemDeServico : {}", id);
        ordemDeServicoRepository.delete(id);
        ordemDeServicoSearchRepository.delete(id);
        return ResponseEntity.ok().headers(HeaderUtil.createEntityDeletionAlert(ENTITY_NAME, id.toString())).build();
    }

    /**
     * SEARCH  /_search/ordem-de-servicos?query=:query : search for the ordemDeServico corresponding
     * to the query.
     *
     * @param query the query of the ordemDeServico search
     * @param pageable the pagination information
     * @return the result of the search
     */
    @GetMapping("/_search/ordem-de-servicos")
    @Timed
    public ResponseEntity<List<OrdemDeServico>> searchOrdemDeServicos(@RequestParam String query, @ApiParam Pageable pageable) {
        log.debug("REST request to search for a page of OrdemDeServicos for query {}", query);
        Page<OrdemDeServico> page = ordemDeServicoSearchRepository.search(queryStringQuery(query), pageable);
        HttpHeaders headers = PaginationUtil.generateSearchPaginationHttpHeaders(query, page, "/api/_search/ordem-de-servicos");
        return new ResponseEntity<>(page.getContent(), headers, HttpStatus.OK);
    }

}
