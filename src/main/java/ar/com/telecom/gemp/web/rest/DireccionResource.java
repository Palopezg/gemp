package ar.com.telecom.gemp.web.rest;

import ar.com.telecom.gemp.domain.Direccion;
import ar.com.telecom.gemp.repository.DireccionRepository;
import ar.com.telecom.gemp.web.rest.errors.BadRequestAlertException;

import io.github.jhipster.web.util.HeaderUtil;
import io.github.jhipster.web.util.ResponseUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Optional;

/**
 * REST controller for managing {@link ar.com.telecom.gemp.domain.Direccion}.
 */
@RestController
@RequestMapping("/api")
@Transactional
public class DireccionResource {

    private final Logger log = LoggerFactory.getLogger(DireccionResource.class);

    private static final String ENTITY_NAME = "direccion";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final DireccionRepository direccionRepository;

    public DireccionResource(DireccionRepository direccionRepository) {
        this.direccionRepository = direccionRepository;
    }

    /**
     * {@code POST  /direccions} : Create a new direccion.
     *
     * @param direccion the direccion to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new direccion, or with status {@code 400 (Bad Request)} if the direccion has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/direccions")
    public ResponseEntity<Direccion> createDireccion(@RequestBody Direccion direccion) throws URISyntaxException {
        log.debug("REST request to save Direccion : {}", direccion);
        if (direccion.getId() != null) {
            throw new BadRequestAlertException("A new direccion cannot already have an ID", ENTITY_NAME, "idexists");
        }
        Direccion result = direccionRepository.save(direccion);
        return ResponseEntity.created(new URI("/api/direccions/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, false, ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * {@code PUT  /direccions} : Updates an existing direccion.
     *
     * @param direccion the direccion to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated direccion,
     * or with status {@code 400 (Bad Request)} if the direccion is not valid,
     * or with status {@code 500 (Internal Server Error)} if the direccion couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/direccions")
    public ResponseEntity<Direccion> updateDireccion(@RequestBody Direccion direccion) throws URISyntaxException {
        log.debug("REST request to update Direccion : {}", direccion);
        if (direccion.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        Direccion result = direccionRepository.save(direccion);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, false, ENTITY_NAME, direccion.getId().toString()))
            .body(result);
    }

    /**
     * {@code GET  /direccions} : get all the direccions.
     *
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of direccions in body.
     */
    @GetMapping("/direccions")
    public List<Direccion> getAllDireccions() {
        log.debug("REST request to get all Direccions");
        return direccionRepository.findAll();
    }

    /**
     * {@code GET  /direccions/:id} : get the "id" direccion.
     *
     * @param id the id of the direccion to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the direccion, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/direccions/{id}")
    public ResponseEntity<Direccion> getDireccion(@PathVariable Long id) {
        log.debug("REST request to get Direccion : {}", id);
        Optional<Direccion> direccion = direccionRepository.findById(id);
        return ResponseUtil.wrapOrNotFound(direccion);
    }

    /**
     * {@code DELETE  /direccions/:id} : delete the "id" direccion.
     *
     * @param id the id of the direccion to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/direccions/{id}")
    public ResponseEntity<Void> deleteDireccion(@PathVariable Long id) {
        log.debug("REST request to delete Direccion : {}", id);
        direccionRepository.deleteById(id);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, false, ENTITY_NAME, id.toString())).build();
    }

    @GetMapping("/direccions/direccion")
    public ResponseEntity<Direccion> getDireccion(
        @RequestParam("pais") String pais, 
        @RequestParam("provincia") String provincia, 
        @RequestParam("partido") String partido,
        @RequestParam("localidad") String localidad, 
        @RequestParam("calle") String calle, 
        @RequestParam("altura") Long altura) {
        log.debug("REST request to get Direccion by direccion : {}");
        Optional<Direccion> direccion = direccionRepository.findByPaisAndProvinciaAndPartidoAndLocalidadAndCalleAndAltura(pais, provincia, partido, localidad, calle, altura);
        return ResponseUtil.wrapOrNotFound(direccion);
    }
}
