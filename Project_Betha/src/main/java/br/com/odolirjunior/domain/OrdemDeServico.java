package br.com.odolirjunior.domain;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;
import org.springframework.data.elasticsearch.annotations.Document;

import javax.persistence.*;
import javax.validation.constraints.*;
import java.io.Serializable;
import java.util.Objects;

import br.com.odolirjunior.domain.enumeration.Status;

/**
 * A OrdemDeServico.
 */
@Entity
@Table(name = "ordem_de_servico")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
@Document(indexName = "ordemdeservico")
public class OrdemDeServico implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @Column(name = "nome", nullable = false)
    private String nome;

    @NotNull
    @Column(name = "tipo", nullable = false)
    private String tipo;

    @NotNull
    @Column(name = "marca", nullable = false)
    private String marca;

    @NotNull
    @Column(name = "problema", nullable = false)
    private String problema;

    @Column(name = "avaria")
    private String avaria;

    @Lob
    @Column(name = "foto")
    private byte[] foto;

    @Column(name = "foto_content_type")
    private String fotoContentType;

    @NotNull
    @Enumerated(EnumType.STRING)
    @Column(name = "status", nullable = false)
    private Status status;

    @Column(name = "tecnico")
    private String tecnico;

    @ManyToOne(optional = false)
    @NotNull
    private Cliente cliente;

    // jhipster-needle-entity-add-field - Jhipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public OrdemDeServico nome(String nome) {
        this.nome = nome;
        return this;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getTipo() {
        return tipo;
    }

    public OrdemDeServico tipo(String tipo) {
        this.tipo = tipo;
        return this;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

    public String getMarca() {
        return marca;
    }

    public OrdemDeServico marca(String marca) {
        this.marca = marca;
        return this;
    }

    public void setMarca(String marca) {
        this.marca = marca;
    }

    public String getProblema() {
        return problema;
    }

    public OrdemDeServico problema(String problema) {
        this.problema = problema;
        return this;
    }

    public void setProblema(String problema) {
        this.problema = problema;
    }

    public String getAvaria() {
        return avaria;
    }

    public OrdemDeServico avaria(String avaria) {
        this.avaria = avaria;
        return this;
    }

    public void setAvaria(String avaria) {
        this.avaria = avaria;
    }

    public byte[] getFoto() {
        return foto;
    }

    public OrdemDeServico foto(byte[] foto) {
        this.foto = foto;
        return this;
    }

    public void setFoto(byte[] foto) {
        this.foto = foto;
    }

    public String getFotoContentType() {
        return fotoContentType;
    }

    public OrdemDeServico fotoContentType(String fotoContentType) {
        this.fotoContentType = fotoContentType;
        return this;
    }

    public void setFotoContentType(String fotoContentType) {
        this.fotoContentType = fotoContentType;
    }

    public Status getStatus() {
        return status;
    }

    public OrdemDeServico status(Status status) {
        this.status = status;
        return this;
    }

    public void setStatus(Status status) {
        this.status = status;
    }

    public String getTecnico() {
        return tecnico;
    }

    public OrdemDeServico tecnico(String tecnico) {
        this.tecnico = tecnico;
        return this;
    }

    public void setTecnico(String tecnico) {
        this.tecnico = tecnico;
    }

    public Cliente getCliente() {
        return cliente;
    }

    public OrdemDeServico cliente(Cliente cliente) {
        this.cliente = cliente;
        return this;
    }

    public void setCliente(Cliente cliente) {
        this.cliente = cliente;
    }
    // jhipster-needle-entity-add-getters-setters - Jhipster will add getters and setters here, do not remove


    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        OrdemDeServico ordemDeServico = (OrdemDeServico) o;
        if (ordemDeServico.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), ordemDeServico.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "OrdemDeServico{" +
            "id=" + getId() +
            ", nome='" + getNome() + "'" +
            ", tipo='" + getTipo() + "'" +
            ", marca='" + getMarca() + "'" +
            ", problema='" + getProblema() + "'" +
            ", avaria='" + getAvaria() + "'" +
            ", foto='" + getFoto() + "'" +
            ", fotoContentType='" + fotoContentType + "'" +
            ", status='" + getStatus() + "'" +
            ", tecnico='" + getTecnico() + "'" +
            "}";
    }
}
