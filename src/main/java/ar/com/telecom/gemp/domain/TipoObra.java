package ar.com.telecom.gemp.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

/**
 * A TipoObra.
 */
@Entity
@Table(name = "tipo_obra")
public class TipoObra implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @Column(name = "descripcion")
    private String descripcion;

    @OneToMany(mappedBy = "tipoObra")
    private Set<Segmento> segmentos = new HashSet<>();

    @ManyToOne
    @JsonIgnoreProperties(value = "tipoObras", allowSetters = true)
    private Obra obra;

    // jhipster-needle-entity-add-field - JHipster will add fields here
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public TipoObra descripcion(String descripcion) {
        this.descripcion = descripcion;
        return this;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public Set<Segmento> getSegmentos() {
        return segmentos;
    }

    public TipoObra segmentos(Set<Segmento> segmentos) {
        this.segmentos = segmentos;
        return this;
    }

    public TipoObra addSegmento(Segmento segmento) {
        this.segmentos.add(segmento);
        segmento.setTipoObra(this);
        return this;
    }

    public TipoObra removeSegmento(Segmento segmento) {
        this.segmentos.remove(segmento);
        segmento.setTipoObra(null);
        return this;
    }

    public void setSegmentos(Set<Segmento> segmentos) {
        this.segmentos = segmentos;
    }

    public Obra getObra() {
        return obra;
    }

    public TipoObra obra(Obra obra) {
        this.obra = obra;
        return this;
    }

    public void setObra(Obra obra) {
        this.obra = obra;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof TipoObra)) {
            return false;
        }
        return id != null && id.equals(((TipoObra) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "TipoObra{" +
            "id=" + getId() +
            ", descripcion='" + getDescripcion() + "'" +
            "}";
    }
}
